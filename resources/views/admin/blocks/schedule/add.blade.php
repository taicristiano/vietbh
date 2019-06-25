@extends('admin.master')
@section('css')
    <!-- iCheck for checkboxes and radio inputs -->
    <link rel="stylesheet" href="{{ asset('iCheck/all.css') }}">
    <!-- Select2 -->
    <link rel="stylesheet" href="{{ asset('select2/dist/css/select2.min.css') }}">
@endsection()

@section('content')
    <section class="content">
        <!-- /.box -->

        <div class="row">
            <!-- left column -->
            <div class="col-md-12">
                <!-- general form elements -->
                <div class="box box-primary">
                    <!-- /.box-header -->
                    <!-- form start -->
                    <form role="form">
                        <div class="box-body">
                            <div class="form-group col-xs-6">
                                <label for="exampleInputEmail1">Tiêu đề</label>
                                <input type="text" class="form-control" id="exampleInputEmail1">
                            </div>
                            <div class="form-group col-xs-6">
                                <label for="">Thumbnail</label>
                                <input type="file" class="form-control" id="">
                            </div>
                            <div class="form-group col-xs-12">
                                <label for="editor1">Ngày 1</label>
                                <textarea class="form-control" name="editor1" rows="5"></textarea>
                            </div>
                        </div>
                        <!-- /.box-body -->
                        <!-- /.box -->
                        <div class="box-footer text-center">
                            <button type="submit" class="btn btn-primary ">Thêm mới</button>
                            <button type="reset" class="btn btn-danger ">Hủy bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
            <!--/.col (right) -->
        </div>

    </section>
@endsection

@section('javascript')
    <!-- Select2 -->
    <script src="{{ asset('select2/dist/js/select2.full.min.js') }}"></script>
    <script src="{{ asset('iCheck/icheck.min.js') }}"></script>
    <script src="{{ asset('ckeditor/ckeditor.js') }}"></script>
    <script>
        $(function () {
            //Initialize Select2 Elements
            $('.select2').select2();
            // Replace the <textarea id="editor1"> with a CKEditor
            // instance, using default configuration.
            // CKEDITOR.replace('editor1')
        });
    </script>
@endsection