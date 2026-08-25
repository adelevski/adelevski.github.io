---
title: Multi Origin Distance Optimizer (MODO)
summary: A Python library for computing WGS84 geographic medians and minimax centers for equally weighted coordinate sets.
status: In development
technologies:
  - Python
  - SciPy
  - GeographicLib
repository: https://github.com/adelevski/modo
featured: true
order: 1
draft: false
---

MODO implements two geographic center calculations for sets of coordinates:

- a geographic median that minimizes the sum of distances to all input points;
- a minimax center that minimizes the greatest distance to any input point.

The repository is the canonical source for implementation details, tests, experiments, and current status.
