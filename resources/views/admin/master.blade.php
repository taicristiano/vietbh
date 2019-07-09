<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>SB Admin 2 - Tables</title>

    <!-- Custom fonts for this template -->
    <link href={{ asset("vendor/fontawesome-free/css/all.min.css") }} rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href={{ asset("css/sb-admin-2.min.css") }} rel="stylesheet">

    <!-- Custom styles for this page -->
    <link href={{ asset("vendor/datatables/dataTables.bootstrap4.min.css") }} rel="stylesheet">
    <script type="text/javascript">
        window.Laravel = {!! json_encode([
                'baseUrl' => url('/'),
                'csrfToken' => csrf_token(),
            ]) !!};
    </script>
</head>
<body id="page-top">
<div id="app">
</div>



<!-- Bootstrap core JavaScript-->
<script src = {{ asset("vendor/jquery/jquery.min.js") }}></script>
<script src= {{ asset("vendor/bootstrap/js/bootstrap.bundle.min.js") }}></script>

<!-- Core plugin JavaScript-->
<script src= {{ asset("vendor/jquery-easing/jquery.easing.min.js") }}></script>

<!-- Custom scripts for all pages-->
<script src={{ asset("js/sb-admin-2.min.js") }}></script>

<!-- Page level plugins -->
<script src={{ asset("vendor/datatables/jquery.dataTables.min.js") }}></script>
<script src={{ asset("vendor/datatables/dataTables.bootstrap4.min.js") }}></script>

<!-- Page level custom scripts -->
{{--<script src={{}}"js/demo/datatables-demo.js"></script>--}}
<script type="text/javascript" src="{{ asset('js/app.js') }}"></script>

</body>
</html>
