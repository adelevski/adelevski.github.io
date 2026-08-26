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

## Role

MODO is the public computation layer for multi-origin meeting tools. It is designed to remain useful without a particular interface, service, or venue category.

## Current boundary

The repository publishes a Python library, tests, and a versioned technical record. It does not ship a graphical interface, accounts, telemetry, geocoding, venue data, or hosted infrastructure.

That boundary keeps the optimization logic reusable and independently testable. Input collection, routing providers, maps, and interaction design belong to applications built around it.

## Product separation

Fairway is the likely first product wrapper. It may add address entry, road travel, maps, and venue search while MODO remains a headless engine. The two projects should share a contract, not a user interface or deployment architecture.

## Standard of evidence

The changelog distinguishes released behavior from experiments. New capabilities should enter the public contract only with reproducible measurements, documented limitations, and tests that do not depend on private locations or local data.
