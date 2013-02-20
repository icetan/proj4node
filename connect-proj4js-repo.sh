#!/bin/bash

if ! grep --quiet '\[svn-remote "svn"\]' .git/config; then

cat >> .git/config << EOF
[svn-remote "proj4js"]
	url = http://svn.osgeo.org/metacrs
	fetch = proj4js/trunk:refs/remotes/trunk
EOF

echo "Added SVN repo http://svn.osgeo.org/metacrs/proj4js to your .git/config"
echo "To download SVN trunk run: git svn fetch"
echo "You can now sync with latest changes from Proj4js with: git svn rebase"

fi
