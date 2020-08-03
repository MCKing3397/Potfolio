<template>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <link rel="icon" href="favicon.ico">
  <title>{{ title }}</title>
  <link rel="preload" href="bulma.min.css" as="style">
  <link rel="preload" href="style.css" as="style">
</head>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  }
}
</script>
