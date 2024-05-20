<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Filter</div>

                    <div class="card-body">
                        <div class="form-group">
                            <div class="row">
                                <div class="col-3">
                                    <Dropdown 
                                        class="dropdown-filter"
                                        v-model="selectedFilterProductType"
                                        :options="filterOptionsProduct"
                                        optionLabel="name"
                                        :filter="true"
                                        @change="onFilterChangeProductType"
                                        placeholder="Select a Product Type"
                                    />
                                </div>
                                <div class="col-3">
                                    <Dropdown 
                                        class="dropdown-filter"
                                        v-model="selectedFilterSize"
                                        :options="filterOptionsSize"
                                        optionLabel="name"
                                        :filter="true"
                                        @change="onFilterChangeSize"
                                        placeholder="Select a Size"
                                    />
                                </div>
                                <div class="col-3">
                                    <Dropdown 
                                        class="dropdown-filter"
                                        v-model="selectedFilterGrade"
                                        :options="filterOptionsGrade"
                                        optionLabel="name"
                                        :filter="true"
                                        @change="onFilterChangeGrade"
                                        placeholder="Select a Grade"
                                    />
                                </div>
                                <div class="col-3">
                                    <Dropdown 
                                        class="dropdown-filter"
                                        v-model="selectedFilterConnection"
                                        :options="filterOptionsConnection"
                                        optionLabel="name"
                                        :filter="true"
                                        @change="onFilterChangeConnection"
                                        placeholder="Select a Connection"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Data Product</div>

                    <div class="card-body">
                        <div class="form-group">
                            <div class="table-responsive">
                                <DataTable 
                                    class="p-datatable-sm"
                                    :value="filteredProducts" 
                                    :paginator="true" 
                                    :rows="10" 
                                    responsiveLayout="scroll" 
                                    :rowsPerPageOptions="[10,20,50]"
                                >
                                    <Column field="id" header="ID"></Column>
                                    <Column field="code" header="Code"></Column>
                                    <Column field="qty" header="Qty"></Column>
                                    <Column field="qty_unit" header="Qty"></Column>
                                    <Column field="country_name" header="Country Name"></Column>
                                    <Column field="item_code" header="Item Code"></Column>
                                    <Column field="item_desc" header="Item Desc"></Column>
                                    <Column field="product_type" header="Product Type"></Column>
                                    <Column field="grade" header="Grade"></Column>
                                    <Column field="connection" header="Connection"></Column>
                                    <Column field="size" header="Size"></Column>
                                </DataTable>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions, mapGetters } from 'vuex';
    export default {
        data() {
            return {
                selectedFilterProductType: null,
                selectedFilterSize: null,
                selectedFilterGrade: null,
                selectedFilterConnection: null,
            };
        },
        computed: {
            ...mapGetters(['filteredProducts', 'productTypeCounts', 'productSizeCounts', 'productGradeCounts', 'productConnectionCounts']),
            filterOptionsProduct() {
                const options = [{ name: 'All', value: '' }];
                for (const [type, count] of Object.entries(this.productTypeCounts)) {
                    options.push({ name: `${type} (${count})`, value: type });
                }
                return options;
            },
            filterOptionsSize() {
                const options = [{ name: 'All', value: '' }];
                for (const [size, count] of Object.entries(this.productSizeCounts)) {
                    options.push({ name: `${size}" (mm) (${count})`, value: size });
                }
                return options;
            },
            filterOptionsGrade() {
                const options = [{ name: 'All', value: '' }];
                for (const [grade, count] of Object.entries(this.productGradeCounts)) {
                    options.push({ name: `${grade} (${count})`, value: grade });
                }
                return options;
            },
            filterOptionsConnection() {
                const options = [{ name: 'All', value: '' }];
                for (const [connection, count] of Object.entries(this.productConnectionCounts)) {
                    options.push({ name: `${connection} (${count})`, value: connection });
                }
                return options;
            },
        },
        methods: {
            ...mapActions(['loadProducts', 'updateFilterProductType', 'updateFilterSize', 'updateFilterGrade', 'updateFilterConnection']),
            onFilterChangeProductType() {
                this.updateFilterProductType(this.selectedFilterProductType.value);
            },
            onFilterChangeSize() {
                this.updateFilterSize(this.selectedFilterSize.value);
            },
            onFilterChangeGrade() {
                this.updateFilterGrade(this.selectedFilterGrade.value);
            },
            onFilterChangeConnection() {
                this.updateFilterConnection(this.selectedFilterConnection.value);
            },
        },
        created() {
            this.loadProducts();
        }
    }
</script>
