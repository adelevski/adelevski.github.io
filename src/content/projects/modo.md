---
title: Multi Origin Distance Optimizer (MODO)
summary: A headless Python engine for finding balanced centers among multiple coordinates.
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

MODO is the public computation layer for multi-origin meeting tools.

<svg class="project-illustration" viewBox="0 0 640 300" role="img" aria-labelledby="modo-illustration-title">
  <title id="modo-illustration-title">Abstract globe with several locations connected to a center</title>
  <circle class="project-illustration__globe" cx="320" cy="150" r="92" />
  <ellipse class="project-illustration__grid" cx="320" cy="150" rx="43" ry="92" />
  <ellipse class="project-illustration__grid" cx="320" cy="150" rx="92" ry="35" />
  <path class="project-illustration__route" d="M270 122 Q300 178 334 161 T378 108" />
  <circle class="project-illustration__point" cx="270" cy="122" r="7" />
  <circle class="project-illustration__center" cx="334" cy="161" r="8" />
  <circle class="project-illustration__point" cx="378" cy="108" r="7" />
</svg>
