System.config({
  "paths": {
    "*": "*.js",
    "~/*": "lib/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "react": "npm:react@0.12.1",
    "github:jspm/nodelibs@0.0.7": {
      "Base64": "npm:Base64@0.2.1",
      "base64-js": "npm:base64-js@0.0.7",
      "ieee754": "npm:ieee754@1.1.4",
      "inherits": "npm:inherits@2.0.1",
      "json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:envify@3.2.0": {
      "jstransform": "npm:jstransform@7.0.0",
      "through": "npm:through@2.3.6"
    },
    "npm:jstransform@7.0.0": {
      "base62": "npm:base62@0.1.1",
      "esprima-fb": "npm:esprima-fb@7001.1.0-dev-harmony-fb",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:react@0.12.1": {
      "envify": "npm:envify@3.2.0"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@0.0.8"
    }
  }
});

