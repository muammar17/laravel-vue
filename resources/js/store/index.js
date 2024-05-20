// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [],
        filter_product_type: '',
        filter_size: '',
        filter_grade: '',
        filter_connection: '',
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
        },
        SET_FILTER_PRODUCT_TYPE(state, filter_product_type) {
            state.filter_product_type = filter_product_type;
        },
        SET_FILTER_SIZE(state, filter_size) {
            state.filter_size = filter_size;
        },
        SET_FILTER_GRADE(state, filter_grade) {
            state.filter_grade = filter_grade;
        },
        SET_FILTER_CONNECTION(state, filter_connection) {
            state.filter_connection = filter_connection;
        },
    },
    actions: {
        loadProducts({ commit }) {
            return axios.get("api/getAllProduct")
                .then(({ data }) => {
                    commit('SET_PRODUCTS', data);
                })
                .catch(error => {
                    console.error("There was an error fetching the products:", error);
                });
        },
        updateFilterProductType({ commit }, filter_product_type) {
            commit('SET_FILTER_PRODUCT_TYPE', filter_product_type);
        },
        updateFilterSize({ commit }, filter_size) {
            commit('SET_FILTER_SIZE', filter_size);
        },
        updateFilterGrade({ commit }, filter_grade) {
            commit('SET_FILTER_GRADE', filter_grade);
        },
        updateFilterConnection({ commit }, filter_connection) {
            commit('SET_FILTER_CONNECTION', filter_connection);
        },
    },
    getters: {
        filteredProducts: (state) => {
            return state.products.filter(product => {
                let matches = true;
            
                if (state.filter_product_type) {
                    matches = matches && product.product_type === state.filter_product_type;
                }
            
                if (state.filter_size) {
                    matches = matches && product.size === state.filter_size;
                }
            
                if (state.filter_grade) {
                    matches = matches && product.grade === state.filter_grade;
                }
            
                if (state.filter_connection) {
                    matches = matches && product.connection === state.filter_connection;
                }
            
                return matches;
            });
        },
        productTypeCounts: (state) => {
            const counts = {};
            state.products.forEach(item => {
              const type = item.product_type;
              if (counts[type]) {
                counts[type]++;
              } else {
                counts[type] = 1;
              }
            });
            return counts;
        },
        productSizeCounts: (state) => {
            const counts = {};
            state.products.forEach(item => {
              const size = item.size;
              if (counts[size]) {
                counts[size]++;
              } else {
                counts[size] = 1;
              }
            });
            return counts;
        },
        productGradeCounts: (state) => {
            const counts = {};
            state.products.forEach(item => {
              const grade = item.grade;
              if (counts[grade]) {
                counts[grade]++;
              } else {
                counts[grade] = 1;
              }
            });
            return counts;
        },
        productConnectionCounts: (state) => {
            const counts = {};
            state.products.forEach(item => {
              const connection = item.connection;
              if (counts[connection]) {
                counts[connection]++;
              } else {
                counts[connection] = 1;
              }
            });
            return counts;
        },
    }
});
