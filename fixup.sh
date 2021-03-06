#!/bin/sh
# fixup.sh
#
# Final step in build process which sets up simple per esm/cjs package.json
# in each of the sub directories in /dist
#
# See https://www.sensedeep.com/blog/posts/2021/how-to-create-single-source-npm-module.html

cat > dist/cjs/package.json <<!EOF
{
  "type": "commonjs"
}
!EOF

cat > dist/esm/package.json <<!EOF
{
  "type": "module"
}
!EOF