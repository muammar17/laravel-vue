<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product', function (Blueprint $table) {
            $table->id();
            $table->string('code');
            $table->bigInteger('item_id');
            $table->bigInteger('qty');
            $table->string('qty_unit');
            $table->string('country_name');
            $table->string('item_code');
            $table->string('item_desc');
            $table->string('product_type');
            $table->string('grade');
            $table->string('connection');
            $table->string('size');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product');
    }
}
