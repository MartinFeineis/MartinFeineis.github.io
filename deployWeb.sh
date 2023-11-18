#!/bin/bash
npx nuxi generate
aws s3 cp .output/public s3://www404webcontent/ --recursive --exclude "*.swp" --profile manager
aws s3 cp /home/wolle/projects/ApiGateway/website/code/notes.html s3://www404webcontent/ --profile manager
