#!/bin/bash
npx nuxi generate
aws s3 cp .output/public s3://www404webcontent/ --recursive --exclude "*.swp"
