<!DOCTYPE html>
<html lang="en">
    <head>
        @include('Template.head')
        <title>Inosoft Laravel Vue</title>
    </head>
    <body>
        <div class="wrapper" id="app">
            <div class="wrapper">
                <div class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1 class="m-0">Pipes Invetory</h1>
                            </div>
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right">
                                    <li class="breadcrumb-item active">Pipes Invetory Page</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <router-view></router-view>
                </div>
            </div>
        </div>

        @include('Template.script')
    </body>
</html>