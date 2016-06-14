# Makefile for tugboat.qa

tugboat-init:
	curl -O https://code.ent.iastate.edu/tugboat/tugboat-init.sh
	curl -O https://code.ent.iastate.edu/tugboat/tugboat-update.sh
	curl -O https://code.ent.iastate.edu/tugboat/tugboat-build.sh
	bash -x tugboat-init.sh

tugboat-update:
	bash -x tugboat-update.sh

tugboat-build:
	bash -x tugboat-build.sh
