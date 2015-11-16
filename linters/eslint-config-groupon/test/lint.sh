#!/usr/bin/env bash
TESTDIR=$1
VALID_FILES="${TESTDIR}/valid/*.js"
ESLINT=./node_modules/.bin/eslint

errors=0

echo "Expecting no errors for: "$VALID_FILES
if ! $ESLINT $VALID_FILES; then
  ((errors++))
fi

if (( $errors > 0 )); then
  echo "not ok"$errors
  exit 1
else
  echo "ok"
  exit 0
fi
