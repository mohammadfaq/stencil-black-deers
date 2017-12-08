import { hooks } from '@bigcommerce/stencil-utils';
import CatalogPage from './catalog';
import $ from 'jquery';
import FacetedSearch from './common/faceted-search';
import setActiveCategory from './halothemes/setActiveCategory';
import productDisplayMode from './halothemes/productDisplayMode';
import haloProductImageSwap from './halothemes/haloProductImageSwap';
import sidebarToggleMobile from './halothemes/sidebarToggleMobile';

export default class Category extends CatalogPage {
    loaded() {
        if ($('#facetedSearch').length > 0) {
            this.initFacetedSearch();
        } else {
            this.onSortBySubmit = this.onSortBySubmit.bind(this);
            hooks.on('sortBy-submitted', this.onSortBySubmit);
        }

        // HaloThemes function
        setActiveCategory();
        productDisplayMode();
        sidebarToggleMobile();
    }

    initFacetedSearch() {
        const $productListingContainer = $('#product-listing-container .listing-container-inner');
        const $facetedSearchContainer = $('#faceted-search-container');
        const productsPerPage = this.context.categoryProductsPerPage;
        const requestOptions = {
            config: {
                category: {
                    shop_by_price: true,
                    products: {
                        limit: productsPerPage,
                    },
                },
            },
            template: {
                productListing: 'category/product-listing',
                sidebar: 'category/sidebar',
                sidebarToggle: 'halothemes/sidebar-toggle-mobile',
            },
            showMore: 'category/show-more',
        };

        this.facetedSearch = new FacetedSearch(requestOptions, (content) => {
            $productListingContainer.html(content.productListing);
            $facetedSearchContainer.html(content.sidebar);
            $facetedSearchContainer.prepend(content.sidebarToggle);

            // HaloThemes function
            setActiveCategory();
            productDisplayMode();
            haloProductImageSwap();
            sidebarToggleMobile();

            $('html, body').animate({
                scrollTop: 0,
            }, 100);
        });
    }
}
