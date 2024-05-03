# schleyfox-npm-lifecycle-test

testing npm lifecycle scripts

# Usage and Output

```
$ docker build -t npm-lifecycle-test .
...
$ docker run --rm npm-lifecycle-test
[package] npm install

> schleyfox-npm-lifecycle-test@0.0.1 preinstall
> echo "$(date +"%Y-%m-%dT%H:%M:%S%z") preinstall" >> scripts.log


> schleyfox-npm-lifecycle-test@0.0.1 install
> echo "$(date +"%Y-%m-%dT%H:%M:%S%z") install" >> scripts.log


> schleyfox-npm-lifecycle-test@0.0.1 postinstall
> echo "$(date +"%Y-%m-%dT%H:%M:%S%z") postinstall" >> scripts.log


> schleyfox-npm-lifecycle-test@0.0.1 prepublish
> echo "$(date +"%Y-%m-%dT%H:%M:%S%z") prepublish" >> scripts.log


> schleyfox-npm-lifecycle-test@0.0.1 preprepare
> echo "$(date +"%Y-%m-%dT%H:%M:%S%z") preprepare" >> scripts.log


> schleyfox-npm-lifecycle-test@0.0.1 prepare
> echo "$(date +"%Y-%m-%dT%H:%M:%S%z") prepare" >> scripts.log


> schleyfox-npm-lifecycle-test@0.0.1 postprepare
> echo "$(date +"%Y-%m-%dT%H:%M:%S%z") postprepare" >> scripts.log


up to date, audited 1 package in 216ms

found 0 vulnerabilities
# From npm publish
2024-05-03T10:26:20-0400 prepublishOnly
2024-05-03T10:26:20-0400 prepack
2024-05-03T10:26:20-0400 prepare
2024-05-03T10:26:20-0400 postpack
2024-05-03T10:26:50-0400 publish
2024-05-03T10:26:50-0400 postpublish
# End from npm publish


2024-05-03T15:11:39+0000 preinstall
2024-05-03T15:11:39+0000 install
2024-05-03T15:11:39+0000 postinstall
2024-05-03T15:11:39+0000 prepublish
2024-05-03T15:11:39+0000 preprepare
2024-05-03T15:11:39+0000 prepare
2024-05-03T15:11:39+0000 postprepare

[from npm] npm install

added 1 package, and audited 2 packages in 408ms

found 0 vulnerabilities
2024-05-03T15:11:40+0000 preinstall
2024-05-03T15:11:40+0000 install
2024-05-03T15:11:40+0000 postinstall

[from git] npm install
npm WARN skipping integrity check for git dependency ssh://git@github.com/schleyfox/schleyfox-npm-lifecycle-test-git.git

added 1 package, and audited 2 packages in 1s

found 0 vulnerabilities
2024-05-03T15:11:41+0000 preinstall
2024-05-03T15:11:41+0000 install
2024-05-03T15:11:41+0000 postinstall
2024-05-03T15:11:41+0000 prepublish
2024-05-03T15:11:41+0000 preprepare
2024-05-03T15:11:41+0000 prepare
2024-05-03T15:11:41+0000 postprepare
2024-05-03T15:11:41+0000 prepare
2024-05-03T15:11:41+0000 preinstall
2024-05-03T15:11:41+0000 install
2024-05-03T15:11:41+0000 postinstall

[from file] npm install

added 1 package, and audited 3 packages in 336ms

found 0 vulnerabilities
2024-05-03T15:11:41+0000 preinstall
2024-05-03T15:11:41+0000 prepare
2024-05-03T15:11:41+0000 install
2024-05-03T15:11:41+0000 postinstall
```
