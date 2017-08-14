/*
Copyright (c) 2016, Groupon, Inc.
All rights reserved.
Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions
are met:
Redistributions of source code must retain the above copyright notice,
this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright
notice, this list of conditions and the following disclaimer in the
documentation and/or other materials provided with the distribution.
Neither the name of GROUPON nor the names of its contributors may be
used to endorse or promote products derived from this software without
specific prior written permission.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED
TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
module.exports = {
  arrow_spacing: {
    level: 'warn'
  },
  camel_case_classes: {
    level: 'error'
  },
  check_scope: {
    module: 'coffeescope2',
    level: 'error',
    environments: ['node', 'es6', 'mocha', 'browser'],
    overwrite: false,
    shadow_exceptions: ['err', 'error'],
    hoist_local: false
  },
  coffeescript_error: {
    level: 'error'
  },
  colon_assignment_spacing: {
    level: 'ignore',
    spacing: {
      left: 0,
      right: 1
    }
  },
  cyclomatic_complexity: {
    value: 10,
    level: 'ignore'
  },
  duplicate_key: {
    level: 'error'
  },
  empty_constructor_needs_parens: {
    level: 'ignore'
  },
  ensure_comprehensions: {
    level: 'error'
  },
  forbidden_keywords: {
    module: 'coffeelint-forbidden-keywords',
    forbidden: {
      yes: 'true',
      on: 'true',
      no: 'false',
      off: 'false'
    },
    level: 'error'
  },
  indentation: {
    value: 2,
    level: 'error'
  },
  line_endings: {
    level: 'warn',
    value: 'unix'
  },
  max_line_length: {
    value: 80,
    level: 'ignore',
    limitComments: false
  },
  missing_fat_arrows: {
    level: 'ignore'
  },
  newlines_after_classes: {
    value: 1,
    // change to 'warn' when
    // https://github.com/clutchski/coffeelint/issues/518 fixed
    level: 'ignore'
  },
  no_backticks: {
    level: 'error'
  },
  no_debugger: {
    level: 'error'
  },
  no_empty_functions: {
    level: 'ignore'
  },
  no_empty_param_list: {
    level: 'warn'
  },
  no_implicit_braces: {
    level: 'ignore',
    strict: true
  },
  no_implicit_parens: {
    strict: true,
    level: 'ignore'
  },
  no_interpolation_in_single_quotes: {
    level: 'warn'
  },
  no_mocha_only: {
    module: 'coffeelint-no-mocha-only',
    level: 'error'
  },
  no_nested_string_interpolation: {
    level: 'ignore'
  },
  no_plusplus: {
    level: 'ignore'
  },
  no_stand_alone_at: {
    level: 'warn'
  },
  no_tabs: {
    level: 'error'
  },
  no_trailing_semicolons: {
    level: 'error'
  },
  no_trailing_whitespace: {
    level: 'error',
    allowed_in_comments: false,
    allowed_in_empty_lines: false
  },
  no_unnecessary_double_quotes: {
    level: 'ignore'
  },
  no_unnecessary_fat_arrows: {
    level: 'error'
  },
  non_empty_constructor_needs_parens: {
    level: 'ignore'
  },
  prefer_english_operator: {
    level: 'ignore',
    doubleNotLevel: 'ignore'
  },
  space_operators: {
    level: 'warn'
  },
  spacing_after_comma: {
    level: 'warn'
  },
  transform_messes_up_line_numbers: {
    level: 'ignore'
  },
  use_strict: {
    module: 'coffeelint-use-strict',
    level: 'warn',
    allowGlobal: true,
    requireGlobal: true
  }
};
