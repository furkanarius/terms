// Copyright (c) 2020 BlockDev AG
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

module.exports = { {{range $key, $document := .Documents}}
    {{noescape $key}}: {{noescape $document}},
{{end}}
};
