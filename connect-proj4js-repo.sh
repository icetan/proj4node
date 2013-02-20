#!/bin/bash

if ! grep --quiet '\[svn-remote "svn"\]' .git/config; then

cat >> .git/config << EOF
[svn-remote "svn"]
	url = http://svn.osgeo.org/metacrs
	fetch = proj4js/trunk:refs/remotes/trunk
	branches = proj4js/branches/*:refs/remotes/*
	tags = proj4js/tags/*:refs/remotes/tags/*
EOF

echo "Added SVN repo http://svn.osgeo.org/metacrs/proj4js to your .git/config"
echo "To download trunk/branches/tags run: git fetch --all"
echo "You can now sync with latest changes from Proj4js with: git svn rebase"

fi
