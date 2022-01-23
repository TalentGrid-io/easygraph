#!/bin/bash

echo "Waiting for startup.."
until curl http://easygraph_mongodb:27017/serverStatus\?text\=1 2>&1 | grep uptime | head -1; do
  printf '.'
  sleep 1
done

exec "$@"