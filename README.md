# npmonolith
a boilerplate for creating a single container set of microservices with npm monorepos, turborepo, pm2 and docker

## todo

setup workspaces so block reader and persister can import from config and database
setup npm scripts to build and run each package and app
add top level npm scripts to run via pm2 and an ecosystem file
containerize running all together with npm run prod script
docker-compose file with database and all services
stretch: where does turborepo fit?
stretch: setup frontend to showcase full e2e flow in container
