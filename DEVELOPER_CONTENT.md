# ecosystem.Ai Developer Documentation

This file consolidates the ecosystem.Ai developer documentation for search indexing, LLM RAG, and offline reference. Content is derived from the published docs at https://ecosystem.ai. MDX frontmatter, imports, and presentation components have been removed; technical prose, code, tables, and structure are preserved.

Corpus: 171 documents. Regenerate with `python3.14 scripts/generate_developer_content.py`.

## Document index

- [Bayesian Probabilistic](#docs-configuration-algorithms-baysianprobabilistic) — `docs/configuration/algorithms/baysianprobabilistic.mdx` — https://ecosystem.ai/docs/configuration/algorithms/baysianprobabilistic
- [Coverage-Aware Thompson](#docs-configuration-algorithms-coveragethompson) — `docs/configuration/algorithms/coveragethompson.mdx` — https://ecosystem.ai/docs/configuration/algorithms/coveragethompson
- [Ecosystem Rewards](#docs-configuration-algorithms-ecosystemrewards) — `docs/configuration/algorithms/ecosystemrewards.mdx` — https://ecosystem.ai/docs/configuration/algorithms/ecosystemrewards
- [Epsilon Greedy](#docs-configuration-algorithms-epsilongreedy) — `docs/configuration/algorithms/epsilongreedy.mdx` — https://ecosystem.ai/docs/configuration/algorithms/epsilongreedy
- [Generative Model](#docs-configuration-algorithms-generativemodel) — `docs/configuration/algorithms/generativemodel.mdx` — https://ecosystem.ai/docs/configuration/algorithms/generativemodel
- [Algorithms Overview](#docs-configuration-algorithms-index) — `docs/configuration/algorithms/index.mdx` — https://ecosystem.ai/docs/configuration/algorithms
- [Long-Tail Boost MF](#docs-configuration-algorithms-longtailmf) — `docs/configuration/algorithms/longtailmf.mdx` — https://ecosystem.ai/docs/configuration/algorithms/longtailmf
- [Loss Aversion](#docs-configuration-algorithms-lossaversion) — `docs/configuration/algorithms/lossaversion.mdx` — https://ecosystem.ai/docs/configuration/algorithms/lossaversion
- [Network Analysis](#docs-configuration-algorithms-networkanalysis) — `docs/configuration/algorithms/networkanalysis.mdx` — https://ecosystem.ai/docs/configuration/algorithms/networkanalysis
- [Prospect Theory](#docs-configuration-algorithms-prospecttheory) — `docs/configuration/algorithms/prospecttheory.mdx` — https://ecosystem.ai/docs/configuration/algorithms/prospecttheory
- [Q-Learning](#docs-configuration-algorithms-qlearning) — `docs/configuration/algorithms/qlearning.mdx` — https://ecosystem.ai/docs/configuration/algorithms/qlearning
- [Risk Aversion](#docs-configuration-algorithms-riskaversion) — `docs/configuration/algorithms/riskaversion.mdx` — https://ecosystem.ai/docs/configuration/algorithms/riskaversion
- [Sentimental Equilibrium](#docs-configuration-algorithms-sentimentalequilibrium) — `docs/configuration/algorithms/sentimentalequilibrium.mdx` — https://ecosystem.ai/docs/configuration/algorithms/sentimentalequilibrium
- [API Management](#docs-configuration-api-index) — `docs/configuration/api/index.mdx` — https://ecosystem.ai/docs/configuration/api
- [Enrichment](#docs-configuration-data-enrichment) — `docs/configuration/data/enrichment.mdx` — https://ecosystem.ai/docs/configuration/data/enrichment
- [Feature Engineering](#docs-configuration-data-feature-engineering) — `docs/configuration/data/feature_engineering.mdx` — https://ecosystem.ai/docs/configuration/data/feature_engineering
- [Files](#docs-configuration-data-files) — `docs/configuration/data/files.mdx` — https://ecosystem.ai/docs/configuration/data/files
- [Data Management](#docs-configuration-data-index) — `docs/configuration/data/index.mdx` — https://ecosystem.ai/docs/configuration/data
- [Meta-Data](#docs-configuration-data-metadata) — `docs/configuration/data/metadata.mdx` — https://ecosystem.ai/docs/configuration/data/metadata
- [Presto](#docs-configuration-data-presto) — `docs/configuration/data/presto.mdx` — https://ecosystem.ai/docs/configuration/data/presto
- [Endpoints](#docs-configuration-deployment-endpoints) — `docs/configuration/deployment/endpoints.mdx` — https://ecosystem.ai/docs/configuration/deployment/endpoints
- [Deployment Options](#docs-configuration-deployment-index) — `docs/configuration/deployment/index.mdx` — https://ecosystem.ai/docs/configuration/deployment
- [Deployment Parameters](#docs-configuration-deployment-parameters) — `docs/configuration/deployment/parameters.mdx` — https://ecosystem.ai/docs/configuration/deployment/parameters
- [Deployment Properties](#docs-configuration-deployment-properties) — `docs/configuration/deployment/properties.mdx` — https://ecosystem.ai/docs/configuration/deployment/properties
- [Model Convergence](#docs-configuration-dynamic-convergence) — `docs/configuration/dynamic/convergence.mdx` — https://ecosystem.ai/docs/configuration/dynamic/convergence
- [Custom Rewards](#docs-configuration-dynamic-customrewards) — `docs/configuration/dynamic/customrewards.mdx` — https://ecosystem.ai/docs/configuration/dynamic/customrewards
- [Dynamic Interactions](#docs-configuration-dynamic-index) — `docs/configuration/dynamic/index.mdx` — https://ecosystem.ai/docs/configuration/dynamic
- [Dynamic Interactions Options Store](#docs-configuration-dynamic-options) — `docs/configuration/dynamic/options.mdx` — https://ecosystem.ai/docs/configuration/dynamic/options
- [Dynamic Parameters](#docs-configuration-dynamic-parameters) — `docs/configuration/dynamic/parameters.mdx` — https://ecosystem.ai/docs/configuration/dynamic/parameters
- [Dynamic Interaction Process](#docs-configuration-dynamic-process) — `docs/configuration/dynamic/process.mdx` — https://ecosystem.ai/docs/configuration/dynamic/process
- [Dynamic Interactions Runtime Settings](#docs-configuration-dynamic-runtime) — `docs/configuration/dynamic/runtime.mdx` — https://ecosystem.ai/docs/configuration/dynamic/runtime
- [Architecture](#docs-configuration-generative-architecture) — `docs/configuration/generative/architecture.mdx` — https://ecosystem.ai/docs/configuration/generative/architecture
- [Chat Approaches](#docs-configuration-generative-chat) — `docs/configuration/generative/chat.mdx` — https://ecosystem.ai/docs/configuration/generative/chat
- [Chat to SQL](#docs-configuration-generative-chat-sql) — `docs/configuration/generative/chat_sql.mdx` — https://ecosystem.ai/docs/configuration/generative/chat_sql
- [Fact Injection](#docs-configuration-generative-facts) — `docs/configuration/generative/facts.mdx` — https://ecosystem.ai/docs/configuration/generative/facts
- [Generative Fact-Injection Tools and Plugins](#docs-configuration-generative-index) — `docs/configuration/generative/index.mdx` — https://ecosystem.ai/docs/configuration/generative
- [Generative Models](#docs-configuration-generative-models) — `docs/configuration/generative/models.mdx` — https://ecosystem.ai/docs/configuration/generative/models
- [Vector Stores](#docs-configuration-generative-vector-stores) — `docs/configuration/generative/vector_stores.mdx` — https://ecosystem.ai/docs/configuration/generative/vector_stores
- [Intro](#docs-configuration-index) — `docs/configuration/index.mdx` — https://ecosystem.ai/docs/configuration
- [Project / Module](#docs-configuration-project) — `docs/configuration/project.mdx` — https://ecosystem.ai/docs/configuration/project
- [ecosystem-notebooks Python Package](#docs-configuration-pythonpackage) — `docs/configuration/pythonpackage.mdx` — https://ecosystem.ai/docs/configuration/pythonpackage
- [Simulations](#docs-configuration-simulations) — `docs/configuration/simulations.mdx` — https://ecosystem.ai/docs/configuration/simulations
- [Predictors](#docs-configuration-static-models-index) — `docs/configuration/static_models/index.mdx` — https://ecosystem.ai/docs/configuration/static_models
- [Model Types](#docs-configuration-static-models-model-types) — `docs/configuration/static_models/model_types.mdx` — https://ecosystem.ai/docs/configuration/static_models/model_types
- [Models](#docs-configuration-static-models-models) — `docs/configuration/static_models/models.mdx` — https://ecosystem.ai/docs/configuration/static_models/models
- [Predictor](#docs-configuration-static-models-predictor) — `docs/configuration/static_models/predictor.mdx` — https://ecosystem.ai/docs/configuration/static_models/predictor
- [Intro](#docs-documentation-index) — `docs/documentation/index.mdx` — https://ecosystem.ai/docs/documentation
- [Index](#docs-frontend-angular-index) — `docs/frontend/angular/index.mdx` — https://ecosystem.ai/docs/frontend/angular
- [Index](#docs-frontend-index) — `docs/frontend/index.mdx` — https://ecosystem.ai/docs/frontend
- [Index](#docs-frontend-ios-index) — `docs/frontend/ios/index.mdx` — https://ecosystem.ai/docs/frontend/ios
- [Index](#docs-frontend-python-index) — `docs/frontend/python/index.mdx` — https://ecosystem.ai/docs/frontend/python
- [Get Started](#docs-index) — `docs/index.mdx` — https://ecosystem.ai/docs
- [Docker](#docs-local-docker) — `docs/local/docker.mdx` — https://ecosystem.ai/docs/local/docker
- [Intro](#docs-local-index) — `docs/local/index.mdx` — https://ecosystem.ai/docs/local
- [AWS Marketplace](#docs-marketplace-aws) — `docs/marketplace/aws.mdx` — https://ecosystem.ai/docs/marketplace/aws
- [Azure Marketplace](#docs-marketplace-azure) — `docs/marketplace/azure.mdx` — https://ecosystem.ai/docs/marketplace/azure
- [GCP Marketplace](#docs-marketplace-gcp) — `docs/marketplace/gcp.mdx` — https://ecosystem.ai/docs/marketplace/gcp
- [Intro](#docs-marketplace-index) — `docs/marketplace/index.mdx` — https://ecosystem.ai/docs/marketplace
- [Index](#docs-modules-index) — `docs/modules/index.mdx` — https://ecosystem.ai/docs/modules
- [MLRun Module — Access & Scoring](#docs-modules-mlrun-access) — `docs/modules/mlrun/access.mdx` — https://ecosystem.ai/docs/modules/mlrun/access
- [MLRun Module — Community Edition](#docs-modules-mlrun-community-edition) — `docs/modules/mlrun/community_edition.mdx` — https://ecosystem.ai/docs/modules/mlrun/community_edition
- [MLRun Module — Console Tour](#docs-modules-mlrun-console-tour) — `docs/modules/mlrun/console_tour.mdx` — https://ecosystem.ai/docs/modules/mlrun/console_tour
- [MLRun Module — Data Preparation](#docs-modules-mlrun-data) — `docs/modules/mlrun/data.mdx` — https://ecosystem.ai/docs/modules/mlrun/data
- [MLRun Module — Use-Case Definition](#docs-modules-mlrun-definition) — `docs/modules/mlrun/definition.mdx` — https://ecosystem.ai/docs/modules/mlrun/definition
- [MLRun Module — Kubernetes Deployment](#docs-modules-mlrun-deployment) — `docs/modules/mlrun/deployment.mdx` — https://ecosystem.ai/docs/modules/mlrun/deployment
- [MLRun Module — Python & AI Generator](#docs-modules-mlrun-generator) — `docs/modules/mlrun/generator.mdx` — https://ecosystem.ai/docs/modules/mlrun/generator
- [MLRun Module](#docs-modules-mlrun-index) — `docs/modules/mlrun/index.mdx` — https://ecosystem.ai/docs/modules/mlrun
- [MLRun Module — Installation](#docs-modules-mlrun-install) — `docs/modules/mlrun/install.mdx` — https://ecosystem.ai/docs/modules/mlrun/install
- [MLRun Module — Model Training](#docs-modules-mlrun-training) — `docs/modules/mlrun/training.mdx` — https://ecosystem.ai/docs/modules/mlrun/training
- [Spend Personality](#docs-modules-spend-personality-access) — `docs/modules/spend_personality/access.mdx` — https://ecosystem.ai/docs/modules/spend_personality/access
- [Spend Personality](#docs-modules-spend-personality-chatgpt) — `docs/modules/spend_personality/chatgpt.mdx` — https://ecosystem.ai/docs/modules/spend_personality/chatgpt
- [Spend Personality](#docs-modules-spend-personality-configuration) — `docs/modules/spend_personality/configuration.mdx` — https://ecosystem.ai/docs/modules/spend_personality/configuration
- [Spend Personality](#docs-modules-spend-personality-data) — `docs/modules/spend_personality/data.mdx` — https://ecosystem.ai/docs/modules/spend_personality/data
- [Spend Personality](#docs-modules-spend-personality-definition) — `docs/modules/spend_personality/definition.mdx` — https://ecosystem.ai/docs/modules/spend_personality/definition
- [Spend Personality](#docs-modules-spend-personality-enrich) — `docs/modules/spend_personality/enrich.mdx` — https://ecosystem.ai/docs/modules/spend_personality/enrich
- [Index](#docs-modules-spend-personality-index) — `docs/modules/spend_personality/index.mdx` — https://ecosystem.ai/docs/modules/spend_personality
- [AWS Spend Personality](#docs-modules-spend-personality-install-aws) — `docs/modules/spend_personality/install/aws.mdx` — https://ecosystem.ai/docs/modules/spend_personality/install/aws
- [Azure Spend Personality](#docs-modules-spend-personality-install-azure) — `docs/modules/spend_personality/install/azure.mdx` — https://ecosystem.ai/docs/modules/spend_personality/install/azure
- [Two-Tower Module — Access & Operations](#docs-modules-two-tower-access) — `docs/modules/two_tower/access.mdx` — https://ecosystem.ai/docs/modules/two_tower/access
- [Two-Tower Module — API Reference](#docs-modules-two-tower-api) — `docs/modules/two_tower/api.mdx` — https://ecosystem.ai/docs/modules/two_tower/api
- [Two-Tower Module — Architecture & Theory](#docs-modules-two-tower-concepts) — `docs/modules/two_tower/concepts.mdx` — https://ecosystem.ai/docs/modules/two_tower/concepts
- [Two-Tower Module — Data Preparation](#docs-modules-two-tower-data) — `docs/modules/two_tower/data.mdx` — https://ecosystem.ai/docs/modules/two_tower/data
- [Two-Tower Module](#docs-modules-two-tower-index) — `docs/modules/two_tower/index.mdx` — https://ecosystem.ai/docs/modules/two_tower
- [Two-Tower Module — PyTorch Serving](#docs-modules-two-tower-pytorch) — `docs/modules/two_tower/pytorch.mdx` — https://ecosystem.ai/docs/modules/two_tower/pytorch
- [Two-Tower Module — Real-Time Scoring](#docs-modules-two-tower-runtime) — `docs/modules/two_tower/runtime.mdx` — https://ecosystem.ai/docs/modules/two_tower/runtime
- [Two-Tower Module — Offline Scoring](#docs-modules-two-tower-scoring) — `docs/modules/two_tower/scoring.mdx` — https://ecosystem.ai/docs/modules/two_tower/scoring
- [Two-Tower Module — Model Training](#docs-modules-two-tower-training) — `docs/modules/two_tower/training.mdx` — https://ecosystem.ai/docs/modules/two_tower/training
- [Index](#docs-opensource-index) — `docs/opensource/index.mdx` — https://ecosystem.ai/docs/opensource
- [Superset](#docs-opensource-superset) — `docs/opensource/superset.mdx` — https://ecosystem.ai/docs/opensource/superset
- [Docker](#docs-quick-start-docker) — `docs/quick_start/docker.mdx` — https://ecosystem.ai/docs/quick_start/docker
- [Index](#docs-quick-start-index) — `docs/quick_start/index.mdx` — https://ecosystem.ai/docs/quick_start
- [Kubernetes](#docs-quick-start-kubernetes) — `docs/quick_start/kubernetes.mdx` — https://ecosystem.ai/docs/quick_start/kubernetes
- [Local Setup](#docs-quick-start-local-setup) — `docs/quick_start/local_setup.mdx` — https://ecosystem.ai/docs/quick_start/local_setup
- [Marketplace](#docs-quick-start-marketplace) — `docs/quick_start/marketplace.mdx` — https://ecosystem.ai/docs/quick_start/marketplace
- [Openshift](#docs-quick-start-openshift) — `docs/quick_start/openshift.mdx` — https://ecosystem.ai/docs/quick_start/openshift
- [Post Install](#docs-quick-start-post-install) — `docs/quick_start/post_install.mdx` — https://ecosystem.ai/docs/quick_start/post_install
- [API Access](#docs-runtime-access) — `docs/runtime/access.mdx` — https://ecosystem.ai/docs/runtime/access
- [API Configuration Plugin](#docs-runtime-apiconfiguration-index) — `docs/runtime/apiconfiguration/index.mdx` — https://ecosystem.ai/docs/runtime/apiconfiguration
- [Product Master Plugin](#docs-runtime-apiconfiguration-productmaster) — `docs/runtime/apiconfiguration/productmaster.mdx` — https://ecosystem.ai/docs/runtime/apiconfiguration/productmaster
- [Configuration](#docs-runtime-configuration) — `docs/runtime/configuration.mdx` — https://ecosystem.ai/docs/runtime/configuration
- [Push Your Deployment](#docs-runtime-deployment) — `docs/runtime/deployment.mdx` — https://ecosystem.ai/docs/runtime/deployment
- [Environment Variables](#docs-runtime-environment-variables) — `docs/runtime/environment_variables.mdx` — https://ecosystem.ai/docs/runtime/environment_variables
- [Calling External Runtimes](#docs-runtime-externalruntimecalls) — `docs/runtime/externalruntimecalls.mdx` — https://ecosystem.ai/docs/runtime/externalruntimecalls
- [Runtime](#docs-runtime-index) — `docs/runtime/index.mdx` — https://ecosystem.ai/docs/runtime
- [Logging](#docs-runtime-logging) — `docs/runtime/logging.mdx` — https://ecosystem.ai/docs/runtime/logging
- [MCP Support](#docs-runtime-mcp) — `docs/runtime/mcp.mdx` — https://ecosystem.ai/docs/runtime/mcp
- [MLFlow Integration](#docs-runtime-mlflowintegration) — `docs/runtime/mlflowintegration.mdx` — https://ecosystem.ai/docs/runtime/mlflowintegration
- [Plugins](#docs-runtime-plugins-index) — `docs/runtime/plugins/index.mdx` — https://ecosystem.ai/docs/runtime/plugins
- [Post-Predict Plugins](#docs-runtime-plugins-postpredict) — `docs/runtime/plugins/postpredict.mdx` — https://ecosystem.ai/docs/runtime/plugins/postpredict
- [Pre-Predict Plugins](#docs-runtime-plugins-prepredict) — `docs/runtime/plugins/prepredict.mdx` — https://ecosystem.ai/docs/runtime/plugins/prepredict
- [Post-Predict Plugins](#docs-runtime-postpredict-index) — `docs/runtime/postpredict/index.mdx` — https://ecosystem.ai/docs/runtime/postpredict
- [Platform Dynamic Engagement Plugin](#docs-runtime-postpredict-platformdynamicengagement) — `docs/runtime/postpredict/platformdynamicengagement.mdx` — https://ecosystem.ai/docs/runtime/postpredict/platformdynamicengagement
- [Post-Score Basic Plugin](#docs-runtime-postpredict-postscorebasic) — `docs/runtime/postpredict/postscorebasic.mdx` — https://ecosystem.ai/docs/runtime/postpredict/postscorebasic
- [Post Score Network Plugin](#docs-runtime-postpredict-postscorenetwork) — `docs/runtime/postpredict/postscorenetwork.mdx` — https://ecosystem.ai/docs/runtime/postpredict/postscorenetwork
- [Post-Score Recommender Plugin](#docs-runtime-postpredict-postscorerecommenderoffers) — `docs/runtime/postpredict/postscorerecommenderoffers.mdx` — https://ecosystem.ai/docs/runtime/postpredict/postscorerecommenderoffers
- [Pre-Predict Plugins](#docs-runtime-prepredict-index) — `docs/runtime/prepredict/index.mdx` — https://ecosystem.ai/docs/runtime/prepredict
- [Pre-Predict Auto Date](#docs-runtime-prepredict-prepredictautodate) — `docs/runtime/prepredict/prepredictautodate.mdx` — https://ecosystem.ai/docs/runtime/prepredict/prepredictautodate
- [Pre-Score Basic Plugin](#docs-runtime-prepredict-prescorebasic) — `docs/runtime/prepredict/prescorebasic.mdx` — https://ecosystem.ai/docs/runtime/prepredict/prescorebasic
- [Pre-Score Dynamic Plugin](#docs-runtime-prepredict-prescoredynamic) — `docs/runtime/prepredict/prescoredynamic.mdx` — https://ecosystem.ai/docs/runtime/prepredict/prescoredynamic
- [Pre-Score Lookup Plugin](#docs-runtime-prepredict-prescorelookup) — `docs/runtime/prepredict/prescorelookup.mdx` — https://ecosystem.ai/docs/runtime/prepredict/prescorelookup
- [ecosystem.Ai runtime release notes](#docs-runtime-runtimeversion) — `docs/runtime/runtimeversion.mdx` — https://ecosystem.ai/docs/runtime/runtimeversion
- [Deployment](#docs-user-guides-dynamic-deployment) — `docs/user_guides/dynamic/deployment.mdx` — https://ecosystem.ai/docs/user_guides/dynamic/deployment
- [Manage Files & Feature Engineering](#docs-user-guides-dynamic-files-features) — `docs/user_guides/dynamic/files_features.mdx` — https://ecosystem.ai/docs/user_guides/dynamic/files_features
- [How it Works](#docs-user-guides-dynamic-how-it-works) — `docs/user_guides/dynamic/how_it_works.mdx` — https://ecosystem.ai/docs/user_guides/dynamic/how_it_works
- [Introduction](#docs-user-guides-dynamic-index) — `docs/user_guides/dynamic/index.mdx` — https://ecosystem.ai/docs/user_guides/dynamic
- [Get Started](#docs-user-guides-dynamic-intro) — `docs/user_guides/dynamic/intro.mdx` — https://ecosystem.ai/docs/user_guides/dynamic/intro
- [Monitoring](#docs-user-guides-dynamic-monitoring) — `docs/user_guides/dynamic/monitoring.mdx` — https://ecosystem.ai/docs/user_guides/dynamic/monitoring
- [Projects](#docs-user-guides-dynamic-projects) — `docs/user_guides/dynamic/projects.mdx` — https://ecosystem.ai/docs/user_guides/dynamic/projects
- [Dynamic Pulse Responder Configuration](#docs-user-guides-dynamic-pulse-responder) — `docs/user_guides/dynamic/pulse_responder.mdx` — https://ecosystem.ai/docs/user_guides/dynamic/pulse_responder
- [Testing](#docs-user-guides-dynamic-testing) — `docs/user_guides/dynamic/testing.mdx` — https://ecosystem.ai/docs/user_guides/dynamic/testing
- [Testing Dynamic Interaction Deployments](#docs-user-guides-dynamic-interaction-deployments) — `docs/user_guides/dynamic_interaction_deployments.mdx` — https://ecosystem.ai/docs/user_guides/dynamic_interaction_deployments
- [Exploration using epsilon](#docs-user-guides-epsilon-exploration) — `docs/user_guides/epsilon_exploration.mdx` — https://ecosystem.ai/docs/user_guides/epsilon_exploration
- [Data From Another Runtime](#docs-user-guides-external-runtime-data) — `docs/user_guides/external_runtime_data.mdx` — https://ecosystem.ai/docs/user_guides/external_runtime_data
- [Intro](#docs-user-guides-index) — `docs/user_guides/index.mdx` — https://ecosystem.ai/docs/user_guides
- [Network Selector](#docs-user-guides-network) — `docs/user_guides/network.mdx` — https://ecosystem.ai/docs/user_guides/network
- [Deployment](#docs-user-guides-recommender-deployment) — `docs/user_guides/recommender/deployment.mdx` — https://ecosystem.ai/docs/user_guides/recommender/deployment
- [Feature Stores](#docs-user-guides-recommender-feature-stores) — `docs/user_guides/recommender/feature_stores.mdx` — https://ecosystem.ai/docs/user_guides/recommender/feature_stores
- [Files & Feature Engineering](#docs-user-guides-recommender-files-features) — `docs/user_guides/recommender/files_features.mdx` — https://ecosystem.ai/docs/user_guides/recommender/files_features
- [How it Works](#docs-user-guides-recommender-how-it-works) — `docs/user_guides/recommender/how_it_works.mdx` — https://ecosystem.ai/docs/user_guides/recommender/how_it_works
- [Introduction](#docs-user-guides-recommender-index) — `docs/user_guides/recommender/index.mdx` — https://ecosystem.ai/docs/user_guides/recommender
- [Get Started](#docs-user-guides-recommender-intro) — `docs/user_guides/recommender/intro.mdx` — https://ecosystem.ai/docs/user_guides/recommender/intro
- [Monitoring](#docs-user-guides-recommender-monitoring) — `docs/user_guides/recommender/monitoring.mdx` — https://ecosystem.ai/docs/user_guides/recommender/monitoring
- [Predictions](#docs-user-guides-recommender-predictions) — `docs/user_guides/recommender/predictions.mdx` — https://ecosystem.ai/docs/user_guides/recommender/predictions
- [Projects](#docs-user-guides-recommender-projects) — `docs/user_guides/recommender/projects.mdx` — https://ecosystem.ai/docs/user_guides/recommender/projects
- [Testing](#docs-user-guides-recommender-testing) — `docs/user_guides/recommender/testing.mdx` — https://ecosystem.ai/docs/user_guides/recommender/testing
- [Local Environment Setup](#docs-user-guides-runtime-plugin-development-environment-setup) — `docs/user_guides/runtime_plugin_development/environment_setup.mdx` — https://ecosystem.ai/docs/user_guides/runtime_plugin_development/environment_setup
- [Local Environment Update](#docs-user-guides-runtime-plugin-development-environment-update) — `docs/user_guides/runtime_plugin_development/environment_update.mdx` — https://ecosystem.ai/docs/user_guides/runtime_plugin_development/environment_update
- [Introduction](#docs-user-guides-runtime-plugin-development-index) — `docs/user_guides/runtime_plugin_development/index.mdx` — https://ecosystem.ai/docs/user_guides/runtime_plugin_development
- [Pre and Post Scoring Logic Structures](#docs-user-guides-runtime-plugin-development-pre-post-scoring-structures) — `docs/user_guides/runtime_plugin_development/pre_post_scoring_structures.mdx` — https://ecosystem.ai/docs/user_guides/runtime_plugin_development/pre_post_scoring_structures
- [Converting Static Model Cases to Dynamic Interactions](#docs-user-guides-static-to-dynamic) — `docs/user_guides/static_to_dynamic.mdx` — https://ecosystem.ai/docs/user_guides/static_to_dynamic
- [Virtual Variables](#docs-user-guides-virtual-variables) — `docs/user_guides/virtual_variables.mdx` — https://ecosystem.ai/docs/user_guides/virtual_variables
- [Agent Framework](#docs-workers-agent-framework-index) — `docs/workers/agent_framework/index.mdx` — https://ecosystem.ai/docs/workers/agent_framework
- [Journey Management](#docs-workers-agent-framework-journeys) — `docs/workers/agent_framework/journeys.mdx` — https://ecosystem.ai/docs/workers/agent_framework/journeys
- [Python](#docs-workers-generative) — `docs/workers/generative.mdx` — https://ecosystem.ai/docs/workers/generative
- [Workers](#docs-workers-index) — `docs/workers/index.mdx` — https://ecosystem.ai/docs/workers
- [Python](#docs-workers-python) — `docs/workers/python.mdx` — https://ecosystem.ai/docs/workers/python
- [Workers](#docs-workers-worker-arch) — `docs/workers/worker_arch.mdx` — https://ecosystem.ai/docs/workers/worker_arch
- [Changelog](#changelog) — `changelog.mdx` — https://ecosystem.ai/changelog
- [⚙️ Config v0.6.304.04](#changelog-config-v0-6-304-04) — `changelog/config_v0.6.304.04.mdx` — https://ecosystem.ai/changelog/config_v0.6.304.04
- [🚀 ecosystem.Ai v0.6.304.04](#changelog-v0-6-304-04) — `changelog/v0.6.304.04.mdx` — https://ecosystem.ai/changelog/v0.6.304.04
- [🚀 ecosystem.Ai v0.6.401.00](#changelog-v0-6-401-00) — `changelog/v0.6.401.00.mdx` — https://ecosystem.ai/changelog/v0.6.401.00
- [🚀 ecosystem.Ai v0.6.500.01](#changelog-v0-6-500-01) — `changelog/v0.6.500.01.mdx` — https://ecosystem.ai/changelog/v0.6.500.01
- [🚀 ecosystem.Ai v0.6.601.00](#changelog-v0-6-601-00) — `changelog/v0.6.601.00.mdx` — https://ecosystem.ai/changelog/v0.6.601.00
- [🚀 ecosystem.Ai v0.7.900.00](#changelog-v0-7-900-00) — `changelog/v0.7.900.00.mdx` — https://ecosystem.ai/changelog/v0.7.900.00
- [Three essential steps to detect customer happiness](#blog-2024-06-29-happiness) — `blog/2024-06-29_happiness.mdx` — https://ecosystem.ai/blog/2024-06-29_happiness
- [ecosystem.Ai 2024 Roadmap](#blog-2024-06-30-2024-roadmap) — `blog/2024-06-30_2024_roadmap.mdx` — https://ecosystem.ai/blog/2024-06-30_2024_roadmap
- [Unlocking Customer Insights, The Power of Spend Personality](#blog-2024-11-06-spend) — `blog/2024-11-06_spend.mdx` — https://ecosystem.ai/blog/2024-11-06_spend
- [Milliseconds Matter; What 'Real-Time' Means to Us](#blog-2025-04-02-millisecondsmatter) — `blog/2025-04-02_millisecondsmatter.mdx` — https://ecosystem.ai/blog/2025-04-02_millisecondsmatter
- [ecosystem.Ai 2026 Roadmap](#blog-2025-07-03-2026-roadmap) — `blog/2025-07-03_2026_roadmap.mdx` — https://ecosystem.ai/blog/2025-07-03_2026_roadmap
- [The Hardest Place to Deploy Conversational AI - and Why It Matters](#blog-2026-02-02-conversationalai) — `blog/2026-02-02_conversationalAI.mdx` — https://ecosystem.ai/blog/2026-02-02_conversationalAI
- [Behavioral Intelligence is an Architecture, not a Plugin](#blog-2026-02-17-behavioral-intelligence-architecture-not-plugin) — `blog/2026-02-17_behavioral-intelligence-architecture-not-plugin.mdx` — https://ecosystem.ai/blog/2026-02-17_behavioral-intelligence-architecture-not-plugin

---

# Section: Docs

## Bayesian Probabilistic

Source: `docs/configuration/algorithms/baysianprobabilistic.mdx`
URL: https://ecosystem.ai/docs/configuration/algorithms/baysianprobabilistic
Summary: Bayesian Probabilistic

# Bayesian Probabilistic

The Bayesian Probabilistic algorithm implements a version of the Naive Bayes algorithm for solving classification problems.

## Algorithm

The Naive Bayes algorithm assigns a score for each offer using the following formula:
$P(\text{offer}|X) = P(\text{offer}) \prod_{i=1}^{n} P(x_i|\text{offer})$
Where $X$ are the features used to score the offers. The Baysian Probabilistic algorithm supports discrete features and with the resulting $P(X|\text{offer})$ distributions being multinomial. Laplace smoothing with $alpha=1$ is used to avoid zeroing out probabilities if an offer and feature value do not occur together in the training data set.

The historical data used to train the algorithm can be windowed by either time and or the number of events. It is stongly recommended that a window approach be configured, both for performance reasons and to prevent historical data from overwhelming changes in the current state of the system. If no historical data is available when training the algorithm then all of the offers are assigned a score by sampling from a uniform distribution. This can occur either because it is the first time the API is being called or because the available historical data falls outside of the configured window. If historical data is present but an offer is not present in the historical data then the algorithm can be configured to either ignore the offer or to score the offer by sampling from a uniform distribution.

## Parameters

- **Processing Window**: Restricts the data used when the model updates based on a time period from the present going back a specified in milliseconds.
- **Historical Count**: Restricts the data used when the model updates based on a count of interactions. This is an overall interaction count rather than a count per offer and segment as used in the Ecosystem Rewards algorithm.
- **randomisation_missing_offers**: (only supported through python package) The approach to take when an offer is not present in the training data. The options are:
  - **none**: Ignore the offer and do not score it.
  - **uniform**: Score the missing offer by sampling from a uniform distribution.
- **Lookup Defaults**: The features to be used when training and scoring the offers.

## Example

Below is an example configuration of the Bayesian Probabilistic algorithm in python

```python
from prediction.apis import deployment_management as dm
from prediction.apis import ecosystem_generation_engine as ge
from prediction.apis import data_management_engine as dme
from prediction.apis import online_learning_management as ol
from prediction.apis import prediction_engine as pe
from prediction.apis import worker_file_service as fs
from prediction import jwt_access

auth = jwt_access.Authenticate("http://localhost:3001/api", ecosystem_username, ecosystem_password)

deployment_id = "demo-deployment"

online_learning_uuid = ol.create_online_learning(
        auth,
        algorithm="bayesian_probabilistic",
        name=deployment_id,
        description="Demo deployment for illustrating python configuration",
        feature_store_collection="set_up_features",
        feature_store_database="my_mongo_database",
        options_store_database="my_mongo_database",
        options_store_collection="demo-deployment_options",
        randomisation_processing_count=500,
        randomisation_processing_window=604800000,
        randomisation_missing_offers="uniform",
        contextual_variables_offer_key="offer"
)

online_learning = dm.define_deployment_multi_armed_bandit(epsilon=0, dynamic_interaction_uuid=online_learning_uuid)

parameter_access = dm.define_deployment_parameter_access(
    auth,
    lookup_key="customer_id",
    lookup_type="string",
    database="my_mongo_database",
    table_collection="customer_feature_store",
    datasource="mongodb",
    defaults=["feature_one", "feature_two", "feature_three"]
)

deployment_step = dm.create_deployment(
    auth,
    project_id="demo-project",
    deployment_id=deployment_id,
    description="Demo project for illustrating python configuration",
    version="001",
    plugin_post_score_class="PlatformDynamicEngagement.java",
    plugin_pre_score_class="PreScoreDynamic.java",
    scoring_engine_path_dev="http://localhost:8091",
    mongo_connect=f"mongodb://{mongo_user}:{mongo_password}@localhost:54445/?authSource=admin",
    parameter_access=parameter_access,
    multi_armed_bandit=online_learning
)
```

---

## Coverage-Aware Thompson

Source: `docs/configuration/algorithms/coveragethompson.mdx`
URL: https://ecosystem.ai/docs/configuration/algorithms/coveragethompson
Summary: Coverage-Aware Thompson Sampling for dynamic interactions in ecosystem.Ai

# Coverage-Aware Thompson

An extension of Thompson Sampling that **boosts under-exposed offers** so niche and long-tail items get a fair chance alongside popular ones. It adjusts priors by exposure, draws from Beta posteriors, and applies an inverse-popularity factor; optional $\epsilon$ mixing adds uniform exploration across the catalog.

## Algorithm

**Config value:** `"approach": "behaviorAlgos"`, `"sub_approach": "coverageAwareThompson"`

**Prior adjustment** (exposure-shaping of the Beta prior):

$\beta_{\text{prior}} = 1.0 + \text{exposure}^{\gamma}$

**Thompson draw:**

$\theta \sim \mathrm{Beta}(\alpha, \beta)$

**Score** (inverse popularity and optional multipliers):

$\text{score} = \theta \cdot \frac{1}{(\text{exposure} + 1)^{\gamma}} \cdot \text{variableMultiplier}$

**Optional $\epsilon$ exploration** (after normalization):

$\text{finalScore} = (1 - \epsilon) \cdot \text{normalized} + \frac{\epsilon}{|\text{offers}|}$

Higher $\epsilon$ allocates more mass uniformly across arms, improving coverage at the cost of short-term exploitation.

## Parameters

- **gamma** ($\gamma$): Popularity-penalty exponent; controls how strongly under-exposed offers are boosted. Default: `1.0`.
- **epsilon** ($\epsilon$): Additional uniform exploration over the offer set. Default: `0.0`. Typical values for extra coverage: `0.05`–`0.1`.
- **Processing Window**: Time window in milliseconds for historical data.
- **Historical Count**: Max records to process per update cycle.

## Cold Start

**Recommendations are always returned.** Coverage-Aware Thompson has the strongest cold-start handling among behavioral algorithms:

- **No history:** The `RollingBehavior` layer assigns uniform random scores to every offer. The algorithm itself also handles this well — default $\alpha = 1.0$, $\beta = 1.0$, and $\text{exposure} = 0$ yield $\mathrm{Beta}(1,1)$ (uniform sampling).
- **Inverse-popularity** $(\text{exposure}+1)^{-\gamma}$ is **maximized** when exposure is zero, so unseen offers receive the strongest relative boost.
- As data accumulates, the Beta posteriors sharpen and the inverse-popularity term naturally balances popular vs. niche offers.

The scored options are then sorted by `arm_reward` and handed to the configured **dynamic post-score class**, which controls the final offer selection and response formatting.

**Strongest Cold Start:** Coverage-Aware Thompson is the best cold-start choice when catalog fairness and tail coverage matter. Its Beta(1,1) prior and inverse-popularity boost give unseen offers maximum exposure from day one. The post-score class determines the final presentation.

## When To Use

- **Catalog coverage** or fairness requirements (every offer should eventually get trials)
- Promoting the **long tail** of niche offers
- Mitigating **popularity bias** where raw counts dominate rankings

## When NOT To Use

- When you want to **converge quickly** to a single best offer with minimal exploration
- When **catalog coverage** is not a business concern and raw performance ranking is enough

## Example

```python
from prediction.apis import deployment_management as dm
from prediction.apis import online_learning_management as ol
from prediction import jwt_access

auth = jwt_access.Authenticate("http://localhost:3001/api", ecosystem_username, ecosystem_password)

deployment_id = "demo-coverage-aware-thompson"

online_learning_uuid = ol.create_online_learning(
        auth,
        algorithm="ecosystem_rewards",
        name=deployment_id,
        description="Coverage-Aware Thompson configuration",
        feature_store_collection="set_up_features",
        feature_store_database="my_mongo_database",
        options_store_database="my_mongo_database",
        options_store_collection="demo-deployment_options",
        randomisation_processing_count=5000,
        randomisation_processing_window=604800000,
        contextual_variables_offer_key="offer",
        create_options_index=True,
        create_covering_index=True
)

online_learning = dm.define_deployment_multi_armed_bandit(epsilon=0.05, dynamic_interaction_uuid=online_learning_uuid)

parameter_access = dm.define_deployment_parameter_access(
    auth,
    lookup_key="customer_id",
    lookup_type="string",
    database="my_mongo_database",
    table_collection="customer_feature_store",
    datasource="mongodb"
)

deployment_step = dm.create_deployment(
    auth,
    project_id="demo-project",
    deployment_id=deployment_id,
    description="Coverage-Aware Thompson demo deployment",
    version="001",
    plugin_post_score_class="PlatformDynamicEngagement.java",
    plugin_pre_score_class="PreScoreDynamic.java",
    scoring_engine_path_dev="http://localhost:8091",
    mongo_connect=f"mongodb://{mongo_user}:{mongo_password}@localhost:54445/?authSource=admin",
    parameter_access=parameter_access,
    multi_armed_bandit=online_learning
)
```

**Deployment pattern:** Set `approach` to `behaviorAlgos` and `sub_approach` to `coverageAwareThompson` in the `randomisation` object. Configure `gamma` and `epsilon` there to tune inverse-popularity strength and uniform exploration; the Python `define_deployment_multi_armed_bandit(epsilon=...)` API controls deployment-level epsilon separately—keep both layers consistent with your intent.

---

## Ecosystem Rewards

Source: `docs/configuration/algorithms/ecosystemrewards.mdx`
URL: https://ecosystem.ai/docs/configuration/algorithms/ecosystemrewards
Summary: Ecosystem Rewards

# Ecosystem Rewards

The Ecosystem Rewards algorithm implements a version of the Thompson Sampling algorithm for solving multi-armed bandit style problems.

## Algorithm

The Ecosystem Rewards algorithm stores and updates a beta distribution for each offer in each segment in the system. When offers need to be scored for an entity in a given segment, the beta distributions for the offers in the segment are sampled and the samples are used as the scores for the offers. Segements can be specified using up to two discrete contextual variables or segmentation can be done at the entity level - i.e. each entity has it's own beta distribution for for each offer.

The beta distributions are specified using an alpha and beta parameter. When an offer is presented and accetped then the alpha parameter for the relevant distribution is incremented. When and offer is presented and not accepted then the beta parameter for the relevant distribution is incremented. The size of the increment in each case is a parameter that can be set when configurating the algorithm. The historical data used for this updating of alpha and beta can be windowed by either time and or the number of events for each offer in a specific segment. It is stongly recommended that a window approach be configured, both for performance reasons and to prevent historical data from overwhelming changes in the current state of the system.

By default the algorithm will assume initial values of one for both alpha and beta for all of the distributions. This corresponds to a uniform distribution, which is a reasonable assumption when no data is available. However, it is possible to specify different initial values for alpha and beta for each offer in each segment. This can be useful when there is some prior knowledge about the performance of the offers in the system.

## Parameters

- **Processing Window**: Restricts the data used when the model updates based on a time period from the present going back a specified in milliseconds.
- **Historical Count**: Restricts the data used when the model updates based on a count of interactions. The count used is per offer and segment.
- **Decay Parameter**: Used to treat repeated interactions from the same customer differently from one off interactions from individual customers. The weight of each interaction from a customer is reduced by a factor of one over the decay parameter, i.e. the latest interaction has a weight of one, the interaction before that has a weight of one over the decay parameter and the interaction before that has a weight of one over the decay parameter squared
- **Max interactions**: Used to treat repeated interactions from the same customer differently from one off interactions from individual customers. Restricts the number of interactions from an individual customer that will be used when updating the model - the latest interactions will be used.
- **Success Reward**: The size of the increment to the alpha parameter of the beta distributions used in the Thompson Sampling when an interaction is successful. This impacts the rate of convergence.
- **Fail Reward**: The size of the increment to the beta parameter of the beta distributions used in the Thompson Sampling when an interaction is not successful. This impacts the rate of convergence.
- **Prior Success Reward**: The size of the increment to the alpha parameter of the beta distributions used in the Thompson Sampling when an interaction is successful in the historical data. Used when historical data is used to train the algorithm before deployment.
- **Prior Fail Reward**: The size of the increment to the beta parameter of the beta distributions used in the Thompson Sampling when an interaction is not successful in the historical data. Used when historical data is used to train the algorithm before deployment.
- **Test options across segments**: If there are options that are configured to only be available for specific values of the contextual variables, electing to test options across segments will occasionally predict those options for contextual variable values where they are not available.
- **epsilon**: The proportion of API calls that will be allocated for exploration. This exploration is done be sampling from a uniform distribution rather than the beta distribution when scoring.

## Example

Below is an example configuration of the Ecosystem Rewards algorithm in python

```python
from prediction.apis import deployment_management as dm
from prediction.apis import ecosystem_generation_engine as ge
from prediction.apis import data_management_engine as dme
from prediction.apis import online_learning_management as ol
from prediction.apis import prediction_engine as pe
from prediction.apis import worker_file_service as fs
from prediction import jwt_access

auth = jwt_access.Authenticate("http://localhost:3001/api", ecosystem_username, ecosystem_password)

deployment_id = "demo-deployment"

online_learning_uuid = ol.create_online_learning(
        auth,
        algorithm="ecosystem_rewards",
        name=deployment_id,
        description="Demo deployment for illustrating python configuration",
        feature_store_collection="set_up_features",
        feature_store_database="my_mongo_database",
        options_store_database="my_mongo_database",
        options_store_collection="demo-deployment_options",
        randomisation_success_reward=0.5,
        randomisation_fail_reward=0.05,
        randomisation_processing_count=200,
        randomisation_processing_window=604800000,
        contextual_variables_offer_key="offer",
        contextual_variables_contextual_variable_one_name="customer_segment",
        contextual_variables_contextual_variable_one_from_data_source = True,
        contextual_variables_contextual_variable_one_lookup = "customer_segment",
        create_options_index=True,
        create_covering_index=True
)

online_learning = dm.define_deployment_multi_armed_bandit(epsilon=0, dynamic_interaction_uuid=online_learning_uuid)

parameter_access = dm.define_deployment_parameter_access(
    auth,
    lookup_key="customer_id",
    lookup_type="string",
    database="my_mongo_database",
    table_collection="customer_feature_store",
    datasource="mongodb"
)

deployment_step = dm.create_deployment(
    auth,
    project_id="demo-project",
    deployment_id=deployment_id,
    description="Demo project for illustrating python configuration",
    version="001",
    plugin_post_score_class="PlatformDynamicEngagement.java",
    plugin_pre_score_class="PreScoreDynamic.java",
    scoring_engine_path_dev="http://localhost:8091",
    mongo_connect=f"mongodb://{mongo_user}:{mongo_password}@localhost:54445/?authSource=admin",
    parameter_access=parameter_access,
    multi_armed_bandit=online_learning
)
```

## Inspecting Beta distributions

To understand the behaviour of the Ecosystem Rewards algorithm, it is important to inspect the Beta distributions the are produced by the algorithm scoring. There are two ways to do this, using the simulation functionality or by producing box and whisker plots from the information contained in the Options Store. 

Use the [simulation](/docs/configuration/simulations) functionality when setting up your configuration. The simulation results will include plots of the Beta dsitributions which can be used to understand the behaviour of the algorithm in the simulated environment.

Use the `/postEcosystemRewardsBetaDistributionBoxPlots` API on the ecosystem.Ai server to examine the distributions contained in the Options Store. The response to the API call will contain the parameters required to produce box and whisker plots of the Beta Distributions. The API is called with a json payload with the following structure:
```json
{
    "options_store_collection": "demo_options",
    "options_store_database": "recommender",
    "contextual_variable_one": "segment_one_value",
    "contextual_variable_two": "segment_two_value",
    "outlier_threshold": 0.1,
    "show_low_data": "false"
}
```
`options_store_collection` and `options_store_database` specify the location of the Options Store in MongoDB. `contextual_variable_one` and `contextual_variable_two` specify the values of the contextual variables for which you want to inspect the beta distributions. `outlier_threshold` specifies the threshold for determining the max and min values for the box and whisker plots, the max is taken to be the value of the $X$ where the CDF is 1 - `outlier_threshold` and the min is taken to be the value of the $X$ where the CDF is `outlier_threshold`. `show_low_data` specifies whether to show the data for options without contacts or responses. The response from the API will be a json object with the following structure:
```json
[
  {
    "q1": 0.20900000000000016,
    "q3": 0.2590000000000002,
    "min": 0.18800000000000014,
    "median": 0.23419203747072595,
    "max": 0.2830000000000002,
    "category": "Bulk Purchase Discount"
  },
  {
    "q1": 0.20900000000000016,
    "q3": 0.2590000000000002,
    "min": 0.18800000000000014,
    "median": 0.23419203747072595,
    "max": 0.2830000000000002,
    "category": "Bundle Purchase Discount"
  },
  {
    "q1": 0.23200000000000018,
    "q3": 0.2840000000000002,
    "min": 0.21100000000000016,
    "median": 0.25816249050873197,
    "max": 0.3080000000000002,
    "category": "Get 10% Off For The Next Hour"
  },
  {
    "q1": 0.004,
    "q3": 0.01900000000000001,
    "min": 0.002,
    "median": 0.013568521031207597,
    "max": 0.03200000000000002,
    "category": "Rewards Booster"
  },
  {
    "q1": 0.17100000000000012,
    "q3": 0.21900000000000017,
    "min": 0.1510000000000001,
    "median": 0.19559902200488996,
    "max": 0.2430000000000002,
    "category": "Save 10% By Paying Upfront"
  }
]
```
The same functionality can be use to produce box and whisker plots using the python package, as shown in the following truncated example.
```python
from prediction.apis import data_munging_engine as mu

boxes = mu.ecosystem_rewards_beta_box_plots(auth,options_store_collection,options_store_database,contextual_variable_one,contextual_variable_two)

fig, ax = plt.subplots()  
ax.bxp(boxes, showfliers=False)
ax.set_ylabel("PDF")
plt.xticks(rotation=90)
plt.show()
```

## Quantifying exploration

Exploration and exploitation are not split explicitly in Thompson Sampling style algorithms. Instead, exploration occurs automatically when the beta distributions overlap. However, there are situations where it is useful to have a measure of the degree of exploration being performed by the algorithm. Here we outline two approaches for acheiving this:
1. Popular Offer Comparison: The basis of this approach is the assumption that if the top option selected by the algorithm is not the option with the highest take up rate, then the algorithm is exploring.
2. Beta Distribution Overlap: In this approach we consider the score produced for each option and determine the probability that it is higher than the scores sampled from the set of options with higher take up rates than the option under consideration. The average of these probabilities will give a measure of the degree of exploration being performed by the algorithm.

It is important to note that while we can use these approaches to quantify the number of recommendations where exploration is occuring, the exploration is of a different character than when using [$\epsilon$-based exploration](/docs/user_guides/epsilon_exploration/). During an instance of $\epsilon$-based exploration the options will be ranked randomly. In contrast when the Ecosystem Rewards algorithm explores it will still take into account the information it has about the system, making it much more likely to interchange similarly performing offers when exploring rather than ranking completely randomly. In this sense, an instance of $\epsilon$-based exploration is more extreme than an instance of Ecosystem Rewards based exploration.

### Popular Offer Comparison
In this approach we determine the proportion of recommendations made where the top option recommended is not the option with the highest take up rate, given any contextual variable values for the recommendation being made. There are two ways to do this:
1. Using the logging data once recommendations have already been made.
2. By performing the check in the post scoring logic while the recommendation is being made and logging the results.
We will outline the both of these approaches here. 

#### Using the logging data
To use logging data for the popular offer comparison, we make use of the `/postEcosystemRewardsExploration` API on the ecosystem.Ai server. This APi is called with a json payload with the following structure:
```json
{
    "start_time": "2025-04-23T08:24:16"
    ,"end_time": "2025-04-25T08:24:17"
    ,"options_store_collection": "dynamic_set_up_feature_store_options"
    ,"options_store_database": "recommender_demos"
    ,"logging_collection": "ecosystemruntime"
    ,"logging_database": "logging"
    ,"predictor": "offer_recommend_dynamic"
    ,"sample_size": "1000"
    ,"check_indexes": "true"
}
```
`start_time` and `end_time` specify the time period over which the logs should be considered. The Options Store and logging parameters specify the location of the Options Store and contacts logging collections in MongoDB. `predictor` specifies the name of the case for which you want to quantify the exploration. `check_indexes` specifies whether the API should check for the required indexes on the Options Store and logging collections. If the indexes are not present, the API will create them. `sample_size` specifies the number of documents to retrieve from the logs, the items are selected randomly. Set `sample_size` to 0 to retrieve all of the relevant logs.

The response from the API will be a json object with the following structure:
```json
[
  {
    "number_of_explore_offers": 7954,
    "_id": "None",
    "number_of_offers": 13803,
    "exploration_ratio": 0.5762515395203941
  }
]
```
`exploration_ratio` is the proportion of recommendations made where the top option recommended is not the option with the highest take up rate, i.e. options where we assume that exploration is taking place. 

In order to produce this result two MongoDB aggregation pipelines are run. The first determines the most popular offer for each combination of contextual variable values. This is done using the `propensity` field contained in the Options Store. The second pipeline then aggregates over the contact logs for the specified time period and determines when the first option with an `arm_reward` field in the response does not match the option with the highest `propensity`. Recommendations where no options are returned, i.e. `final_result` is empty, are ignored. The specific pipelines run and their results can be seen in the logs of the ecosystem.Ai server.

This functionality can also be access using the `ecosystem_rewards_explore` function in the python package.

While this is the simplest and most easily interpretable exploration quantification, there are two potential issues to be aware of with this approach:
- If the sorting of the option is modified in the post scoring logic such that the top option is not necessarily the option with the score from the Ecosystem Rewards algorithm, then the exploration ratio will be artificially inflated.
- Only the top Option in the logs is considered. This means that exploration could be underestimated if there is less data or separation of propensities for options which have a lower propensity. 

The first issue can be addressed by performing the check in the post scoring logic while the recommendation is being made.

**Note:** The offer popularity is determined using the propensity in the Options Store. This is impacted by the Processing Window and Historical Count parameters in the Ecosystem Rewards algorithm rather than the `start_time` and `end_time` specified in the API call.

#### Using the post scoring logic
The popular offer comparison can be performed in the post scoring logic by using the Options Store detail passed to the post score in the `params` object. This can be done using the `getOptions` function.
```java
JSONArray options = getOptions(params);
```
`options` is a JSONArray of the scored options returned by the Ecosystem Rewards algorithm. Each scored options is represented using a JSONObject. The key fields in the JSONObject for this purpose are `propensity` and `arm_reward`. To determine if the recommendation should be marked as exploration, check whether the options with highest `arm_reward` also has the highest `propensity`. The result can then be added to `predictModelMojoResult` so that it will be stored in the logs. 

**Note:** Do not use the key `explore` when adding the exploration indicator to `predictModelMojoResult` as that is the default key used to indicate epsilon based exploration.

The contact logs with the exploration indicator can then be counted to determine the exploration rate of the Ecosystem Rewards algorithm.

While this approach addresses the issue of modified sorting in the post scoring logic, it still has the drawback of only considering the highest scored option returned by the Ecosystem Rewards algorithm.

### Beta Distribution Overlap
In this approach we consider the score produced for each option and determine the probability that it is higher than the scores sampled from the set of options with higher take up rates than the Option under consideration. The average of these probabilities will give a measure of the degree of exploration being performed by the algorithm.

To illustrate the appraoch followed, consider a single option in the contacts logging collection. Let $r$ be the `arm_reward` for the item. For each option in the Options Store with a higher `propensity` than the option, $\theta$, under consideration, we determine the probability $P_{i}(X < r)$, i.e. the probability that the `arm_reward` generated for $\theta$ is greater then the `arm_reward` generated for option $i$, despite the fact the $i$ has a higher propensity. To take into account the fact that we may not want to measure exploration between similarly performing offers, we replace $r$ with $r_t=r+t$ where $t>0$. We, combine the probability $P_{i}(X < r_t)$, $\forall i$ to deteremine the probability that $\theta$ is an exploration option $P_{explore}$. This is done using the following formula:

$P_{explore} = P_0(X < r_t) + P_0(X > r_t)[P_1(X < r_t) + P_1(X > r_t)[P_2(X < r_t) + ...]]$

Options where either $\alpha=\alpha_0$ or $\beta=\beta_0$ are allocated avalue of $P_{explore} = 1$. $P_{explore}$ is calculated for each option in the contacts logging collection and the exploration rate of the Ecosystem Rewards algorithm is taken to be the average of the $P_{explore}$ values. 

To access the result of this calculation, make use of the `/postEcosystemRewardsExplorationApprox` API on the ecosystem.Ai server. This APi is called with a json payload with the following structure:
```json
{
    "start_time": "2025-04-23T08:24:16"
    ,"end_time": "2025-04-25T08:24:17"
    ,"options_store_collection": "dynamic_set_up_feature_store_options"
    ,"options_store_database": "recommender_demos"
    ,"logging_collection": "ecosystemruntime"
    ,"logging_database": "logging"
    ,"predictor": "offer_recommend_dynamic"
    ,"check_indexes": "true"
    ,"sample_size": "1000"
    ,"score_filter": "1"
    ,"threshold": "0.001"
}
```
`start_time` and `end_time` specify the time period over which the logs should be considered. The Options Store and logging parameters specify the location of the Options Store and contacts logging collections in MongoDB. `predictor` specifies the name of the case for which you want to quantify the exploration. `check_indexes` specifies whether the API should check for the required indexes on the Options Store and logging collections. If the indexes are not present, the API will create them. `sample_size` specifies the number of documents to retrieve from the logs, the items are selected randomly. Set `sample_size` to 0 to retrieve all of the relevant logs. `score_filter` will filter out offers with the given score which can be useful if offers are being manually inserted in the post scoring logic, set to `false` to include all scores. `threshold` sets the value of $t$ in $r_t=r+t$. 

The response from the API will be a json object with the following structure:
```json
{
    "exploration_probability": 0.27273470649093373
}
```
`exploration_probability` is the average of the $P_{explore}$ values.

To view the `exploration_probability` split by contextual variable values, use the `/getEcosystemRewardsExploreApproxContext` API. The API is called with the same payload as the `/postEcosystemRewardsExplorationApprox` API. The response from the API will be a json object with the following structure:
```json
[
  {
    "contextual_variable_two": "All",
    "contextual_variable_one": "All",
    "number_of_interactions": 1000,
    "exploration_probability": 0.07521690966398219
  },
  {
    "contextual_variable_two": "Diploma",
    "contextual_variable_one": "Intentional",
    "number_of_interactions": 25,
    "exploration_probability": 0.034429999360797686
  },
  {
    "contextual_variable_two": "Grade12",
    "contextual_variable_one": "Intentional",
    "number_of_interactions": 165,
    "exploration_probability": 0.1975850836543586
  }
]
```
This functionality can also be access using the `ecosystem_rewards_explore_approx` and `ecosystem_rewards_explore_approx_context` functions in the python package.

## Selecting contextual variables

Selecting contextual variables is similar to traditional feature engineering. Here we outline two approaches that can be taken:
1. Using Mutual Information to rank features
2. Build static models and using variable importance to rank the features

Calculating the mutual information between your response variable and your features will give you a measure of the information about the response variable contained in each of the features. This can then be used to rank the features when choosing features to as contextual variables. It is important to note that the algorithm considers each option individually so the mutual information should be calculated for the features for each option and the common high ranking features should be used as contextual variables. The mutual information calculation can be performed in python using the following code:
```python
# Import the packages and connect to the ecosystem environment
from prediction.apis import data_management_engine as dme
from prediction import jwt_access
from sklearn.preprocessing import OrdinalEncoder
from sklearn.metrics import adjusted_mutual_info_score

auth = jwt_access.Authenticate("http://ecosystem-server:3001/api", "username", "ecosystempassword")

# Calculate and display the mutual information. Note, it is assumed that a list of possible
# options, the database and collection of the historical data, a projection of the 
# relevant fields and a list of the features to compare are defined prior to running this 
# code block
for offer_iter in offer_list:
    print(f"\n{offer_iter.upper()}\n")
    # Get the historical data for the option
    feature_store = pd.DataFrame(dme.post_mongo_db_aggregate_pipeline(auth,
                {
                "database":db
                ,"collection":feature_store_collection
                ,"pipeline":[
                    {"$match":{"offer_name":offer_iter}}
                    ,{"$project":project_dict}
                ]
                }
            ))
    
    # Get the features to compare and encode any that have string values
    feature_subset = feature_store[feature_list]
    enc.fit(feature_subset)
    ordinal_array = enc.transform(feature_subset)
    
    print(f"{'Feature':<20}Mutual Information")
    print("======================================")
    mi_data = []
    # Loop through the encoded historical data and calculate the mutual information
    for index, col in enumerate(ordinal_array.T):
        mi = adjusted_mutual_info_score(feature_store["offer_taken_up"].to_numpy(), col)
        feature_label = feature_list[index]
        mi_data.append((feature_label,mi))
    # Sort the features by descending mutual information and display the results
    mi_data.sort(key=lambda tup: tup[1], reverse=True)
    for i in mi_data:
        print(f"{i[0]:<20}{i[1]:.3f}")
```

Building static models to select the variables will follow a similar approach. A model needs to be trained for each option using the features that are being evaluated and the features that have the highest variable importance across the options should be used as contextual variables.

**Note:** While only two variables can be selected as contextual variables, more than two base variables can be used by concatenating variables using the Virtual Variables functionality. When combining multiple variables it is important to check that the volume of data is sufficient to achieve the desired rate of learning given the number of contextual variables segments.

## Offline evaluation

Evaluating the performance of the Ecosystem Rewards algorithm using historical data is challenging as the algorithm learns by interacting with the environment. In general, when considering historical data, the option presented to the client will not be the same as the option recommended by the algorithm which will both distort the learing and make it impossible to determine if the option would have been taken up by the client if it was presented.

This issue is partially mitigated when multiple offers were presented to the client, particularly if the number of offers presented represent a significant proporition of the number of offers available at that point. In this case we can consider the ranking of the offers generated by the Ecosystem Rewards algorithm and use the Mean Reciprocal Rank to evaulate the effectiveness of the configuration.

An example of how this evaluation can be performed is shown in Python below. The historical data set is assumed to have one row for each option presented to a client, i.e. if multiple options are presented at once then there will be multiple rows for each interaction. The outlined approach requires that a number of fields are available in the historical data set, a preparation step may be required in order to add these fields. In particular the following are required:
- A customer identifier
- An interaction identifier
- An indicator of whether any offer was accepted during an interaction
- An indicator of whether an individual option was accepted
- A list of the options presented during the interaction
- The name of the offer accepted during the interaction

```python
# Import packages and connect to the runtime
from prediction.apis import data_management_engine as dme
from runtime.apis import predictor_engine as o
from runtime import access
auth_runtime = access.Authenticate("http://ecosystem-runtime:8091")

# Details of the historical data
# The location of the historical data
historical_db = "interaction_science"
historical_collection = "multiple_offer_history"
# The names of the fields required to perform the historical evaluation
interaction_key = "interaction"
customer_key = "customer"
interaction_level_offer_accept = "offer_taken_up"
option_level_offer_accept = "offer_accepted"
offers_presented_in_interaction = "presented_offers"
# The number of interactions to include in the evaluation
interaction_sample_size = 1000

# Details of the evaluation
# Number of interactions before manually triggering the Dynamic Interaction learning
learning_interval = 10

# Get the list of interactions to evaluate
interaction_detail_list = dme.post_mongo_db_aggregate_pipeline(auth,
            {
            "database":historical_db
            ,"collection":historical_collection
            ,"pipeline":[
                {"$group":{
                    "_id":{"interaction":f"${interaction_key}","customer":f"${customer_key}"}
                    ,"is_taken_up":{"$max":f"${interaction_level_offer_accept}"}
                    ,"offer_accepted":{"$first":f"${option_level_offer_accept}"}
                    ,"presented_offers":{"$first":f"${offers_presented_in_interaction}"}
                }}
                ,{"$project":{
                    "interaction":"$_id.interaction"
                    ,"customer":"$_id.customer"
                    ,"is_taken_up":1
                    ,"offer_accepted":1
                    ,"presented_offers":1
                    ,"_id":0
                }}
                ,{"$sample":{"size":interaction_sample_size}}
            ]
            }
        )

# Evaluate the performance of the algorithm and print the Mean Reciprocal Rank
iteraction_count = 1
interactions_with_take_up = 0
interactions_with_dynamic_interaction_take_up = 0
mean_reciprocal_rank = 0
for i in interaction_customer_list:
    presented_offers = i["presented_offers"]
    eligible_offers = {}
    for j in presented_offers:
        eligible_offers[j] = 1
    offer_response = o.invocations(
        auth_runtime
        ,{
            "customer":i["customer"]
            , "numberoffers": 3
            , "params":f"{{'eligible_offers':{eligible_offers}}}"
        }
    )
    ranked_offers = []
    for j in offer_response["final_result"]:
        ranked_offers.append(j["result"]["offer"])
    if i["is_taken_up"] == 1:
        interactions_with_take_up += 1
        if i["offer_accepted"] in ranked_offers:
            interactions_with_dynamic_interaction_take_up += 1
            uuid = offer_response["uuid"]
            response_body = {"uuid": uuid, "offers_accepted": [{"offer_name": i["offer_accepted"]}]}
            o.response(auth_runtime,response_body)
            mean_reciprocal_rank += 1/(ranked_offers.index(i["offer_accepted"])+1)
                             
    iteraction_count += 1
    if iteraction_count % learning_interval == 0:
        o.learning(auth_runtime)
mean_reciprocal_rank = mean_reciprocal_rank/interactions_with_take_up

print(f"Number of interactions processed: {iteraction_count}")
print(f"Interactions where an offer was taken up: {interactions_with_take_up}")
print(f"Interactions where the Dynamic Interaction Configuration presented offer was taken up: {interactions_with_dynamic_interaction_take_up}")
print(f"Mean Reciprocal Rank: {mean_reciprocal_rank}")
```

Note that this approach assumes that only a single option can be accepted during each interaction. If this is not the case the the approach will need to be adjusted accordingly and a metric which take this in account (for example, Mean Averate Precision) could be used instead of Mean Reciprocal Rank.

---

## Epsilon Greedy

Source: `docs/configuration/algorithms/epsilongreedy.mdx`
URL: https://ecosystem.ai/docs/configuration/algorithms/epsilongreedy
Summary: Epsilon Greedy algorithm for dynamic interactions in ecosystem.Ai

# Epsilon Greedy

The Epsilon Greedy algorithm is the simplest multi-armed bandit strategy for dynamic interactions. With probability epsilon, it explores by selecting a random arm. With probability $1 - \epsilon$, it exploits by selecting the arm with the highest observed success rate.

## Algorithm

**Config value:** `"approach": "epsilonGreedy"`

The rolling process computes the empirical probability for each offer:

`arm_reward = response_count / logging_count`

The arm with the maximum propensity is flagged with `epsilon_nominated = 1`. At scoring time:

- With probability $\epsilon$: select a random arm (explore)
- With probability $1 - \epsilon$: select the arm with the highest propensity (exploit)

Unlike Thompson Sampling, the exploit phase is deterministic -- the same arm is always selected when not exploring. This makes behavior more predictable but less adaptive.

## Parameters

- **epsilon**: The probability of random exploration. Range: 0.0 (pure exploit) to 1.0 (pure explore). Typical values are 0.05–0.20. Higher values explore more but converge slower. Default: 0.0.
- **Processing Window**: Restricts the data used when the model updates based on a time period from the present going back a specified number of milliseconds.
- **Historical Count**: Restricts the data used when the model updates based on a count of interactions. The count used is per offer and segment.

## Cold Start

**Recommendations are always returned.** The real-time training path always produces a scored options array, regardless of whether there is interaction history:

- **No history:** Every offer in the options store receives a uniform random score. All offers are ranked and passed to the post-score class.
- **Early history:** All arms start with `arm_reward = 0` and tie, so the exploit phase effectively picks randomly among them.
- **Epsilon exploration** controls how frequently a random arm is selected instead of the top-ranked one. A higher epsilon (e.g. 0.1-0.2) is recommended during early deployment to accelerate data collection across all offers.

The scored options are then sorted by `arm_reward` and handed to the configured **dynamic post-score class**, which controls the final offer selection and response formatting.

**Always Returns Offers:** The runtime always returns recommendations. During cold start, offers are ranked randomly. Setting epsilon to at least 0.1 ensures ongoing exploration as data accumulates. The post-score class determines the final presentation.

## When To Use

- When you want simple, predictable behavior
- When you can tune epsilon based on domain knowledge
- When computational cost must be minimal
- Simple A/B testing scenarios

## When NOT To Use

- When you want automatic exploration adaptation (use [Ecosystem Rewards](/docs/configuration/algorithms/ecosystemrewards) instead)
- When you need stochastic rankings for diversity (the exploit phase is deterministic)

## Example

Below is an example configuration of the Epsilon Greedy algorithm in Python:

```python
from prediction.apis import deployment_management as dm
from prediction.apis import online_learning_management as ol
from prediction import jwt_access

auth = jwt_access.Authenticate("http://localhost:3001/api", ecosystem_username, ecosystem_password)

deployment_id = "demo-deployment"

online_learning_uuid = ol.create_online_learning(
        auth,
        algorithm="ecosystem_rewards",
        name=deployment_id,
        description="Epsilon Greedy configuration",
        feature_store_collection="set_up_features",
        feature_store_database="my_mongo_database",
        options_store_database="my_mongo_database",
        options_store_collection="demo-deployment_options",
        randomisation_processing_count=1000,
        randomisation_processing_window=86400000,
        contextual_variables_offer_key="offer",
        contextual_variables_contextual_variable_one_name="customer_segment",
        contextual_variables_contextual_variable_one_from_data_source = True,
        contextual_variables_contextual_variable_one_lookup = "customer_segment",
        create_options_index=True,
        create_covering_index=True
)

online_learning = dm.define_deployment_multi_armed_bandit(epsilon=0.1, dynamic_interaction_uuid=online_learning_uuid)

parameter_access = dm.define_deployment_parameter_access(
    auth,
    lookup_key="customer_id",
    lookup_type="string",
    database="my_mongo_database",
    table_collection="customer_feature_store",
    datasource="mongodb"
)

deployment_step = dm.create_deployment(
    auth,
    project_id="demo-project",
    deployment_id=deployment_id,
    description="Epsilon Greedy demo deployment",
    version="001",
    plugin_post_score_class="PlatformDynamicEngagement.java",
    plugin_pre_score_class="PreScoreDynamic.java",
    scoring_engine_path_dev="http://localhost:8091",
    mongo_connect=f"mongodb://{mongo_user}:{mongo_password}@localhost:54445/?authSource=admin",
    parameter_access=parameter_access,
    multi_armed_bandit=online_learning
)
```

**Note:** The `epsilon` parameter in `define_deployment_multi_armed_bandit` sets the exploration rate. The algorithm identifier in the dynamic recommender configuration should have `approach` set to `epsilonGreedy` in the `randomisation` object.

---

## Generative Model

Source: `docs/configuration/algorithms/generativemodel.mdx`
URL: https://ecosystem.ai/docs/configuration/algorithms/generativemodel
Summary: Generative Model (LLM-based) algorithm for dynamic interactions in ecosystem.Ai

# Generative Model

Sends **interaction history**, **contextual variables**, and **priors** to an external **large language model** (LLM) via a compatible API (for example Groq or OpenAI). The runtime parses **JSON scores** returned by the model and uses them like other dynamic scores.

## Algorithm

**Config value:** `"approach": "behaviorAlgos"`, `"sub_approach": "generative"`

1. Build a prompt from the current entity context, historical interactions, and configured priors.
2. Call the external LLM with **sampling parameters** (for example **temperature**).
3. Parse structured **JSON** with per-offer or per-arm scores from the response.
4. Feed parsed scores into the same ranking path as other behavioral algorithms.

Stochasticity and ranking behavior depend on the **model**, **prompt**, and **temperature**.

## Parameters

- **temperature** (inside `prompt_parameters` or equivalent): Controls randomness of the LLM; default **`1.0`**. Lower values tend to be more deterministic; higher values increase variety.
- **Processing Window** / **Historical Count**: Bound how much history is included in prompts when configured on the deployment.

## Cold Start

**Recommendations are always returned.** The real-time training path always produces a scored options array:

- **No history:** Every offer in the options store receives a uniform random score. The prompt sent to the LLM contains empty or minimal interaction context.
- **With history:** The LLM receives interaction data and contextual variables, and returns per-offer JSON scores. The quality of scores depends on the model, prompt, and richness of the logs.
- Offers not scored by the LLM receive a random fallback score and are still included in the result.

The scored options are then sorted by `arm_reward` and handed to the configured **dynamic post-score class**, which controls the final offer selection and response formatting.

## When To Use

- **Complex offer selection** where natural-language reasoning or unstructured context helps
- **Rich unstructured context** (notes, policies, descriptions) that is expensive to hand-engineer into features
- **Experimental or hybrid** setups combining LLM judgment with the ecosystem.Ai pipeline

## When NOT To Use

- When you need **deterministic**, auditable scores on every request
- **Latency-sensitive** production paths (each score may require a network round trip)
- **Cost-sensitive** environments where per-request LLM calls are prohibitive

## Example

```python
from prediction.apis import deployment_management as dm
from prediction.apis import online_learning_management as ol
from prediction import jwt_access

auth = jwt_access.Authenticate("http://localhost:3001/api", ecosystem_username, ecosystem_password)

deployment_id = "demo-generative-model"

online_learning_uuid = ol.create_online_learning(
        auth,
        algorithm="ecosystem_rewards",
        name=deployment_id,
        description="Generative Model (LLM) configuration",
        feature_store_collection="set_up_features",
        feature_store_database="my_mongo_database",
        options_store_database="my_mongo_database",
        options_store_collection="demo-deployment_options",
        randomisation_processing_count=5000,
        randomisation_processing_window=604800000,
        contextual_variables_offer_key="offer",
        create_options_index=True,
        create_covering_index=True
)

online_learning = dm.define_deployment_multi_armed_bandit(epsilon=0, dynamic_interaction_uuid=online_learning_uuid)

parameter_access = dm.define_deployment_parameter_access(
    auth,
    lookup_key="customer_id",
    lookup_type="string",
    database="my_mongo_database",
    table_collection="customer_feature_store",
    datasource="mongodb"
)

deployment_step = dm.create_deployment(
    auth,
    project_id="demo-project",
    deployment_id=deployment_id,
    description="Generative Model demo deployment",
    version="001",
    plugin_post_score_class="PlatformDynamicEngagement.java",
    plugin_pre_score_class="PreScoreDynamic.java",
    scoring_engine_path_dev="http://localhost:8091",
    mongo_connect=f"mongodb://{mongo_user}:{mongo_password}@localhost:54445/?authSource=admin",
    parameter_access=parameter_access,
    multi_armed_bandit=online_learning
)
```

**Deployment pattern:** Set `approach` to `behaviorAlgos` and `sub_approach` to `generative` in the `randomisation` object. Place **temperature** and other LLM knobs under the configured `prompt_parameters` (or your deployment’s equivalent) so they travel with the dynamic recommender document.

**Latency and cost:** This path typically performs an **external API call per scoring request**, adding **latency** and **per-token cost**. Plan for **timeouts**, **retries**, and **caching** of stable prompt fragments or model outputs where safe.

---

## Algorithms Overview

Source: `docs/configuration/algorithms/index.mdx`
URL: https://ecosystem.ai/docs/configuration/algorithms
Summary: Overview of all dynamic interaction algorithms available in the ecosystem.Ai runtime, including comparison tables, cold-start behavior, and scenario guides.

# Algorithms Overview

The ecosystem.Ai runtime includes a comprehensive library of dynamic interaction algorithms for real-time offer scoring and recommendation. Each algorithm implements a different strategy for learning which offers, actions, or content to present to users.

All algorithms share the same operational architecture: a background **rolling process** periodically updates offer statistics in the **options store**, and real-time scoring reads those pre-computed statistics to rank offers for each API request.

## Architecture

Algorithm selection is driven by the `randomisation` object stored in the dynamic recommender configuration document in MongoDB:

```json
{
  "randomisation": {
    "approach": "binaryThompson",
    "sub_approach": "",
    "epsilon": 0.0,
    "success_reward": 1.0,
    "fail_reward": 1.0,
    "processing_window": 86400000,
    "processing_count": 5000,
    "decay_gamma": 1.0,
    "interaction_count": 0
  }
}
```

The `approach` field selects the top-level algorithm. When `approach` is `behaviorAlgos`, the `sub_approach` field selects the specific behavioral economics algorithm.

### Algorithm Routing

| `approach` Value | Algorithm | Rolling Processor |
|------------------|-----------|-------------------|
| `binaryThompson` | [Ecosystem Rewards (Thompson Sampling)](/docs/configuration/algorithms/ecosystemrewards) | `RollingEcosystemRewards` |
| `epsilonGreedy` | [Epsilon Greedy](/docs/configuration/algorithms/epsilongreedy) | `RollingEcosystemRewards` |
| `naiveBayes` | [Bayesian Probabilistic](/docs/configuration/algorithms/baysianprobabilistic) | `RollingNaiveBayes` |
| `QLearning` | [Q-Learning](/docs/configuration/algorithms/qlearning) | `RollingQLearning` |
| `Network` | [Network Analysis (PageRank)](/docs/configuration/algorithms/networkanalysis) | `RollingNetwork` |
| `behaviorAlgos` | Behavioral Economics (see sub_approach) | `RollingBehavior` |

### Behavioral Sub-Approaches

When `approach = "behaviorAlgos"`, the `sub_approach` field selects one of:

| `sub_approach` Value | Algorithm |
|----------------------|-----------|
| `lossAversion` | [Loss Aversion](/docs/configuration/algorithms/lossaversion) |
| `riskAversion` | [Risk Aversion](/docs/configuration/algorithms/riskaversion) |
| `prospectTheory` | [Prospect Theory](/docs/configuration/algorithms/prospecttheory) |
| `sentimentalEquilibrium` | [Sentimental Equilibrium](/docs/configuration/algorithms/sentimentalequilibrium) |
| `coverageAwareThompson` | [Coverage-Aware Thompson](/docs/configuration/algorithms/coveragethompson) |
| `longTailBoostMF` | [Long-Tail Boost MF](/docs/configuration/algorithms/longtailmf) |
| `generative` | [Generative Model](/docs/configuration/algorithms/generativemodel) |

---

## Exploration

All algorithms share a **deployment-level epsilon** exploration mechanism. On each API request, the runtime rolls a random number against the configured `epsilon`. When exploration is triggered (`explore = 1`), the algorithm is bypassed entirely and all offers receive **uniform random scores**. This applies to every algorithm without exception.

In addition, some algorithms have their own **built-in exploration** that operates during normal (non-explore) scoring:

| Algorithm | Deployment Epsilon | Algorithm-Level Exploration |
|-----------|-------------------|----------------------------|
| **Ecosystem Rewards (Thompson)** | Yes | Automatic via Beta distribution overlap |
| **Epsilon Greedy** | Yes | Epsilon IS the algorithm (fixed-rate random arm selection) |
| **Loss Aversion** | Yes | UCB exploration term boosts under-sampled offers |
| **Risk Aversion** | Yes | None -- relies on deployment epsilon for exploration |
| **Prospect Theory** | Yes | Adaptive drift + built-in epsilon-greedy mixing |
| **Sentimental Equilibrium** | Yes | N/A (aggregate equilibrium, not per-offer) |
| **Coverage-Aware Thompson** | Yes | Thompson sampling + inverse-popularity boost + optional epsilon mixing |
| **Long-Tail Boost MF** | Yes | Inverse-popularity reweighting (diversity, not explicit exploration) |
| **Network Analysis (PageRank)** | Yes | None -- relies on deployment epsilon for exploration |
| **Q-Learning** | Yes | Epsilon-greedy policy within Q-table |
| **Bayesian Probabilistic** | Yes | Uniform sampling for missing offers (if configured) |
| **Generative Model** | Yes | LLM temperature controls stochasticity |

## Algorithm Comparison

| Algorithm | Convergence Speed | Computational Cost | Stochastic | Context-Aware | Best Use Case |
|-----------|-------------------|--------------------|-----------|--------------|--------------| 
| **Ecosystem Rewards (Thompson)** | Medium | Low | Yes | No | General-purpose recommendations |
| **Epsilon Greedy** | Fast (exploit) | Very Low | Partial | No | Simple A/B testing, low complexity |
| **Loss Aversion** | Medium-Fast | Low | No | Yes | High-cost-of-rejection scenarios |
| **Risk Aversion** | Fast | Very Low | No | No | Consistency-valued domains |
| **Prospect Theory** | Medium | Low | Partial | No | Marketing with psychological modeling |
| **Sentimental Equilibrium** | Single-shot | Low | No | No | Engagement intensity optimization |
| **Coverage-Aware Thompson** | Slow | Medium | Yes | Yes | Fairness / catalog coverage |
| **Long-Tail Boost MF** | Medium | High (ALS) | No | Yes | Collaborative filtering with diversity |
| **Network Analysis (PageRank)** | Fast | Medium | No | No | Inter-offer relationships |
| **Q-Learning** | Slow | High | Partial | Yes (state) | Sequential decision-making |
| **Bayesian Probabilistic** | Very Fast | Low | No | Yes | Feature-rich contexts |
| **Generative Model** | N/A | Very High (API) | Yes | Yes | Complex reasoning, experimental |

---

## Cold-Start Behavior

**Recommendations are always returned**, regardless of algorithm or data availability. The `RollingBehavior` (and equivalent Rolling classes) always produces a scored options array that is passed to the post-score class:

- **No history at all:** Every offer in the options store receives a **uniform random score**.
- **Partial history:** Offers scored by the algorithm use their computed scores; unscored offers receive a **random fallback score**.
- **Explore triggered:** When deployment-level epsilon triggers exploration, all offers receive random scores regardless of available history.

The post-score class then controls the final offer selection, eligibility filtering, and response formatting. The table below documents **what each algorithm contributes** on top of this platform-level behavior.

### Cold-Start Summary

| Algorithm | Algorithm-Level Cold Start Behavior | Prior / Seed Mechanism | Quality of Early Recommendations |
|-----------|-------------------------------------|----------------------|----------------------------------|
| **Ecosystem Rewards (Thompson)** | Beta(1,1) samples uniformly in [0,1]. All arms get equal random chance. | Configurable `alpha_zero` and `beta_zero` per arm. Default Beta(1,1) is uninformative. | **Good.** Uniform exploration by design. |
| **Epsilon Greedy** | All arms start with `arm_reward = 0` and tie. Exploit phase picks randomly among ties. | None beyond deployment epsilon. | **Moderate.** Set epsilon >= 0.1 for better early coverage. |
| **Loss Aversion** | New offers get smoothing alpha = 1.5. UCB gives under-sampled offers a boost. | Smoothing alpha = 1.5 + UCB exploration term. | **Moderate.** UCB helps under-sampled offers surface. |
| **Risk Aversion** | Does not score offers without history. Platform random fallback applies. | None. Relies on platform-level random scoring. | **Random until data accumulates.** Algorithm begins influencing after sufficient history. |
| **Prospect Theory** | Seeds all known offers with `baseDriftRate` (default 0.05). Adaptive drift + epsilon-greedy mixing. | `baseDriftRate` seed + drift + epsilon. | **Good.** Seeding gives all offers non-zero scores from day one. |
| **Sentimental Equilibrium** | Computes aggregate engagement equilibrium, not per-offer scores. | Model parameters serve as the "prior". | **N/A.** Does not rank individual offers. |
| **Coverage-Aware Thompson** | Beta(1,1) + `exposure=0` gives maximum inverse-popularity boost for unseen offers. | Beta(1,1) prior + max coverage boost. | **Excellent.** Best cold-start of all behavioral algorithms. |
| **Long-Tail Boost MF** | Random latent vectors (~0.01 Gaussian noise) for unseen users/items. Near-zero scores. | Random Gaussian initialization. | **Random until data accumulates.** Needs substantial interaction volume. |
| **Network Analysis (PageRank)** | Cannot build a graph without co-occurrence data. Platform random fallback applies. | Personalization based on acceptance weight (once data exists). | **Random until data accumulates.** Needs co-occurrence data. |
| **Q-Learning** | Q-table is empty. First iteration uses random state/action. | `initial_q = 0` + epsilon-greedy policy. | **Random until data accumulates.** Needs sequential interactions. |
| **Bayesian Probabilistic** | Random score for all offers, or uniform sampling for missing offers if configured. | Laplace smoothing (`alpha = 1.0`) for unseen feature combinations. | **Good.** Laplace handles unseen combinations well. |
| **Generative Model** | Sends minimal context to LLM. Output depends on LLM behavior and prompt. | Prompt and system instructions serve as the "prior". | **Variable.** Depends on LLM quality with minimal context. |

### Recommended Cold-Start Strategies

| Scenario | Recommended Algorithm | Why |
|----------|----------------------|-----|
| Brand new deployment, zero data | **Ecosystem Rewards (Thompson)** | Beta(1,1) prior gives uniform exploration. Converges naturally as data arrives. |
| New deployment, need guaranteed coverage | **Coverage-Aware Thompson** | Maximum boost for unseen items. Thompson + inverse-popularity + optional epsilon. |
| Adding new offers to existing catalog | **Ecosystem Rewards** or **Coverage-Aware Thompson** | New offers get default priors and are naturally explored. |
| New customer segment, have general history | **Prospect Theory** | Seeds all offers from product data. Adaptive drift ensures variety. |
| Need immediate results, no tolerance for randomness | **Epsilon Greedy** with high epsilon (0.3-0.5) | Simple, predictable. Reduce epsilon over time. |
| Fastest algorithm-level convergence | **Risk Aversion**, **Long-Tail Boost MF**, **PageRank** | These converge quickly once data is available, but rely on platform random scoring during cold start. |

### Configuring Priors for Thompson Sampling

The `alpha_zero` and `beta_zero` fields in the options store control the Thompson Sampling prior. Different priors can be set per offer to encode domain knowledge:

| Prior | alpha_zero | beta_zero | Meaning |
|-------|-----------|----------|---------|
| Uninformative | 1.0 | 1.0 | No prior belief. Uniform sampling. Default. |
| Optimistic | 2.0 | 1.0 | Assume the offer is probably good. Explore less. |
| Pessimistic | 1.0 | 2.0 | Assume the offer is probably bad. Explore more. |
| Strong prior (popular offer) | 10.0 | 5.0 | Equivalent to 10 successes and 5 failures. Stable from start. |
| Weak but positive | 1.5 | 1.0 | Slight optimism. Good for offers you believe will perform above average. |

---

## Rolling Process and Background Learning

Every dynamic interaction algorithm follows the same two-phase architecture:

1. **Background learning (write path):** A scheduled process periodically reads logging data (offers presented) and response data (offers accepted), computes updated statistics for each offer arm, and writes the results to the **options store** in MongoDB.

2. **Real-time scoring (read path):** When an API request arrives, the runtime reads the pre-computed arm statistics from the options store, applies the explore/exploit logic for the selected algorithm, and returns ranked offers. No database writes occur during scoring.

This separation means learning is decoupled from serving. The options store acts as the bridge.

### Scheduling

Background learning is triggered in two ways:

**Automatic Scheduler (recommended for production):** The `MultiCampaignScheduler` runs on a Spring `@Scheduled` fixed-delay loop controlled by the `monitoring.delay` property (in seconds, default 60).

**On-Demand via `/learning` API:** Useful for forcing an immediate update after bulk data loads, testing, or manual intervention.

```bash
curl -X POST http://localhost:8091/learning
```

### Options Store Update Cycle

Each background learning cycle performs these steps for every option:

1. **Read current options** from the options store
2. **Aggregate logging data** (presentations) -- filtered by time window, count limit, decay
3. **Aggregate response data** (acceptances) within the same window
4. **Compute arm_reward** using the algorithm-specific reward strategy
5. **Write updated options** back to the options store via upsert

### Process vs Score

| Aspect | `process()` (Background) | `score()` (Real-Time) |
|--------|-------------------------|----------------------|
| **When called** | Scheduler or `/learning` API | Every API scoring request |
| **Purpose** | Update arm statistics | Rank offers for a customer |
| **Reads from** | Logging + response collections | Options store only |
| **Writes to** | Options store + time series | Nothing (read-only) |
| **Latency** | Seconds to minutes | Milliseconds |
| **Explore/exploit** | Not applied | Applied |

For more detail on the options store structure, see [Options Store](/docs/configuration/dynamic/options). For the processing pipeline configuration, see [Process](/docs/configuration/dynamic/process).

---

## Scenario Guide

### Scenario 1: New Product Launch (Cold Start)

**Problem:** New catalog of offers with no interaction history.

**Recommended:** `binaryThompson` with default priors

```json
{
  "approach": "binaryThompson",
  "epsilon": 0.0,
  "success_reward": 1.0,
  "fail_reward": 1.0,
  "processing_window": 86400000,
  "processing_count": 1000,
  "decay_gamma": 1.0
}
```

### Scenario 2: Mature Catalog with Popularity Bias

**Problem:** Top offers get disproportionate impressions. Long-tail offers are never shown.

**Recommended:** `behaviorAlgos` with `coverageAwareThompson`

```json
{
  "approach": "behaviorAlgos",
  "sub_approach": "coverageAwareThompson",
  "epsilon": 0.05,
  "processing_count": 5000,
  "decay_gamma": 1.0
}
```

### Scenario 3: High Cost of Rejection

**Problem:** Showing irrelevant offers damages customer trust (financial products, insurance).

**Recommended:** `behaviorAlgos` with `lossAversion`

```json
{
  "approach": "behaviorAlgos",
  "sub_approach": "lossAversion",
  "processing_count": 5000,
  "processing_window": 604800000,
  "decay_gamma": 1.0
}
```

### Scenario 4: Conservative / Regulated Industry

**Problem:** Consistency and predictability matter more than maximizing acceptance rate.

**Recommended:** `behaviorAlgos` with `riskAversion`

```json
{
  "approach": "behaviorAlgos",
  "sub_approach": "riskAversion",
  "processing_count": 5000,
  "processing_window": 2592000000,
  "decay_gamma": 1.0
}
```

### Scenario 5: Simple A/B Testing

**Problem:** Basic performance tracking with minimal complexity.

**Recommended:** `epsilonGreedy` with epsilon between 0.05 and 0.20

```json
{
  "approach": "epsilonGreedy",
  "epsilon": 0.1,
  "processing_count": 1000,
  "processing_window": 86400000,
  "decay_gamma": 1.0
}
```

### Scenario 6: Sequential Customer Journey

**Problem:** Optimal next offer depends on what the customer has already seen/accepted.

**Recommended:** `QLearning`

```json
{
  "approach": "QLearning",
  "learning_rate": 0.25,
  "discount_factor": 0.75,
  "random_action": 0.2,
  "max_reward": 10,
  "processing_count": 5000,
  "training_data_source": "logging"
}
```

### Scenario 7: Marketing Campaign with Behavioral Nudging

**Problem:** Recommendations should be informed by how humans actually make decisions.

**Recommended:** `behaviorAlgos` with `prospectTheory`

```json
{
  "approach": "behaviorAlgos",
  "sub_approach": "prospectTheory",
  "epsilon": 0.1,
  "processing_count": 5000,
  "processing_window": 604800000,
  "decay_gamma": 1.0
}
```

### Scenario 8: Engagement Fatigue Analysis

**Problem:** Determine optimal frequency and intensity of customer engagement.

**Recommended:** `behaviorAlgos` with `sentimentalEquilibrium`

```json
{
  "approach": "behaviorAlgos",
  "sub_approach": "sentimentalEquilibrium",
  "processing_count": 5000,
  "decay_gamma": 1.0
}
```

---

## Configuration Reference

### Common Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `approach` | string | Top-level algorithm: `binaryThompson`, `epsilonGreedy`, `behaviorAlgos`, `Network`, `QLearning`, `naiveBayes` |
| `sub_approach` | string | Behavioral sub-algorithm (only when `approach=behaviorAlgos`) |
| `epsilon` | double | Exploration probability. Range: 0.0 to 1.0. Typical: 0.05-0.20 |
| `success_reward` | double | Weight for successful interactions when updating alpha. Default: 1.0 |
| `fail_reward` | double | Weight for failed interactions when updating beta. Default: 1.0 |
| `processing_window` | long | Time window in milliseconds. 0 = no limit. E.g. 86400000 (24h), 604800000 (7d) |
| `processing_count` | int | Max records per update cycle. 0 = no limit. Typical: 1000-10000 |
| `decay_gamma` | double | Geometric decay for older interactions. 1.0 = no decay |
| `interaction_count` | int | Cap on interactions per customer. 0 = no cap |

### Processing Window Examples

| Use Case | `processing_window` | `processing_count` | `decay_gamma` | Effect |
|----------|--------------------|--------------------|---------------|--------|
| Last 24 hours only | 86400000 | 0 | 1.0 | Fresh data, responsive to changes |
| Last 7 days, max 5000 | 604800000 | 5000 | 1.0 | Balanced freshness and volume |
| Last 30 days with decay | 2592000000 | 0 | 1.5 | Long history, recent data weighted more |
| Last 1000 interactions | 0 | 1000 | 1.0 | Fixed sample size, most recent |
| All time, no limit | 0 | 0 | 1.0 | Maximum data, slowest adaptation |

### Reward Strategy Factory

The `RewardStrategyFactory` maps the approach to a reward computation:

| Approach | Strategy | Computation |
|----------|----------|-------------|
| `binaryThompson` | `ThompsonReward` | `Beta(alpha + success * responses, beta + fail * (logs - responses)).sample()` |
| `epsilonGreedy` | `EpsilonGreedyReward` | `response_count / logging_count` |
| `Network` | `NetworkReward` | Returns 1.0 (PageRank handles scoring) |
| `behaviorAlgos` | `BehaviorReward` | Returns 1.0 (behavioral algorithms handle scoring) |
| `QLearning` | `QLearningReward` | Returns 1.0 (Q-table handles scoring) |
| `naiveBayes` | `NaiveBayesReward` | Returns 1.0 (Naive Bayes handles scoring) |

For custom formulas, see [Custom Reward Functions](/docs/configuration/dynamic/customrewards).

---

## Long-Tail Boost MF

Source: `docs/configuration/algorithms/longtailmf.mdx`
URL: https://ecosystem.ai/docs/configuration/algorithms/longtailmf
Summary: Long-Tail Boost Matrix Factorization for dynamic interactions in ecosystem.Ai

# Long-Tail Boost MF

**Weighted Regularized Matrix Factorization (WRMF)** on implicit feedback, with a **long-tail reweighting** term that down-weights frequently exposed items so latent collaborative signal is combined with catalog diversity.

## Algorithm

**Config value:** `"approach": "behaviorAlgos"`, `"sub_approach": "longTailBoostMF"`

The learner fits latent factors for users and items using **Alternating Least Squares (ALS)** on implicit feedback matrices. The final score blends the dot product of user and item vectors with an inverse-exposure factor:

$\text{score} = (\mathbf{u} \cdot \mathbf{v}) \cdot \frac{1}{(\text{exposure} + 1)^{\gamma}} \cdot \text{variableMultiplier}$

Here $\mathbf{u}$ and $\mathbf{v}$ are the user and item latent vectors, $\gamma$ controls how strongly popularity is penalized, and `variableMultiplier` carries any configured scaling from the deployment.

## Parameters

- **latentDim** ($k$): Latent factor dimensionality. Default: `6`.
- **numIters**: ALS iterations. Default: `8`.
- **regLambda** ($\lambda_{\text{reg}}$): L2 regularization for factors. Default: `0.05`.
- **gamma** ($\gamma$): Long-tail / inverse-exposure exponent. Default: `0.4`.
- **entropyW**: Optional entropy-related weighting term (default `0.0` when unused).
- **Processing Window**: Time window in milliseconds for historical data.
- **Historical Count**: Max records to process per update cycle.

## Cold Start

**Recommendations are always returned.** The real-time training path in `RollingBehavior` always produces a scored options array:

- **No history:** Every offer in the options store receives a uniform random score. All offers are ranked and passed to the post-score class.
- **Sparse history:** The model initializes **unseen users and items** with small Gaussian noise ($\mathcal{N}(0, 0.01^2)$), so algorithm-level scores cluster near zero. Unscored offers receive a random fallback score.
- **Sufficient history:** The ALS-learned latent factors produce meaningful collaborative-filtering scores, amplified by the long-tail reweighting.

The scored options are then sorted by `arm_reward` and handed to the configured **dynamic post-score class**, which controls the final offer selection and response formatting.

**Always Returns Offers:** The runtime always returns recommendations. During cold start, offers are ranked randomly. Long-Tail Boost MF requires substantial interaction volume before the matrix factorization scores become meaningful. The post-score class determines the final presentation.

## When To Use

- **Collaborative filtering** with many user–item events and a desire to **promote the long tail**
- Catalogs where **popularity bias** should be counteracted after you already have interaction volume

## When NOT To Use

- **Cold start** deployments or very sparse interaction logs
- **Few interactions** per user or item (use simpler bandit methods first)
- **Simple** recommendation problems where matrix factorization is unnecessary

## Example

```python
from prediction.apis import deployment_management as dm
from prediction.apis import online_learning_management as ol
from prediction import jwt_access

auth = jwt_access.Authenticate("http://localhost:3001/api", ecosystem_username, ecosystem_password)

deployment_id = "demo-long-tail-boost-mf"

online_learning_uuid = ol.create_online_learning(
        auth,
        algorithm="ecosystem_rewards",
        name=deployment_id,
        description="Long-Tail Boost MF configuration",
        feature_store_collection="set_up_features",
        feature_store_database="my_mongo_database",
        options_store_database="my_mongo_database",
        options_store_collection="demo-deployment_options",
        randomisation_processing_count=5000,
        randomisation_processing_window=604800000,
        contextual_variables_offer_key="offer",
        create_options_index=True,
        create_covering_index=True
)

online_learning = dm.define_deployment_multi_armed_bandit(epsilon=0, dynamic_interaction_uuid=online_learning_uuid)

parameter_access = dm.define_deployment_parameter_access(
    auth,
    lookup_key="customer_id",
    lookup_type="string",
    database="my_mongo_database",
    table_collection="customer_feature_store",
    datasource="mongodb"
)

deployment_step = dm.create_deployment(
    auth,
    project_id="demo-project",
    deployment_id=deployment_id,
    description="Long-Tail Boost MF demo deployment",
    version="001",
    plugin_post_score_class="PlatformDynamicEngagement.java",
    plugin_pre_score_class="PreScoreDynamic.java",
    scoring_engine_path_dev="http://localhost:8091",
    mongo_connect=f"mongodb://{mongo_user}:{mongo_password}@localhost:54445/?authSource=admin",
    parameter_access=parameter_access,
    multi_armed_bandit=online_learning
)
```

**Deployment pattern:** Set `approach` to `behaviorAlgos` and `sub_approach` to `longTailBoostMF` in the `randomisation` object. Tune `latentDim`, `numIters`, `regLambda`, and `gamma` for your traffic volume and catalog size.

---

## Loss Aversion

Source: `docs/configuration/algorithms/lossaversion.mdx`
URL: https://ecosystem.ai/docs/configuration/algorithms/lossaversion
Summary: Loss Aversion algorithm for dynamic interactions in ecosystem.Ai

# Loss Aversion

Based on the behavioral economics principle that people feel losses roughly twice as strongly as equivalent gains, this algorithm amplifies the perceived failure rate for under-performing offers, making the system more aggressive about avoiding offers that customers tend to reject. It combines a loss-adjusted learned probability with an Upper Confidence Bound (UCB) exploration term.

## Algorithm

**Config value:** `"approach": "behaviorAlgos"`, `"sub_approach": "lossAversion"`

**Training phase:**

For each offer, the raw acceptance rate is adjusted using the loss aversion factor:

$\text{adjustedRate} = \begin{cases} \text{rawRate} & \text{if rawRate} \geq 0.5 \\ \text{rawRate} \times \text{lossAversionFactor} & \text{if rawRate} < 0.5 \end{cases}$

An Upper Confidence Bound exploration term provides additional exploration for under-sampled offers:

$\text{UCB} = \text{adjustedRate} + \text{explorationDecay} \times \sqrt{\frac{2 \ln(\text{totalCount})}{\text{count}}}$

Where explorationDecay is 1.0 for under-performing offers (rawRate < 0.5) and $(1 - \text{rawRate})$ otherwise.

**Scoring phase:**

$\text{finalScore} = \text{ucbWeight} \times \text{learnedProb} + (1 - \text{ucbWeight}) \times \text{UCB}$

Scores are then normalized across all offers to sum to 1.0.

## Parameters

- **lossAversionFactor**: Multiplier for under-performing offers (rawRate < 0.5). Default: 2.0. Higher values penalize poor performers more aggressively.
- **ucbWeight**: Balance between learned probability and UCB exploration. Default: 0.5. Range: 0.0 (pure UCB) to 1.0 (pure learned probability).
- **explorationFactor**: Controls UCB exploration term magnitude. Default: 2.0.
- **Processing Window**: Time window in milliseconds for historical data.
- **Historical Count**: Max records to process per update cycle.

## Cold Start

**Recommendations are always returned.** The real-time training path in `RollingBehavior` always produces a scored options array, regardless of whether the algorithm has interaction history:

- **No history:** Every offer in the options store receives a uniform random score. All offers are ranked and passed to the post-score class.
- **Early history:** New offers receive a **smoothing alpha of 1.5** added to their first observation, preventing extreme initial scores. The **UCB exploration term** gives under-sampled offers a natural boost.
- **Partial history:** Offers scored by Loss Aversion use the loss-adjusted probability blended with UCB; unscored offers receive a random score. Both are included in the result.

The scored options are then sorted by `arm_reward` and handed to the configured **dynamic post-score class**, which controls the final offer selection and response formatting.

**Always Returns Offers:** The runtime always returns recommendations. During cold start, offers are ranked randomly. As data accumulates, Loss Aversion's UCB exploration and loss-adjusted scores progressively replace the random rankings. The post-score class determines the final presentation.

## When To Use

- When the cost of showing a rejected offer is high (customer churn risk)
- When you want the system to quickly stop recommending poor performers
- When you prefer conservative recommendations
- Financial services, insurance, or high-stakes offer environments

## When NOT To Use

- When you want to give new or unpopular offers a fair chance (use [Coverage-Aware Thompson](/docs/configuration/algorithms/coveragethompson))
- When acceptance rates are naturally low across all offers
- When acceptance rates are naturally low across all offers (the loss aversion factor may over-penalize all arms equally)

## Example

```python
from prediction.apis import deployment_management as dm
from prediction.apis import online_learning_management as ol
from prediction import jwt_access

auth = jwt_access.Authenticate("http://localhost:3001/api", ecosystem_username, ecosystem_password)

deployment_id = "demo-loss-aversion"

online_learning_uuid = ol.create_online_learning(
        auth,
        algorithm="ecosystem_rewards",
        name=deployment_id,
        description="Loss Aversion configuration",
        feature_store_collection="set_up_features",
        feature_store_database="my_mongo_database",
        options_store_database="my_mongo_database",
        options_store_collection="demo-deployment_options",
        randomisation_processing_count=5000,
        randomisation_processing_window=604800000,
        contextual_variables_offer_key="offer",
        create_options_index=True,
        create_covering_index=True
)

online_learning = dm.define_deployment_multi_armed_bandit(epsilon=0, dynamic_interaction_uuid=online_learning_uuid)

parameter_access = dm.define_deployment_parameter_access(
    auth,
    lookup_key="customer_id",
    lookup_type="string",
    database="my_mongo_database",
    table_collection="customer_feature_store",
    datasource="mongodb"
)

deployment_step = dm.create_deployment(
    auth,
    project_id="demo-project",
    deployment_id=deployment_id,
    description="Loss Aversion demo deployment",
    version="001",
    plugin_post_score_class="PlatformDynamicEngagement.java",
    plugin_pre_score_class="PreScoreDynamic.java",
    scoring_engine_path_dev="http://localhost:8091",
    mongo_connect=f"mongodb://{mongo_user}:{mongo_password}@localhost:54445/?authSource=admin",
    parameter_access=parameter_access,
    multi_armed_bandit=online_learning
)
```

**Note:** The `approach` should be set to `behaviorAlgos` and `sub_approach` to `lossAversion` in the `randomisation` object of the dynamic recommender configuration in MongoDB.

---

## Network Analysis

Source: `docs/configuration/algorithms/networkanalysis.mdx`
URL: https://ecosystem.ai/docs/configuration/algorithms/networkanalysis
Summary: Network Analysis (PageRank) algorithm for dynamic interactions in ecosystem.Ai

# Network Analysis

Treats offers as **nodes** in a **directed graph**. Edges encode how often one offer is accepted when another is co-presented. **Personalized PageRank** (or a related centrality pass) produces scores that highlight **hub** offers and structures implied by **co-occurrence** and acceptance.

## Algorithm

**Config value:** `"approach": "Network"` (no `behaviorAlgos` sub-approach)

**Edge weight** from offer $i$ to offer $j$:

`w(i → j) = accepted_count_j / total_count_j`

(Intuition: mass flows toward $j$ in proportion to how often $j$ is accepted relative to presentations involving the co-occurrence context.)

**PageRank-style update** (schematic):

$\mathrm{PR}(u) = (1 - \alpha) \cdot \mathrm{personalization}(u) + \alpha \cdot \sum_{v} \mathrm{PR}(v) \cdot \frac{w(v \rightarrow u)}{\sum_{k} w(v \rightarrow k)}$

- $\alpha$: damping / teleport mixing (implementation default may use $\alpha = 1.0$ for a specific variant—verify against your runtime version).
- **iterations**: Often set to $N$ = number of offers for convergence passes over the graph.

## Parameters

- **alpha** ($\alpha$): Damping factor between random jumps and graph propagation. Default: `1.0` (check runtime notes for your build).
- **iterations**: Number of propagation iterations; default ties to offer count ($N$).
- **Processing Window**: Time window in milliseconds for historical data used to build the graph.
- **Historical Count**: Max records to process per update cycle.

## Cold Start

**Recommendations are always returned.** The real-time training path always produces a scored options array:

- **No history:** Every offer in the options store receives a uniform random score. All offers are ranked and passed to the post-score class.
- **Sparse co-occurrence data:** The algorithm may not produce meaningful graph-based rankings. Unscored offers receive a random fallback score.
- **Sufficient co-occurrence data:** PageRank scores drive the ranking, highlighting hub offers and structural relationships in the acceptance network.

The scored options are then sorted by `arm_reward` and handed to the configured **dynamic post-score class**, which controls the final offer selection and response formatting.

**Always Returns Offers:** The runtime always returns recommendations. During cold start, offers are ranked randomly. Network Analysis begins producing meaningful graph-based rankings once sufficient co-occurrence and acceptance data is available. The post-score class determines the final presentation.

## When To Use

- Offer relationships matter: **bundles**, **complements**, sequences, or co-presented sets
- Identifying **hub** or structurally central offers in an acceptance network

## When NOT To Use

- Offers are **independent** (no meaningful co-presentation signal)
- You need **fast exploration of brand-new items** without a graph (prefer bandit methods)

## Example

```python
from prediction.apis import deployment_management as dm
from prediction.apis import online_learning_management as ol
from prediction import jwt_access

auth = jwt_access.Authenticate("http://localhost:3001/api", ecosystem_username, ecosystem_password)

deployment_id = "demo-network-analysis"

online_learning_uuid = ol.create_online_learning(
        auth,
        algorithm="ecosystem_rewards",
        name=deployment_id,
        description="Network Analysis (PageRank) configuration",
        feature_store_collection="set_up_features",
        feature_store_database="my_mongo_database",
        options_store_database="my_mongo_database",
        options_store_collection="demo-deployment_options",
        randomisation_processing_count=5000,
        randomisation_processing_window=604800000,
        contextual_variables_offer_key="offer",
        create_options_index=True,
        create_covering_index=True
)

online_learning = dm.define_deployment_multi_armed_bandit(epsilon=0, dynamic_interaction_uuid=online_learning_uuid)

parameter_access = dm.define_deployment_parameter_access(
    auth,
    lookup_key="customer_id",
    lookup_type="string",
    database="my_mongo_database",
    table_collection="customer_feature_store",
    datasource="mongodb"
)

deployment_step = dm.create_deployment(
    auth,
    project_id="demo-project",
    deployment_id=deployment_id,
    description="Network Analysis demo deployment",
    version="001",
    plugin_post_score_class="PlatformDynamicEngagement.java",
    plugin_pre_score_class="PreScoreDynamic.java",
    scoring_engine_path_dev="http://localhost:8091",
    mongo_connect=f"mongodb://{mongo_user}:{mongo_password}@localhost:54445/?authSource=admin",
    parameter_access=parameter_access,
    multi_armed_bandit=online_learning
)
```

**Deployment pattern:** Set `approach` to **`Network`** in the `randomisation` object. This algorithm does **not** use `behaviorAlgos` or `sub_approach`. Populate the graph from logged co-presentations before going live.

---

## Prospect Theory

Source: `docs/configuration/algorithms/prospecttheory.mdx`
URL: https://ecosystem.ai/docs/configuration/algorithms/prospecttheory
Summary: Prospect Theory algorithm for dynamic interactions in ecosystem.Ai

# Prospect Theory

Implements Kahneman and Tversky's Prospect Theory, the Nobel Prize-winning model of how humans actually evaluate risk. It differs from standard expected utility in three ways: (1) outcomes are evaluated relative to a reference point, (2) losses loom larger than gains, and (3) people overweight small probabilities and underweight large ones. The algorithm also includes adaptive drift and epsilon-greedy exploration to ensure catalog coverage.

## Algorithm

**Config value:** `"approach": "behaviorAlgos"`, `"sub_approach": "prospectTheory"`

**Value function:**

$v(x) = \begin{cases} x^\alpha & \text{if } x \geq 0 \text{ (gains)} \\ -\lambda \cdot (-x)^\beta & \text{if } x < 0 \text{ (losses)} \end{cases}$

Where $\alpha = 0.88$ (diminishing sensitivity for gains), $\beta = 0.88$ (diminishing sensitivity for losses), and $\lambda = 2.25$ (loss aversion coefficient).

**Probability weighting:**

$w(p) = \exp(-(-\ln p)^\gamma)$

With $\gamma_{\text{gain}} = 0.61$ and $\gamma_{\text{loss}} = 0.69$.

**Prospect value:** $PT = v(x) \times w(p)$

**Exploration (scoring phase):**

$\text{drifted} = (1 - \text{effectiveDrift}) \times \text{normalized} + \text{effectiveDrift} \times \text{uniform}$

$\text{finalScore} = (1 - \epsilon) \times \text{drifted} + \epsilon \times \text{uniform}$

## Parameters

- **alpha**: Diminishing sensitivity for gains. Default: 0.88.
- **beta**: Diminishing sensitivity for losses. Default: 0.88.
- **lambda**: Loss aversion coefficient. Default: 2.25. Higher values increase the penalty for under-performing offers.
- **gammaGain**: Probability weighting for gains. Default: 0.61.
- **gammaLoss**: Probability weighting for losses. Default: 0.69.
- **epsilon**: Epsilon-greedy exploration rate. Default: 0.1.
- **enableAdaptiveDrift**: Enable drift toward uniform distribution for diversity. Default: true.
- **baseDriftRate**: Base rate of drift toward uniform distribution. Default: 0.05. Also used as the seed score for new offers.
- **Processing Window**: Time window in milliseconds for historical data.
- **Historical Count**: Max records to process per update cycle.

## Cold Start

**Recommendations are always returned.** Prospect Theory has strong cold-start handling at both the algorithm and platform levels:

- **No history:** The `RollingBehavior` layer assigns uniform random scores to every offer. Additionally, the algorithm itself seeds all known offers with `score = baseDriftRate` (default 0.05), so even without interaction data the algorithm produces non-zero scores.
- **Adaptive drift** mixes scores toward a uniform distribution, ensuring catalog diversity from the start.
- **Epsilon-greedy exploration** provides additional random exploration across all offers.

The scored options are then sorted by `arm_reward` and handed to the configured **dynamic post-score class**, which controls the final offer selection and response formatting.

**Strong Cold Start:** Prospect Theory is one of the strongest choices for cold start among behavioral algorithms. Its seeding mechanism, adaptive drift, and epsilon-greedy exploration ensure all offers receive traffic from day one. The post-score class determines the final presentation.

## When To Use

- When human decision-making biases should inform the recommendation strategy
- When you want to model the psychological impact of offer rejection
- When rare positive outcomes should be given more weight than raw statistics suggest
- Marketing campaigns where "fear of missing out" (FOMO) dynamics are relevant

## When NOT To Use

- When you want a pure statistical optimum (use [Ecosystem Rewards](/docs/configuration/algorithms/ecosystemrewards))
- When the problem is well-modeled by simple expected value
- When you need fast convergence to a single best offer

## Example

```python
from prediction.apis import deployment_management as dm
from prediction.apis import online_learning_management as ol
from prediction import jwt_access

auth = jwt_access.Authenticate("http://localhost:3001/api", ecosystem_username, ecosystem_password)

deployment_id = "demo-prospect-theory"

online_learning_uuid = ol.create_online_learning(
        auth,
        algorithm="ecosystem_rewards",
        name=deployment_id,
        description="Prospect Theory configuration",
        feature_store_collection="set_up_features",
        feature_store_database="my_mongo_database",
        options_store_database="my_mongo_database",
        options_store_collection="demo-deployment_options",
        randomisation_processing_count=5000,
        randomisation_processing_window=604800000,
        contextual_variables_offer_key="offer",
        create_options_index=True,
        create_covering_index=True
)

online_learning = dm.define_deployment_multi_armed_bandit(epsilon=0.1, dynamic_interaction_uuid=online_learning_uuid)

parameter_access = dm.define_deployment_parameter_access(
    auth,
    lookup_key="customer_id",
    lookup_type="string",
    database="my_mongo_database",
    table_collection="customer_feature_store",
    datasource="mongodb"
)

deployment_step = dm.create_deployment(
    auth,
    project_id="demo-project",
    deployment_id=deployment_id,
    description="Prospect Theory demo deployment",
    version="001",
    plugin_post_score_class="PlatformDynamicEngagement.java",
    plugin_pre_score_class="PreScoreDynamic.java",
    scoring_engine_path_dev="http://localhost:8091",
    mongo_connect=f"mongodb://{mongo_user}:{mongo_password}@localhost:54445/?authSource=admin",
    parameter_access=parameter_access,
    multi_armed_bandit=online_learning
)
```

**Note:** The `approach` should be set to `behaviorAlgos` and `sub_approach` to `prospectTheory` in the `randomisation` object. The Prospect Theory parameter defaults (alpha, beta, lambda, gamma values) match the original Kahneman-Tversky experimental findings.

---

## Q-Learning

Source: `docs/configuration/algorithms/qlearning.mdx`
URL: https://ecosystem.ai/docs/configuration/algorithms/qlearning
Summary: Q-Learning

# Q-Learning

The Q-learning algorithm uses the Q-learning reinforcement learning framework with actions being presenting offers to clients and states being whether the client accepted the offers. The algorithm works at a customer level, training is done per customer. Segment level implementations are planned for future releases.

## Algorithm

The Q-learning algorithm represents offers as the set of actions $\mathcal{A}$ and the states $\mathcal{S}$ represent take up of offers. The algorithm then uses a Q-table to score and rank offers using the Q value as this expresses the expected utility of the offer.

There are two approaches for generating the Q-table, both of which use a reward function, which calculates the reward for a given action. The first uses the data stored in the ecosystem.Ai runtime logs to generate the Q-table. In this case the states are the combination of the last two offers presented to the client and the last offer taken up by the client. The Q-table is then updated for each step in the logged data, by calculating the Q value for the action that was taken using the reward function and the Bellman equation. In the second approach, the Q-table is updated using a policy function, which calculates the next action. The Q-table is calculated for each customer as a recommendation is made. The first row of the table is generated by selecting and initial state and action at random, calculating the reward using the reward function and then calculating Q using $Q=\alpha (R + \gamma R_{max})$, where $alpha$ is the learning rate, $R$ is the reward returned by the reward function, \gamma is the discount factor and $R_{max}$ is the maximum reward. The Q-table is then updated using the Q value and the reward. The subsequent rows of the Q-table are generated by selecting an action using the policy function, calculating the reward using the reward function and then calculating Q using the full Bellman equation. The Q-table is then updated using the Q value and the reward.

The policy function is a function that selects the next action based on the current state of the Q-table. The policy function used by the algorithm is $\epsilon$-greedy. The action with the highest Q value is selected with probability $1-\epsilon$ and a random action is selected with probability $\epsilon$.

The reward function is a java plugin that calculates the reward for a given action. The reward function should be calibrated be for specific use case. Below is an illustrative reward function which uses cop car values for offers and feature store information to caluclate the reward. This java class should be located in the `src/main/java/com/ecosystem/algorithm/qlearn` directory.

```java
package com.ecosystem.algorithm.qlearn;

public class QLearnRewardPlugin extends PluginLoaderSuper {

    private static final Logger LOGGER = LogManager.getLogger(QLearnRewardPlugin.class.getName());

    /**
     *
     * @param actions
     * @param action
     * @param state
     * @param offers
     * @param category
     * @return
     */
    public double reward(List<String> actions, String action, int state, List<String> offers, int category, JSONObject params, JSONObject log_action_state, String training_data_source) {

        double reward = 0.0;

        try {
            if (params.has("preloadCorpora")) {
                if (params.getJSONObject("preloadCorpora").has("copcar_lookup")) {
                    JSONObject copcar_lookup  = params.getJSONObject("preloadCorpora").getJSONObject("copcar_lookup");
                    JSONObject copcar_fields = copcar_lookup.getJSONObject("copcar");
                    String copcar_fields_string = String.valueOf(copcar_fields.get("value"));
                    ArrayList<String> copcarList = new ArrayList<>(Arrays.asList(copcar_fields_string.split(",")));
                    for (String copcar_key : copcarList) {
                        double  copcar_value = Double.valueOf(String.valueOf(params.getJSONObject("featuresObj").get(copcar_key)));
                        copcar_list.add(copcar_value);
                    }
                }
            }

            int list_size = copcar_list.size();
            if (list_size%2 == 1) {
                copcar_median = copcar_list.get(((list_size+1)/2)-1);
            } else {
                if (list_size > 0)
                    copcar_median = copcar_list.get((list_size/2)-1) + copcar_list.get(list_size/2);
                else
                    copcar_median = 0;
            }

            double previous_purchase = 0;
            if (params.getJSONObject("featuresObj").has("previous_purchase"))
                previous_purchase = Double.valueOf(String.valueOf(params.getJSONObject("featuresObj").get("previous_purchase")));
            else
                LOGGER.info("previous_purchase not found in featuresObj");

            if (previous_purchase > 0) {
                state = 1;
            } else {
                state = 0;
            }

            double cost = Double.parseDouble(offers.get(actions.indexOf(action)));

            if (cost > copcar_median && state == 1) {
                reward = 10;
            } else if (cost == copcar_median && state == 1) {
                reward = 8;
            } else if (cost < copcar_median && state == 1) {
                reward = 0;
            } else if (cost > copcar_median && state == 0) {
                reward = -10;
            } else if (cost == copcar_median && state == 0) {
                reward = -10;
            } else if (cost < copcar_median && state == 0) {
                reward = -10;
            } else {
                reward = 0;
            }

        } catch (Exception e) {
            e.printStackTrace();
            LOGGER.error(e.getMessage());
        }

        return reward;

    }
}
```

## Parameters

- **Processing Window**: Restricts the data used when the model updates based on a time period from the present going back a specified in milliseconds.
- **Historical Count**: Restricts the data used when the model updates based on a count of interactions. This is an overall interaction count rather than a count per offer and segment as used in the Ecosystem Rewards algorithm.
- **Learning Rate**: The learning rate $\alpha$ used in the Bellman equation when calculating Q. 
- **Discount Factor**: The discount factor $\gamma$ used in the Bellman equation when calculating Q.
- **Maximum Reward**: The maximum reward $R_{max}$ used in the Bellman equation when calculating Q.
- **Random Action**: The value for $\epsilon$ used in the $\epsilon$-greedy policy function.
- **training_data_source**: (only supported through python package) The source of the training data for the online learning. The options are:
  - **feature_store**: Use the fields in the feature store for the training. These fields will need to be specified in the rewards plugin class. This approach will use the policy based method for creating the Q-table.
  - **logging**: Use data stored in the ecosystem.Ai runtime logs for the training. This approach will use the logging data based approach for creating the Q-table.

## Example

Below is an example configuration of the Q-learning algorithm in python

```python
from prediction.apis import deployment_management as dm
from prediction.apis import ecosystem_generation_engine as ge
from prediction.apis import data_management_engine as dme
from prediction.apis import online_learning_management as ol
from prediction.apis import prediction_engine as pe
from prediction.apis import worker_file_service as fs
from prediction import jwt_access

auth = jwt_access.Authenticate("http://localhost:3001/api", ecosystem_username, ecosystem_password)

deployment_id = "demo-deployment"

online_learning_uuid = ol.create_online_learning(
        auth,
        algorithm="q_learning",
        name=deployment_id,
        description="Demo deployment for illustrating python configuration",
        feature_store_collection="set_up_features",
        feature_store_database="my_mongo_database",
        options_store_database="my_mongo_database",
        options_store_collection="demo-deployment_options",
        randomisation_processing_count=500,
        randomisation_processing_window=604800000,
        randomisation_discount_factor=0.75,
        randomisation_max_reward=10,
        randomisation_random_action=0.2,
        randomisation_learning_rate=0.25,
        randomisation_training_data_source="feature_store",
        contextual_variables_offer_key="offer"
)

online_learning = dm.define_deployment_multi_armed_bandit(epsilon=0, dynamic_interaction_uuid=online_learning_uuid)

parameter_access = dm.define_deployment_parameter_access(
    auth,
    lookup_key="customer_id",
    lookup_type="string",
    database="my_mongo_database",
    table_collection="customer_feature_store",
    datasource="mongodb",
    defaults=["feature_one", "feature_two", "feature_three"]
)

deployment_step = dm.create_deployment(
    auth,
    project_id="demo-project",
    deployment_id=deployment_id,
    description="Demo project for illustrating python configuration",
    version="001",
    plugin_post_score_class="PlatformDynamicEngagement.java",
    plugin_pre_score_class="PreScoreDynamic.java",
    scoring_engine_path_dev="http://localhost:8091",
    mongo_connect=f"mongodb://{mongo_user}:{mongo_password}@localhost:54445/?authSource=admin",
    parameter_access=parameter_access,
    multi_armed_bandit=online_learning
)
```

---

## Risk Aversion

Source: `docs/configuration/algorithms/riskaversion.mdx`
URL: https://ecosystem.ai/docs/configuration/algorithms/riskaversion
Summary: Risk Aversion algorithm for dynamic interactions in ecosystem.Ai

# Risk Aversion

Uses mean-variance utility from financial portfolio theory. Each offer's score is penalized by its variance -- offers with uncertain outcomes are scored lower than offers with consistent (even if slightly lower) acceptance rates.

## Algorithm

**Config value:** `"approach": "behaviorAlgos"`, `"sub_approach": "riskAversion"`

For each offer, the algorithm computes a risk-adjusted utility score:

`p = response_count / count`

`variance = p × (1 - p)`

`utility = p - (γ / 2) × variance`

Where $\gamma$ is the risk aversion coefficient. Scores are aggregated per offer and normalized to sum to 1.0.

An offer with 50% acceptance and low variance can beat an offer with 60% acceptance and high variance when the risk aversion coefficient is sufficiently high.

## Parameters

- **riskAversionCoefficient** ($\gamma$): Higher values penalize variance more heavily. Default: 1.0. Range: 0 (risk-neutral, equivalent to raw acceptance rate) to >2 (highly risk-averse).
- **Processing Window**: Time window in milliseconds for historical data.
- **Historical Count**: Max records to process per update cycle.

## Cold Start

**Recommendations are always returned.** The real-time training path in `RollingBehavior` always produces a scored options array, regardless of whether the algorithm has interaction history:

- **No history:** Every offer in the options store receives a uniform random score. All offers are ranked and passed to the post-score class.
- **Partial history:** Offers scored by Risk Aversion receive their risk-adjusted utility; offers the algorithm has not seen receive a random score. Both are included in the result.
- **Established history:** Risk Aversion scores drive the ranking for all known offers.

The scored options are then sorted by `arm_reward` and handed to the configured **dynamic post-score class** (e.g. `PlatformDynamicEngagement`), which controls the final offer selection, eligibility filtering, and response formatting.

**Always Returns Offers:** The runtime always returns recommendations. During cold start, offers are ranked randomly. As interaction data accumulates, Risk Aversion's mean-variance utility scores progressively replace the random rankings. The post-score class determines the final presentation.

## When To Use

- When consistency matters more than maximum expected return
- When you want to avoid "volatile" offers with unpredictable acceptance rates
- Financial services, insurance, compliance-driven contexts where predictability is valued
- After sufficient interaction history has accumulated (the platform handles cold start with random scores until then)

## When NOT To Use

- When you want to maximize expected acceptance regardless of variance
- When all offers have similar variance (the algorithm adds no value)
- When you need built-in exploration (combine with epsilon at the deployment level)

## Example

```python
from prediction.apis import deployment_management as dm
from prediction.apis import online_learning_management as ol
from prediction import jwt_access

auth = jwt_access.Authenticate("http://localhost:3001/api", ecosystem_username, ecosystem_password)

deployment_id = "demo-risk-aversion"

online_learning_uuid = ol.create_online_learning(
        auth,
        algorithm="ecosystem_rewards",
        name=deployment_id,
        description="Risk Aversion configuration",
        feature_store_collection="set_up_features",
        feature_store_database="my_mongo_database",
        options_store_database="my_mongo_database",
        options_store_collection="demo-deployment_options",
        randomisation_processing_count=5000,
        randomisation_processing_window=2592000000,
        contextual_variables_offer_key="offer",
        create_options_index=True,
        create_covering_index=True
)

online_learning = dm.define_deployment_multi_armed_bandit(epsilon=0, dynamic_interaction_uuid=online_learning_uuid)

parameter_access = dm.define_deployment_parameter_access(
    auth,
    lookup_key="customer_id",
    lookup_type="string",
    database="my_mongo_database",
    table_collection="customer_feature_store",
    datasource="mongodb"
)

deployment_step = dm.create_deployment(
    auth,
    project_id="demo-project",
    deployment_id=deployment_id,
    description="Risk Aversion demo deployment",
    version="001",
    plugin_post_score_class="PlatformDynamicEngagement.java",
    plugin_pre_score_class="PreScoreDynamic.java",
    scoring_engine_path_dev="http://localhost:8091",
    mongo_connect=f"mongodb://{mongo_user}:{mongo_password}@localhost:54445/?authSource=admin",
    parameter_access=parameter_access,
    multi_armed_bandit=online_learning
)
```

**Note:** The `approach` should be set to `behaviorAlgos` and `sub_approach` to `riskAversion` in the `randomisation` object. A longer `processing_window` (e.g. 30 days) is recommended to produce stable variance estimates.

---

## Sentimental Equilibrium

Source: `docs/configuration/algorithms/sentimentalequilibrium.mdx`
URL: https://ecosystem.ai/docs/configuration/algorithms/sentimentalequilibrium
Summary: Sentimental Equilibrium algorithm for dynamic interactions in ecosystem.Ai

# Sentimental Equilibrium

Models the equilibrium between customer engagement utility and the effort or cost of engagement. The algorithm uses a dynamic system where a stock of engagement capital accumulates through effort and decays over time, then finds the steady-state equilibrium where marginal utility of engagement equals marginal cost, using Newton–Raphson optimization.

The formulation is inspired by economic models of habit formation and sentimental capital accumulation.

## Algorithm

**Config value:** `"approach": "behaviorAlgos"`, `"sub_approach": "sentimentalEquilibrium"`

**State dynamics** (engagement capital $x$ with effort $c$):

$\frac{dx}{dt} = a \cdot c - r \cdot x$

Engagement capital accumulates with effort at efficiency $a$ and decays at rate $r$.

**Equilibrium** (steady state with $x^* = \frac{a}{r} \cdot c^*$):

$a \cdot U'(x^*) = (r + \rho) \cdot D'(c^*)$

Here $\rho$ is the discount rate (time preference). The equilibrium $(x^*, c^*)$ is found with Newton–Raphson iteration.

**Utility functions** (configurable via `utilityType`):

- `sqrt`: $U(x) = \sqrt{x}$
- `linear`: $U(x) = x$
- `log`: $U(x) = \ln(1 + x)$

**Disutility of effort** (configurable via `disutilityType`):

- `quadratic`: $D(c) = \frac{1}{2} c^2$
- `linear`: $D(c) = c$

## Parameters

- **decayRate** ($r$): Rate at which engagement capital depreciates. Default: `0.1`.
- **effortEfficiency** ($a$): How effectively effort converts into engagement capital. Default: `1.0`.
- **discountRate** ($\rho$): Time preference / impatience. Default: `0.05`.
- **utilityType**: Shape of $U$: `"sqrt"`, `"linear"`, or `"log"`. Default: `"sqrt"`.
- **disutilityType**: Shape of $D$: `"quadratic"` or `"linear"`. Default: `"quadratic"`.
- **Processing Window**: Time window in milliseconds for historical data (when used with rolling updates).
- **Historical Count**: Max records to process per update cycle.

## Cold Start

**Recommendations are always returned.** However, Sentimental Equilibrium operates differently from other behavioral algorithms:

- It computes an **aggregate engagement equilibrium** ($x^*$, $c^*$), not per-offer scores. The output is derived from configured model parameters, not interaction history.
- The `RollingBehavior` layer still produces a scored options array for the post-score class. When Sentimental Equilibrium is the sub-approach, the equilibrium values inform the overall engagement strategy rather than providing per-arm rankings.
- The dynamic post-score class controls the final offer selection and response formatting.

## When To Use

- Optimizing **engagement intensity** or relationship-level engagement vs. cost
- Modeling **long-term customer relationship** dynamics and fatigue
- **Research and analytics** on customer lifecycle and equilibrium engagement levels

## When NOT To Use

- When you need **per-offer rankings** (this path returns aggregate equilibrium values, not arm-level scores)
- When you need **real-time scoring of individual offers** in a multi-armed bandit sense

## Example

```python
from prediction.apis import deployment_management as dm
from prediction.apis import online_learning_management as ol
from prediction import jwt_access

auth = jwt_access.Authenticate("http://localhost:3001/api", ecosystem_username, ecosystem_password)

deployment_id = "demo-sentimental-equilibrium"

online_learning_uuid = ol.create_online_learning(
        auth,
        algorithm="ecosystem_rewards",
        name=deployment_id,
        description="Sentimental Equilibrium configuration",
        feature_store_collection="set_up_features",
        feature_store_database="my_mongo_database",
        options_store_database="my_mongo_database",
        options_store_collection="demo-deployment_options",
        randomisation_processing_count=5000,
        randomisation_processing_window=604800000,
        contextual_variables_offer_key="offer",
        create_options_index=True,
        create_covering_index=True
)

online_learning = dm.define_deployment_multi_armed_bandit(epsilon=0, dynamic_interaction_uuid=online_learning_uuid)

parameter_access = dm.define_deployment_parameter_access(
    auth,
    lookup_key="customer_id",
    lookup_type="string",
    database="my_mongo_database",
    table_collection="customer_feature_store",
    datasource="mongodb"
)

deployment_step = dm.create_deployment(
    auth,
    project_id="demo-project",
    deployment_id=deployment_id,
    description="Sentimental Equilibrium demo deployment",
    version="001",
    plugin_post_score_class="PlatformDynamicEngagement.java",
    plugin_pre_score_class="PreScoreDynamic.java",
    scoring_engine_path_dev="http://localhost:8091",
    mongo_connect=f"mongodb://{mongo_user}:{mongo_password}@localhost:54445/?authSource=admin",
    parameter_access=parameter_access,
    multi_armed_bandit=online_learning
)
```

**Deployment pattern:** Set `approach` to `behaviorAlgos` and `sub_approach` to `sentimentalEquilibrium` in the `randomisation` object of the dynamic recommender configuration in MongoDB.

**Training data:** Sentimental Equilibrium parameters (for example `decayRate`, `effortEfficiency`, `discountRate`, `utilityType`, and `disutilityType`) are supplied through the **training data** pipeline so the rolling learner can read them consistently with your feature and options stores. Align field names with your ingestion job and runtime configuration.

---

## API Management

Source: `docs/configuration/api/index.mdx`
URL: https://ecosystem.ai/docs/configuration/api
Summary: Configure API's to test your scoring.

# Intro

The API management functionality allows you to configure test calls to your deployed ecosystem.Ai runtime configurations.

## Key Features

This is a convenient way to test your scoring API's as configured by the deployment steps. Once configuration has been pushed to the runtime engine, you can score against it and obtain results.

Assign a descriptive name and the url path to the runtime scoring engine. This url can be publicly accessible or in a private cluster. Note that each platform and deployment cluster configuration will have it's own standards and naming conventions. Typically there are two endpoints to use for testing namely ```/invocations``` and ```/response```. The payloads for these differ depending on the case.

![image](/images/configuration/api/api-01.png)

The ```/invocations``` API has a number of standard parameters, but there is also a ```Params``` parameter that can contain a JSON configuration depending on the use-case and if you modified any pre- or post-scoring plugins that use this Params for additional values.

![image](/images/configuration/api/api-02.png)

Here are the options for Params:
***Model Based Scoring***
If there are no additional parameters to process then use:
```json
{}
```

If you don't have a data lookup set, and want to pass model scoring parameters via the api, then use this format:
```json
{
    "input":["scoring_variable1","scoring_variable2"],
    "value":["0.3333","open"]
}
```

***Dynamic Model***
Use this parameter style for dynamic models. The key thing to note is that variables can be left blank if no context needs to be set.
```json
{
    "input":["contextual_variable_one","contextual_variable_two"],
    "value":["",""]
}
```

***Deep Learning: Tensorflow and PyTorch Models***
For Tensorflow or PyTorch models:
```json
{
    "input":["text"],
    "value":["Place text here"],
    "type":"dense_1"
}
```
Question/Answer approaches:
```json
{
    "input":["text","question"],
    "value":["BBC Japan was a general entertainment Channel. Which operated between December 2004 and April 2006.","When did BBC Japan start broadcasting?"],
    "type":"qa"
}
```

![image](/images/configuration/api/api-03.png)

The API payload is populated by your stack when calling the scoring engine. Here's a payload example:
```
http://ecosystem-runtime:8091/invocations
```
Payload to call API, note that the params can be URL Encoded or in plain text.:
```json
{
    "campaign":"spend_personality_master",
    "subcampaign":"spend_personality_master",
    "channel":"app",
    "customer":"590",
    "userid":"ecosystem",
    "numberoffers":"1",
    "params":"%22%7B%7D%22"
}
```

The ```/response``` API is used to respond with selected item from ```/invocations``` response. For example a list of products can be returned for use in an app, web or other application. Once the user accept a option then this API is called.

![image](/images/configuration/api/api-04.png)

Here is an example of a shorter version of payload, or use the entire response JSON payload.
```json
{
    "uuid":"",
    "offers_accepted":[{"offer_name":""}],
    "channel_name":"",
    "transaction_id":""
}
```
Note that different models will process responses differently. Dynamic models can be set to converge in real-time.

***Generic***

The API configurations can be set to call any endpoint. Use the "generic" API type and execution method. The API Path and Path will be appended when the call is made.

![image](/images/configuration/api/general-api.png)

API result is displayed with successful payload or error from server.

---

## Enrichment

Source: `docs/configuration/data/enrichment.mdx`
URL: https://ecosystem.ai/docs/configuration/data/enrichment
Summary: Enrichment Processes

# Enrichment Capabilities

## Enrichment Capabilities

Enrichment options are used to perform feature engineering related actions.
![image](/images/configuration/data/enrichments.png)

## Data Cleaning
- **Zero Fill**: Fill column with zero if empty, use =force for double convert.
- **Fill with Values**: Fill column with value based on search criteria.
- **Flatten Sub Documents**: Specify a key that contains sub document and flatten.
- **Remove Key**: Delete key from all documents.
- **Remove Documents**: Delete documents from this collection based on search.

## NLP Transformations
- **Fragment (NLP) Options**: Tokenize string, stemming, lowercase, uppercase, etc options.
- **Big 5**: Extract personality from text [ecosystem-worker-nlp] (on request).
- **MBTI**: Extract MBTI from text [ecosystem-worker-nlp] (on request).
- **Named Entity Recognition**: Extract named entities from text, add columns with scores [ecosystem-worker-nlp] (on request).
- **Parts of Speech**: Extract parts of speech from text [ecosystem-worker-nlp] (on request).
- **Summarize**: Summarize text [ecosystem-worker-nlp] (on request).
- **Sentiment**: Determine sentiment from text [ecosystem-worker-nlp] (on request).
- **Toxicity**: Score levels of toxicity in text [ecosystem-worker-nlp] (on request).

## Basic Transformations
- **Count Enums**: Count the number of enum categories.
- **Concatenate Features**: Concatenate two columns and create new.
- **Enumeration Builder**: Enumerate attribute and create Enum Collection.
- **Normalize**: Normalize column with new value between low and high.
- **Range to Category**: Use range rules for numeric values and assign category.
- **Aggregate**: Aggregate fields and return count.

## Advanced Transformations
- **Location Extractor**: Extract country and city from string and add coordinates.
- **Prediction**: Execute predictor on selected columns as features and create column.
- **Basket Analysis**: Analyse and present most popular items in basket array.
- **Directed Graph**: Generate a graph from meta definition.
- **Ecogenetic Network**: Calculate core centralities based on network meta-data.
- **Ecosystem Personality Algorithms**: Determine personality from transactional data behavior.
- **Ecosystem Sentimental Equilibrium**: Determine sentimental equilibrium from interaction data.
- **Client Pulse Reliability**: Calculate Client Pulse Reliability scores per grouping of transactions.
- **Standard Industry Codes**: Add descriptions from SIC code.
- **Credit Card Codes**: Add descriptions from MCC code.

## Date and Timeseries Transformations
- **Date Enrich**: Build out day of week, year, month and other features.
- **Featureset**: Generate flattened time-series features by grouping then date and category.
- **Time Series Features**: Generate time-series features by date, then group and category.
- **Forecast**: Forecast next sequence from time-series date and double values.

## Database Operations
- **Foreign Key N:1**: Perform foreign key lookup to another database.collection and return fields.
- **Foreign Key 1:N**: Perform foreign key lookup, aggregate fields and return count etc.
- **Rename Key**: Rename all keys in selected dataset to new value.
- **Indexes**: Create indexes using JSON definition.
- **Cassandra Ingest**: Ingest data from Cassandra into local database.

## Date Enrichment

Enrich data with date related features for example day of week, month, year etc.
![image](/images/configuration/data/enrichments-dates.png)

---

## Feature Engineering

Source: `docs/configuration/data/feature_engineering.mdx`
URL: https://ecosystem.ai/docs/configuration/data/feature_engineering
Summary: Feature Engineering.

# Feature Engineering

**Manage Data and Features for AI**

Review Databases and Collections
![image](/images/configuration/data/fe.png)

Manage Documents
![image](/images/configuration/data/fe-documents.png)

View Documents in Table
![image](/images/configuration/data/fe-table.png)

AVRO, SQL and other Data Formats
![image](/images/configuration/data/fe-details.png)

---

## Files

Source: `docs/configuration/data/files.mdx`
URL: https://ecosystem.ai/docs/configuration/data/files
Summary: File Management.

# File Management

**Upload and Download**

Review Projects
![image](/images/configuration/data/files.png)

Upload files
![image](/images/configuration/data/files-upload.png)

Download files
![image](/images/configuration/data/files-download.png)

---

## Data Management

Source: `docs/configuration/data/index.mdx`
URL: https://ecosystem.ai/docs/configuration/data
Summary: Data Management Capabilities.

# Data Management Options:

## Overview

ecosystem.Ai offers a variety of data management options:
- [**Feature Engineering**](/docs/configuration/data/feature_engineering): View and manage the data in the MongoDB instance connected to the ecosystem.Ai Server.
- [**Presto**](/docs/configuration/data/presto): Integrate and access various data sources and targets.
- [**File Management**](/docs/configuration/data/files): Upload and download files.
- [**Enrichment**](/docs/configuration/data/enrichment): Enrich your data using a variety of configurable enrichment functions.

The [**meta data**](/docs/configuration/data/meta) of all of the configurations in the ecosystem.Ai Server can also be viewed using the Data Management options.

---

## Meta-Data

Source: `docs/configuration/data/metadata.mdx`
URL: https://ecosystem.ai/docs/configuration/data/metadata
Summary: Meta-Data.

# Meta-Data Management

The ecosystem platform is designed to manage the meta-data of all the configurations related to data formats for algorithms, scoring engine specific functionality and other configurations. The meta-data management is a key feature of the ecosystem platform that allows users to manage the configurations of the data formats and other configurations. Using the Workbench, Python or API's users can manage the meta-data configurations.

## Model Configurations

The ```ecosystem_meta``` database contains all the base configuration definitions. Some core meta-data definitions include:
**Projects** - The project configuration is used to define the project and its associated configurations.
**Frames** - Feature Store configurations are defined in the frame configuration.
**Predictors** - The predictor configuration is used to define model predictors and associated configurations.
**DynamicEngagements** - The dynamic engagement configuration is used to define the dynamic engagement and interactions configurations.

### Data Formats

The ecosystem platform supports various data formats for the configurations.

**Projects**

Here is a simplified example of the projects meta-data.

```json
{
    "project_collections": [
        {
            "database": "experimentation_demos",
            "collection": "ab_testing_messages"
        },
        {
            "database": "experimentation_demos",
            "collection": "ab_testing_options"
        }
    ],
    "project_files": [
        {
            "name": "AB_testing_messages.csv",
            "absolutePath": "/data/AB_testing_messages.csv",
            "lastModified": 1654777306884,
            "canRead": true,
            "isDirectory": false
        }
    ],
    "purpose": "Demo",
    "configuration": "",
    "project_calendars": [
        {
            "name": "Monthly Rituals",
            "date": "NA"
        }
    ],
    "userid": "ecosystem",
    "uuid": "8162f900-2694-4d59-b41b-e3abaa7b3ff5",
    "project_end_date": "2022-12-31",
    "project_id": "AB Testing",
    "project_owner": "ecosystem",
    "project_start_date": "2022-06-01",
    "module_metadata": {
        "reviewed_by": "",
        "image_path": "",
        "icon_path": "",
        "name": "AB_Testing_0.1",
        "module_owner": "",
        "description": "",
        "categories": "",
        "created_by": "",
        "version": "",
        "fact_sheet_path": "",
        "contact_email": "",
        "status": ""
    },
    "project_type": "Experimentation",
    "deployment_step": [
        {
            "budget_tracker": {
                "budget_parameters_database": "",
                "budget_parameters_datasource": "mongodb",
                "budget_id": "",
                "description": "",
                "budget_parameters_table_collection": "",
                "x_axis_datasource": "offer_matrix",
                "x_axis_name": "",
                "acc_namesource": "",
                "y_axis_name": "",
                "y_axis_namesource": "",
                "acc_name": "",
                "budget_strategy": "",
                "x_axis_namesource": "",
                "acc_datasource": "offer_matrix",
                "y_axis_datasource": "offer_matrix"
            },
            "date": "2022-09-18",
            "complexity": "Low",
            "plugins": {
                "post_score_class_text": "PlatformDynamicEngagement.java",
                "post_score_class_code": "",
                "api_endpoint_code": "",
                "pre_score_class_text": "",
                "pre_score_class_code": ""
            },
            "model_configuration": {},
            "setup_offer_matrix": {
                "offer_lookup_id": "",
                "database": "",
                "table_collection": "",
                "datasource": "mongodb"
            },
            "project_status": "experiment",
            "description": "Deployment for AB testing Demo",
            "multi_armed_bandit": {
                "epsilon": "0.5",
                "duration": 0,
                "pulse_responder_uuid": "53adf85f-0917-4645-a94d-8d9eedf276c2"
            },
            "whitelist": {
                "table_collection": "",
                "datasource": "mongodb",
                "database": ""
            },
            "version": "001",
            "model_selector": {
                "selector_column": "",
                "lookup": "",
                "database": "",
                "selector": "",
                "table_collection": "",
                "datasource": "mongodb"
            },
            "performance_expectation": "High",
            "allocator": {
                "allocator_id": "ecosystem_allocator",
                "no_interaction_with": [
                    {
                        "version": "002",
                        "deployment_id": "dynamic_experiment_offer"
                    },
                    {
                        "version": "003",
                        "deployment_id": "dynamic_experiment_offer"
                    },
                    {
                        "version": "004",
                        "deployment_id": "dynamic_experiment_offer"
                    },
                    {
                        "version": "005",
                        "deployment_id": "dynamic_experiment_offer"
                    }
                ],
                "interacts_with_experiments": 1,
                "component": "",
                "keep_in_experiment": 1,
                "component_ranking_field": ""
            },
            "pattern_selector": {
                "pattern": "",
                "duration": ""
            },
            "project_id": "AB Testing",
            "paths": {
                "logging_collection_response": "ecosystemruntime_response",
                "logging_collection": "ecosystemruntime",
                "logging_database": "logging",
                "mongo_server_port": "ecosystem-server:54445",
                "scoring_engine_path_prod": "http://ecosystem-runtime2:8091",
                "models_path": "/data/deployed/",
                "mongo_connect": ",
                "data_path": "/data/",
                "runtime_path": "http://ecosystem-runtime:8091",
                "build_server_path": "",
                "scoring_engine_path_dev": "http://ecosystem-runtime:8091",
                "aws_container_resource": "",
                "scoring_engine_path_test": "http://ecosystem-runtime1:8091",
                "git_repo_path_branch": "abtesting",
                "download_path": "https://hub.docker.com/u/ecosystemai",
                "mongo_ecosystem_password": "EcoEco321",
                "mongo_ecosystem_user": "ecosystem_user",
                "git_repo_path": "https://github.com/ecogenetic/ecosystem-runtime.git"
            },
            "updated_by": "admin@ecosystem.ai",
            "options": {
                "is_offer_matrix": false,
                "is_multi_armed_bandit": true,
                "is_enable_plugins": true,
                "is_whitelist": false,
                "is_corpora": false,
                "is_custom_api": false,
                "is_budget_tracking": false,
                "is_params_from_data_source": true,
                "is_model_selector": false,
                "is_generate_dashboards": false,
                "is_pattern_selector": false,
                "is_prediction_model": false
            },
            "corpora": {
                "corpora": ""
            },
            "parameter_access": {
                "lookup": {
                    "value": "'123'",
                    "key": "customer"
                },
                "create_virtual_variables": false,
                "database": "experimentation_demos",
                "datasource": "mongodb",
                "lookup_fields": [
                    "alpha",
                    "alpha_zero",
                    "beta",
                    "beta_zero",
                    "customer",
                    "epsilon_nominated",
                    "id",
                    "option",
                    "optionKey",
                    "propensity",
                    "uuid",
                    "weighting"
                ],
                "lookup_defaults": "",
                "virtual_variables": [],
                "table_collection": "ab_testing_options",
                "fields": "uuid,id,optionKey,option,alpha,beta,alpha_zero,beta_zero,weighting,epsilon_nominated,propensity,customer"
            },
            "updated_date": "2025-03-20T18:01:43.605Z",
            "deployment_id": "ab_testing_demo"
        }
    ],
    "project_data": "ecosystem",
    "created_by": "admin@ecosystem.ai",
    "project_api_configs": [
        {
            "name": "AB Test",
            "date": "2022-09-17"
        }
    ],
    "preview_detail": {
        "summary": "Traditional AB test",
        "image": "/assets/images/module_offerrecommender.001.png",
        "active": true,
        "detail": "Traditional AB test finding best of two options.",
        "heading": "AB Testing"
    },
    "project_dynamic_interactions": [
        {
            "name": "AB Testing Demo",
            "date": "2022-09-18"
        }
    ],
    "project_description": "Traditional AB test",
    "updated_by": "admin@ecosystem.ai",
    "_id": {
        "date": "Thu Mar 20 18:01:44 UTC 2025",
        "timestamp": 1742493704
    },
    "updated_date": "2025-03-20T18:01:44.000446Z",
    "created_date": "2024-11-02T14:08:41.516Z",
    "userid_login": "ecosystem"
}
```

## Module Specific Configurations

The ecosystem platform has specific configurations for each module. These configurations are used to define the module specific configurations and are not always stored in the ```ecosystem_meta``` database. Some of the module specific configurations include:
**Offer Matrix** - This format is used by recommender algorithms to define the offer matrix.

### Data Formats

Note that key values are used by default functionality in various modules.

**Offer Matrix Data Format**

The offer matrix format is used by a number of post scoring plugins that use recommenders or interaction type of algorithms. If these keys, ```cost, price, offer_id, offer_name, static_offers``` are used in a product or offer catalog then all the default functionality in configuring a recommender will be available. There is default functionality that will be enabled if these are used.

```json
{
    "cost": 96,
    "price": 120,
    "offer_id": "JFU82_DB200MB_P",
    "offer_name": "200MB Data Option",
    "static_offers": 1
}
```

All these values can be updated based on model results, business logic or data extraction in the plugin system.

---

## Presto

Source: `docs/configuration/data/presto.mdx`
URL: https://ecosystem.ai/docs/configuration/data/presto
Summary: Presto Management.

# Presto Overview

**Manage Data Access**

Presto configurations
![image](/images/configuration/data/presto.png)

Execute SQL Statements
![image](/images/configuration/data/presto-work.png)

---

## Endpoints

Source: `docs/configuration/deployment/endpoints.mdx`
URL: https://ecosystem.ai/docs/configuration/deployment/endpoints
Summary: Endpoints

# Endpoints

Endpoints are used to access the scoring API. The API is used to access the scoring engine and return results for the configured use case.

The recommended APIs to use to interact with the ecosystem.Ai runtime are the `/invocations` API for receiving results from the ecosystem.Ai runtime and the `/responses` API for sending feedback to the ecosystem.Ai runtime. If required the APIs can be [customised](/docs/runtime/apiconfiguration) to suit the use-case and the model being used.

[UI Frameworks](/docs/frontend) contains examples of integation of these endpoints with different chaneel interfaces.

## API Parameters

When using the `/invocations` API to access results, you will need to include the following parameters:

#### Campaign
This is the same name as provided when configuring project deployment settings. For dynamic recommenders ensure that the names are the same.

#### Sub-Campaign
The sub-campaign can be used to differentiate between different models that are used in the same campaign. This is useful when using multiple models in the same campaign.

#### Lookup
If there is a parameter lookup configured, then this is the value that will be used to lookup the model scoring parameters. If there is no lookup configured, then this value will be ignored.

#### Channel
Different channels can be used to access the scores. This is useful when using the same model in different channels.

#### Responses
The number of responses to return. This is useful when using the API to return multiple scores. For data lookup options only one response is returned.

#### The in_param parameter
With the `Score` API Selected, use the following options for in_params.

Model based recommender:
```json
{}
```

Note that this approach will bypass any parameter lookup settings in the project deployment configuration. Model based configurations that require data lookup replacement use:
```json
{
  "input":["model_param1","model_param2"],
  "value":["value to score","value to score"]
}
```

Dynamic recommenders use:
```json
{
  "input":["contextual_variable_one","contextual_variable_two"],
  "value":["",""]
}
```

Tensorflow or PyTorch models:
```json
{
  "input":["text"],
  "value":["Place text here"],
  "type":"dense_1"
}
```

Question and answer approaches with deep learning models:
```json
{
  "input":["text","question"],
  "value":["BBC Japan was a general entertainment Channel. Which operated between December 2004 and April 2006.","When did BBC Japan start broadcasting?"],
  "type":"qa"
}
```

---

## Deployment Options

Source: `docs/configuration/deployment/index.mdx`
URL: https://ecosystem.ai/docs/configuration/deployment
Summary: Deployment Options

# Deployment

This section provides detailed configuration guides to help you set up various deployment options for ecosystem.Ai. The AI/ML predictor deployment process (could have multiple models) is a comprehensive method that includes - data analysis, engineering features, creating algorithms, and model training and testing. This is followed by validation to ensure alignment with business goals. Depending on the target environment, the model may need conversion before proceeding with setting up the AI model serving architecture, which could be based either in the cloud or on-premise. Once the infrastructure is ready, models are deployed to start generating predictions.

The model is integrated within business systems, technology processes and then continuously monitored for performance. The deployment process is streamlined and automated through MLOps, ensuring efficiency and reliability throughout the AI model lifecycle, from development to management in production.

## Architecture

The "permanently in production" concept encapsulates a perpetually live state of ecosystem.Ai model serving runtime environments, functioning in seamless integration with the production environment to ensure unhindered operational dynamics. While in production certain parameters can be updated in a live environment, ensuring that the system is always up-to-date and ready to serve. This is achieved through the push functionality, which allows for the deployment of configurations in a non-disruptive manner, ensuring a constantly up-to-date production setup.

This allows for undisturbed model serving, inclusive of data access, logging, and additional variable functionalities. This architecture enables constant system readiness, ensures immediate incorporation of updates, optimizes performance, and minimizes system latency or downtime. It results in an agile, resilient, and high-availability production environment that enhances overall operational efficiency.

The architecture is designed for horizontal scalability, meaning it can manage an increase in workload by simply adding more machines or nodes in the system, enhancing its capacity and performance. Equally important is its compatibility with any load balancer. A load balancer helps distribute network or application traffic across a number of servers to increase efficiency and reliability.

## Deployment Stacks

In order to ensure the ecosystem.Ai platform is fully operational, it is essential to have a well-defined deployment stack. The deployment stack is a set of tools and technologies that are used to deploy and manage the ecosystem.Ai platform. The stack includes the following components:
- **Data Ingestion**: The process of importing data from various sources into the ecosystem.Ai platform. Feature engineering processes are applied to the data to extract relevant features for modeling. Options Stores are generated from the Feature Store Database.
- **Model Training**: The process of building and training machine learning models using the ecosystem.Ai platform or any pipeline process that is integrated with the platform. There are differences across cloud providers and on-premise deployments.
- **Dynamic Configuration**: The process of configuring dynamic models to adapt to changing conditions in real-time. This includes setting up algorithms, options, and variables for dynamic interactions.
- **Model Deployment**: The process of deploying machine learning models into production environments. This includes setting up the deployment configuration, plugins, and prediction activators.
- **Model Monitoring**: The process of monitoring the performance of deployed models to ensure they are functioning as expected. This includes setting up dashboards and alerts to track model performance.

---

## Deployment Parameters

Source: `docs/configuration/deployment/parameters.mdx`
URL: https://ecosystem.ai/docs/configuration/deployment/parameters
Summary: Deployment Parameters

# Deployment Parameters

The parameters set when configuring the deployment are pushed to the ecosystem.Ai runtime and, together with the [environment variables](/docs/runtime/environment_variables), set the behaviour of the runtime. The majority of these settings will be pushed to the runtime in the form of a `properties` file, which will be accessible in the runtime container. There should be need to manually edit this `properties` file.

## Case Configuration
Case configuration contains the high level details of the deployment:
- **Prediction Case Id**: The name of the prediction case. This is the name for the predictor that will be stored in the logs and, together with the version and project name, uniquely identifies a deployment configuration. When creating a deployment for a Dynamic Interaction configuration this should match the name of the Dynamic Interaction configuration.
- **Description, Type, Purpose**: These fields are used to describe the deployment and the description is pushed to a commented section in the properties file to assist with maintenance.
- **Version**: The version of the configuration. Together with the project name and deployment_id (Prediction Case Id) this uniquely identifies a deployment configuration. 
- **Environment Status**: The environment to which the deployment confioguration should be pushed. Different endpoints and database settings can be configured for different environments.
- **Performance Expectation, Complexity**: These are informational fields used to assist with maintenance.

The details will be visible in the `properties` file with the following format:
```properties
# ======================================================================================================================
# Predictor: dynamic-recommender - Dynamic deployment with value calc - 002
# Generated by: user@ecosystem.ai at 2025-05-09T10:52:30.000808Z
# ======================================================================================================================
### prediction case (Prediction Case Id) ###
predictor.name=dynamic-recommender
# ======================================================================================================================
```

The types of functionality to be used by the endpoint can be set using the available check boxes which will make the relevant parameters available for configuration.

## Build and Generate Settings
The build and generate settings are used to configure the optional Generate and Build functionality. The Generate functionality is used to create a git branch with the plugin code created for the deployment. The Build functionality is used to build a jar file and image for the deployment.

## Path Settings
The path settings configure the location of the data and models to be used by the runtime. The details will be visible in the `properties` file with the following format:
```properties
### paths (Data Path) and (Models Path) ###
user.data=/data/
user.generated.models=/data/deployed/
```

## Database and Logging Database Settings
The database settings are used to configure the MongoDB instance to be used by the runtime. The logging database settings are used to configure the database and collections in which the logs for the runtime should be stored. The details will be visible in the `properties` file with the following format:
```properties
### logging setup (Logging) ###
logging.database=logging
logging.collection=ecosystemruntime
logging.collection.response=ecosystemruntime_response
```

## Target Scoring Engine
The endpoints to push the deployment to for the different environments. The endpoint that will be used is defined by the Environment Status setting in the Case configuration section.

## Prediction Model
Specify the models to be used for the Deployment. The models are specified as a comma separated list of model namesin the Models to Load input field. The models should be available to the runtime at the path specified in the Models Path setting.
The details will be visible in the `properties` file with the following format:
```properties
### models (Prediction Model) ###
mojo.key=GLM_1_AutoML_20210818_132258.zip,XGBoost_1_AutoML_20210818_132258.zip
```

## Model Selector
Configure the deployment to different models from the Prediction Model list, based on a lookup from a database.
- **Data Source**: The type of data source to be used for the lookup.
- **Database**: The database to be used for the lookup.
- **Table**: The table to be used for the lookup.
- **Selector Column**: The name of the field to use to determine which model to select.
- **Lookup*: A JSON object specifying how the lookup should be performed. The input should have the following form `{"key":"customer_identifier","value":123,"fields":"selector_key"}`. `key` is the name of the field in the customer feature store to be used for the lookup, the `value` is both the default value to be used if the lookup fails and specifies the type of the lookup field and `fields` is a comma separated list of fields to be returned from the lookup.
- **Selector Setting**: A JSON object specifying which model to use based on the value of the field specified in Selector Column. The input should have the following form `{"key_value_a":[1],"key_value_b":[2]}`. The key is the value of the field specified in the Selector Column and the value is the index of the model in the Models to Load list.

The details will be visible in the `properties` file with the following format:
```properties
### model selector (Model Selector) ###
predictor.selector.setup={database:'mongodb',db:'ecosystem', table:'table',lookup:{key:'key',value:123,fields:'selector_key'}}
predictor.selector.model={'key_value_a':[1],'key_value_b':[2]}
```

## Parameter From Data Source
The configuration for the customer data lookup to be used by the runtime.
- **Data Source**: The type of data source to be used for the lookup.
- **Database**: The database to be used for the lookup.
- **Table**: The table to be used for the lookup.
- **Key Field**: The name of the customer lookup field in the customer feature store.
- **Key Type and Default**: You can specify a default customer key to use if the lookup fails. This field is also used to specify the type of the the customer lookup field. If the value entered is a string it denotes that the customer lookup field is a string. If the value entered is a number it denotes that the customer lookup field is a number. If you do not want to specify a default value you can use 123 or '123' to sepcify the type.
- **Lookup Field List**: The fields to be looked up from the customer feature store.
- **Lookup Defaults**: Default values to be used for the fields if they are missing from the customer feature store when the lookup is performed.
- **URL**: The URL to be used for the lookup. This is only required if the Data Source is Runtime.
- **Create Virtual Variables**: Checkbox to indicate whether Virtual Variables should be created based on the lookup from the customer feature store. The User Guide for [Virtual Variables](/docs/user_guides/virtual_variables) contains more information on how to use Virtual Variables.

The details will be visible in the `properties` file with the following format:
```properties
### parameter lookup (Parameters from Data Source) ###
predictor.param.lookup={predictor:'dynamic-recommender',mojo:1,database:'mongodb',db:'recommender_demos',table:'feature_store',lookup:{"value":123,"key":"msisdn"},result:{parm1:'field1', parm2:'field2'}}
predictor.param.lookup.features=customer,age,location,
predictor.param.lookup.default=customer,age
```

You can configure lookups to multiple customer data sources using the `Add Lookup` button. If multiple lookups are configured that will be combined into the single `featuresObj` object in the runtime. The field names looked up from the multiple sources should therefore be unique. Up to 10 Parameter Access lookups can be configured. When multiple lookups are configured, the format in the `properties` file will be changed to an array.
```properties
predictor.param.lookup=[{predictor:'dynamic-recommender',mojo:1,database:'mongodb',db:'recommender_demos',table:'feature_store',lookup:{"value":123,"key":"msisdn"},result:{parm1:'field1', parm2:'field2'}},{predictor:'dynamic-recommender',mojo:1,database:'mongodb',db:'recommender_demos',table:'feature_store_two',lookup:{"value":123,"key":"msisdn"},result:{parm1:'field1', parm2:'field2'}}]
predictor.param.lookup.features=[[customer,age],[customer,location]]
predictor.param.lookup.default=[[customer,age],[]]
```

### Virtual Variable Settings
Once the `create virtual variables` checkbox is selected and the `Add Variable` button is clicked, the following fields will be available for configuration:
- **Variable Name**: The name of the virtual variable to be created.
- **Variable Type**: The type of the virtual variable to be created. The options are:
  - `Discretize`: Bucket the values of the base variables
  - `Concatenate`: Combine multiple variables by combining their values
The remaining fields are dependent on the type of virtual variable selected.

#### Discretize
- **Field To Discretize**: The field in the customer feature store to be discretized.
- **Default Value**: The default value to be used if the field value does not fall into any of the defined buckets.
- **Label**: The value to assign to the new variable if the feature store variable values falls within the defined bucket
- **From**: The lower bound of the bucket
- **To**: The upper bound of the bucket
To remove a bucket use the delete icon next to the bucket.

Virtual Variables are stored as part of the Dynamic Interaction configration in the `ecosystem_meta.dynamic_engagement` MongoDB collection and will appear as follows in the `properties` file:
```properties
predictor.param.lookup={predictor:'dynamic-recommender',mojo:1,database:'mongodb',db:'telecommunications',table:'feature_store',url:'',lookup:{"value":123,"key":"customer"},virtual_variables:[{"default":"gt-15","buckets":[{"from":0,"label":"lt-15","to":15}],"name":"segment_one","type":"discretize","original_variable":"feature_one","fields":[]},{"default":"gt-500","buckets":[{"from":0,"label":"lt-50","to":50},{"from":50,"label":"50-250","to":250},{"from":250,"label":"250-500","to":500}],"name":"segment_two","type":"discretize","original_variable":"feature_one","fields":[]}],result:{parm1:'field1', parm2:'field2'}}
```

#### Concatenate
If the Concatenate type is selected, the `Add Field` button will be available to add additional fields to the concatenation. In the Field input dropdown you can select the fields to be concatenated. To remove a field use the delete icon next to the field.

## Offer Matrix
The Offer Matrix contains information about the items to be recommended by the Deployment. The Offer Matrix can be used in the post scoring logic when applying eligibility rules.
- **Data Source**: The type of data source to be used for the lookup.
- **Database**: The database to be used for the lookup.
- **Table**: The table to be used for the lookup.
- **Offer Lookup ID** The name of the field in the Offer Matrix that uniquely identifies the offer.

The Offer Matrix stored in the `params` JSONObject accessible in the post scoring logic. The runtime will attempt to load the Offer Matrix in three different forms:
 - `offerMatrix`: Loaded as a JSONArray with one element for each row in the Offer Matrix. The rows themselves will be loaded as JSONObjects with the column names as the keys. This structure can be used to efficiently loop through the Offer Matrix.
 - `offerMatrixWithKey`: Loaded as a JSONObject with the key being the value of the Offer Lookup ID field in the Offer Matrix configuration. The value will the corresponding row of the Offer Matrix represented as a JSONObject with the column names as the keys. This structure can be used to efficiently lookup a specific offer in the Offer Matrix.
 - `offerMatrixStatic`: Loaded as a JSONArray with one element for each row in the Offer Matrix. The rows themselves will be loaded as JSONObjects with the column names as the keys. Will only load rows in the Offer Matrix which have a column named `static_offers` and the value in that column is greater than 0. `offerMatrixStatic` is returned by the `getOfferMatrix` function in the post scoring logic when a a default value is used when performing the look up configured in Parameters From Data Source. This can allow you to specify offers for new customers where the customer lookup fails.
If any of these three loads fails the corresponding item in `params` will be empty.

**Note:** Prior to version 0.9.6.0 an error message is displayed if `offerMatrixWithKey` is not loaded successfully, which will generally occur if the `static_offers` column does not exist. Howeverm `offerMatrixWithKey` and `offerMatrix` can still be used even if this error is displayed. From 0.9.6.0 a warning message is displayed instead.

**Note:** The default functionality in some of the template post scoring logic structures assumes the following columns are present in the [Offer Matrix](/docs/configuration/data/meta) `cost, price, offer_id, offer_name, static_offers`.

The Offer Matrix details will be visible in the `properties` file with the following format:
```properties
### Offer Matrix (Offer Matrix) ###
predictor.offer.matrix={database:'mongodb',db:'recommender_demos', table:'offer_matrix', key:'offer_name'}
```

## Plugins
The pre and post scoring logic, custom reward function for Dynamic Interactions and API structure java classes to use in the Deployment.

### API endpoint
The API endpoint is used to configure the API structure to be used in the Deployment. To use the default API structure leave this section blank. See the [API configuration](/docs/runtime/api_configuration) for more information on how to configure the API structure.

### Pre Scoring logic
The pre scoring logic is used to configure the pre scoring plugin to be used in the Deployment. The pre scoring plugin is used to perform any pre processing of the input data before it is passed to the model for scoring. For Dynamic Interaction configurations select PreScoreDynamic.java for a pre scoring template. For static model configurations PrePredictCustomer.java is the default template and is the pre scoring logic that will be used by default. If you wish to  customise your pre scoring logic see the [pre scoring logic](/docs/runtime/prepredict) documentation as well as the guide for setting up a [local development environment](/docs/user_guides/runtime_plugin_development).

If using custom pre scoring logic, use the compile button to make the pre scoring class available to the runtime. You can also set up a build pipeline to compile the custom pre scoring logic.

### Post Scoring logic
The post scoring logic is used to configure the post scoring plugin to be used in the Deployment. The post scoring plugin is used to perform any post processing of the output data after it has been scored by the model. There are a number of template classes available:
- **PostScoreBasic**: General-purpose post-score handling. Use when there’s no need for specialized post-scoring logic, just general output handling.
- **PlatformDynamicEngagement**: Post scoring logic for Dynamic Interaction configurations. Iterates through the options store and use the Offer Matrix if one is configured.
- **PostScoreNetwork**: Post score for a network runtime. This post score should not need to be customised. 
- **PostScoreRecommender**: Generic recommender scoring. When a model generates recommendations, but no specific offer matrix is required.
- **PostScoreRecommenderOffers**: Generic recommender scoring with an Offer Matrix. When a model generates recommendations and the post scoring logic should loop through the Offer Matrix.
- **PostScoreRecommenderMulti**: Recommender scoring using a multi model approach and asynchronous scoring. 
- **PostScoreSpendingPersonality**: The post score for [spend personality](/docs/modules/spend_personality) scoring.
- **PostScoreMoneyPersonality**: The post score for [money personality](/docs/modules/spend_personality) scoring.
- **PostScoreSentimentalEquilibrium**: The post score for sentimental equilibrium scoring.
If you wish to  customise your post scoring logic see the [post scoring logic](/docs/runtime/postpredict) documentation as well as the guide for setting up a [local development environment](/docs/user_guides/runtime_plugin_development).

If using custom post scoring logic, use the compile button to make the post scoring class available to the runtime. You can also set up a build pipeline to compile the custom post scoring logic.

### Reward Function Class
The [rewards class logic](/docs/configuration/dynamic/customrewards) is used to impact the learning of the Dynamic Interaction configuration. To use a Business Logic function to set the rewards use BusinessLogicReward.java.

If using custom rewards logic, use the compile button to make the reward class available to the runtime. You can also set up a build pipeline to compile the custom rewards logic.

The details will be visible in the `properties` file with the following format:
```properties
### case specific parameters (Pre-Score Class) and (Post-Score Class) ###
plugin.prescore=com.ecosystem.plugin.customer.PreScoreDynamic
plugin.postscore=com.ecosystem.plugin.customer.PlatformDynamicEngagement
plugin.reward=com.ecosystem.plugin.reward.DefaultReward
```

## Whitelist
Specify a list of customers who are eligible for specific offers. The whitelist is specified as a table containing two columns; the first is the customer identifier and the second is a list of offers for which that customer is eligible. If a customer does not appear in the table the default offer eligibility rules specified in the post scoring logic will be applied. The details will be visible in the `properties` file with the following format:
```properties
predictor.whitelist.lookup={name:'demo_whitelist',database:'mongodb',db:'ecosystem',table:'recommender_demo_whitelist'}
predictor.whitelist.logicin=true
```

## New Knowledge
In the New Knowledge accordion you can specify three parameters:
- **Epsilon**: The portion of offers to be allocated to explore in `params` in the post scoring logic. See the [epsilon exploration](/docs/user_guides/epsilon_exploration) user guide for more information.
- **Cache Duration**: This amount of time for which customers will be shown the same offer.
- **Pulse Responder Reference**: The name and UUID of the Dynamic Interaction configuration to link to the deployment.

The details will be visible in the `properties` file with the following format:
```properties
### dynamic pulse responder params (Additional Corpora) ###
predictor.corpora=[{"database":"mongodb","name":"dynamic_engagement","update":true,"type":"dynamic_engagement","uuid":"ef931e11-b504-4c4d-958e-47d97c8361af","db":"ecosystem_meta","table":"dynamic_engagement"},{"database":"mongodb","name":"dynamic_engagement","update":true,"type":"dynamic_engagement_options","uuid":"ef931e11-b504-4c4d-958e-47d97c8361af","db":"recommender_demos","table":"demo_options"}]

### Multi Armed Bandit (Epsilon) and (Cache Duration)###
predictor.epsilon=0.05
predictor.offercache=0
```

## Additional Corpora
Add additional data sets to the Deployment, these will be loaded into the runtime. Select `Add Corpus` and complete the following fields:
- **Corpus Name**: The name to give the loaded corpus in the runtime.
- **Datasource**: The type of data source to be used for the lookup.
- **Database**: The database to be used for the lookup.
- **Table**: The table to be used for the lookup.
- **Type**: How the corpora should be loaded into the runtime. Static corpora are loaded at start up or after a refresh. Dynamic corpora are loaded each time a prediction is made. Experiment corpora are used to condifure an `experiment_selector` type network runtime.
- **Key**: If a Key field is specified the corpus will be loaded as a JSONObject with the value of the Key field as the key for the JSONObject. If the Key field is not specified the corpus will be loaded as a JSONArray.
- **URL**: The URL to be used for the lookup. This is only required if the Datasource is Runtime.

Up to 16 Additional Corpora can be configured. The details will be visible in the `properties` file with the following format:
```properties
### dynamic pulse responder params (Additional Corpora) ###
predictor.corpora=[{"database":"mongodb","name":"rewards_business_logic","type":"static","db":"recommender_demos","table":"reward_business_logic","key":"type"},{"database":"mongodb","name":"calc_params","type":"static","db":"telecommunications","table":"default_calc_weighted"}]
```

---

## Deployment Properties

Source: `docs/configuration/deployment/properties.mdx`
URL: https://ecosystem.ai/docs/configuration/deployment/properties
Summary: Deployment Properties

# Properties

The pushing of the deployment to a runtime instance will create a properties file containing the details of the configuration. This file is automatically generated by the ecosystem.Ai server. It is possible to manually edit the properties file, however this should be avoided if at all possible to avoid configuration errors and versioning issues.

The properties file is a text file that contains key-value pairs, where each key represents a specific configuration parameter and its corresponding value. The location of the properties file can be configured using the [environment variables](/docs/runtime/environment_variables). Bleow is an example of the generated properties file format.

```properties
# ======================================================================================================================
# Predictor: dynamic-recommender - dynamic recommender example - 001
# Generated by: admin@ecosystem.ai at 2025-04-01T06:59:15.000768Z
# ======================================================================================================================
### prediction case (Prediction Case Id) ###
predictor.name=dynamic-recommender
# ======================================================================================================================
date.format=yyyy-MM-dd'T'HH:mm:ss.SSSSSSXXX
user.profiles=ecosystem_meta
# ======================================================================================================================
### mongodb setup (MongoDB Setup) ###
mongo.ecosystem.user=mongo-user
mongo.server=ecosystem-server
mongo.port=12344
mongo.authentication.source=admin

### (MongoDB Connect String) ###
mongo.connect=mongodb://mongo-user:mongo@ecosystem-server:1234/?authSource=admin

### logging setup (Logging) ###
logging.database=logging
logging.collection=ecosystemruntime
logging.collection.response=ecosystemruntime_response

### paths (Data Path) and (Models Path) ###
user.data=/data/
user.generated.models=/data/deployed/

### case specific parameters (Pre-Score Class) and (Post-Score Class) ###
plugin.prescore=com.ecosystem.plugin.customer.PreScoreDynamic
plugin.postscore=com.ecosystem.plugin.customer.PlatformDynamicEngagement

### models (Prediction Model) ###
#mojo.key=GLM_1_AutoML_20210818_132258.zip,XGBoost_1_AutoML_20210818_132258.zip

### model selector (Model Selector) ###
#predictor.selector.setup={database:'mongodb',db:'ecosystem', table:'table',lookup:{key:'key',value:123,fields:'selector_key'}}
#predictor.selector.model={'key_value_a':[1],'key_value_b':[2]}

### parameter lookup (Parameters from Data Source) ###
predictor.param.lookup={predictor:'dynamic-recommender',mojo:1,database:'mongodb',db:'telecommunications',table:'customer_feature_store',lookup:{"value":123,"key":"customer"},result:{parm1:'field1', parm2:'field2'}}
predictor.param.lookup.features=customer,balance,segment,location

### Offer Matrix (Offer Matrix) ###
#predictor.offer.matrix={database:'mongodb',db:'telecommunications', table:'product_offer_matrix'}

### dynamic pulse responder params (Additional Corpora) ###
predictor.corpora=[{"database":"mongodb","name":"location_details","type":"static","db":"recommender_demos","table":"location_details","key":"location"},{"database":"mongodb","name":"dynamic_engagement","update":true,"type":"dynamic_engagement","uuid":"ef931e11-b504-4c4d-958e-47d97c8361af","db":"ecosystem_meta","table":"dynamic_engagement"},{"database":"mongodb","name":"dynamic_engagement","update":true,"type":"dynamic_engagement_options","uuid":"ef931e11-b504-4c4d-958e-47d97c8361af","db":"telecommunications","table":"recommender_gsm_options"}]

#predictor.whitelist.lookup={name:'recommender',database:'mongodb',db:'ecosystem',table:'recommender_whitelist'}
#predictor.whitelist.logicin=true

#predictor.offer.budget.params={name:'case_name',description:'Sample budget',date_from:'2021-02-01',date_to:'2021-03-01',date_from_name:'CalendarFrom',date_to_name:'CalendarTo',x_name:'customer_segment',x_name_source:'customer_segment',y_name:'offer_counter_group',y_name_source:'offer_matrix.offer_counter_group',number:'Number', number_source:'result.offer_value',group_description:'GroupDescription',generate_if_empty:true}

### Multi Armed Bandit (Epsilon) and (Cache Duration)###
#predictor.epsilon=0.05
#predictor.offercache=0
predictor.epsilon=0.0
predictor.offercache=0

#predictor.pattern=0,1,2,6,8,9,10,11
#predictor.patternduration=10000

# Advanced settings: Shapley Values settings for contributions (review performance). Skip process for dynamic update process. Logging details adds feature store to log.
model.explainability=false
skip.count.process=5
logging.detail=true

### end of properties ###
```

---

## Model Convergence

Source: `docs/configuration/dynamic/convergence.mdx`
URL: https://ecosystem.ai/docs/configuration/dynamic/convergence
Summary: Model Convergence

# Model Convergence

We use online machine learning and allow models to converge in realtime depending on the algorithm and the data. The convergence of the model is the process of the model learning from the data and updating the model parameters to better fit the data. The model will continue to learn and update the parameters until it reaches a point where the model is no longer improving. The model will then be considered converged.

The Ecosystem extended Thompson Sampling effectively balances exploration and exploitation in a dynamic environment. As the posterior distributions update in real time, the system progressively shifts towards actions with higher observed rewards. Initially, due to the high variance of the Beta distribution, exploration dominates, allowing the model to gather sufficient evidence about different options.

Over time, as more data is collected, the variance of the distribution decreases, leading to more confident decisions and a transition towards exploitation. However, in cases where reward distributions change due to concept drift, the model intelligently reintroduces exploration, ensuring adaptability to new patterns. This is particularly beneficial in non-stationary environments where user preferences or contextual factors evolve over time.

By incorporating real-time Probabilistic Bayesian updating, algorithms ensure that decision-making remains dynamic and responsive. This characteristic is further enhanced through techniques such as decay factors and sliding windows, which allow the system to prioritize recent interactions while gradually discounting outdated data. As a result, the model maintains optimal performance even when faced with shifting distributions or unpredictable user behaviors.

Overall, real-time Ecosystem Rewards with Thompson Sampling is a robust approach for sequential decision-making, particularly in online learning and adaptive recommender systems. Future enhancements could explore hybrid strategies that integrate contextual bandits or reinforcement learning techniques to further improve adaptability and convergence speed.

---

## Custom Rewards

Source: `docs/configuration/dynamic/customrewards.mdx`
URL: https://ecosystem.ai/docs/configuration/dynamic/customrewards
Summary: Customer Rewards for Dynamic Interaction algorithms

# Introduction
It is possible to create custom rewards functions for the Dynamic Interaction algorithms. These custom rewards can impact both the scoring of the options as well as the learning of the model. Custom rewwards are supported in the Ecosystem Rewards, Baysian Probabilistic and Q-Learning algorithms. Custom rewards can be configured using either a template rewards function or by writing a custom java function and are linked to your Dynamic Interaction configuration by configuring the Rewards Function class setting of the [Plugins Deployment accordion](/docs/configuration/deployment/parameters).

## Scoring and Learning Rewards
The rewards function can return two different types of rewards: `reward` and `learning_reward`. 
- `reward` impacts the score returned by the Dynamic Interaction algorithm. This score is multiplied by the propensity score produced by the algorithm to give the score for the option. For example, in the Ecosystem Rewards algorithm, a number will be sampled from the relevant Beta distribution for the option and the sampled number will then be multiplied by `reward` to give the value for `arm_reward`.
- `learning_reward` impacts the learning of the algorithm. `learning_reward` effectively functions as weighting for each historical interaction which will be taken into account when the algorithm is training. Interactions with a higher `learning_reward` will have a larger impact on the learning than those with a lower `learning_reward`.

## Template Rewards Class
The template rewards class uses configurable Business Logic functions to calculate the rewards. The template checks for an Additional Corpora named `rewards_business_logic`. This collection should contain the name of the function to be called and the output variable to use - to cater for business logic functions which return multiple values. The `type` should also be indicated for each document, this field can be either `reward` or `learning_reward`, depending on whether the reward should impact the scoring or learning of the algorithm. An example of a `rewards_business_logic` collection is shown below:
```json
{
  "function_name": "doWork",
  "type": "reward",
  "output": "reward_value"
},
{
  "function_name": "doWork",
  "type": "learning_reward",
  "output": "learning_value"
}
```
When the Additional Corpora is linked to the [Deployment](/docs/configuration/deployment/parameters) it should be configured with `type` as the Key. The BusinessLogicReward class will use the configured Business Logic functions to produce `reward` and `learning_reward` and save the values in `params` for use in the Dynamic Interaction algorithm.
```java
package com.ecosystem.plugin.reward;

/**
 * Dynamically loaded class to calculate the reward during algorithm loop.
 * Each iteration of the algorithm loop will call this class to calculate the reward.
 * Access to all parameters is available via the params JSONObject.
 */
public class BusinessLogicReward extends RewardSuper {

    private static final Logger LOGGER = LogManager.getLogger(BusinessLogicReward.class.getName());

    public BusinessLogicReward() {
        // Constructor
    }

    public static void reward() {
        // Dynamic loader
    }

    /**
     * This method is called to calculate the reward.
     * @param params Runtime json object with all execution path variables.
     * @return Updated params
     */
    public static JSONObject reward(JSONObject params) throws KeyStoreException, NoSuchAlgorithmException, KeyManagementException {

        double reward = 1.0;
        double learning_reward = 1.0;

        JSONObject rewards = new JSONObject();
        
        try {
            /* Check if the business logic configuration is present*/
            boolean business_Logic_configuration_check = false;
            if (params.has("preloadCorpora")) {
                if (params.getJSONObject("preloadCorpora").has("rewards_business_logic")) {
                    business_Logic_configuration_check = true;
                }
            }

            /* Return the default rewards if the business logic configuration is not present*/
            if (!business_Logic_configuration_check) {
                LOGGER.error("BusinessLogicReward:E002: rewards_business_logic not found in additional corpora. Returning default rewards.");
                rewards.put("reward", reward);
                rewards.put("learning_reward", learning_reward);
                params.put("rewards", rewards);
                return params;
            }

            /* Get the business logic configuration and check if rewards and/or learning reward are configured */
            JSONObject business_logic_configuration = params.getJSONObject("preloadCorpora").getJSONObject("rewards_business_logic");
            boolean rewards_configuration_check = false;
            if (business_logic_configuration.has("reward")) {
                rewards_configuration_check = true;
            }
            boolean learning_reward_configuration_check = false;
            if (business_logic_configuration.has("learning_reward")) {
                learning_reward_configuration_check = true;
            }

            /* If neither rewards nor learning_reward are configured return the default values*/
            if (!rewards_configuration_check && !learning_reward_configuration_check) {
                LOGGER.error("BusinessLogicReward:E002: Neither reward nor learning_reward found in rewards_business_logic. Returning default rewards.");
                rewards.put("reward", reward);
                rewards.put("learning_reward", learning_reward);
                params.put("rewards", rewards);
                return params;
            }

            /* Get the reward value from the business logic function */
            if (rewards_configuration_check) {
                JSONObject rewards_configuration = business_logic_configuration.getJSONObject("reward");
                String function_name = rewards_configuration.getString("function_name");
                String output = rewards_configuration.getString("output");
                params.put("business_logic", function_name);
                params = BusinessLogic.getValues(params);
                reward = params.getJSONObject("business_logic_results").optDouble(output);
            }

            /* Get the learning_reward value from the business logic function */
            if (learning_reward_configuration_check) {
                JSONObject learning_reward_configuration = business_logic_configuration.getJSONObject("learning_reward");
                String function_name = learning_reward_configuration.getString("function_name");
                String output = learning_reward_configuration.getString("output");
                params.put("business_logic", function_name);
                params = BusinessLogic.getValues(params);
                learning_reward = params.getJSONObject("business_logic_results").optDouble(output);
            }
        } catch (Exception e) {
            LOGGER.error("BusinessLogicReward:E001: Error calculating reward using business logic, using default rewards: "+e.getMessage());
        }

        rewards.put("reward", reward);
        rewards.put("learning_reward", learning_reward);
        params.put("rewards", rewards);
        return params;
    }

}
```

## Custom Rewards Function
Custom rewards functions can be implemented in Java. The class should extend the `RewardSuper` class and add the `rewards` structure to the returned `params` object. The class can be linked to the deployment and compiled in the runtime using the workbench or python package.

The reward function will be passed the `param` object which contains all of the data being used in the scoring process. The keys in `params` which may be particularly useful for the rewards function are; `optionsDoc` which contains the details of the option currently being scored, `dataArrayFinal` which contains the details of the options which have already been scored in the current invocation, `featuresObj` which contains the data in the customer lookup and `preloadCorpora` which contains the additional corpora linked to the deployment.

The rewards function must add a `rewards` object to `params` and return `params`. The `rewards` object should contain the keys `reward` and `learning_reward` which should both be assigned a positive `double` value.
```java
package com.ecosystem.plugin.reward;

/**
 * Dynamically loaded class to calculate the reward during algorithm loop.
 * Each iteration of the algorithm loop will call this class to calculate the reward.
 * Access to all parameters is available via the params JSONObject.
 */
public class DefaultReward extends RewardSuper {

    public DefaultReward () {
        // Constructor
    }

    public static void reward() {
        // Dynamic loader
    }

    /**
     * This method is called to calculate the reward.
     * @param params Runtime json object with all execution path variables.
     * @return Updated params
     */
    public static JSONObject reward(JSONObject params) {

        double reward = 1.0;
        double learning_reward = 1.0;

        JSONObject rewards = params.optJSONObject("rewards");
        if (rewards == null)
            rewards = new JSONObject();

        rewards.put("reward", reward);
        rewards.put("learning_reward", learning_reward);
        params.put("rewards", rewards);
        return params;
    }

}
```

---

## Dynamic Interactions

Source: `docs/configuration/dynamic/index.mdx`
URL: https://ecosystem.ai/docs/configuration/dynamic
Summary: Dynamic Interactions.

# Intro

Dynamic Interactions are used to implement a class of prediction problems where the rate of change is moderate to high and model convergence is required in very short intervals without training. The dynamic interaction capability can be used for a number of use-cases include recommendations, offers, banners, nudges. Models are trained when data drift and model drift are slowly changing. But, when you dealing with cases that require faster and in some cases near real-time convergence of scores, then classical batch or off-line models are not realy suited.

This section will explain some of the key criteria to consider when deciding on using a dynamic interaction. To implement a [dynamic recommender](/docs/user_guides/dynamic) will require a number of steps. You would need a [project](/docs/configuration/project), [dynamic config](/docs/configuration/dynamic), [deployment](/docs/configuration/deployment) and [api configuration](/docs/configuration/api) to test your recommender.

## Key Features

- **Algorithms**: Multiple real-time algorithms are supported.
- **Options Generated**: Options stores are generated from the data.
- **Virtual Variables**: Virtual variables are created for the model.
- **Model Training**: Model training is performed in real-time.
- **Model Deployment**: Model deployment is performed in real-time and updated based on changing requirements.
- **Model Monitoring**: Model monitoring is performed in real-time using dashboards.

---

## Dynamic Interactions Options Store

Source: `docs/configuration/dynamic/options.mdx`
URL: https://ecosystem.ai/docs/configuration/dynamic/options
Summary: Dynamic Interactions Options Store

# Dynamic Interactions Options Store
The Options Store is generated from data or manually created and updated. Follow the process in [parameters](/docs/configuration/dynamic/parameters) to configure the options store. This store will be updated during the background process cycle. The options are generated from a feature store or data set that contains the appropriate date for your use-case.

## Options Store Example
Below is an example document from an Options Store collection:
```json
{
    "contextual_variable_two": "",
    "beta_zero": 1,
    "date_updated": "2024-06-11T08:30:39.000450Z",
    "epsilon_nominated": 1,
    "date_created": "2024-06-11T08:30:39.000450Z",
    "contextual_variable_one": "",
    "uuid": "2a4c537a-6e76-4383-aa4d-d7644e62fcfe",
    "weighting": 1,
    "alpha_zero": 1,
    "propensity": 0.218988,
    "optionKey": "Enthusiastic",
    "date_time": "2024-08-09T01:23:19.000862Z",
    "alpha": 0.218988,
    "id": "spend_personality_dynamic",
    "beta": 0.781012,
    "arm_reward": 0.00218988,
    "option": "Recommended offer is Enthusiastic",
    "customer": "none"
}
```

## Updating the Options Store
If you want to add new Options to your configuration you will need to refresh your Options Store to include these items. This can be done using either the Workbench or the python package. To add these new options they need to be added to your [set up Feature Store](/docs/configuration/dynamic/parameters). There are two approaches you can follow to perform the refresh:
1. The entire Options Store can be regenerated. This will reset all of the existing Options to the default value, in this process any new options in the Feature Store will be added to the Options Store. This will remove Options no longer present in the set up Feature store from the Options Store
2. The existing Options Store can be updated. This will only add new options in the Feature Store to the existing Options Store and will not reset the existing options. This will not remove Options no longer present in the set up Feature Store from the Options Store.

**Note:** If the Options Store is regenerated for a running use case the Options Store will continue to be updated by the runtime using the existing logs at the scheduled interval. This means that your regenerated Options Store could largely return to it's prior state once the runtime updates the Options Store.

### Workbench
The Options Store is generated in the Variables tab of the Dynamic Interaction configuration.

![image](/images/configuration/dynamic/dynamic-03-variables.png)

Use the `Generate` button to generate a new options store from the settings. Defaults are extracted from defined Feature Store and the Options Store will be generated. Use the `Update` button if you have an existing options store that needs updating. It will not re-generate the options store, but only add or update the options that are out of date. All scores will be retained and defaults will be used for added options only.

### Python
The Options Store can also be Updated or Generated using the python package. The following example shows how to update the Options Store using the python package. Here we include we give an example of updating the set up Feature Store from an Offer Matrix and then updating the Options Store.
```python
# Import packages
from prediction.apis import data_management_engine as dme
from prediction.apis import online_learning_management as ol
from prediction import jwt_access

# Connect to the ecosystem.Ai server
ecosystem_password = getpass.getpass("Enter your ecosystem password")
auth = jwt_access.Authenticate("http://ecosystem-server:3001/api", "user@ecosystem.ai", ecosystem_password)

# Configure the name of the Dynamic Interaction configuration. The uuid can also be used
deployment_id = "dynamic-recommender"

# Update your online learning set up feature store
ol.online_learning_ecosystem_rewards_setup_feature_store(
    auth,
    offer_db = "recommender_demos",
    offer_collection = "offer_matrix",
    offer_name_column = "offer",
    contextual_variables = {"segment_one":["lt-15","gt-15"],"segment_two":["lt-50","50-250","250-500","gt-500"]},
    setup_feature_store_db = "recommender_demos",
    setup_feature_store_collection = "set_up_offers"
)

# Generate a new options store
ol.generate_options_store(auth,deployment_id)

# Update the existing options store
ol.update_options_store(auth,deployment_id)
```

---

## Dynamic Parameters

Source: `docs/configuration/dynamic/parameters.mdx`
URL: https://ecosystem.ai/docs/configuration/dynamic/parameters
Summary: Dynamic Parameters

# Parameters

Dynamic Interactions are used to implement a class of prediction problem where the rate of change is moderate to high and model convergence is required in very short intervals. Each algorithm has it's own approach and set of conditions under which it will operate.

## Settings
Name your dynamic model using the same name as the project deployment step. When you change the name it will create a copy of the configuration. The Feature Store Database with Feature Store Collection/Table is used to generate the options store (use Generate option in VARIABLE tab). The option store is used by the client pulse responder to update values in real-time.

![image](/images/configuration/dynamic/dynamic-01-settings.png)

Note that dynamic configurations are stored in ecosystem_meta.dynamic_engagement. The generated properties will be updated when project is pushed.

## Engagement
This is where you select the algorithm that is best for your use case.

![image](/images/configuration/dynamic/dynamic-02-engagement.png)

### Algorithms

#### Epsilon Greedy
Epsilon-Greedy is an algorithmic technique that strikes a balance between exploring new possibilities and exploiting known advantages by introducing a random element into the decision-making process. In this approach, a fixed probability of "epsilon" (0 < epsilon < 1) is used to randomly choose either the best-known option (exploitation) or a randomly selected alternative (exploration). With a high value of epsilon, exploration dominates and new possibilities are more frequently evaluated; conversely, with a low value, exploitation takes over and proven choices are favored. This hybrid strategy allows Epsilon-Greedy to adaptively explore the solution space while still leveraging existing knowledge, facilitating efficient learning and optimization in complex environments.

#### [Bayesian Probabilistic](/docs/configuration/dynamic/baysianprobabilistic)
The Bayesian Probabilistic and Naive Bayes techniques for constructing classifiers: models that assign class labels to problem instances, represented as vectors of feature values, where the class labels are drawn from some finite set. This algorithm is integrated into the ecosystem.Ai Client Pulse Responder as it uses scoring history and update values (as defined in project deployment) and train models in real-time.

#### [Ecosystem Rewards Algorithm](/docs/configuration/dynamic/ecosystemrewards)
The Ecosystem Rewards Algorithm is a decision-making framework that harnesses the power of Thompson sampling, a probabilistic method, to balance exploration and exploitation in complex environments. By incorporating uncertainty into its decision-making process, this algorithm allows for optimal trade-offs between trying new options (exploration) and leveraging proven successes (exploitation), thereby maximizing cumulative rewards obtained by performing an action. The algorithm's unique approach takes into account not only immediate benefits but also the long-term impact on the ecosystem, enabling it to adapt and learn from its experiences in a dynamic environment, ultimately leading to improved performance and outcomes.

#### [Q-learning](/docs/configuration/dynamic/qlearning)
Q-learning is a powerful, model-free reinforcement learning algorithm that enables agents to learn the value of taking a specific action in a given state, thereby optimizing their behavior in complex environments. This approach doesn't rely on a pre-built model of the environment, which makes it particularly useful for solving problems with unpredictable transitions and rewards. By iteratively updating an estimate (Q-value) of the expected reward that can be obtained by performing a particular action in a specific state, Q-learning allows agents to learn from their experiences without requiring prior knowledge or adaptations for handling stochastic elements. This simplicity and robustness make Q-learning a widely-used and versatile technique for solving reinforcement learning problems.

#### Human Behavioral Algorithm
Human behavioral algorithms are computational frameworks that study and replicate human behavior through data-driven approaches, incorporating insights from psychology, sociology, and neuroscience. These models analyze past behaviors, cognitive processes, and social interactions to predict or simulate individual actions, often leveraging machine learning techniques. A key concept in this field is Loss Aversion, which suggests that people tend to be more motivated by avoiding losses than acquiring equivalent gains - a phenomenon where individuals are more willing to take risks to prevent losing something than they are to gain the same amount. This cognitive bias has significant implications for decision-making and risk assessment in various contexts, from finance to healthcare.

#### Network Analysis
Network analysis algorithms are computational tools used to uncover insights from complex networks or graphs by identifying patterns, relationships, and structures within them. These algorithms enable the measurement of key properties such as centrality (i.e., importance or influence), clustering (i.e., how densely connected a group is), and connectivity (i.e., the overall interconnectedness of the network). Techniques include shortest path algorithms that find the most efficient paths between nodes, community detection algorithms that identify groups of highly connected nodes, and ranking algorithms like PageRank that determine the relative importance or popularity of each node. By applying these methods, network analysis can reveal hidden dynamics, predict behavior, and inform decision-making in various domains, from social networks to transportation systems.

## Variables
There are a number of options when configuring variables. An offer/message/nudge/option/etc is needed from the feature store as configured in ```Settings```. If customer level tracking and model convergence is required then use ```params.value``` as it contains the customer number in the contact logs.

![image](/images/configuration/dynamic/dynamic-03-variables.png)

Use the ```Generate``` button to generate a new options store from the settings. Ensure that the initial feature store contains a fairly complete list of items for cold-start to be effective. Example data set: customer (Tracking Key), product (Offer Key), category (Variable One), category (Variable Two). Defaults are extracted from defined Feature Store and the Options Store will be generated.

Use ```Update``` capability if you have an existing options store that needs updating. It will not re-generate the options store, but only add or update the options that are out of date. All scores will be retained and defaults will be used for added options only.

## Options
Note that the Options table will change depending on the algorithm.

This is the option store display for Bayesian Probabilistic Approach:
![image](/images/configuration/dynamic/dynamic-04-options-nb.png)

This is the option store display for Ecosystem Rewards Approach:
![image](/images/configuration/dynamic/dynamic-04-options-reward.png)

---

## Dynamic Interaction Process

Source: `docs/configuration/dynamic/process.mdx`
URL: https://ecosystem.ai/docs/configuration/dynamic/process
Summary: Dynamic Interactions Process

## Dynamic Interactions Process

The internal process functions as follows for real-time inference:
- **Invocations [API](/docs/runtime/access) is called**: When api is called, the engine will have the configuration loaded from startup. On first load certain actions are performed to prepare environment. Housekeeping actions are also performed like [creating indexes](/docs/configuration/dynamic/process#indexes).
- **Setup [standard configuration options](/docs/runtime/configuration)**: All sequence based options that were set in the project deployment will execute for example data lookups, corpora loading.
- **Call [Pre-Predict Plugin](/docs/runtime/plugins/prepredict)**: Pre-score plugin is called to perform any data or eligibility actions. The ```params``` JSON Object is carried throughout entire execution process and values can be added for later use.
- **Determine [algorithm](/docs/configuration/dynamic/parameters)**: Each algorithm has a difference treatment process that depends on the type of data needed.
- **Generate score via [API](/docs/configuration/api)**: Score is generated based on input parameters or training features. Scores are added to ```params```.
- **Call [Post-Predict Plugin](/docs/runtime/plugins/postpredict)**: Post-score plugin is called to perform any data or eligibility actions and access to ```params``` allow for full control over all actions.
- **[Logging](/docs/runtime/logging)**: Extensive logging of scores and related items, also logging/ecosystemruntime_history is populated by algorithms that do in-line and cyclical updates. This collection can be used to understand changing scores at a fine-grained leval.
- **[Payload](/docs/runtime/apiconfiguration/productmaster)**: Generate payload to return via API.

Use pre- and post-predict logic [plugins](/docs/runtime/plugins) to extend your use of the overall capability in the platform.

## Dynamic Background Process

The background process is controlled by the ```MONITORING_DELAY``` setting as outlined in [Runtime Settings](/docs/configuration/dynamic/runtime). This process functions as follows:
- **Load configs**: Project and Dynamic configurations are loaded on first process cycle, and tested for change every subsequent cycle.
- **Process per algorithm**: Each algorithm has its own process and uses dynamic config settings and update the options store with latest scores.

## Indexes
Also note that this process will create the needed indexes automatically to ensure training and scoring performance.

#### Logging Collection Indexes

1. **`uuid` index**:
```json
{ "uuid" : 1 }
```

2. **`date_log` index**:
```json
{ "date_log" : 1 }
```

3. **`stats.predictor`, `params.value`, `date_log`, and `cache` index**:

```json
{ "stats.predictor" : 1, "params.value" : 1, "date_log" : 1, "cache" : 1 }
```

4. **`predictor`, `params.value`, and `date_log` index**:

```json
{ "predictor" : 1, "params.value" : 1, "date_log" : 1 }
```

#### Response Collection Indexes

1. **`uuid` index**:

```json
{ "uuid" : 1 }
```

2. **`date_log`, `response.offers_accepted.contextual_variable_one`, `response.offers_accepted.contextual_variable_two`, and `response.offers_accepted.offer_name` index**:

```json
{ "date_log" : 1, "response.offers_accepted.contextual_variable_one" : 1, "response.offers_accepted.contextual_variable_two" : 1, "response.offers_accepted.offer_name" : 1 }
```

3. **`predictor`, `date_log`, and `response.offers_accepted.offer_name` index**:

```json
{ "predictor" : 1, "date_log" : 1, "response.offers_accepted.offer_name" : 1 }
```

4. **`response.offers_accepted` index**:

```json
{ "response.offers_accepted" : 1 }
```

---

## Dynamic Interactions Runtime Settings

Source: `docs/configuration/dynamic/runtime.mdx`
URL: https://ecosystem.ai/docs/configuration/dynamic/runtime
Summary: Dynamic Interactions Runtime Settings

# Runtime Settings

There are a number of settings that relate to dynamic interactions. Certain algorithms will build models in real-time for example the Bayesian Probabilistic algorithm will train models in real-time if the customer level tracking is turned on.

**Real-time Models:** Bayesian Probabilistic algorithm will train models in real-time if the customer level tracking is turned on.

## Configuration
As part of the configuration of the Dynamic Interaction and the Deployment a number of artifacts will be created that are used by the ecosystem.Ai runtime. 

When the [Dynamic Interaction configuration](/docs/configuration/dynamic/parameters) is created, a document containing the details of the deployment will be created in the `ecosystem_meta.dynamic_engagement` collection. The field in the document which uniquely identifies the document is the `uuid`. Additionally, the [Options Store](/docs/configuration/dynamic/options) should be created as part of the Dynamic Interaction configuration. The Options Store is a MongoDB collection. The collection name and database where the Options Store is stored is specified in the `Settings` tab of the Dynamic Interaction configuration. This information can also be found in the document stored in the `dynamic_engagement` collection; the relevant fields are `options_store_collection` and `options_store_database`.

When the Dynamic Interaction [Deployment](/docs/configuration/deployment) is created, the Dynamic Interaction configuration is linked to the Deployment by selecting the desired Dynamic Interaction configuration in the New Knowledge corpora. When the Deployment is pushed to the runtime, the document in `dynamic_engagement` and the Options Store will be referenced as Additional Corpora in the `ecosystem.properties` file that is created.
```properties
predictor.corpora=[{"database":"mongodb","name":"dynamic_engagement","update":true,"type":"dynamic_engagement","uuid":"ef931e11-b504-4c4d-958e-47d97c8361af","db":"ecosystem_meta","table":"dynamic_engagement"},{"database":"mongodb","name":"dynamic_engagement","update":true,"type":"dynamic_engagement_options","uuid":"ef931e11-b504-4c4d-958e-47d97c8361af","db":"recommender_demos","table":"recommender_options"}]
```
If the Dynamic Interaction and Deployment configurations have been created correctly there should be no need to manually edit the `ecosystem.properties` file. However, it can be useful to review when troubleshooting.

When a Dynamic Interaction algorithm is scoring or learning it query the [Options Store](/docs/configuration/dynamic/options) and the [logs](/docs/runtime/logging) in order to get the data that is required to complete these processes. For these processes to run correctly requires that these configurations be correctly set up. There are a number of items to check if either the scoring or learning is not proceeding as expected.
- The generated `ecosystem.properties` file should contain the `dynamic_enagement` items above and the `uuid` should align with the `uuid` for the Dynamic Interaction configuration
- The `logging` collection should contain the default fields. In particular, the `predictor` and `date_log` fields and a `final_result` object containing; `final_result.result.offer_name`, `final_result.result.contextual_variable_one`, `final_result.result.contextual_variable_two` (if contextual variables are used in the configuration). The `api_params.customer` field should also be present if any sort of customer level processing is being used. These fields should all be present if the default `getTopScores` function is used in the post scoring logic
- The `predictor` field in the logging collection should be the same as the name of the Dynamic Interaction configuration
- The post scoring logic may be filtering all the offers out. This can be checked by using the debugging functionality in IntelliJ or by checking the runtime logs to see the number of options passed to the post scoring logic

## Processing Interval
All algorithms have a background process that train models and update the options store. This process is controlled by an environmental variable:
```text
MONITORING_DELAY=120
```
The internal default is 240 seconds if the variable is not set. If you have multiple instances of a use-case running, only set the variable for one instance and disable for all others by setting the time to a very large number.

## Considerations
The background process will interrogate the priors as recorded in the runtime logs and responses. This means that the settings for time window and historical count can have a big impact on your processing time and cost. If you dynamic interactions are slow and infrequent then the settings will not be as impactful as a high-volume engagement environment.

![image](/images/configuration/dynamic/dynamic-05.png)

---

## Architecture

Source: `docs/configuration/generative/architecture.mdx`
URL: https://ecosystem.ai/docs/configuration/generative/architecture
Summary: Generative Architecture

# Generative Architecture

The generative architecture is a collection of components that work together to generate data, models, and predictions. The architecture is designed to be flexible and scalable, allowing you to build and deploy generative models quickly and easily.

---

## Chat Approaches

Source: `docs/configuration/generative/chat.mdx`
URL: https://ecosystem.ai/docs/configuration/generative/chat
Summary: Chat Approaches

# Chat Approaches

There are several approaches to building chatbots and virtual assistants. ecosystem.Ai provides a range of tools and features to help you build chatbots and virtual assistants quickly and easily. Here are some of the approaches you can take when building chatbots and virtual assistants with ecosystem.Ai:

---

## Chat to SQL

Source: `docs/configuration/generative/chat_sql.mdx`
URL: https://ecosystem.ai/docs/configuration/generative/chat_sql
Summary: Chat to SQL

# Chat to SQL

Chat to SQL is a feature that allows you to convert natural language queries into SQL queries. This feature is useful for building chatbots, virtual assistants, and other applications that require users to interact with a database using natural language.

---

## Fact Injection

Source: `docs/configuration/generative/facts.mdx`
URL: https://ecosystem.ai/docs/configuration/generative/facts
Summary: Fact Injection

# Fact Injection

Fact Injection is a feature that allows you to inject facts using models. This feature is useful for building chatbots, virtual assistants, and other applications that require users to interact with a database using natural language. Call ecosystem Runtime API's and inject facts into various interfaces using the agent frameworks.

There are a number of default implementation of the fact injection framework. These implementations are used to inject facts into the RAG model. The default implementations are:
- **Prompt Library Processing**: This process use facts from your data and process a prompt from the library to inject facts into your database.
- **Retrieval Augmented Generation**: This process uses facts from your data to process a prompt and return the results in a chat window.
- **Chat to SQL**: This process analyzes your request and extract data from your database. It then returns the results in a chat window.

## Prompt Library Processing

The Prompt Library Processing is a process that uses facts from your data and process a prompt from the library to inject facts into your database. This process is useful for building chatbots, virtual assistants, and other applications that require generated content to be added to your data sets.

![Prompt Library](/images/configuration/generative/prompt_library.png)

Test your prompt by providing sample data in the ```TEXT Sample``` window and clicking **Process Prompt** button. For the prompt processing optuon you don;t need to provide the ```<PROMPT>``` and ```</PROMPT>``` tags. These are needed for the embedded prompt processing for example the MongoDB pipeline generator in Feature Engineering.

![Prompt Library Processing](/images/configuration/generative/prompt_process.png)

In order to use a prompt from the library, navigate to the Utilities option and select the **Process Prompt** option from dropdown. Provide the processing parameters and click **Process** button. The processing parameters are:
- **Database**: The database to use for processing the prompt.
- **Collection**: The collection to use for processing the prompt.
- **Field**: The field/s to use for processing the prompt, read the description on the tooltip.
- **Pipeline**: The MongoDB pipeline to use for extracting processing data.
- **Prompt ID**: The prompt id from the prompt library.

The result will be processed into a new collection as provided.

---

## Generative Fact-Injection Tools and Plugins

Source: `docs/configuration/generative/index.mdx`
URL: https://ecosystem.ai/docs/configuration/generative
Summary: Generative Fact-Injection Tools and Plugins

# Generative Fact-Injection Tools and Plugins

**Note:** The ecosystem.Ai Generative FAct-Injection Framework is used to inject facts into the RAG model. This feature is useful for building chatbots, virtual assistants, and other applications that require users to interact with a database using natural language. Call ecosystem Runtime API's and inject facts into the RAG model.

---

## Generative Models

Source: `docs/configuration/generative/models.mdx`
URL: https://ecosystem.ai/docs/configuration/generative/models
Summary: Generative Models

# Generative Models

Generative models are a class of models that generate data. They are used in a variety of applications, including image generation, text generation, and data augmentation. Generative models are typically trained on a large dataset and learn to generate new data that is similar to the training data. This page provides an overview of generative models and how they can be used in ecosystem.Ai.

## Custom OpenAI-Compatible Model Gateways

ecosystem-server and Workbench2 can route generative model calls through a client-owned OpenAI-compatible gateway. Configure the model connection on the server side so browser and Workbench callers do not send upstream LLM secrets.

For a gateway shaped like:

```text
https://gateway-base-url/deployment/qwen-qwen3-5-122b-a10b/v1/chat/completions
```

set the deployment root in `CHAT_SERVER` and let ecosystem.Ai append `/v1/chat/completions`:

```bash
CHAT_SERVER=https://gateway-base-url/deployment/qwen-qwen3-5-122b-a10b
CHAT_SERVER_MODEL=Qwen/Qwen3.5-122B-A10B
CHAT_SERVER_KEY=api-key input-key
```

`CHAT_SERVER_KEY` is backward compatible:

```text
CHAT_SERVER_KEY=input-key          -> Authorization: Bearer input-key
CHAT_SERVER_KEY=Bearer input-key   -> Authorization: Bearer input-key
CHAT_SERVER_KEY=Basic input-key    -> Authorization: Basic input-key
CHAT_SERVER_KEY=api-key input-key  -> api-key: input-key
CHAT_SERVER_KEY=x-api-key input-key -> x-api-key: input-key
```

Use key-only `CHAT_SERVER_KEY=<token>` for existing Bearer-token gateways. Use the prefixed form only when the client gateway requires a different header name, such as `api-key`.

OpenAI-compatible request fields that are not part of the core ecosystem.Ai routing metadata can pass through to the gateway. For example, gateways that support Qwen thinking controls can receive:

```json
{
  "model": "Qwen/Qwen3.5-122B-A10B",
  "messages": [
    {
      "role": "user",
      "content": "explain blue in 100 words"
    }
  ],
  "chat_template_kwargs": {
    "enable_thinking": false
  }
}
```

Internal routing and secret fields are removed before the request is sent upstream.

---

## Vector Stores

Source: `docs/configuration/generative/vector_stores.mdx`
URL: https://ecosystem.ai/docs/configuration/generative/vector_stores
Summary: Vector Stores

# Vector Stores

Vector stores are a type of data store that is optimized for storing and querying vectors. They are commonly used in machine learning applications to store embeddings, feature vectors, and other types of vector data. Vector stores are designed to efficiently store and query high-dimensional vectors, making them ideal for use cases such as similarity search, recommendation systems, and natural language processing.

---

## Intro

Source: `docs/configuration/index.mdx`
URL: https://ecosystem.ai/docs/configuration
Summary: Consult our advanced configuration guides for ecosystem.Ai

# Configuration

ecosystem.Ai is a meta-data driven worker architecture prediction platform. Base configurations are all stored in ecosystem_meta database across many collections.

There are many ways to configure ecosystem.Ai, including:
- Workbench configuration
- Runtime plugins in Java
- Python pipelines

The Configuration section of the documentation covers the detail of the configuration options available in the ecosystem.Ai platform. These configurations are largely illustrated using the Workbench, the same configurations can be created using any of the other available interfaces.

For detailed guides on creating configurations for a specific case, see the [User Guides](/docs/user_guides).

---

## Project / Module

Source: `docs/configuration/project.mdx`
URL: https://ecosystem.ai/docs/configuration/project
Summary: The project definition is at the core of describing and configuring your use-case for deployment. Deployment configurations and related properties are used to drive your pipelines and can be exported as assets for deployment to different environments.

# Project Definition

**Project Name and Description**

Describing and naming your project is essential for version tracking, .

**Setup**

Project description and core documentation.
![image](/images/configuration/project/project-description.png)

Project assets that are used to create a module.
![image](/images/configuration/project/project-assets.png)

Importing modules as projects.
![image](/images/configuration/project/project-import.png)

**Properties**

## Settings

Here's a snapshot of what a comprehensive project configuration might look like, including many of the options and features to be discussed.

```json
{
    "project_collections": [
        {
            "database": "master",
            "collection": "bank_customer"
        },
        {
            "database": "master",
            "collection": "bank_transactions"
        },
        {
            "database": "master",
            "collection": "bank_transactions_personality"
        },
        {
            "database": "master",
            "collection": "bank_transactions_personality_bydate"
        },
        {
            "database": "master",
            "collection": "bank_transactions_personality_options"
        },
        {
            "database": "master",
            "collection": "bank_transactions_money"
        },
        {
            "database": "master",
            "collection": "spend_personality__network"
        },
        {
            "database": "master",
            "collection": "spend_personality__network_config"
        },
        {
            "database": "master",
            "collection": "spend_personality__network_selector"
        },
        {
            "database": "master",
            "collection": "spend_personality__network_selector_options"
        },
        {
            "database": "master",
            "collection": "bank_transactions_reliability"
        }
    ],
    "project_files": [
        {
            "name": "bank_transactions.csv",
            "absolutePath": "/data/bank_transactions.csv",
            "lastModified": 1711192602491,
            "size": 121.429,
            "canRead": true,
            "isDirectory": false
        },
        {
            "name": "bank_customer.csv",
            "absolutePath": "/data/bank_customer.csv",
            "lastModified": 1711192601868,
            "size": 0.18,
            "canRead": true,
            "isDirectory": false
        },
        {
            "name": "spend_personality.txt",
            "absolutePath": "/data/spend_personality.txt"
        },
        {
            "name": "money_personality.txt",
            "absolutePath": "/data/money_personality.txt"
        },
        {
            "name": "config",
            "date": "2024-04-28",
            "absolutePath": "/data/config"
        },
        {
            "name": "bank_customer__list.csv",
            "date": "2024-04-28",
            "absolutePath": "/data/bank_customer__list.csv"
        }
    ],
    "project_networks": [
        {
            "date": "2023-06-15",
            "uuid": "ab823cdf-9ddd-404a-90f8-19d5fe68639c",
            "description": "bank_customer"
        },
        {
            "date": "2024-03-19",
            "uuid": "0acb461e-ceb6-45fc-b097-719ce415a5a1",
            "description": "bank_transactions"
        }
    ],
    "purpose": "intervention",
    "configuration": "\"Spend personality\" refers to the characterization of an individual's spending habits based on their bank transactions. This type of analysis, leveraging AI and Machine Learning, provides valuable insights into customer behavior, preferences, and spending patterns over time. By analyzing the frequency, amount, and type of purchases, a bank can categorize their customers into different spending personality types. \n\nFor \"Money Personality\" analyzing customer transaction patterns against profiles, banks can better understand their customers’ money habits and financial management strategies. This can then drive personalized product recommendations, improve customer engagement, and help in more effectively managing financial risks.\n\nFor example, some customers may be identified as big spenders, frequent shoppers, savers, or even impulse buyers based on their demonstrated spending behaviors. These spending personalities can then be utilized for developing personalized marketing strategies, providing tailored financial advice, or enhancing customer service. It can help banks understand their customers better, predict their needs, and build stronger, more profitable relationships with them.\n\nProcess spending personality using Feature Engineering enrichment option:\n1. Use customer transaction data and perform category enrichment.\n2. Then run Ecosystem Spending Personality to generate new collections with scores assigned to customers.\n3. API returns scores per customer.\n\nNotes on 0.09.3:\n1. Network selector configured to allow for different usage options.\n2. Updated Text to SQL engine.\n3. Updates across all configurations for consistency.",
    "project_notebooks": [
        {
            "name": "Spend Personality 0.09",
            "date": "2024-04-15"
        }
    ],
    "project_calendars": [
        {
            "name": "master",
            "date": "NA"
        }
    ],
    "project_data_wizards": [
        {
            "title": "Spend Personality",
            "date": "NA"
        }
    ],
    "project_predictors": [
        {
            "date": "2024-03-20",
            "predict_id": "bank_customer__personality_auto"
        },
        {
            "date": "2024-03-23",
            "predict_id": "bank_transactions__personality_auto"
        }
    ],
    "userid": "ecosystem",
    "uuid": "20bdf5c6-be30-4fdd-8c43-4ec1663e6571",
    "project_end_date": "2026-05-02",
    "undefined": [
        {
            "name": "Spend Personality 0.09.1",
            "date": "2024-04-15"
        }
    ],
    "project_cpr_client_analytics": [
        {
            "name": "spend_personality_590",
            "date": "2024-04-16"
        }
    ],
    "project_id": "Spend Personality 0.09.4",
    "project_owner": "ecosystem",
    "presto_connections": [
        {
            "name": "Postgres-bank_transactions-select",
            "date": "2024-03-30"
        },
        {
            "name": "Postgres-bank_transactions",
            "date": "2024-03-30"
        },
        {
            "name": "Postgres-bank_transactions-drop",
            "date": "2024-03-30"
        }
    ],
    "project_models": [
        {
            "parameters[21].actual_value": "---",
            "output.validation_metrics.model_category": "Multinomial",
            "output.validation_metrics.logloss": 0.4969054048712993,
            "output.validation_metrics.RMSE": 0.3961064072904806,
            "response_column_name": "personality",
            "output.validation_metrics.mean_per_class_error": 0.4,
            "output.end_time": 1710851747225,
            "model_id.name": "GLM_1_AutoML_2_20240319_123546",
            "output.validation_metrics.MSE": 0.15690028589657207,
            "data_frame.name": "AutoML_2_20240319_123546_training_bank_customer0_8.hex",
            "output.model_summary.data[3][0]": "Ridge ( lambda = 0.01456 )",
            "algo": "glm",
            "parameters[22].actual_value": "---",
            "output.validation_metrics.r2": 0.04324034294718049
        },
        {
            "parameters[21].actual_value": 20,
            "output.validation_metrics.model_category": "Multinomial",
            "output.validation_metrics.logloss": 0.5139734681851796,
            "output.validation_metrics.RMSE": 0.4038291760955808,
            "response_column_name": "personality",
            "output.validation_metrics.mean_per_class_error": 0.3984280701754386,
            "output.end_time": 1710851749153,
            "model_id.name": "XRT_1_AutoML_2_20240319_123546",
            "output.validation_metrics.MSE": 0.16307800346603557,
            "data_frame.name": "AutoML_2_20240319_123546_training_bank_customer0_8.hex",
            "output.model_summary.data[3][0]": 163134,
            "algo": "drf",
            "parameters[22].actual_value": 1,
            "output.validation_metrics.r2": 0.0055693412064614645
        },
        {
            "parameters[21].actual_value": 15,
            "output.validation_metrics.model_category": "Multinomial",
            "output.validation_metrics.logloss": 0.00504091424119842,
            "output.validation_metrics.RMSE": 0.03350626288016139,
            "response_column_name": "personality_description",
            "output.validation_metrics.mean_per_class_error": 0.0012288059914334056,
            "output.end_time": 1711196621263,
            "model_id.name": "GBM_1_AutoML_1_20240323_121956",
            "output.validation_metrics.MSE": 0.001122669652194481,
            "data_frame.name": "AutoML_1_20240323_121956_training_bank_transactions__enriched.hex",
            "output.model_summary.data[3][0]": 1591898,
            "algo": "gbm",
            "parameters[22].actual_value": 100,
            "output.validation_metrics.r2": 0.9987902818019092
        },
        {
            "parameters[21].actual_value": true,
            "output.validation_metrics.model_category": "Multinomial",
            "output.validation_metrics.logloss": 0.5281917248961325,
            "output.validation_metrics.RMSE": 0.4061316271799821,
            "response_column_name": "personality",
            "output.validation_metrics.mean_per_class_error": 0.39896140350877196,
            "output.end_time": 1710851749497,
            "model_id.name": "DeepLearning_1_AutoML_2_20240319_123546",
            "output.validation_metrics.MSE": 0.16494289859585998,
            "data_frame.name": "AutoML_2_20240319_123546_training_bank_customer0_8.hex",
            "output.model_summary.data[3][0]": "Input",
            "algo": "deeplearning",
            "parameters[22].actual_value": true,
            "output.validation_metrics.r2": -0.005802571946242674
        },
        {
            "parameters[21].actual_value": 20,
            "output.validation_metrics.model_category": "Multinomial",
            "output.validation_metrics.logloss": 0.54451602038775,
            "output.validation_metrics.RMSE": 0.4116196202612879,
            "response_column_name": "personality",
            "output.validation_metrics.mean_per_class_error": 0.3879578947368421,
            "output.end_time": 1710851747910,
            "model_id.name": "DRF_1_AutoML_2_20240319_123546",
            "output.validation_metrics.MSE": 0.16943071178404687,
            "data_frame.name": "AutoML_2_20240319_123546_training_bank_customer0_8.hex",
            "output.model_summary.data[3][0]": 394707,
            "algo": "drf",
            "parameters[22].actual_value": 1,
            "output.validation_metrics.r2": -0.033168733724158406
        },
        {
            "parameters[21].actual_value": 16,
            "output.validation_metrics.model_category": "Multinomial",
            "output.validation_metrics.logloss": 0.509847958643211,
            "output.validation_metrics.RMSE": 0.40153470072547653,
            "response_column_name": "personality",
            "output.validation_metrics.mean_per_class_error": 0.3989894736842105,
            "output.end_time": 1710851749737,
            "model_id.name": "GBM_grid_1_AutoML_2_20240319_123546_model_1",
            "output.validation_metrics.MSE": 0.16123011588669803,
            "data_frame.name": "AutoML_2_20240319_123546_training_bank_customer0_8.hex",
            "output.model_summary.data[3][0]": 87275,
            "algo": "gbm",
            "parameters[22].actual_value": 100,
            "output.validation_metrics.r2": 0.016837544298485163
        }
    ],
    "project_start_date": "2024-05-02",
    "module_metadata": {
        "reviewed_by": "ecosystem.Ai",
        "image_path": "https://ecosystem.ai/wp-content/uploads/2022/05/ecosystem_black-transparent.png",
        "icon_path": "https://ecosystem.ai/wp-content/uploads/2022/05/ecosystem_black-transparent.png",
        "name": "Spend_Personality_0.09.4",
        "module_owner": "ecosystem.Ai",
        "description": "\"Spend personality\" refers to the characterization of an individual's spending habits based on their bank transactions. This type of analysis, leveraging AI and Machine Learning, provides valuable insights into customer behavior, preferences, and spending patterns over time. By analyzing the frequency, amount, and type of purchases, a bank can categorize their customers into different spending personality types. \n\nFor \"Money Personality\" analyzing customer transaction patterns against profiles, banks can better understand their customers’ money habits and financial management strategies. This can then drive personalized product recommendations, improve customer engagement, and help in more effectively managing financial risks.\n\nFor example, some customers may be identified as big spenders, frequent shoppers, savers, or even impulse buyers based on their demonstrated spending behaviors. These spending personalities can then be utilized for developing personalized marketing strategies, providing tailored financial advice, or enhancing customer service. It can help banks understand their customers better, predict their needs, and build stronger, more profitable relationships with them.\n\nProcess spending personality using Feature Engineering enrichment option:\n1. Use customer transaction data and perform category enrichment.\n2. Then run Ecosystem Spending Personality to generate new collections with scores assigned to customers.\n3. API returns scores per customer.",
        "categories": "banking, personality, spend, spending, money, transactions",
        "created_by": "ecosystem.Ai",
        "version": "0.09.4",
        "fact_sheet_path": "https://ecosystem.ai/modules",
        "contact_email": "amy@ecosystem.ai",
        "status": "released"
    },
    "project_type": "predict",
    "deployment_step": [
        {
            "budget_tracker": {
                "budget_parameters_database": "",
                "budget_parameters_datasource": "mongodb",
                "budget_id": "",
                "description": "",
                "budget_parameters_table_collection": "",
                "x_axis_datasource": "offer_matrix",
                "x_axis_name": "",
                "acc_namesource": "",
                "y_axis_name": "",
                "y_axis_namesource": "",
                "acc_name": "",
                "budget_strategy": "",
                "x_axis_namesource": "",
                "acc_datasource": "offer_matrix",
                "y_axis_datasource": "offer_matrix"
            },
            "date": "2024-04-08",
            "complexity": "medium",
            "plugins": {
                "post_score_class_text": "PostScoreBasic.java",
                "post_score_class_code": "",
                "api_endpoint_code": "",
                "pre_score_class_text": "",
                "pre_score_class_code": ""
            },
            "model_configuration": {
                "model_note": "",
                "models_load": "GBM_1_AutoML_1_20240323_121956.zip",
                "model_outline": "predict"
            },
            "setup_offer_matrix": {
                "offer_lookup_id": "",
                "database": "",
                "table_collection": "",
                "datasource": "mongodb"
            },
            "project_status": "experiment",
            "description": "Model driven personality detection: (http://ecosystem-runtime2:8092)",
            "multi_armed_bandit": {
                "epsilon": "",
                "duration": 0,
                "pulse_responder_uuid": ""
            },
            "whitelist": {
                "table_collection": "",
                "datasource": "mongodb",
                "database": ""
            },
            "version": "0.1",
            "model_selector": {
                "selector_column": "",
                "lookup": "",
                "database": "",
                "selector": "",
                "table_collection": "",
                "datasource": "mongodb"
            },
            "performance_expectation": "high",
            "pattern_selector": {
                "pattern": "",
                "duration": ""
            },
            "paths": {
                "logging_collection_response": "ecosystemruntime_response",
                "logging_collection": "ecosystemruntime",
                "logging_database": "logging",
                "mongo_server_port": "ecosystem-server:54445",
                "scoring_engine_path_prod": "http://ecosystem-runtime3:8091",
                "models_path": "/data/deployed/",
                "mongo_connect": "mongodb://ecosystem_user:EcoEco321@ecosystem-server:54445/?authSource=admin",
                "data_path": "/data/",
                "build_server_path": "http://ecosystem:EcoEco321@build.ecosystem.ai:8080/job/ecosystem-runtime/buildWithParameters?token=114a827a8ada36685a1f3958a6059cd677&BRANCH=spendpersonality&EMAIL=user@ecosystem.ai&CONTAINER_NAME=ecosystem-runtime-spendpersonality",
                "scoring_engine_path_dev": "http://ecosystem-runtime2:8092",
                "aws_container_resource": "",
                "scoring_engine_path_test": "http://ecosystem-runtime2:8091",
                "git_repo_path_branch": "spendpersonality",
                "download_path": "https://hub.docker.com/u/ecosystemai",
                "mongo_ecosystem_password": "EcoEco321",
                "mongo_ecosystem_user": "ecosystem_user",
                "git_repo_path": "https://github.com/ecogenetic/ecosystem-runtime.git"
            },
            "updated_by": "admin@ecosystem.ai",
            "options": {
                "is_offer_matrix": false,
                "is_multi_armed_bandit": false,
                "is_enable_plugins": true,
                "is_whitelist": false,
                "is_corpora": false,
                "is_custom_api": false,
                "is_budget_tracking": false,
                "is_params_from_data_source": true,
                "is_model_selector": false,
                "is_generate_dashboards": false,
                "is_pattern_selector": false,
                "is_prediction_model": true
            },
            "corpora": {
                "corpora": ""
            },
            "parameter_access": {
                "lookup": {
                    "value": 123,
                    "key": "customer"
                },
                "create_virtual_variables": false,
                "database": "master",
                "datasource": "mongodb",
                "lookup_fields": [
                    "age",
                    "education",
                    "gender",
                    "language",
                    "maritalStatus",
                    "numberOfAddresses",
                    "numberOfChildren",
                    "numberOfProducts",
                    "proprtyOwnership"
                ],
                "lookup_defaults": "",
                "virtual_variables": [],
                "table_collection": "bank_customer",
                "fields": "proprtyOwnership,numberOfChildren,maritalStatus,language,numberOfProducts,age,numberOfAddresses,education,gender"
            },
            "updated_date": "2024-06-10T13:19:34.099Z",
            "deployment_id": "spend_personality_model"
        },
        {
            "budget_tracker": {
                "budget_parameters_database": "",
                "budget_parameters_datasource": "mongodb",
                "budget_id": "",
                "description": "",
                "budget_parameters_table_collection": "",
                "x_axis_datasource": "offer_matrix",
                "x_axis_name": "",
                "acc_namesource": "",
                "y_axis_name": "",
                "y_axis_namesource": "",
                "acc_name": "",
                "budget_strategy": "",
                "x_axis_namesource": "",
                "acc_datasource": "offer_matrix",
                "y_axis_datasource": "offer_matrix"
            },
            "date": "2024-04-15",
            "complexity": "low",
            "plugins": {
                "post_score_class_text": "PostScoreMoneyPersonality.java",
                "post_score_class_code": "",
                "api_endpoint_code": "",
                "pre_score_class_text": "",
                "pre_score_class_code": ""
            },
            "model_configuration": {},
            "setup_offer_matrix": {
                "offer_lookup_id": "",
                "database": "",
                "table_collection": "",
                "datasource": "mongodb"
            },
            "project_status": "experiment",
            "description": "Money personality detection.",
            "multi_armed_bandit": {
                "epsilon": "",
                "duration": 0,
                "pulse_responder_uuid": ""
            },
            "whitelist": {
                "table_collection": "",
                "datasource": "mongodb",
                "database": ""
            },
            "version": "0.04",
            "model_selector": {
                "selector_column": "",
                "lookup": "",
                "database": "",
                "selector": "",
                "table_collection": "",
                "datasource": "mongodb"
            },
            "performance_expectation": "high",
            "pattern_selector": {
                "pattern": "",
                "duration": ""
            },
            "paths": {
                "logging_collection_response": "ecosystemruntime_response",
                "logging_collection": "ecosystemruntime",
                "logging_database": "logging",
                "mongo_server_port": "ecosystem-server:54445",
                "scoring_engine_path_prod": "http://ecosystem-runtime3:8091",
                "models_path": "/data/deployed/",
                "mongo_connect": "mongodb://ecosystem_user:EcoEco321@ecosystem-server:54445/?authSource=admin",
                "data_path": "/data/",
                "build_server_path": "http://ecosystem:EcoEco321@build.ecosystem.ai:8080/job/ecosystem-runtime/buildWithParameters?token=114a827a8ada36685a1f3958a6059cd677&BRANCH=spendpersonality&EMAIL=user@ecosystem.ai&CONTAINER_NAME=ecosystem-runtime-spendpersonality",
                "scoring_engine_path_dev": "http://ecosystem-runtime2:8092",
                "aws_container_resource": "",
                "scoring_engine_path_test": "http://ecosystem-runtime2:8091",
                "git_repo_path_branch": "spendpersonality",
                "download_path": "https://hub.docker.com/u/ecosystemai",
                "mongo_ecosystem_password": "EcoEco321",
                "mongo_ecosystem_user": "ecosystem_user",
                "git_repo_path": "https://github.com/ecogenetic/ecosystem-runtime.git"
            },
            "updated_by": "admin@ecosystem.ai",
            "options": {
                "is_offer_matrix": false,
                "is_multi_armed_bandit": false,
                "is_enable_plugins": true,
                "is_whitelist": false,
                "is_corpora": false,
                "is_custom_api": false,
                "is_budget_tracking": false,
                "is_params_from_data_source": true,
                "is_model_selector": false,
                "is_generate_dashboards": false,
                "is_pattern_selector": false,
                "is_prediction_model": false
            },
            "corpora": {
                "corpora": ""
            },
            "parameter_access": {
                "lookup": {
                    "value": 123,
                    "key": "customer"
                },
                "create_virtual_variables": false,
                "database": "master",
                "datasource": "mongodb",
                "lookup_fields": [
                    "adventurer",
                    "adventurous",
                    "borrower",
                    "carefree",
                    "cautious",
                    "conservative",
                    "customer",
                    "indulger",
                    "item",
                    "personality",
                    "personality_score",
                    "prudent",
                    "total_spend",
                    "trait"
                ],
                "lookup_defaults": "",
                "virtual_variables": [],
                "table_collection": "bank_transactions_money",
                "fields": "customer,total_spend,conservative,indulger,adventurer,borrower,cautious,carefree,personality,personality_score,prudent,adventurous,trait,item"
            },
            "updated_date": "2024-06-10T10:51:57.726Z",
            "deployment_id": "money_personality"
        },
        {
            "budget_tracker": {
                "budget_parameters_database": "",
                "budget_parameters_datasource": "mongodb",
                "budget_id": "",
                "description": "",
                "budget_parameters_table_collection": "",
                "x_axis_datasource": "offer_matrix",
                "x_axis_name": "",
                "acc_namesource": "",
                "y_axis_name": "",
                "y_axis_namesource": "",
                "acc_name": "",
                "budget_strategy": "",
                "x_axis_namesource": "",
                "acc_datasource": "offer_matrix",
                "y_axis_datasource": "offer_matrix"
            },
            "date": "2024-04-01",
            "complexity": "medium",
            "plugins": {
                "post_score_class_text": "PlatformDynamicEngagement.java",
                "post_score_class_code": "",
                "api_endpoint_code": "",
                "pre_score_class_text": "",
                "pre_score_class_code": ""
            },
            "model_configuration": {},
            "setup_offer_matrix": {
                "offer_lookup_id": "",
                "database": "",
                "table_collection": "",
                "datasource": "mongodb"
            },
            "project_status": "experiment",
            "description": "Dynamic personality based on base behaviors: (http://ecosystem-runtime3:8093)",
            "multi_armed_bandit": {
                "epsilon": "0.20",
                "duration": 0,
                "pulse_responder_uuid": "2a4c537a-6e76-4383-aa4d-d7644e62fcfe"
            },
            "whitelist": {
                "table_collection": "",
                "datasource": "mongodb",
                "database": ""
            },
            "version": "0.2",
            "model_selector": {
                "selector_column": "",
                "lookup": "",
                "database": "",
                "selector": "",
                "table_collection": "",
                "datasource": "mongodb"
            },
            "performance_expectation": "high",
            "pattern_selector": {
                "pattern": "",
                "duration": ""
            },
            "paths": {
                "logging_collection_response": "ecosystemruntime_response",
                "logging_collection": "ecosystemruntime",
                "logging_database": "logging",
                "mongo_server_port": "ecosystem-server:54445",
                "scoring_engine_path_prod": "http://ecosystem-runtime3:8093",
                "models_path": "/data/deployed/",
                "mongo_connect": "mongodb://ecosystem_user:EcoEco321@ecosystem-server:54445/?authSource=admin",
                "data_path": "/data/",
                "build_server_path": "http://ecosystem:EcoEco321@build.ecosystem.ai:8080/job/ecosystem-runtime/buildWithParameters?token=114a827a8ada36685a1f3958a6059cd677&BRANCH=spendpersonality&EMAIL=user@ecosystem.ai&CONTAINER_NAME=ecosystem-runtime-spendpersonality",
                "scoring_engine_path_dev": "http://ecosystem-runtime3:8093",
                "aws_container_resource": "",
                "scoring_engine_path_test": "http://ecosystem-runtime3:8093",
                "git_repo_path_branch": "spendpersonality",
                "download_path": "https://hub.docker.com/u/ecosystemai",
                "mongo_ecosystem_password": "EcoEco321",
                "mongo_ecosystem_user": "ecosystem_user",
                "git_repo_path": "https://github.com/ecogenetic/ecosystem-runtime.git"
            },
            "updated_by": "admin@ecosystem.ai",
            "options": {
                "is_offer_matrix": false,
                "is_multi_armed_bandit": true,
                "is_enable_plugins": true,
                "is_whitelist": false,
                "is_corpora": false,
                "is_custom_api": false,
                "is_budget_tracking": false,
                "is_params_from_data_source": true,
                "is_model_selector": false,
                "is_generate_dashboards": false,
                "is_pattern_selector": false,
                "is_prediction_model": false
            },
            "corpora": {
                "corpora": ""
            },
            "parameter_access": {
                "lookup": {
                    "value": 123,
                    "key": "customer"
                },
                "create_virtual_variables": false,
                "database": "master",
                "datasource": "mongodb",
                "lookup_fields": [
                    "Extrovert",
                    "Introvert",
                    "segment_enum"
                ],
                "lookup_defaults": "{proprtyOwnership:1,numberOfChildren:1,maritalStatus:1,numberOfProducts:1,age:1,education:1,language:1}",
                "virtual_variables": [],
                "table_collection": "bank_customer",
                "fields": "proprtyOwnership,numberOfChildren,maritalStatus,language,numberOfProducts,region,age,numberOfAddresses,education,gender,changeIndicatorThree,changeIndicatorSix,customer,segment_enum,segment,Extrovert,Introvert,personality,regiojn"
            },
            "updated_date": "2024-06-11T08:28:34.811Z",
            "deployment_id": "spend_personality_dynamic"
        },
        {
            "budget_tracker": {
                "budget_parameters_database": "",
                "budget_parameters_datasource": "mongodb",
                "budget_id": "",
                "description": "",
                "budget_parameters_table_collection": "",
                "x_axis_datasource": "offer_matrix",
                "x_axis_name": "",
                "acc_namesource": "",
                "y_axis_name": "",
                "y_axis_namesource": "",
                "acc_name": "",
                "budget_strategy": "",
                "x_axis_namesource": "",
                "acc_datasource": "offer_matrix",
                "y_axis_datasource": "offer_matrix"
            },
            "date": "2024-04-15",
            "complexity": "low",
            "plugins": {
                "post_score_class_text": "PostScoreSpendingPersonality.java",
                "post_score_class_code": "",
                "api_endpoint_code": "",
                "pre_score_class_text": "",
                "pre_score_class_code": ""
            },
            "model_configuration": {},
            "setup_offer_matrix": {
                "offer_lookup_id": "",
                "database": "",
                "table_collection": "",
                "datasource": "mongodb"
            },
            "project_status": "experiment",
            "description": "Determine spend personality for customer: (http://ecosystem-runtime4:8094)",
            "multi_armed_bandit": {
                "epsilon": "",
                "duration": 0,
                "pulse_responder_uuid": ""
            },
            "whitelist": {
                "table_collection": "",
                "datasource": "mongodb",
                "database": ""
            },
            "version": "0.04",
            "model_selector": {
                "selector_column": "",
                "lookup": "",
                "database": "",
                "selector": "",
                "table_collection": "",
                "datasource": "mongodb"
            },
            "performance_expectation": "high",
            "pattern_selector": {
                "pattern": "",
                "duration": ""
            },
            "paths": {
                "logging_collection_response": "ecosystemruntime_response",
                "logging_collection": "ecosystemruntime",
                "logging_database": "logging",
                "mongo_server_port": "ecosystem-server:54445",
                "scoring_engine_path_prod": "http://ecosystem-runtime3:8091",
                "models_path": "/data/deployed/",
                "mongo_connect": "mongodb://ecosystem_user:EcoEco321@ecosystem-server:54445/?authSource=admin",
                "data_path": "/data/",
                "build_server_path": "http://ecosystem:EcoEco321@build.ecosystem.ai:8080/job/ecosystem-runtime/buildWithParameters?token=114a827a8ada36685a1f3958a6059cd677&BRANCH=spendpersonality0.08&EMAIL=user@ecosystem.ai&CONTAINER_NAME=ecosystem-runtime-spendpersonality0.08",
                "scoring_engine_path_dev": "http://ecosystem-runtime4:8094",
                "aws_container_resource": "",
                "scoring_engine_path_test": "http://ecosystem-runtime2:8091",
                "git_repo_path_branch": "spendpersonality0.08",
                "download_path": "https://hub.docker.com/u/ecosystemai",
                "mongo_ecosystem_password": "EcoEco321",
                "mongo_ecosystem_user": "ecosystem_user",
                "git_repo_path": "https://github.com/ecogenetic/ecosystem-runtime.git"
            },
            "updated_by": "admin@ecosystem.ai",
            "options": {
                "is_offer_matrix": false,
                "is_multi_armed_bandit": false,
                "is_enable_plugins": true,
                "is_whitelist": false,
                "is_corpora": false,
                "is_custom_api": false,
                "is_budget_tracking": false,
                "is_params_from_data_source": true,
                "is_model_selector": false,
                "is_generate_dashboards": false,
                "is_pattern_selector": false,
                "is_prediction_model": false
            },
            "corpora": {
                "corpora": ""
            },
            "parameter_access": {
                "create_virtual_variables": false,
                "lookup": {
                    "value": 123,
                    "key": "customer"
                },
                "database": "master",
                "datasource": "mongodb",
                "lookup_fields": [
                    "Enthusiastic",
                    "Experiential",
                    "Extrovert",
                    "Industrious",
                    "Intentional",
                    "Introvert",
                    "count",
                    "customer",
                    "item",
                    "personality",
                    "personality_score",
                    "trait",
                    "trait_score"
                ],
                "lookup_defaults": "",
                "virtual_variables": [],
                "table_collection": "bank_transactions_personality",
                "fields": "count,customer,Industrious,Intentional,Experiential,Enthusiastic,personality_score,personality,Extrovert,Introvert,trait_score,trait,item"
            },
            "updated_date": "2024-06-12T13:12:18.917Z",
            "deployment_id": "spend_personality"
        },
        {
            "budget_tracker": {
                "budget_parameters_database": "",
                "budget_parameters_datasource": "mongodb",
                "budget_id": "",
                "description": "",
                "budget_parameters_table_collection": "",
                "x_axis_datasource": "offer_matrix",
                "x_axis_name": "",
                "acc_namesource": "",
                "y_axis_name": "",
                "y_axis_namesource": "",
                "acc_name": "",
                "budget_strategy": "",
                "x_axis_namesource": "",
                "acc_datasource": "offer_matrix",
                "y_axis_datasource": "offer_matrix"
            },
            "date": "2024-04-25",
            "complexity": "low",
            "plugins": {
                "post_score_class_text": "PostScoreNetwork.java",
                "post_score_class_code": ""
            },
            "model_configuration": {},
            "setup_offer_matrix": {
                "offer_lookup_id": "",
                "database": "",
                "table_collection": "",
                "datasource": "mongodb"
            },
            "project_status": "experiment",
            "description": "ENTRY: network selector (http://ecosystem-runtime:8091)",
            "multi_armed_bandit": {
                "epsilon": "0.05",
                "duration": 0,
                "pulse_responder_uuid": "1f758163-ee75-46c1-8187-8f6816da244d"
            },
            "whitelist": {
                "table_collection": "",
                "datasource": "mongodb",
                "database": ""
            },
            "version": "0.22",
            "model_selector": {
                "selector_column": "",
                "lookup": "",
                "database": "",
                "selector": "",
                "table_collection": "",
                "datasource": "mongodb"
            },
            "performance_expectation": "high",
            "pattern_selector": {
                "pattern": "",
                "duration": ""
            },
            "paths": {
                "logging_collection_response": "ecosystemruntime_response",
                "logging_collection": "ecosystemruntime",
                "logging_database": "logging",
                "mongo_server_port": "ecosystem-server:54445",
                "scoring_engine_path_prod": "http://ecosystem-runtime3:8091",
                "models_path": "/data/deployed/",
                "mongo_connect": "mongodb://ecosystem_user:EcoEco321@ecosystem-server:54445/?authSource=admin",
                "data_path": "/data/",
                "build_server_path": "http://ecosystem:EcoEco321@build.ecosystem.ai:8080/job/ecosystem-runtime/buildWithParameters?token=114a827a8ada36685a1f3958a6059cd677&BRANCH=spendpersonality0.09.2&EMAIL=user@ecosystem.ai&CONTAINER_NAME=ecosystem-runtime-spendpersonality0.09.2",
                "scoring_engine_path_dev": "http://ecosystem-runtime:8091",
                "aws_container_resource": "",
                "scoring_engine_path_test": "http://ecosystem-runtime2:8091",
                "git_repo_path_branch": "spendpersonality0.09.2",
                "download_path": "https://hub.docker.com/u/ecosystemai",
                "mongo_ecosystem_password": "EcoEco321",
                "mongo_ecosystem_user": "ecosystem_user",
                "git_repo_path": "https://github.com/ecogenetic/ecosystem-runtime.git"
            },
            "updated_by": "admin@ecosystem.ai",
            "options": {
                "is_offer_matrix": false,
                "is_multi_armed_bandit": false,
                "is_enable_plugins": true,
                "is_whitelist": false,
                "is_corpora": true,
                "is_custom_api": false,
                "is_budget_tracking": false,
                "is_params_from_data_source": true,
                "is_model_selector": false,
                "is_generate_dashboards": false,
                "is_pattern_selector": false,
                "is_prediction_model": false
            },
            "corpora": {
                "corpora": "[{name:'network',database:'mongodb',db:'master',table:'spend_personality__network', type:'static', key:'value' },{name:'network_config',database:'mongodb',db:'master',table:'spend_personality__network_config', type:'static', key:'name' }]"
            },
            "parameter_access": {
                "lookup": {
                    "value": 123,
                    "key": "customer"
                },
                "create_virtual_variables": false,
                "database": "master",
                "datasource": "mongodb",
                "lookup_fields": [
                    "Extrovert",
                    "Introvert",
                    "segment_enum"
                ],
                "lookup_defaults": "{personality:1,education:1,gender:1,numberOfProducts:1}",
                "virtual_variables": [],
                "table_collection": "bank_customer",
                "fields": "Extrovert,education,gender,changeIndicatorThree,language,numberOfProducts,changeIndicatorSix,Introvert,numberOfChildren,numberOfAddresses,personality,segment_enum,segment,region,maritalStatus,age,proprtyOwnership,customer,name,address,email,mobile"
            },
            "updated_date": "2024-04-28T16:57:19.560Z",
            "deployment_id": "spend_personality_master"
        },
        {
            "budget_tracker": {
                "budget_parameters_database": "",
                "budget_parameters_datasource": "mongodb",
                "budget_id": "",
                "description": "",
                "budget_parameters_table_collection": "",
                "x_axis_datasource": "offer_matrix",
                "x_axis_name": "",
                "acc_namesource": "",
                "y_axis_name": "",
                "y_axis_namesource": "",
                "acc_name": "",
                "budget_strategy": "",
                "x_axis_namesource": "",
                "acc_datasource": "offer_matrix",
                "y_axis_datasource": "offer_matrix"
            },
            "date": "2024-04-25",
            "complexity": "low",
            "plugins": {
                "post_score_class_text": "PlatformDynamicEngagement.java",
                "post_score_class_code": "",
                "api_endpoint_code": "",
                "pre_score_class_text": "",
                "pre_score_class_code": ""
            },
            "model_configuration": {},
            "setup_offer_matrix": {
                "offer_lookup_id": "",
                "database": "",
                "table_collection": "",
                "datasource": "mongodb"
            },
            "project_status": "experiment",
            "description": "SELECTOR: select model to use (http://ecosystem-runtime5:8095)",
            "multi_armed_bandit": {
                "epsilon": "0.05",
                "duration": 0,
                "pulse_responder_uuid": "1f758163-ee75-46c1-8187-8f6816da244d"
            },
            "whitelist": {
                "table_collection": "",
                "datasource": "mongodb",
                "database": ""
            },
            "version": "0.1",
            "model_selector": {
                "selector_column": "",
                "lookup": "",
                "database": "",
                "selector": "",
                "table_collection": "",
                "datasource": "mongodb"
            },
            "performance_expectation": "high",
            "pattern_selector": {
                "pattern": "",
                "duration": ""
            },
            "paths": {
                "logging_collection_response": "ecosystemruntime_response",
                "logging_collection": "ecosystemruntime",
                "logging_database": "logging",
                "mongo_server_port": "ecosystem-server:54445",
                "scoring_engine_path_prod": "http://ecosystem-runtime5:8095",
                "models_path": "/data/deployed/",
                "mongo_connect": "mongodb://ecosystem_user:EcoEco321@ecosystem-server:54445/?authSource=admin",
                "data_path": "/data/",
                "build_server_path": "http://ecosystem:EcoEco321@build.ecosystem.ai:8080/job/ecosystem-runtime/buildWithParameters?token=114a827a8ada36685a1f3958a6059cd677&BRANCH=spendpersonality0.09.2&EMAIL=user@ecosystem.ai&CONTAINER_NAME=ecosystem-runtime-spendpersonality0.09.2",
                "scoring_engine_path_dev": "http://ecosystem-runtime5:8095",
                "aws_container_resource": "",
                "scoring_engine_path_test": "http://ecosystem-runtime5:8095",
                "git_repo_path_branch": "spendpersonality0.09.2",
                "download_path": "https://hub.docker.com/u/ecosystemai",
                "mongo_ecosystem_password": "EcoEco321",
                "mongo_ecosystem_user": "ecosystem_user",
                "git_repo_path": "https://github.com/ecogenetic/ecosystem-runtime.git"
            },
            "updated_by": "admin@ecosystem.ai",
            "options": {
                "is_offer_matrix": false,
                "is_multi_armed_bandit": true,
                "is_enable_plugins": true,
                "is_whitelist": false,
                "is_corpora": false,
                "is_custom_api": false,
                "is_budget_tracking": false,
                "is_params_from_data_source": true,
                "is_model_selector": false,
                "is_generate_dashboards": false,
                "is_pattern_selector": false,
                "is_prediction_model": false
            },
            "corpora": {
                "corpora": ""
            },
            "parameter_access": {
                "lookup": {
                    "value": 123,
                    "key": "customer"
                },
                "create_virtual_variables": false,
                "database": "master",
                "datasource": "mongodb",
                "lookup_fields": [
                    "Extrovert",
                    "Introvert",
                    "address",
                    "age",
                    "changeIndicatorSix",
                    "changeIndicatorThree",
                    "customer",
                    "education",
                    "email",
                    "gender",
                    "language",
                    "maritalStatus",
                    "mobile",
                    "name",
                    "numberOfAddresses",
                    "numberOfChildren",
                    "numberOfProducts",
                    "personality",
                    "proprtyOwnership",
                    "region",
                    "segment",
                    "segment_enum"
                ],
                "lookup_defaults": "{personality:1}",
                "virtual_variables": [],
                "table_collection": "bank_customer",
                "fields": "Extrovert,education,gender,changeIndicatorThree,language,numberOfProducts,changeIndicatorSix,Introvert,numberOfChildren,numberOfAddresses,personality,segment_enum,segment,region,maritalStatus,age,proprtyOwnership,customer,name,address,email,mobile"
            },
            "updated_date": "2024-04-28T16:57:32.294Z",
            "deployment_id": "spend_personality_selector"
        }
    ],
    "project_data": "ecosystem",
    "project_dashboards": [
        {
            "name": "Customer Banking 005.1",
            "date": "2024-04-25"
        }
    ],
    "project_fact_injection_configs": [
        {
            "name": "bank_customer",
            "date": "2024-03-30",
            "description": "Chat with bank customer personality. Copy all transactions from MongoDB to PostgresQL using Feature Engineering tools. Use query: to see SQL statements. Example chat sequence:\nuse: bank_customer\nHow many customer transactions are there?\nquery: How many customer transactions are there?\nquery: How many female customer own homes?"
        },
        {
            "name": "spend",
            "date": "2024-04-09",
            "description": "Use knowledge to contain the LLM chat performance."
        },
        {
            "name": "customer_chat",
            "date": "2024-04-09",
            "description": "Agent chat about customer spend and money personalities. This config requires that you provide the customer number first and then can ask about the actions that are configured. Example chat sequence:\nuse: customer_chat\nUse number is 851\nObtain the spend personality\nObtain money personality"
        },
        {
            "name": "customer_local",
            "date": "2024-04-30",
            "description": "Use Presto and the ecosystem.Ai text to sql engine."
        }
    ],
    "created_by": "admin@ecosystem.ai",
    "project_api_configs": [
        {
            "name": "spend_personality_selector",
            "date": "2024-04-25"
        },
        {
            "name": "spend_personality_model",
            "date": "2024-04-25"
        },
        {
            "name": "spend_personality_dynamic",
            "date": "2024-04-25"
        },
        {
            "name": "spend_personality_master",
            "date": "2024-04-25"
        }
    ],
    "preview_detail": {
        "summary": "Generic predictors based on banking data.",
        "image": "/data/xyz.png",
        "active": true,
        "detail": "intervention",
        "heading": "Spend Personality"
    },
    "project_dynamic_interactions": [
        {
            "name": "spend_personality_dynamic",
            "date": "2024-04-28"
        },
        {
            "name": "spend_personality_selector",
            "date": "2024-04-28"
        }
    ],
    "project_description": "Extract customer spending and money personalities with Algorithm, Model and Dynamic options using the network selector.",
    "project_simulations": [
        {
            "name": "spend_personality_master",
            "date": "2024-04-28"
        },
        {
            "name": "spend_personality_dynamic",
            "date": "2024-04-28"
        },
        {
            "name": "bank_customer__personality",
            "date": "2024-05-02"
        }
    ],
    "updated_by": "admin@ecosystem.ai",
    "project_cpr_analytics": [
        {
            "name": "spend_personality",
            "date": "2024-04-15"
        },
        {
            "name": "spend_personality_dynamic",
            "date": "2024-04-28"
        }
    ],
    "_id": {
        "date": "Wed Jun 12 13:12:18 UTC 2024",
        "timestamp": 1718197938
    },
    "updated_date": "2024-06-12T13:12:18.000933Z",
    "created_date": "2024-05-02T09:07:30.757Z",
    "userid_login": "ecosystem",
    "feature_stores": [
        {
            "date": "2024-03-19",
            "frame_id": "bank_customer"
        },
        {
            "date": "2024-03-23",
            "frame_id": "bank_transactions"
        }
    ]
}

```

---

## ecosystem-notebooks Python Package

Source: `docs/configuration/pythonpackage.mdx`
URL: https://ecosystem.ai/docs/configuration/pythonpackage
Summary: Create your ecosystem.Ai configurations using python

# ecosystem-notebooks Python Package

The ecosystem-notebooks python package provides access to all of the ecosystem.Ai configuration options through a python interface.

## Installation

Install ecosystem.Ai by following either the [Local Installation Guide](/docs/local/) or the cloud [Marketplace App Guide](/docs/marketplace/).

To use ecosystem-notebooks, install it using pip:

```console
   (.venv) $ pip install ecosystem-notebooks
```

Connect to ecosystem.Ai using the url of your ecosystem.Ai server and a valid username and password for your server:

```python
   from prediction import jwt_access
   auth = jwt_access.Authenticate("http://ecosystem-server:3001/api", "ecosystem_username", "ecosystem_password")
```

If everything is set up correctly a ``Login Successful.`` message will be displayed.

## Get Started

The ecosystem-notebooks package provides two main modules: `prediction` and `runtime`. The `prediction` module is used to interact with the server APIs of ecosystem.Ai, while the `runtime` module is used to interact with the runtime APIs of ecosystem.Ai.

Here we'll work through configuring your first deployment using a pretrained H2O.ai model using the server. Pushing the deployment to a runtime instance and testing the response received from the runtime instance.

```python
   #Import the required ecosystem.Ai modules
   from prediction.apis import deployment_management as dm
   from prediction.apis import ecosystem_generation_engine as ge
   from prediction.apis import data_management_engine as dme
   from prediction.apis import online_learning_management as ol
   from prediction.apis import prediction_engine as pe
   from prediction.apis import worker_file_service as fs
   from prediction import jwt_access
   from runtime.apis import predictor_engine as o
   from runtime import access

   #Authenticate with the ecosystem.Ai server
   auth = jwt_access.Authenticate("http://ecosystem-server:3001/api", "ecosystem_username", "ecosystem_password")

   #The name and details of of the project and deployment on which you will be working.
   project_id = "demo_project"
   project_description = "Demo project for ecosystem.Ai"
   project_type = "Recommender"
   purpose = "Demo"
   project_start_date = "2024-01-01"
   project_end_date = "2024-01-31"
   data_science_lead = "ecosystem.Ai"
   data_lead = "ecosystem.Ai"
   deployment_id = "simple_model_deployment"
   deployment_description = "Simple model deployment using a pretrained H2O.ai model"
   runtime_path="http://localhost:8014"

   #Create a project. This set is not required if you will be working in an existing project
   dm.create_project(auth,project_id,project_description,project_type,purpose,project_start_date,project_end_date,data_science_lead,data_lead)

   model_configuration = define_deployment_model_configuration(models_to_load=["model_id"])

   #Configure the lookup to the customer feature store
   parameter_access = dm.define_deployment_parameter_access(
       auth,
       lookup_key="msisdn",
       lookup_type="int",
       database="prod_estore_gsm_recommender",
       table_collection="fs_score_all_estore_gsm_recommender_rel_1",
       datasource="mongodb",
       virtual_variables=virtual_variables
   )

   #Create your deployment
   version = "001"
   deployment_step = dm.create_deployment(
       auth,
       project_id=project_id,
       deployment_id=deployment_id,
       description=deployment_description,
       version=version,
       plugin_post_score_class="PostScoreBasic.java",
       plugin_pre_score_class="PrePredictCustomer.java",
       scoring_engine_path_dev=runtime_path,
       mongo_connect="mongodb://mongouser:mongopassword@ecosystem-server:54445/?authSource=admin",
       parameter_access=parameter_access,
       model_configuration=model_configuration,
   )

   #Push deployment and produce properties file
   push_result = ge.process_push(auth_local,deployment_step)
   if "ErrorMessage" in push_result:
       print(push_result["ErrorMessage"])
   else:
       print(push_result["properties"])

   #Test your deployment
   post_invocations_input = {
                               "campaign": deployment_id
                             , "subcampaign": "none"
                             , "channel": "notebooks"
                             , "customer": 12345
                             , "userid": "test"
                             , "numberoffers": 2
                             , "params": "{}"
                           }
   offer_response = o.invocations(auth_runtime, post_invocations_input)
   pp.pprint(offer_response)
```

For further detail on the functionality available in the python package see the [Documentation](https://ecogenetic.github.io/ecosystem-algorithms/).

---

## Simulations

Source: `docs/configuration/simulations.mdx`
URL: https://ecosystem.ai/docs/configuration/simulations
Summary: Simulate the results of your Deployment configuration

# Introduction

Simulations are an important part of the [Deployment](/docs/configuration/deployment) testing process before moving your Deployment to production. There are two simulation approaches available:
1. Simulations run using the Workbench
2. Simulations run using the [Python package](/docs/configuration/pythonpackage)

Workbench based simulations are easier to configure and run while Python simulations allow more flexibility and control over the simulation process.

Two key components need to be configured in order to run a simulation:
1. Determining when and for whom calls to the `/invocations` API should be made
2. Determining whether the `/invocations` API call would result in a successful interaction triggerring a call to the `/response` API

## Workbench Simulations

On the Workbench, simulations can be accessed in the Laboratory section of the menu. Note that you will need to have the ecosystem-notebooks container running in order to use the Workbench simulation functionality.
- Select `Create New` to set up a new simulation. 
- Configure a Name and Description for your simulation and select the Deployment which you like to simulate
- A simulation can have multiple Runs linked to it
- Select `Create New` to set up a new Run of the Simulations
- Configure a name and description for your simulation Run
- A UUID for the simulation run will be automatically generated, this is used to uniquely identify the simulation run
- Number of Iterations: The number of times that the runtime will be called i nhe simulation
- Default Take Up Rate: The default take up rate for the simulation. This is the probability that a customer will accept an offer. A value of 0.1 means customers will ahve a 10% chance of accepting an offer
- Server URL: The URL of the server to use during the simulation. If you are running the ecosystem.Ai platform using the default docker-compose file, this will be `http://ecosystem-server:3001/api`
- Notebooks URL: The URL of the notebooks server to use during the simulation. If you are running the ecosystem.Ai platform using the default docker-compose file, this will be `http://ecosystem-notebooks:8010/process_simulation`
- Client Pulse Responder: The end point to which you have pushed the Deployment to be simulated
- Iterations per second: The number of iteractions of the simulation to run per second. Note that this will pause the simulation by 1/(Iterations per second) seconds between each iteration.
- Generate Output every x Iterations: The simulation will store the state of the system every x iteractions. This is the output of the simulation and will allow you to understand how the state of the system evolved over time.
- Produce Plot Output: If this is selected, the simulation will produce a plot of the Beta distributions for each item being recommended.
- Produce Parameter Output: If this is selected, the simulation will produce a table of the Options Store parameters.
- Segment To Test: Here you can specify a specific set of contectual variable value combinations over which the simulation should be run. By default, all combinations in the Parameters From Data Source configuration of your deployment will be simulated.
- Use take up from Dynamic Configuration Feature Store: If this is selected, the simulation will use the take up rate from the Set Up Feature Store. This historical take up rate will be used in place of the default take up rate.
- Set take up field in dynamic configuration feature store: If this field is selected, you can specify a Take Up field in the Set Up Feature Store which is not the same as that configured in the Dynamic Interaction configuration.
- Take Up Field: The Take Up Field in the set up Feature Store
- Shift Take Up Rates Over Time: If this is selected, the simulation will shift the take up rate over time. This is useful for simulating a situation where the take up rate is expected to change over time.
- Standard deviation of shift in take up per iteration: The take up rate is shifted by sampling a shift amount from a normal distribution with a mean of 0 and a standard deviation of the value specified here.
- Make Take Up Shift Cyclical Instead of Linear: If this is selected, the take up rate will be shifted in a cyclical manner instead of a linear shift.
- Number of iterations in period of cyclical shift: The cyclical shift will follow a sine wave pattern with the period of the shift specified here.

Once you have specified and saved your Simulation Run configuration, click `Run` to start the simulation. You can track the progress of the simulation in the Logs accordion at the bottom of the screen or using the notifications icon. Once the simulation run has completed you can click `Results` to see the Options Store parameters and Beta Distributions that were produced during the simulation.

## Python Simulations

Simulations can be run in python using `predictor_engine.invocations` and `predictor_engine.response`. The approach for simulating take up can be customised to the use case. An illustrative simulation is provided below using a simple default take up rate of 10%.
```python
# Import packages
from prediction.apis import data_management_engine as dme
from prediction.apis import prediction_engine as pe

#Set parameters
deployment_id = "demo_deployment"
customer_database = "recommender_demos"
customer_collection = "offer_feature_store"
customer_key = "customer_number"
takeup_rate = 0.1
delay_seconds = 0.01
runtime_path_notebook = "http://ecosystem-runtime:8091"
server_path_notebook = "http://ecosystem-server:3001/api"
ecosystem_user = "user@ecosystem.ai"
ecosystem_password = getpass.getpass("Enter your ecosystem password")

#Connect to the runtime and server
auth_runtime = access.Authenticate(runtime_path_notebook)
auth = jwt_access.Authenticate(server_path_notebook, ecosystem_user, ecosystem_password)

while True:
    #Get customer
    customer = dme.post_mongo_db_aggregate_pipeline(
        auth,
        {
        "database":customer_database,"collection":customer_collection
        ,"pipeline":[
            {"$sample":{"size":1}}
            ,{"$project":{customer_key:1,"_id":0}}
        ]
        }
    )[0][customer_key]
    
    #Get offer
    post_invocations_input = {
                            "campaign": deployment_id
                          , "subcampaign": "simulation"
                          , "channel": "notebooks"
                          , "customer": customer
                          , "userid": "ecosystem"
                          , "numberoffers": 1
                          , "params": "{}"
                        }
    offer_response = o.invocations(auth_runtime, post_invocations_input)
    offer = offer_response["final_result"][0]["result"]["offer"]
    
    #Check offer take up
    take_up = False
    if random.random() > takeup_rate:
        take_up = True

    #Register response
    if take_up:
        o.response(auth_runtime, offer_response)
    
    #pause execution
    time.sleep(delay_seconds)
```
This will run the simulation indefinitely until you stop it. You can restrict the number of iterations and adjust the parameters to fit your use case.

Once the simulation has been completed you can view the results using the following code, as before you can make adjustments to the parameters to fit your use case.
```python
# Import packages
from scipy import stats

# Set Parameters
options_store_database = "recommender_demos"
options_store_collection="demo_recommender_options"
contextual_variable_one = "lt-15"
contextual_variable_two = "gt-500"
uuid = online_learning_uuid

def get_options_store_alpha_beta(options_store_collection,options_store_database,contextual_variable_one=None,contextual_variable_two=None,offer=None):
    """
    Get the alpha and beta values from an Ecosystem Rewards options store after applying a range of filters
    
    :param options_store_collection: The name of the options store collection in mongo. 
    :param options_store_database: The name of the options store database in mongo.
    :param contextual_variable_one: The value of contextual variable one to filter for, by default no filtering is applied. Should be a string.
    :param contextual_variable_two: The value of contextual variable two to filter for, by default no filtering is applied. Should be a string.
    :param offer: A list of offers to filter for, by default no filtering is applied. Should be a list of strings.
    
    :return A list of dictionaries containing the values of alpha and beta and the offer name for each document match the filters
    """
    
    #Construct the mongo match query for the given filter parameters
    match_dict = {"$match":{}}
    if contextual_variable_one is not None:
        match_dict["$match"]["contextual_variable_one"] = contextual_variable_one
    if contextual_variable_two is not None:
        match_dict["$match"]["contextual_variable_two"] = contextual_variable_two
    if offers:
        match_dict["$match"]["optionKey"] = {"$in":offers}

    #Get the options store using the filter parameters
    options_store_alpha_beta = dme.post_mongo_db_aggregate_pipeline(auth,
                {
                "database":options_store_database
                ,"collection":options_store_collection
                ,"pipeline":[
                    match_dict
                    ,{"$project":{"alpha":1,"beta":1,"offer_name":"$optionKey","_id":0}}
                ]
                }
            )
    return options_store_alpha_beta

options_store_alpha_beta = get_options_store_alpha_beta(options_store_collection,options_store_database,contextual_variable_one,contextual_variable_two)
x = np.linspace(stats.beta.ppf(0.01, 1, 1),stats.beta.ppf(0.99, 1, 1), 100)
legend_list = []
for option_iter in options_store_alpha_beta:
    beta_norm = stats.beta.pdf(x,option_iter["alpha"],option_iter["beta"])
    plt.plot(x,beta_norm)
    legend_list.append(option_iter["offer_name"])
plt.legend(legend_list,bbox_to_anchor=(1.04, 1), loc="upper left")
plt.show()
```

---

## Predictors

Source: `docs/configuration/static_models/index.mdx`
URL: https://ecosystem.ai/docs/configuration/static_models
Summary: Predictor hyperparameter settings..

# Intro

ecosystem.Ai uses a worker architecture to define and run predictions. The base configurations are stored in the `ecosystem_meta` database across many collections.

## Key Features

- **Meta-Data Driven**: All predictor configuration items are managed from the model meta-data.
- **Broad Range of Parameters**: Parameters are model dependent and can be set in the model meta-data.
- **Many Model Types**: Multiple model types are supported, including regression, classification, and clustering.
- **Model Result**: The model result is stored in the `models` database.
- **Easy Testing of Models**: Models can be tested using the `Test Model` option.
- **Deploy**: Models are saved in the `models` database and can be deployed for predictions.

---

## Model Types

Source: `docs/configuration/static_models/model_types.mdx`
URL: https://ecosystem.ai/docs/configuration/static_models/model_types
Summary: Supported Model Types.

# Intro

ecosystem.Ai supports a variety of model types for predictions. The base configurations are stored in the `ecosystem_meta` database across many collections.

- **AutoML**: AutoML is supported for model selection.
- **GBM - Gradient Boosting Machine**: GBM is a popular model type for predictions.
- **Deep Learning**: Deep learning models are supported.
- **Isolation Forest**: Isolation Forest is a model type for anomaly detection.
- **k-Means**: k-Means is a clustering model type.
- **GLM - Linear Regression**: GLM is a linear regression model type.

---

## Models

Source: `docs/configuration/static_models/models.mdx`
URL: https://ecosystem.ai/docs/configuration/static_models/models
Summary: Model Analytics

# Intro

ecosystem.Ai uses a worker architecture to define and run predictions. The base configurations are stored in the `ecosystem_meta` database across many collections.

## Review Model Details

Once models are trained, they are placed in the models folder as per the configuration on your server and runtime.

When did deployment button is clicked inside the predictor form the model is moved from the model training folder to the deployment folder.

---

## Predictor

Source: `docs/configuration/static_models/predictor.mdx`
URL: https://ecosystem.ai/docs/configuration/static_models/predictor
Summary: Predictors.

# Intro

ecosystem.Ai uses a worker architecture to define and run predictions. The base configurations are stored in the `ecosystem_meta` database across many collections.

## Review Predictor Details

Create a master predictor configuration with related properties.
![image](/images/configuration/predictor/predictor.png)

Update hyper-parameters depending on the model type.
![image](/images/configuration/predictor/predictor-params.png)

## Train Model and Review

Train model.
![image](/images/configuration/predictor/predictor-train.png)

A model list is displayed from generation process.
![image](/images/configuration/predictor/predictor-models.png)

## Test Model

Test model using default settings.
![image](/images/configuration/predictor/predictor-test.png)

---

## Intro

Source: `docs/documentation/index.mdx`
URL: https://ecosystem.ai/docs/documentation
Summary: Comprehensive guide on how to contribute to our documentation

# Contributing to the Documentation

Contributions to the documentation are welcome! This guide explains how to contribute to the ecosystem.Ai documentation by writing and formatting new documentation. Our website is built with Nextra 3 and our docs use the `.mdx` format (augmented markdown).

### When to Write a Doc vs. a Blog Post

**Blog vs Docs:** Consider publishing a blog post when a document is an extension of an existing one, relates to a specific situation, or requires external maintenance (features not actively used by the team).

**See: [Contributing to Blog](/blog/2024-04-17_blog_guide)**

## Creating New Documents

To create a new document:

- Use the `.mdx` file extension (see [MDX documentation](https://mdxjs.com/) for more info).
- Name files using **lowercase letters** and **underscores** (e.g., `documentation_guidelines.mdx`).
- Place new documents in the relevant folder/sub-folder under `./docs`.
- Add the document to the table of contents in the `_meta.ts` file of the folder where your document is located. If you don't add it, it will be alphabetically sorted after the ordered docs.

## Markdown Formatting Guidelines

- Use headings and subheadings with `#`, `##`, and `###`.
  - Use `#` for the document title (**only one main title per document is allowed**).
  - Use `##` for main sections.
  - Use `###` for sub-sections within a section.
- Use `**` to make text **bold** and highlight important information (do not use in place of a heading).
- Use URL paths to link to other documents (e.g., `/docs/documentation` points the current [doc](/docs/documentation)).
- You can use HTML, TS, and JS to add additional features to a document.
- Ensure any HTML has closing tags (e.g., `` or `<a href="link"></a>`).
- Do not use HTML comments; instead, use [Markdown comments](https://gist.github.com/jonikarppinen/47dc8c1d7ab7e911f4c9?permalink_comment_id=4272770#gistcomment-4272770) **only if the text is actually hidden**.

### Docs Resources

**Docs Resources:** See some integrated components examples:

- [Components Examples](/docs/documentation/examples)

For more information, refer to:

- [Nextra](https://nextra.site/docs/docs-theme/start)
- [Nextra 3](https://the-guild.dev/blog/nextra-3#intro)
- [MDX](https://mdxjs.com/)

## Document Metadata

Add metadata to the header of your document using the following format:

> Note: The `ogImage` field is optional and can be omitted altogether. It is used to specify the image that will be displayed when sharing your document on social media platforms.

```yaml filename="metadata example:"
---
title: Document Title
description: This description will be used in social cards and search engine results.
ogImage: /images/docs/<category>/image.png (optional)
---
```

## Assets

Whenever possible, upload assets (e.g., images) to GitHub instead of storing them in the `/public` folder. This helps keep your repository organized and makes it easier to manage your assets.

### Images

**Note In the followng example:**
  - I provided screenshots for both lihgt and dark mode.
  - I used `Image from 'next/image'` wich gave me 4x improvement on the image file size for better performances.

see the following example in action here: [User Guides](/docs/user_guides)

```mdx filename="Example"

<div style={{padding: "20px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
  <div className="image-light-theme">
    <Image src="https://github.com/ecogenetic/developer/assets/32828263/cf0f3231-287a-407f-bd4d-3d5bad94e893" alt="ipad-light" width={1024} height={512} style={{borderRadius: "5px"}} />
  </div>

  <div className="image-dark-theme">
    <Image src="https://github.com/ecogenetic/developer/assets/32828263/a03ee02d-5099-4220-95b0-bfa2d3b00b4d" alt="ipad-dark" width={1024} height={512} style={{borderRadius: "5px"}} />
  </div>
</div>
```

### How to Upload Images and Videos on GitHub

**Method A:** - Go to the ecosystem.Ai repository
    - Find a random conversation or PR
    - Paste an image from your clipboard into the text input box. It will automatically be converted into a URL.
    - Copy and paste the resulting URL in your document. (Then exit the page without actually posting the comment.😉)

    ![image](https://github.com/ecogenetic/developer/assets/32828263/c1612f93-a6c0-4af7-9965-9f83872cff00)

**Method B:** - Upload directly from the web UI:

    ![image](https://github.com/ecogenetic/developer/assets/32828263/4f138ab4-31a5-4fae-a459-5335e5ff25a8)

## Test the Docs

**Before you submit:** ### Review carefully before submitting your PR

Before submitting a PR for your blog post, **always** test to ensure everything looks and functions as intended.

#### Check the following:

- Your new document(s) for layout, accuracy and completeness
- The document's position in the Table of Contents (ToC)
- The image and link in your document

#### To test:

1. Prepare the environment by running `pnpm install`
2. Start the dev server with `pnpm dev`
3. Test the build by running `pnpm build` followed by `pnpm start`

---

## Index

Source: `docs/frontend/angular/index.mdx`
URL: https://ecosystem.ai/docs/frontend/angular

# Angular UI Framework

## Overview

The Angular UI for the Spend Personality module is designed to provide a user-friendly interface for interacting with the ecosystem.Ai platform. It allows users to input their customer number and receive personalized messages based on their spending personality.

## How it Works

Clone the provided repo and follow the instructions below to run the Angular UI for the Spend Personality module.

![image](/images/modules/angular.png)

Once the  [repo](https://github.com/ecogenetic/message-app-angular)  is cloned, read the README file for detailed instructions on how to run the Angular App.
```bash
git clone https://github.com/ecogenetic/message-app-angular.git
```

---

## Index

Source: `docs/frontend/index.mdx`
URL: https://ecosystem.ai/docs/frontend

# Modules

## UI Frameworks

These frontend frameworks can be used to access the ecosystem.Ai platform. They are designed to be used with the ecosystem.Ai platform and can be customised to suit the use-case and the model being used.

- [Angular](/docs/frontend/angular)
- [iOS](/docs/frontend/ios)
- [Python](/docs/frontend/python)

---

## Index

Source: `docs/frontend/ios/index.mdx`
URL: https://ecosystem.ai/docs/frontend/ios

# iOS App Framework

## Overview

The iOS UI for the Spend Personality module is designed to provide a user-friendly interface for interacting with the ecosystem.Ai platform. It allows users to input their customer number and receive personalized messages based on their spending personality.

## How it Works

Clone the provided repo and follow the instructions below to run the iOS UI for the Spend Personality module. This project is dependent on the [Angular app](/docs/frontend/angular) for the backend visualization services. Start up the Angular app before running the iOS app. Use the settings in the iOS app to point to the Angular app.

![image](/images/modules/ios.png)

Once the [repo](https://github.com/ecogenetic/message-app-ios) is cloned, read the README file for detailed instructions on how to run the iOS UI.
```bash
git clone https://github.com/ecogenetic/message-app-ios.git
```

---

## Index

Source: `docs/frontend/python/index.mdx`
URL: https://ecosystem.ai/docs/frontend/python

# Python App Framework

## Overview

The Python UI for the Spend Personality module is designed to provide a user-friendly interface for interacting with the ecosystem.Ai platform. It allows users to input their customer number and receive personalized messages based on their spending personality.

## How it Works

Clone the provided repo and follow the instructions below to run the Python UI for the Spend Personality module.

Once the [repo](https://github.com/ecogenetic/message-app-python) is cloned, read the README file for detailed instructions on how to run the Python UI.
```bash
git clone https://github.com/ecogenetic/message-app-python.git
```

---

## Get Started

Source: `docs/index.mdx`
URL: https://ecosystem.ai/docs

# Get Started

### Quick Start Guides

  

### Explore our Documentation

- [Local Installation](/docs/local)
  - [Marketplace Apps](/docs/marketplace)
  - [Configuration](/docs/configuration)
  - [User Guides](/docs/user_guides)
  - [Modules](/docs/modules)
  - [Documentation](/docs/documentation)

---

---

## Docker

Source: `docs/local/docker.mdx`
URL: https://ecosystem.ai/docs/local/docker
Summary: How to install ecosystem.Ai locally with Docker

# Local Installation of ecosystem.Ai with Docker

For most scenarios, Docker Compose is the recommended installation method due to its simplicity, ease of use, and reliability.

## Prerequisites

- [`Git`](https://git-scm.com/downloads)
- [`Docker`](https://www.docker.com/products/docker-desktop/)

---

## Installation Steps

Follow these steps to set up ecosystem.Ai with the default configuration:

## Step 1. Download the Installation Files

### Manual Download

1. **Go to the Install Option for your Architecture**
 - Project Install Page for x86**: Visit [docker-x86](https://github.com/ecogenetic/ecosystem/tree/main/docker-x86).
 - Project Install Page for ARM64**: Visit [docker-arm](https://github.com/ecogenetic/ecosystem/tree/main/docker-arm).
 - Project Install Page for Windows**: Visit [docker-windows](https://github.com/ecogenetic/ecosystem/tree/main/docker-windows).

2. **Download the ZIP File**: Click the green "Code" button, then click "Download ZIP."

3. **Extract the ZIP File**: Find the downloaded ZIP file, right-click, and select "Extract All...".

### Using Git

Run the following [git](https://git-scm.com/) command in your terminal, from the desired parent directory:

```bash
git clone https://github.com/ecogenetic/ecosystem.git
```

To update to the latest install options and files:
```bash
git pull
```

## Step 2. Install Docker

1. **Download**: Go to [Docker Desktop Download Page](https://www.docker.com/products/docker-desktop) and download Docker Desktop.
2. **Install**: Open the installer and follow the instructions.
3. **Run**: Open Docker Desktop to ensure it is running.

**Notes:**
- Docker Desktop is recommended for most users.
- Podman configurations will be available in the future.
- You may need to restart your computer after installation.

## Step 3. Run the App

1. **Navigate to the Project Directory**
 - ARM64
 ```bash
 cd ecosystem/docker-arm
```

 - x86
 ```bash
 cd ecosystem/docker-x86
```

 - Windows
 ```bash
 cd ecosystem\docker-windows
```

2. **Create and Configure .env File**:
 - Copy the contents of `ecosystem_env.txt` to a new file named `.env`.
 - Fill in any necessary values.

**Note:** - The .env file is hidden on unix as it starts with a ".". On Mac use Shift CMD . to list hidden files.
    - Ensure that there are enough resources assigned to Docker. Use ```ulimit -a``` to check the limits. Assign 128000 to "file descriptors".

**Add your keys** for **OPENAI_API_KEY** and **ECOSYSTEM_API_KEY**.
```
DATA_PATH=./data
OPENAI_API_KEY=
ECOSYSTEM_API_KEY=
```
An optional variable is used to assign an initial password on startup.
```
INITIAL_PASSWORD=
```

3. **Start the Application**:
Find your correct install folder. Run the following command from within the install directory:
 - ARM64
 ```bash
 ./start.sh
```

 - x86
 ```bash
 ./start_x86.sh
```

 - Windows
 ```bash
 start.bat
```

## Additional Setup

Unlock additional features by exploring our configuration guides to learn how to set up:

- Custom endpoints
- Other advanced configuration options
- And more

This will enable you to customize your ecosystem.Ai experience with optional features.

**see also:**
- [Runtime Variables](/docs/runtime/environment_variables)
- [Docker Compose](/docs/quick_start/docker)
- [AWS Marketplace Apps](/docs/marketplace/aws)
- [Azure Marketplace Apps](/docs/marketplace/azure)

---

## Intro

Source: `docs/local/index.mdx`
URL: https://ecosystem.ai/docs/local
Summary: How to install ecosystem.Ai locally

# Install ecosystem.Ai Locally

**We recommend using `Docker Compose{:hack}` to install ecosystem.Ai**, as it is the easiest, simplest, and most reliable method for getting started. With Docker, you can quickly spin up a container that includes everything you need to run ecosystem.Ai, including MongoDB, Jupyter Notebooks, Postgres, Workbench, Prediction Server, Client Pulse Responder Runtime, as well as all storage mapping needed to persist your data. This approach ensures consistency across different environments and eliminates the need for manual setup of dependencies, making it ideal for most use cases.

  }
      title="Docker Install"
      arrow
      href="/docs/local/docker"
    />

---

## AWS Marketplace

Source: `docs/marketplace/aws.mdx`
URL: https://ecosystem.ai/docs/marketplace/aws
Summary: Setup ecosystem.Ai Platform in AWS

# Guide to Setting up ecosystem.Ai Platform in AWS

- [Platform Option](https://aws.amazon.com/marketplace/pp/prodview-kr3eipc3hphes)
    - [Spend Personality Option](https://aws.amazon.com/marketplace/pp/prodview-2kak2xwqqgd3w)

## ecosystem.Ai Platform (VM)

### Step 1: Find the App in Marketplace
- Select the App to install and review your dependencies.
- Review base functionality and start install by clicking "Create".

![image](/images/install/aws-install-01.png)

### Step 2: Setup Basic Settings
- Select the correct subscription and ensure that you have app install rights.
- Either use an existing group or create a new one.
- Virtual machines in AWS have two distinct names: virtual machine name used as the AWS resource identifier, and in guest host name. When you create a VM in the portal, the same name is used for both the virtual machine name and the host name. The virtual machine name cannot be changed after the VM is created. You can change the host name when you log into the virtual machine.
- Choose the AWS region that's right for you and your customers. Not all VM sizes are available in all regions.
- The administrator username for the VM as ubuntu. Use the security credentials to access the VM.

![image](/images/install/aws-install-02.png)

- Additional settings for security and availability.

[//]: # (![image]&#40;/images/install/aws-install-03.png&#41;)

### Step 3: Setup Networking
- Use default networking settings when possible.
- Ensure that security group allows for access to ports: 80, 3001, 3000, etc.

[//]: # (![image]&#40;/images/install/aws-install-04.png&#41;)

### Step 4: Review Install Results
- During install, all results can be reviewed.
- When completed review the public IP address created and access via http://ip

## ecosystem.Ai Platform for Spend Personality

### Step 1: Find the App in Marketplace
- Select the App to install and review your dependencies.
- Review base functionality and start install by clicking "Create".

![image](/images/install/aws-install-spend.png)

**Tip:** - Ensure that you update your algorithm from the ecosystem.Ai website when needed.

## Conclusion
These options focus entirely on the cloud implementation. We also have other cloud types and on premise installations that can be done using various technologies.

---

## Azure Marketplace

Source: `docs/marketplace/azure.mdx`
URL: https://ecosystem.ai/docs/marketplace/azure
Summary: Setup ecosystem.Ai Platform in Azure

# Guide to Setting up ecosystem.Ai Platform in Azure

- [Platform Option](https://portal.azure.com/#view/Microsoft_Azure_Marketplace/GalleryItemDetailsBladeNopdl/id/ecogeneticllc1676924558438.ecosystemai-platform)
    - [Full Option](https://portal.azure.com/#view/Microsoft_Azure_Marketplace/GalleryItemDetailsBladeNopdl/id/ecogeneticllc1676924558438.ecosystemai)
    - [Spend Personality Option](https://portal.azure.com/#view/Microsoft_Azure_Marketplace/GalleryItemDetailsBladeNopdl/id/ecogeneticllc1676924558438.ecosystem-spend-personality)

## ecosystem.Ai Platform (VM)

### Step 1: Find the App in Marketplace
- Select the App to install and review your dependencies.
- Review base functionality and start install by clicking "Create".

![image](/images/install/azure-install-01.png)

### Step 2: Setup Basic Settings
- Select the correct subscription and ensure that you have app install rights.
- Either use an existing group or create a new one.
- Virtual machines in Azure have two distinct names: virtual machine name used as the Azure resource identifier, and in guest host name. When you create a VM in the portal, the same name is used for both the virtual machine name and the host name. The virtual machine name cannot be changed after the VM is created. You can change the host name when you log into the virtual machine.
- Choose the Azure region that's right for you and your customers. Not all VM sizes are available in all regions.
- The administrator username for the VM as azureuser. Use the security credentials to access the VM.

![image](/images/install/azure-install-02.png)

- Additional settings for security and availability.

![image](/images/install/azure-install-03.png)

### Step 3: Setup Networking
- Use default networking settings when possible.
- Ensure that security group allows for access to ports: 80, 3001, 3000, etc.

![image](/images/install/azure-install-04.png)

### Step 4: Review Install Results
- During install, all results can be reviewed.
- When completed review the public IP address created and access via http://ip

## ecosystem.Ai Platform (Kubernetes)

### Step 1: Find the App in Marketplace
- Select the App to install and review your dependencies.
- Review base functionality and start install by clicking "Create".

**Tip:** - Ensure that you update your algorithm from the ecosystem.Ai website when needed.

## Conclusion
These options focus entirely on the cloud implementation. We also have other cloud types and on premise installations that can be done using various technologies.

---

## GCP Marketplace

Source: `docs/marketplace/gcp.mdx`
URL: https://ecosystem.ai/docs/marketplace/gcp
Summary: Setup ecosystem.Ai Platform in GCP

# Guide to Setting up ecosystem.Ai Platform in GCP

Coming Soon

---

## Intro

Source: `docs/marketplace/index.mdx`
URL: https://ecosystem.ai/docs/marketplace
Summary: Introduction to deploying ecosystem.Ai in a Cloud Environment

# Deployment Introduction

Welcome to the introductory guide for deploying ecosystem.Ai. This document provides an initial overview, featuring a comparison table and references to detailed guides, ensuring a thorough understanding of cloud deployment strategies. Please contact ecosystem.Ai for additional information on enterprise deployment options.

In this guide, you will explore various options to efficiently deploy ecosystem.Ai in a variety of environments, customized to meet your specific requirements.

## Minimum Requirements

The minimum requirements for running ecosystem.Ai for testing purposes:

- 16 GiB RAM
- 4 vCPU
- 48 GiB Minimum Storage

**Note:** With everything enabled for basic usage, you might consider increasing the RAM to 24GB for smoother operation.

---

## Index

Source: `docs/modules/index.mdx`
URL: https://ecosystem.ai/docs/modules

# Modules

## Modules
ecosystem.Ai modules are the building blocks of the ecosystem.Ai platform. Modules are reusable components that can be used to build chatbots, virtual assistants, and other applications that require users to interact with a database using natural language. Modules can be combined to create complex applications that can be deployed on a variety of platforms.

---

## MLRun Module — Access & Scoring

Source: `docs/modules/mlrun/access.mdx`
URL: https://ecosystem.ai/docs/modules/mlrun/access
Summary: How to invoke trained MLRun models — directly through the trainer sidecar, through the deployed model server, or through the Java ecosystem-runtime — and how to clean up MLRun configurations.

# Access & Scoring

There are three reachable scoring paths once a model has been trained
and (optionally) deployed:

1. **Trainer sidecar** at `http://localhost:8003/invocations` —
   useful for smoke tests and the Generated Python `score_model.py`.
2. **Model server NodePort** at `http://localhost:30092/invocations`
   — created when the model is deployed via the **Deployments** tab.
3. **Ecosystem-runtime** at `http://localhost:30091/invocations` — the
   recommended production path; applies logging, audit, and the
   campaign / sub-campaign contract. The runtime calls the configured
   trainer or deployed-server URL for `api:` model entries and
   normalizes the response into the canonical mojoScore shape, so
   existing post-score plugins keep working unchanged.

All three accept the same payload shape because the trainer sidecar
emits an `InvocationsRequest` consistent with `ecosystem-runtime`.

## Configuring `mojo.key` for an MLRun model

The runtime supports three model backends through a single
`mojo.key` comma list (1-based `mojo` request indices preserved
across types):

| Prefix          | Backend                                      |
| --------------- | -------------------------------------------- |
| *(none)*        | H2O MOJO file at `user.generated.models`     |
| `tensorflow:` / `pytorch:` | DJL TensorFlow / PyTorch model    |
| `api:`          | MLRun trainer or deployed model server (new) |

Add an `api:` entry of the form:

```
api:<framework>:<base_url>:<model_id>
```

For example:

```properties
mojo.key=GLM_v1.zip,api:xgboost:http://ecosystem-mlrun-trainer:8003:spend_risk_xgboost_v1
```

In `ecosystem-workbench2`, do not hand-edit `mojo.key` — instead,
pick MOJO files and MLRun models in the **Static Model** section of
the Deployment Editor. The backend joins
`model_configuration.models_load` (MOJO filenames) with
`model_configuration.api_models[]` (MLRun rows) into the final
`mojo.key` value on push.

The MOJO picker lists `.zip` files at the deployment step's
`paths.models_path` (with a fallback to `settings.h2o_models`),
preserving order so the 1-based `mojo` request index stays stable.
The API model picker queries
`GET /api/v1/deployments/api-model-options` which joins
`mlrun_models` with `mlrun_k8s_deployments` so deployed models
surface their NodePort URL while not-yet-deployed runs fall back to
the trainer sidecar URL.

## Sample scoring call (Customer Spend Risk)

```bash
curl -s http://localhost:8003/invocations -H 'content-type: application/json' \
  -d '{
    "model_id": "spend_risk_xgboost_v1",
    "instances": [
      {
        "amount_sum": 24500,
        "amount_mean": 322,
        "amount_std": 215,
        "declined_count": 4,
        "is_high_risk_categories": ["gambling"]
      }
    ]
  }'
```

Response:

```json
{
  "model_id": "spend_risk_xgboost_v1",
  "framework": "xgboost",
  "predictions": [{ "label": 1, "probability": 0.87 }]
}
```

## Sample scoring call (Customer Personality)

```bash
curl -s http://localhost:8003/invocations -H 'content-type: application/json' \
  -d '{
    "model_id": "customer_personality_lightgbm_v1",
    "instances": [
      {
        "age_band": "35_44",
        "gender": "F",
        "income_band": "high",
        "region": "metro",
        "life_stage": "family",
        "marital_status": "married",
        "dependents": 2,
        "tenure_months": 84
      }
    ]
  }'
```

Response (multiclass):

```json
{
  "model_id": "customer_personality_lightgbm_v1",
  "framework": "lightgbm",
  "predictions": [{
      "label": "Industrious",
      "probabilities": {
          "Industrious": 0.51,
          "Intentional": 0.31,
          "Experiential": 0.12,
          "Enthusiastic": 0.06
      }
  }]
}
```

## Scoring through ecosystem-runtime

Use the runtime when you want logging + audit. Map the project to a
`campaign` / `sub-campaign` pair when configuring runtime
deployment, then:

```bash
curl -s http://localhost:30091/invocate -H 'content-type: application/json' \
  -d '{
    "campaign": "customer_personality",
    "sub-campaign": "lightgbm",
    "channel": "web",
    "responses": 1,
    "in_params": {
      "input": ["age_band", "gender", "income_band", "region", "life_stage"],
      "value": ["35_44", "F", "high", "metro", "family"]
    }
  }'
```

The runtime writes a presented row to `ecosystemruntime` and an
accepted row to `ecosystemruntime_response` (see
[Logging & Reporting](/docs/runtime/logging)).

## Listing models for a project

```bash
curl -s http://localhost:8001/api/v1/mlrun-runtime/models?project_id=customer_personality
```

The response lists every successful run, the framework that produced
it, the artifact URI, and the deployment id (when deployed).

## Deleting an MLRun configuration

The **Delete** action on a configuration row (the trash icon in the
[Configurations list](/docs/modules/mlrun/console_tour#configurations-list))
opens a confirmation dialog and, on confirm, triggers a cascade
delete that removes:

- The configuration row in `ecosystem_meta.mlrun_configurations`.
- The bound feature pipeline in
  `ecosystem_meta.mlrun_feature_pipelines`.
- The feature set in `ecosystem_meta.mlrun_feature_sets`.
- All training runs in `ecosystem_meta.mlrun_training_runs`.
- All K8s deployments in
  `ecosystem_meta.mlrun_k8s_deployments` for that `project_id`.

The toast that appears after the cascade prints the per-collection
counts (e.g.
*“Removed 1 configuration, 1 pipeline(s), 1 feature set(s), 4
run(s).”*), and a `DELETE_MLRUN_CONFIGURATION` activity row is
written to `ecosystem_meta.activities` with the same counts and the
user that requested the delete.

**Deletion is permanent:** The cascade does not soft-delete. To re-create the use-case after a
  delete, re-run `python scripts/seed_mlrun_use_cases.py
  --use-case <name>`.

---

## MLRun Module — Community Edition

Source: `docs/modules/mlrun/community_edition.mdx`
URL: https://ecosystem.ai/docs/modules/mlrun/community_edition
Summary: Install MLRun Community Edition on Docker Desktop Kubernetes alongside the Workbench2 trainer sidecar; understand the coexistence model adopted in ADR 0006 §Phase 5.

# MLRun Community Edition

The Workbench2 MLRun module ships with an **opt-in** Helm install of
the official MLRun Community Edition (CE) chart. CE provides the
MLRun project store, Web UI, and MinIO-backed artifact bucket; the
**custom trainer sidecar continues to handle compute**. This is the
coexistence model adopted in
[ADR 0006 §Phase 5](https://github.com/ecosystem-ai/ecosystem-workbench2/blob/main/docs/adr/0006-k8s-deploy-and-model-training.md).

## Why coexistence (not replacement)?

| Capability                                 | Trainer sidecar (this module) | MLRun CE |
| ------------------------------------------ | ----------------------------- | -------- |
| sklearn / xgboost / lightgbm / pytorch tabular | ✅ first-class                 | ❌ requires custom job spec |
| Reproducible Python generator              | ✅                            | ❌ |
| MongoDB-native feature pipelines           | ✅                            | indirect |
| `ecosystem-runtime` adapter logging        | ✅                            | indirect |
| Project store / Web UI                     | ❌                            | ✅ |
| MinIO artifact store                       | ❌                            | ✅ |
| K8s scheduling for ad-hoc jobs             | indirect                     | ✅ |

When CE is enabled, both systems run side-by-side: the workbench
backend prefers the CE API URL for project lookups
(`Settings.select_mlrun_api_url`), while the trainer sidecar continues
to receive every `POST /train` and `POST /invocations` call.

## Installation

```bash
cd backend
./scripts/setup-mlrun-ce.sh
```

The script:

1. Verifies `kubectl` and `helm` are present.
2. Switches the Kube context to `docker-desktop`.
3. Creates the `mlrun` namespace.
4. Resolves `MLRUN_CE_DBPATH` (default `LOCAL_DATA_PATH/mlrun-ce`)
   and writes a values overlay merged with
   `backend/k8s/mlrun-ce-values.yaml`.
5. Adds the `mlrun-ce` Helm repo (idempotent).
6. Runs `helm upgrade --install mlrun-ce mlrun/mlrun-ce`.
7. Waits for the MLRun API pod to become `Ready`.

Service URLs (NodePort-based):

| Service     | URL                       | Purpose |
| ----------- | ------------------------- | ------- |
| MLRun API   | `http://localhost:30070`  | Programmatic project / run access |
| MLRun UI    | `http://localhost:30060`  | Web UI |
| MinIO       | `http://localhost:30090`  | Artifact bucket |

## Settings

Workbench2 picks up CE through the following `backend/.env` keys:

```dotenv
MLRUN_CE_ENABLED=true
MLRUN_CE_NAMESPACE=mlrun
MLRUN_CE_RELEASE=mlrun-ce
MLRUN_CE_API_URL=http://localhost:30070
MLRUN_CE_UI_URL=http://localhost:30060
MLRUN_CE_MINIO_URL=http://localhost:30090
# Optional persistence overrides (default: $LOCAL_DATA_PATH/mlrun-ce)
# MLRUN_CE_DBPATH=/Users/me/data/mlrun-ce
# MLRUN_CE_ARTIFACT_PATH=/Users/me/data/mlrun-ce/artifacts
```

`Settings.select_mlrun_api_url()` returns the CE URL when CE is
enabled and non-blank, otherwise falls back to
`MLRUN_SIDECAR_URL`, then to `MLRUN_TRAINER_URL`.

## Teardown

```bash
cd backend
./scripts/teardown-mlrun-ce.sh
```

The script uninstalls the Helm release and removes the `mlrun`
namespace. **Persistent host paths are preserved** so the same
DBPATH can be reused across reinstalls — delete them manually if you
want a clean slate.

## Operational notes

- **Nuclio / Jupyter / Pipelines disabled**: the bundled values file
  disables Nuclio, Jupyter, and Kubeflow Pipelines to keep the local
  install lightweight. Re-enable them in
  `backend/k8s/mlrun-ce-values.yaml` if you need them.
- **arm64 only**: the local install is opinionated for Apple Silicon.
  On Intel hardware update the image tags before running the script.
- **CE storage size**: MinIO is given a 10 GiB `hostPath` PVC; raise
  it for non-trivial artifact stores.

**Screenshot pending:** A live screenshot of the MLRun CE Web UI will be added once the
  Helm install has been run via `./scripts/setup-mlrun-ce.sh`. The
  default deployment is opt-in (`MLRUN_CE_ENABLED=false`) so this
  screenshot is captured separately from the seed lifecycle.

---

## MLRun Module — Console Tour

Source: `docs/modules/mlrun/console_tour.mdx`
URL: https://ecosystem.ai/docs/modules/mlrun/console_tour
Summary: Visual walkthrough of every tab in the Workbench2 MLRun console — Configurations list, Overview, Project, Data Source, Features, H2O Frame, Training, Models, Training Runs, Adapters, Python, Runs, Deployments, and Generate.

# Console Tour

The MLRun console at `http://localhost:5270/mlrun-console` is the
single place where a feature pipeline, training run, deployment, and
generated Python project all meet. The page has two views:

1. A **Configurations list** — every persisted MLRun configuration,
   with quick-access tiles, search, and per-row actions
   (**Edit**, **Generate**, **Delete**).
2. A **Configuration editor** — opened when you click a row, with a
   sticky header (project / pipeline / state / version), three primary
   actions (**Back**, **Generate**, **Save version**), and **13 tabs**
   that map one-to-one to the lifecycle stages.

This page is the screenshot-led tour. Each section ends with a link
to the in-depth chapter for that stage.

## Configurations list

Search, filter, paginate, and act on every saved configuration. The
**Quick access** strip at the top exposes a `Create New` button, a
shortcut **Generate** tile, and the four most-recently-touched
configurations as one-click tiles.

Per-row actions:

| Icon | Action | Behaviour |
| ---- | ------ | --------- |
| `Edit` | Open the configuration in the 13-tab editor. |
| `Generate` (rocket) | Run the full lifecycle (validate → save → train → emit Python) for that row without leaving the list. |
| `Delete` | Cascade-delete the row plus all linked pipelines, feature sets, runs, and K8s deployments — confirmed via a danger dialog that prints the final delete counts. |

![MLRun configurations list](/images/modules/mlrun/mlrun-console-configurations.png)

## Configuration header

When you click a row, the configuration editor opens with a sticky
header that shows the project / pipeline pair, current `state`
(`draft` / `active` / `archived`), `version`, and a lifecycle
readiness label such as **5/5 lifecycle sections ready**. The three
header actions are always available regardless of the active tab:

- **Back** — return to the configurations list.
- **Generate** — run the manual end-to-end generation (saves first,
  then emits Python).
- **Save version / Create** — bumps the persisted document.

Below the header is the tab strip in the order shown in the
screenshots:

`Overview · Project · Data Source · Features · H2O Frame · Training ·
Models · Training Runs · Adapters · Python · Runs · Deployments ·
Generate`

## 1. Overview

Health board for the configuration. Shows two pills (sidecar
reachable / in-process MLRun availability), Python version, runtime
mode, the trainer API and runtime image tags, and a counter card for
projects, configurations, pipelines, and feature sets.

![MLRun console — Overview tab](/images/modules/mlrun/mlrun-console-overview.png)

## 2. Project

Identity for the configuration: `project_id` and `pipeline_name`.
These two fields drive every collection name, log scope, and
deployment label that the rest of the lifecycle emits, so they
should be set early and rarely changed.

## 3. Data Source

The MongoDB binding. Database and collection use a searchable select
populated from `pipelineApi.listDatabases()` /
`listCollections()`. A refresh button next to the database picker
forces a re-fetch from MongoDB.

The big text area is the **Aggregation Pipeline JSON** — what the
trainer sidecar runs against the source collection to produce the
engineered feature documents. The **Preview** button samples the
first results without writing to the target collection.

![MLRun console — Data Source tab](/images/modules/mlrun/mlrun-console-data-source.png)

See [Data Preparation](/docs/modules/mlrun/data) for the seeded
pipelines and the preflight checks.

## 4. Features

Defines the engineered feature set that lands in the **target**
collection. Fields:

- `Feature Set` — name registered in `mlrun_feature_sets`.
- `Entity Keys` — comma-separated keys used as join points
  (e.g. `customer_id`).
- Target Database / Collection (same searchable selectors as the
  Data Source tab).
- A **Transformation JSON** text area for `select_columns`,
  `drop_columns`, `rename_columns`, `fillna`, and `constants`.

## 5. H2O Frame

Names the destination H2O frame and reuses the existing Workbench
**MongoDB → CSV → H2O** conversion. Useful when you want the same
training frame consumed by H2O AutoML jobs running outside the MLRun
trainer.

## 6. Training

Launches a new run against the trainer sidecar. Pick the framework
(`sklearn`, `xgboost`, `lightgbm`, `pytorch`), tweak target / split /
hyperparameters, and click **Train**. On success the run appears in
**Training Runs** and the freshly trained model appears in
**Models**. The tab pre-fills the project / database / collection
defaults from the configuration so you rarely need to retype them.

![MLRun console — Training tab](/images/modules/mlrun/mlrun-console-training-tab.png)

See [Model Training](/docs/modules/mlrun/training) for the contract
between the console and `POST /train`.

## 7. Models

Trained-model registry for this configuration’s `project_id`. Each
row exposes:

- Framework, model id, and adapter id.
- Headline metrics (`accuracy`, `f1`, `roc_auc`, `precision_at_k`).
- A **Score** action that hits `/invocations` with a sample payload.
- A **Deploy** action that hands the model to the K8s router (when
  `K8S_ENABLED=true`).

![MLRun console — Models tab](/images/modules/mlrun/mlrun-console-models.png)

## 8. Training Runs

Append-only history of every `POST /train` call. Each row links back
to its source configuration, prints duration, status (succeeded /
failed), and offers a **Retry** action that re-submits with the
same hyperparameters. Use this tab as the audit trail when comparing
models across frameworks.

![MLRun console — Training Runs tab](/images/modules/mlrun/mlrun-console-training-runs.png)

## 9. Adapters

The runtime-side artifact: every saved adapter row shows the
`/invocations` payload contract, the `adapter_log_policy` (when
configured), and the `ecosystem-runtime` collections it writes to
(`ecosystemruntime` / `ecosystemruntime_response`).

![MLRun console — Adapters tab](/images/modules/mlrun/mlrun-console-adapters.png)

## 10. Python

The new code-emit panel. Three checkboxes control what the generator
emits:

| Checkbox | Adds to the project |
| -------- | ------------------- |
| Include training scripts (auto-loads runs for project) | `train_model.py` per framework, dispatched through `train_all()`. |
| Include scoring driver | `score_model.py` calling `/invocations` with sample payloads. |
| Include Kubernetes deployer | `deploy_to_k8s.py` driving the workbench `/api/v1/k8s/*` endpoints. |

After clicking **Generate Python**, the tab shows a multi-file
project; pick a file from the dropdown (the primary file is marked)
to inspect the body in the read-only editor. The same artifact set
is what the **Generate everything** button on the Generate tab emits.

![MLRun console — Python tab](/images/modules/mlrun/mlrun-console-python.png)

See [Python Generator](/docs/modules/mlrun/generator) for the field
reference, the `adapter_log_policy` shape, and how to run the
generated project locally.

## 11. Runs

Live list of feature-pipeline jobs (the **Run Enrichment** action
queues a job that materialises the engineered target collection).
Each row prints `lifecycle_state`, the trainer-side status message,
and any returned record count.

## 12. Deployments

Docker Desktop Kubernetes view: status pills, a **Refresh** button,
and a **Deploy ecosystem-runtime** action that schedules the Java
runtime pod with the trained-model artifact mounted. When
`K8S_ENABLED=false`, the tab clearly states that the integration is
disabled rather than silently failing.

![MLRun console — Deployments tab](/images/modules/mlrun/mlrun-console-deployments.png)

See [Kubernetes Deployment](/docs/modules/mlrun/deployment) for the
manifests, the namespace layout, and the runtime scoring path.

## 13. Generate (AI pipeline assistant)

The end-to-end automation tab. Two paths:

- **AI pipeline assistant** (top, framed in primary blue):
  - A free-form prompt describing the goal — e.g.
    *“From `master.bank_customer` predict customer personality from
    demographic data; treat string columns as categorical and split
    80/20.”*
  - A **Pipeline kind** selector with seven presets:
    `auto`, `numeric`, `categorical`, `temporal`, `mixed`,
    `aggregates`, `type_coercion`.
  - **Train models** toggle plus a multi-select pill row for the
    frameworks (`sklearn`, `xgboost`, `lightgbm`, `pytorch`).
  - Two action buttons:
    - **Draft only** — fills the form fields (Project / Data Source /
      Features / H2O Frame) without persisting or training. Use this
      to review what the AI inferred before committing.
    - **Generate everything** — runs the full lifecycle: NL → schema
      sample → configuration → persist → train selected frameworks →
      emit Python. The tab then prints an inline summary with the
      schema sampled, inferred target column, problem type, and one
      pill per training run.
- **Manual flow** (below): the same readiness pills as the Overview
  tab plus a **Generate** button that saves and runs the deterministic
  pipeline against whatever the form already contains.

![MLRun console — Generate tab (AI pipeline assistant)](/images/modules/mlrun/mlrun-console-generator.png)

## Where to next

- [Use-Case Definition](/docs/modules/mlrun/definition) for what the
  configuration object actually stores.
- [Model Training](/docs/modules/mlrun/training) for the framework
  matrix and the trainer contract.
- [Python Generator](/docs/modules/mlrun/generator) for the multi-file
  project that the Python tab emits.
- [Kubernetes Deployment](/docs/modules/mlrun/deployment) for the
  Deployments tab and the runtime pod.

**Tab tour vs lifecycle docs:** This page is the visual map. The companion lifecycle pages
  ([Data](/docs/modules/mlrun/data),
  [Training](/docs/modules/mlrun/training),
  [Deployment](/docs/modules/mlrun/deployment),
  [Generator](/docs/modules/mlrun/generator),
  [Access](/docs/modules/mlrun/access)) are where the contracts,
  payloads, and CLI reproductions live.

---

## MLRun Module — Data Preparation

Source: `docs/modules/mlrun/data.mdx`
URL: https://ecosystem.ai/docs/modules/mlrun/data
Summary: How the MLRun module derives engineered feature collections from MongoDB, including the natural-language pipeline generator and the on-the-fly target derivation used by the two reference use-cases.

# Data Preparation

Both reference use-cases follow the same shape:

```text
master.bank_transactions      ──┐                       ┌── master.bank_transactions_mlrun
                                ├──► feature pipeline ──┤
master.bank_customer          ──┘  (MongoDB aggregation) └── master.bank_customer_mlrun
```

The feature pipeline is a MongoDB aggregation persisted in
`ecosystem_meta.mlrun_feature_pipelines`. The pipeline is generated by
one of three paths:

- **AI pipeline assistant** — the *Generate* tab in the console pairs
  a free-form prompt with a `pipeline_kind` selector and two action
  buttons (**Draft only** / **Generate everything**). The assistant
  samples the source collection, drafts the aggregation, infers the
  target column / problem type, and (optionally) runs every selected
  framework end-to-end. See
  [Console Tour — Generate tab](/docs/modules/mlrun/console_tour#13-generate-ai-pipeline-assistant).
- **Manual editor** — paste an aggregation directly into the
  **Aggregation Pipeline JSON** text area on the *Data Source* tab and
  click **Preview** to sample the first results.
- **The seeder** (`scripts/seed_mlrun_use_cases.py`) — uses a
  hand-tuned aggregation that derives the per-use-case target field on
  the fly so the seed run is reproducible without any prior labelling.

## AI assistant inputs

The Generate tab passes the following to the backend
`/api/v1/mlrun-runtime/generate-from-prompt` endpoint:

| Field | Effect |
| ----- | ------ |
| `prompt` | Free-form natural-language description of the goal. |
| `kind` | One of `auto`, `numeric`, `categorical`, `temporal`, `mixed`, `aggregates`, `type_coercion`. Selects the aggregation template the assistant uses. |
| `source.{database,collection}` | Inherited from the *Data Source* tab and used to sample the schema (default 100 documents) before drafting the pipeline. |
| `target.{database,collection}` | Where the engineered output gets written. |
| `project_id`, `configuration_id` | When set, the assistant updates the existing configuration in place. |
| `run_training` + `frameworks` | When `run_training=true`, the backend also dispatches one `POST /train` per selected framework after persisting the configuration. |
| `persist` | Always `true` from the **Generate everything** button; the **Draft only** button submits the same payload but never writes the configuration. |

The assistant returns:

- The full `MlrunFeatureEnrichmentRequest` (loaded back into the form).
- A `schema_summary` describing how many documents and fields were
  sampled.
- An optional `training_spec` with the inferred target, problem type,
  feature columns, and confidence.
- A `training_results` list (one entry per framework) when
  `run_training=true`.

### Pipeline kinds

| Kind | When to pick it |
| ---- | --------------- |
| `auto` | Default — let the assistant decide based on the prompt and the sampled schema. |
| `numeric` | Pure numeric features; clean fillna with 0. |
| `categorical` | String columns; populates H2O `enum_columns`. |
| `temporal` | Calendar / time-of-day boolean indicators. |
| `mixed` | Balanced blend of numeric + categorical + temporal. |
| `aggregates` | Per-entity rollups using a Mongo `$group` aggregation pipeline. |
| `type_coercion` | Use `$addFields` / `$switch` to clean mixed-type fields. |

## Spend Risk pipeline

The spend-risk aggregation:

1. Filters transactions to the last 90 days.
2. Buckets by merchant category and channel.
3. Computes per-customer rollups: amount sum / mean / std,
   declined-count, and high-risk flag.
4. Adds the derived `is_high_risk` boolean.
5. Writes engineered rows to `master.bank_transactions_mlrun`.

```json
[
  { "$match": { "transaction_date": { "$gte": "$$NOW.$dateSubtract:90 days" } } },
  { "$group": {
      "_id": "$customer_id",
      "amount_sum": { "$sum": "$amount" },
      "amount_mean": { "$avg": "$amount" },
      "amount_std": { "$stdDevPop": "$amount" },
      "declined_count": { "$sum": { "$cond": [{ "$eq": ["$status", "DECLINED"] }, 1, 0] } },
      "high_risk_categories": { "$push": "$merchant_category" }
  }},
  { "$addFields": {
      "is_high_risk": {
          "$or": [
              { "$gte": ["$declined_count", 3] },
              { "$gt": [{ "$size": { "$setIntersection": ["$high_risk_categories", ["gambling", "crypto", "cash_advance"]] } }, 0] }
          ]
      }
  }},
  { "$out": "bank_transactions_mlrun" }
]
```

## Customer Personality pipeline

The personality aggregation pulls demographic fields from
`bank_customer`, normalises them, and prepares a multiclass training
frame:

1. Selects demographic fields: `age`, `gender`, `income_band`,
   `region`, `life_stage`, `marital_status`, `dependents`,
   `tenure_months`.
2. Converts age to bands (`<25`, `25–34`, `35–44`, `45–54`, `55+`).
3. Drops rows with missing `personality` and rows whose
   `personality` value occurs fewer than 25 times across the entire
   collection.
4. Writes the training frame to `master.bank_customer_mlrun`.

```json
[
  { "$match": { "personality": { "$nin": [null, ""] } } },
  { "$addFields": {
      "age_band": {
        "$switch": {
          "branches": [
            { "case": { "$lt": ["$age", 25] }, "then": "lt_25" },
            { "case": { "$lt": ["$age", 35] }, "then": "25_34" },
            { "case": { "$lt": ["$age", 45] }, "then": "35_44" },
            { "case": { "$lt": ["$age", 55] }, "then": "45_54" }
          ],
          "default": "55_plus"
        }
      }
  }},
  { "$project": {
      "customer_id": 1, "age_band": 1, "gender": 1, "income_band": 1,
      "region": 1, "life_stage": 1, "marital_status": 1,
      "dependents": 1, "tenure_months": 1, "personality": 1
  }},
  { "$out": "bank_customer_mlrun" }
]
```

## Preflight checks

Before training, the seeder runs three checks against MongoDB:

1. The source collection has at least one document
   (`estimated_document_count > 0`).
2. For multiclass use-cases, there are ≥2 distinct values of the
   target field.
3. For multiclass use-cases, the most frequent label is **not** ≥95%
   of the population (avoids the “predict-the-majority” trap).

If any check fails, the seeder skips the run and **does not** write a
spurious `SEED_MLRUN_USE_CASE` activity row.

![MLRun console — generated feature pipeline](/images/modules/mlrun/mlrun-console-feature-pipeline.png)

---

## MLRun Module — Use-Case Definition

Source: `docs/modules/mlrun/definition.mdx`
URL: https://ecosystem.ai/docs/modules/mlrun/definition
Summary: How an MLRun configuration is structured in the Workbench2 console and how the two reference use-cases (Spend Risk + Customer Personality) bind to MongoDB.

# Use-Case Definition

An MLRun configuration is the top-level object in the console. It binds:

1. A **project** (logical grouping; reused across runs and deployments).
2. A **feature pipeline** (MongoDB aggregation that produces an
   engineered feature set).
3. A **feature set** (the materialised collection used as training input).
4. **Training run history** (sklearn / xgboost / lightgbm / pytorch results).
5. **Deployments** (when Kubernetes is enabled).

The same shape is used for both reference use-cases; only the source
collection, target derivation, and problem type differ.

## Reference use-case: Customer Spend Risk

| Field                | Value |
| -------------------- | ----- |
| Project id           | `spend_risk` |
| Source DB            | `master` |
| Source collection    | `bank_transactions` |
| Output collection    | `bank_transactions_mlrun` |
| Feature set name     | `spend_risk_features` |
| Pipeline name        | `spend_risk_pipeline` |
| Problem type         | `binary_classification` |
| Target field         | `is_high_risk` (derived from frequent declined / risky merchant categories) |

The target derivation runs as a `$lookup` + `$group` aggregation: any
customer with ≥3 declined transactions in the last 30 days, or any
transaction tagged with a high-risk merchant category (`gambling`,
`crypto`, `cash_advance`), is flagged.

## Reference use-case: Customer Personality

| Field                | Value |
| -------------------- | ----- |
| Project id           | `customer_personality` |
| Source DB            | `master` |
| Source collection    | `bank_customer` |
| Output collection    | `bank_customer_mlrun` |
| Feature set name     | `customer_personality_features` |
| Pipeline name        | `customer_personality_pipeline` |
| Problem type         | `multiclass_classification` |
| Target field         | `personality` |
| Demographic features | `age`, `gender`, `income_band`, `region`, `life_stage`, `marital_status`, `dependents`, `tenure_months` |

The personality target carries 4–6 distinct labels (typically
`Industrious`, `Intentional`, `Experiential`, `Enthusiastic`); the
seeder validates there are at least 2 distinct labels in the source
collection before training.

## Configuration anatomy

A configuration row in `ecosystem_meta.mlrun_configurations` looks like:

```json
{
  "_id": "configuration_id",
  "name": "Customer Spend Risk",
  "project_id": "spend_risk",
  "pipeline_name": "spend_risk_pipeline",
  "feature_set_name": "spend_risk_features",
  "source": { "database": "master", "collection": "bank_transactions" },
  "destination": { "database": "master", "collection": "bank_transactions_mlrun" },
  "problem_type": "binary_classification",
  "target_field": "is_high_risk",
  "feature_fields": ["amount", "merchant_category", "channel", "..."],
  "tags": ["seed", "spend_risk"]
}
```

Configurations are versioned but **structurally immutable** by
project / pipeline name (a new configuration is created if you change
either). Deletion is a cascade that removes the configuration row,
the linked feature pipeline, the feature set, all training runs, and
any K8s deployments tied to the project id; the confirmation dialog
prints the final delete counts (see
[Access & Scoring — Deleting an MLRun configuration](/docs/modules/mlrun/access#deleting-an-mlrun-configuration)).

![MLRun configurations list — every configuration with row actions and quick-access tiles](/images/modules/mlrun/mlrun-console-configurations.png)

The configuration editor opens with a sticky header that shows
`project_id · pipeline_name`, the current `state`
(`draft` / `active` / `archived`), the version, a *N/5 lifecycle
sections ready* badge, and three actions (**Back**, **Generate**,
**Save version**). Below the header is the 13-tab strip described in
the [Console Tour](/docs/modules/mlrun/console_tour).

---

## MLRun Module — Kubernetes Deployment

Source: `docs/modules/mlrun/deployment.mdx`
URL: https://ecosystem.ai/docs/modules/mlrun/deployment
Summary: Deploy trained models alongside the Java ecosystem-runtime onto Docker Desktop Kubernetes using the K8s router and the Deployments tab.

# Kubernetes Deployment

The **Deployments** tab is always visible inside the configuration
editor, but its behaviour depends on the K8s feature flag:

- `K8S_ENABLED=false` (default) — the tab renders a **Kubernetes
  status** banner stating *“Kubernetes integration disabled (set
  K8S_ENABLED=true).”* and a disabled **Deploy ecosystem-runtime**
  button. A **Refresh** button is still available so the same view
  can pick up a config change without a page reload.
- `K8S_ENABLED=true` — the tab activates two actions:
  1. **Deploy model server** — schedules the trainer image with the
     model id baked in; exposes a `/invocations` endpoint inside the
     `ecosystem-workbench` namespace.
  2. **Deploy ecosystem-runtime** — schedules the Java
     `ecosystem-runtime` pod with a sidecar volume that mounts the
     trained model artifact, so scoring calls go through the same
     audit path as production.

Both actions are backed by `/api/v1/k8s/*` endpoints implemented in
`backend/src/app/k8s/service.py`.

## Manifests

The bootstrap script (`backend/scripts/setup-k8s.sh`) creates:

- A namespace `ecosystem-workbench`.
- A `PersistentVolumeClaim` mounted at the workbench’s
  `LOCAL_DATA_PATH/mlrun-artifacts` host path so trained models are
  shared across pods.
- A `Service` (NodePort 30091) for the deployed `ecosystem-runtime`.
- A `Service` (NodePort 30092) per model server, allocated on first
  deploy.

When CE is also enabled, the chart installs into the `mlrun`
namespace (separate from `ecosystem-workbench`) so the two systems
can be torn down independently.

## Deploy a model from the console

1. In **Training Runs**, find a successful run.
2. Click **Deploy to Kubernetes** → confirm.
3. The row gains a **Deployment id** column.
4. The **Deployments** tab now shows the model server pod with status
   `Running`, the NodePort it bound, and a quick **Test scoring** link.

![MLRun console — deployments](/images/modules/mlrun/mlrun-console-deployments.png)

## Scoring through `ecosystem-runtime`

Once the runtime pod is up, the model is reachable via two paths:

- **Direct**: `POST http://localhost:30092/invocations` (model
  server NodePort).
- **Through ecosystem-runtime**: `POST
  http://localhost:30091/invocate` with the
  `campaign`/`sub-campaign` parameters that map back to the MLRun
  project / configuration. This is the recommended path because it
  applies the runtime’s logging, audit, and contract checks.

## Coexistence with MLRun CE

When `MLRUN_CE_ENABLED=true`, the Helm release lives in the `mlrun`
namespace, while model servers and `ecosystem-runtime` continue to
deploy in `ecosystem-workbench`. The console’s **Deployments** tab
uses the workbench namespace; CE deployments are visible in the
MLRun UI at `http://localhost:30060`. There is no cross-talk between
the two — the trainer sidecar continues to handle compute regardless
of CE status.

## Cleanup

Delete a deployment from the **Deployments** tab to remove the pod,
service, and any associated PVCs scoped to that deployment id. The
configuration row, training runs, and stored adapter remain
untouched, so the same model can be redeployed later. To remove
everything for a use-case (configuration, runs, deployments,
generated artifacts), use the **Delete** action on the configuration
row (see [Access](/docs/modules/mlrun/access)).

---

## MLRun Module — Python & AI Generator

Source: `docs/modules/mlrun/generator.mdx`
URL: https://ecosystem.ai/docs/modules/mlrun/generator
Summary: Reproduce the entire MLRun lifecycle (feature engineering, training, scoring, ecosystem-runtime adapter logging, and Kubernetes deployment) as a runnable Python project — either from the AI pipeline assistant on the Generate tab or from the manual Python tab.

# Python & AI Generator

Every action available in the MLRun console can be reproduced as a
self-contained Python project. There are two complementary paths:

- The **AI pipeline assistant** on the **Generate** tab takes a
  natural-language prompt and emits the same multi-file Python
  project — alongside a persisted configuration and (optionally)
  trained models. See
  [Console Tour — Generate tab](/docs/modules/mlrun/console_tour#13-generate-ai-pipeline-assistant)
  and [Data Preparation — AI assistant inputs](/docs/modules/mlrun/data#ai-assistant-inputs).
- The **Python** tab is the deterministic emitter. Three checkboxes
  pick which files land in the project; a multi-file picker lets you
  inspect each emitted file in turn (the primary file is marked).

## Python tab inputs

| Checkbox | Adds to the project |
| -------- | ------------------- |
| Include training scripts (auto-loads runs for project) | `train_model.py` per framework, dispatched through `train_all()`. |
| Include scoring driver | `score_model.py` calling `/invocations` with sample payloads. |
| Include Kubernetes deployer | `deploy_to_k8s.py` driving the workbench `/api/v1/k8s/*` endpoints. |

When **Include training scripts** is enabled and the configuration’s
training list is empty, the backend auto-resolves the most recent
successful runs for the configuration’s `project_id` so the frontend
doesn’t have to pass them explicitly.

## Generator inputs (full reference)

| Field                         | Default                       | Effect |
| ----------------------------- | ----------------------------- | ------ |
| `include_adapter`             | `true`                        | Emit a runtime-compatible adapter skeleton. |
| `include_h2o_frame`           | `true`                        | Emit the H2OFrame request stub used by the runtime. |
| `include_training`            | `false` (UI: opt-in)          | Emit `train_model.py` and call `POST /train` per framework. |
| `include_scoring`             | `false`                       | Emit `score_model.py` to call `POST /invocations`. |
| `include_k8s_deploy`          | `false`                       | Emit `deploy_to_k8s.py` driving `/api/v1/k8s/*`. |
| `adapter_log_policy`          | `null`                        | When supplied, emit `adapter_with_logging.py` instead of the bare skeleton. |
| `trainer_url`                 | `http://localhost:8003`       | Base URL for the trainer sidecar. |
| `workbench_api_url`           | `http://localhost:8001`       | Base URL for the workbench backend (used by the K8s deploy script). |

When `include_training=true` and the **Training** list is empty, the
backend auto-resolves the most recent successful runs for the
configuration’s `project_id` so the frontend doesn’t have to pass them
explicitly.

## Generated Python tab UI

After clicking **Generate Python**, the tab populates a multi-file
project. A `<select>` dropdown lets you switch between files (the
**primary** file is marked), and the read-only editor below shows the
selected file’s contents — so you can review every emitted module
without leaving the console.

![MLRun console — Python tab](/images/modules/mlrun/mlrun-console-python.png)

## Generated files

A fully-ticked generator request emits:

| File                          | Purpose |
| ----------------------------- | ------- |
| `feature_pipeline.py`         | MongoDB aggregation that produces the engineered feature collection. |
| `h2o_frame_request.py`        | Stub showing how to send the engineered frame to the runtime. |
| `adapter_skeleton.py` *or* `adapter_with_logging.py` | Either a bare adapter skeleton or one wired with the chosen log policy. |
| `train_model.py`              | One `train_*` per framework, all dispatched through `train_all()`. |
| `score_model.py`              | Calls `/invocations` with sample payloads built from the feature set. |
| `deploy_to_k8s.py`            | Idempotent deploy script using `/api/v1/k8s/*`. |

The `primary_file` field in the response always points at
`feature_pipeline.py`.

## Adapter logging

When `adapter_log_policy` is provided, the adapter writes a payload
that `ecosystem-runtime` can pick up via its standard logging
collectors. The policy fields mirror
`MlrunAdapterLogPolicy`:

| Field             | Description |
| ----------------- | ----------- |
| `presented_collection` | MongoDB collection where presentation rows go (default `ecosystemruntime`). |
| `accepted_collection`  | MongoDB collection where accepted-response rows go (default `ecosystemruntime_response`). |
| `decision_log_enabled` | Toggle decision logs. |
| `redact_pii`            | Strip configured PII keys before writing. |

## Running the generated project

```bash
mkdir mlrun-spend-risk && cd mlrun-spend-risk
# (paste files from the Generated Python tab)
python -m venv venv && source venv/bin/activate
pip install motor httpx pydantic
python feature_pipeline.py        # build the engineered collection
python train_model.py             # train sklearn / xgboost / lightgbm / pytorch
python score_model.py             # smoke-test scoring
python deploy_to_k8s.py           # only when K8S_ENABLED on the workbench
```

Every generated module accepts a `--config configuration.json` flag
so the same files can be checked into a CI pipeline and parametrised
per environment.

## Generate tab (AI pipeline assistant)

The **Generate** tab is the one-click counterpart to the manual flow.
The same payload that the Python tab builds from the form fields is
also produced from a natural-language prompt:

- **Draft only** — fills the form fields without persisting; review,
  then click **Save** or run the manual flow when ready.
- **Generate everything** — runs the entire lifecycle: NL → schema
  sample → configuration → persist → train selected frameworks →
  emit the Python project. The result panel prints the inferred
  target column, problem type, feature counts, and one pill per
  training run.

![MLRun console — Generate tab](/images/modules/mlrun/mlrun-console-generator.png)

## What the generator does **not** do

- It does **not** spin up a trainer sidecar or Kubernetes cluster —
  those are bootstrapped via `run_mlrun.sh` and `setup-k8s.sh`.
- It does **not** decide which framework to use; it generates code
  for each framework that has a row in the Training list (or for all
  successful runs when auto-resolution is enabled).
- It does **not** write to MongoDB unless explicitly invoked through
  `feature_pipeline.py`.

---

## MLRun Module

Source: `docs/modules/mlrun/index.mdx`
URL: https://ecosystem.ai/docs/modules/mlrun
Summary: End-to-end ML lifecycle (feature engineering → training → deployment) for the Ecosystem.Ai Workbench powered by an MLRun-compatible trainer sidecar and Docker Desktop Kubernetes.

# MLRun Module

## Overview

The **MLRun module** turns the Ecosystem.Ai Workbench2 console into a
full ML lifecycle hub: pull data from MongoDB, draft engineered
feature pipelines through a natural-language **AI pipeline assistant**,
train **sklearn**, **xgboost**, **lightgbm**, or **pytorch** (tabular
wrapper) models against a containerised trainer, emit the entire
lifecycle as a runnable **Python project** (feature pipeline, training,
scoring, K8s deploy), and deploy the trained model — alongside the
Java-based `ecosystem-runtime` — onto Docker Desktop Kubernetes with
two clicks.

The configuration editor is a **13-tab IDE** for one MLRun
configuration:

`Overview · Project · Data Source · Features · H2O Frame · Training ·
Models · Training Runs · Adapters · Python · Runs · Deployments ·
Generate`

For a screenshot-led walkthrough of every tab see
[Console Tour](/docs/modules/mlrun/console_tour).

Two opinionated reference use-cases ship out of the box and seed
real training runs on first install:

- **Customer Spend Risk** — binary classification on
  `master.bank_transactions`, demonstrating numeric + categorical
  feature engineering and risk scoring against an `ecosystem-runtime`
  pod.
- **Customer Personality** — multiclass classification on
  `master.bank_customer`, predicting `personality` from generic
  demographic fields (age, gender, income band, region, life stage).

## Benefits

- **Single-pane lifecycle**: feature engineering, training, scoring,
  and deployment in one console.
- **AI pipeline assistant**: describe the target collection and the
  prediction goal in plain English; the assistant samples the schema,
  drafts the aggregation pipeline, infers the target column / problem
  type, persists the configuration, and (optionally) trains every
  selected framework end-to-end. Seven `pipeline_kind` presets
  (`auto`, `numeric`, `categorical`, `temporal`, `mixed`,
  `aggregates`, `type_coercion`) shape the generated MongoDB
  aggregation.
- **Bring-your-own framework**: sklearn, xgboost, lightgbm, and a
  pytorch tabular wrapper using identical contracts.
- **Reproducible by design**: every console action is exposed in a
  generated Python project (`feature_pipeline.py`, `train_model.py`,
  `score_model.py`, `deploy_to_k8s.py`) so the same lifecycle can run
  in CI, in a notebook, or in an MLRun job. The Python tab adds
  toggles for **training scripts**, the **scoring driver**, and the
  **Kubernetes deployer**, so you only emit what you need.
- **Coexistence with MLRun CE**: when **MLRun Community Edition** is
  enabled, runs land in the MLRun project store and the trainer
  sidecar continues to handle compute. See
  [MLRun Community Edition](/docs/modules/mlrun/community_edition).
- **Runtime-native scoring**: trained adapters generate
  `ecosystem-runtime`-compatible logging payloads, so production
  scoring goes through the same audited paths as the rest of the
  platform.
- **Cascade-safe configurations**: deleting a configuration removes
  the linked feature pipelines, feature sets, training runs, and any
  K8s deployments scoped to its `project_id`, with a confirmation
  dialog that prints the final delete counts.

## Architecture

```text
                ┌──────────────────────────────┐
                │  Workbench2 frontend          │
                │  /mlrun-console               │
                └──────────────┬───────────────┘
                               │
                               ▼
                ┌──────────────────────────────┐
                │  Workbench2 backend (FastAPI) │
                │  /api/v1/mlrun-runtime/*       │
                │  /api/v1/k8s/*                 │
                └─────┬──────────┬──────────────┘
        feature pipe  │          │  k8s api
                      ▼          ▼
        ┌──────────────────┐   ┌────────────────────────────┐
        │ MongoDB           │   │ Docker Desktop Kubernetes   │
        │  master.*          │   │  ┌──────────────┐           │
        │  ecosystem_meta.*  │   │  │ mlrun-trainer │ (8003)    │
        └──────────────────┘   │  │  sklearn / xgb │           │
                                │  │  lgbm / pytorch│           │
                                │  └──────────────┘           │
                                │  ┌──────────────────────┐    │
                                │  │ ecosystem-runtime     │ (8091)
                                │  │  Java Spring scoring  │    │
                                │  └──────────────────────┘    │
                                │  ┌──────────────────────┐    │
                                │  │ MLRun Community Ed.   │    │
                                │  │  (optional, Helm)     │    │
                                │  └──────────────────────┘    │
                                └────────────────────────────┘
```

## What ships in the seed

The seeder script (`backend/scripts/seed_mlrun_use_cases.py`) creates
one **project**, one **feature pipeline**, one **feature set**, one
**configuration**, and four **training runs** (sklearn / xgboost /
lightgbm / pytorch) per use-case. With both use-cases enabled you get:

| Asset                | Spend Risk | Customer Personality |
| -------------------- | ---------- | -------------------- |
| Source collection    | `master.bank_transactions` | `master.bank_customer` |
| Target derivation    | aggregation pipeline (frequent / declined) | `$personality` |
| Problem type         | `binary_classification` (per use-case) | `multiclass_classification` |
| Frameworks trained   | sklearn · xgboost · lightgbm · pytorch | sklearn · xgboost · lightgbm · pytorch |
| Activity log entry   | `SEED_MLRUN_USE_CASE` | `SEED_MLRUN_USE_CASE` |

![MLRun console — configurations list](/images/modules/mlrun/mlrun-console-configurations.png)

## Where to next

- [Installation](/docs/modules/mlrun/install)
- [Console Tour](/docs/modules/mlrun/console_tour) — visual walkthrough of every tab.
- [Use-Case Definition](/docs/modules/mlrun/definition)
- [Data Preparation](/docs/modules/mlrun/data)
- [Model Training](/docs/modules/mlrun/training)
- [Kubernetes Deployment](/docs/modules/mlrun/deployment)
- [Python & AI Generator](/docs/modules/mlrun/generator)
- [MLRun Community Edition](/docs/modules/mlrun/community_edition)
- [Access & Scoring](/docs/modules/mlrun/access)

**Related: MLFlow Integration:** When the goal is purely to import already-trained mojo models from
  an MLFlow registry into the Java runtime, see
  [MLFlow Integration](/docs/runtime/mlflowintegration). The MLRun
  module is the right choice when you also want to **train** models
  in-platform from feature-engineered MongoDB collections.

---

## MLRun Module — Installation

Source: `docs/modules/mlrun/install.mdx`
URL: https://ecosystem.ai/docs/modules/mlrun/install
Summary: Stand up the MLRun trainer sidecar, optional Docker Desktop Kubernetes integration, and seed both reference use-cases.

# Installation

The MLRun module has three independently switchable layers:

| Layer                          | Default state | Required for                         |
| ------------------------------ | ------------- | ------------------------------------ |
| **Trainer sidecar** (`:8003`)  | Enabled       | Training, scoring, generated code    |
| **Docker Desktop Kubernetes**  | Off           | Deployments tab, `deploy_to_k8s.py`  |
| **MLRun Community Edition**    | Off           | Project store + UI for runs/artifacts |

## 1. Prerequisites

- Docker Desktop ≥ 4.30 with at least 6 CPU / 8 GB RAM allocated.
- The Workbench2 backend (`http://localhost:8001`) and frontend
  (`http://localhost:5270`) running, with MongoDB reachable.
- A Mongo `master.bank_transactions` collection populated for the
  spend-risk use-case, and `master.bank_customer` populated for the
  customer-personality use-case (both ship in the demo seeders).

## 2. Trainer sidecar

The trainer sidecar is a Python 3.11 FastAPI service that exposes:

- `POST /train` — trains an sklearn / xgboost / lightgbm / pytorch
  model and returns metrics + model id.
- `POST /invocations` — `ecosystem-runtime` compatible scoring
  endpoint backed by the freshly trained model.

Start it with the bundled compose file:

```bash
cd backend
./run_mlrun.sh up
```

The script wraps `docker compose -f docker-compose.mlrun.yml up -d` and
publishes the trainer on `http://localhost:8003`.

## 3. Docker Desktop Kubernetes (optional)

Enable Kubernetes inside Docker Desktop, then bootstrap the
`ecosystem-workbench` namespace and PV mounts:

```bash
cd backend
./scripts/setup-k8s.sh
```

In `backend/.env`, flip the K8s feature flag:

```dotenv
K8S_ENABLED=true
K8S_CONTEXT=docker-desktop
K8S_NAMESPACE=ecosystem-workbench
K8S_RUNTIME_URL=http://localhost:30091
```

Restart the backend. The MLRun console now shows a **Deployments** tab,
and the **Deploy to Kubernetes** action becomes available on every
training row.

## 4. MLRun Community Edition (optional)

When you want a full MLRun project store + UI on top of the trainer
sidecar:

```bash
cd backend
./scripts/setup-mlrun-ce.sh
```

The script wraps `helm upgrade --install mlrun-ce mlrun/mlrun-ce` with
the values in `backend/k8s/mlrun-ce-values.yaml`. NodePorts:

| Service     | URL                       |
| ----------- | ------------------------- |
| MLRun API   | `http://localhost:30070`  |
| MLRun UI    | `http://localhost:30060`  |
| MinIO       | `http://localhost:30090`  |

In `backend/.env`, flip the CE flags:

```dotenv
MLRUN_CE_ENABLED=true
MLRUN_CE_NAMESPACE=mlrun
MLRUN_CE_RELEASE=mlrun-ce
MLRUN_CE_API_URL=http://localhost:30070
```

See [MLRun Community Edition](/docs/modules/mlrun/community_edition)
for the complete coexistence model.

## 5. Seed the two reference use-cases

```bash
cd backend
./venv/bin/python scripts/seed_mlrun_use_cases.py
```

Useful flags:

| Flag                 | Effect |
| -------------------- | ------ |
| `--use-case spend_risk`            | Seed only the spend-risk lifecycle. |
| `--use-case customer_personality`  | Seed only the personality lifecycle. |
| `--reset`            | Cascade-delete prior seed rows before seeding. |
| `--dry-run`          | Validate preflight without writing to MongoDB or training. |
| `--skip-training`    | Seed metadata only; skip the live trainer calls. |
| `--skip-k8s`         | Skip the optional Kubernetes deploy step. |

Successful execution writes a `SEED_MLRUN_USE_CASE` row to
`ecosystem_meta.activities` per use-case with the framework list,
succeeded count, and elapsed seconds.

## 6. Verify in the console

Open `http://localhost:5270/mlrun-console`. Both **Customer Spend
Risk** and **Customer Personality** rows should be visible in the
Configurations table, and the **Training Runs** tab should list four
successful runs per use-case.

![MLRun console — training runs](/images/modules/mlrun/mlrun-console-training-runs.png)

---

## MLRun Module — Model Training

Source: `docs/modules/mlrun/training.mdx`
URL: https://ecosystem.ai/docs/modules/mlrun/training
Summary: Train sklearn / xgboost / lightgbm / pytorch (tabular) models from the Workbench2 MLRun console or from generated Python code, against the bundled mlrun-trainer sidecar.

# Model Training

The trainer sidecar accepts a uniform `POST /train` contract and
dispatches internally based on `framework`:

| `framework` | Library                                         | Default model |
| ----------- | ----------------------------------------------- | ------------- |
| `sklearn`   | `scikit-learn`                                   | `GradientBoostingClassifier` / `GradientBoostingRegressor` |
| `xgboost`   | `xgboost.sklearn.XGBClassifier`                  | Histogram tree booster |
| `lightgbm`  | `lightgbm.sklearn.LGBMClassifier`                | GBDT |
| `pytorch`   | Tabular MLP wrapper (`torch.nn.Sequential`)      | Two-layer MLP, CPU only |

All four frameworks expose the same response payload — `run_id`,
`model_id`, `adapter_id`, metrics (`accuracy`, `f1`, `roc_auc`,
`mse`, …), and an `artifact_uri` — so the UI and generated code can
treat them interchangeably.

## Triggering a run from the console

1. Open `/mlrun-console`, select the configuration row.
2. Switch to the **Training** tab.
3. Choose the framework and click **Train** (the project, source
   database, and source/target collections are pre-filled from the
   configuration).
4. The run lands in **Training Runs** and, once successful, appears in
   **Models**.

![MLRun console — Training tab](/images/modules/mlrun/mlrun-console-training-tab.png)

## Models tab — score and deploy

After a successful training run, the **Models** tab lists every
trained model bound to the configuration’s `project_id`. Each row
shows the framework, model id, adapter id, and the headline metrics
(`accuracy`, `f1`, `roc_auc`, and — for binary problems —
`precision_at_k`). Two row actions:

- **Score** — issues a sample `/invocations` call against the
  trainer sidecar and shows the response inline. Useful for smoke
  tests immediately after training.
- **Deploy** — schedules the model on Docker Desktop Kubernetes via
  `/api/v1/k8s/*` (only available when `K8S_ENABLED=true`); on
  success the configuration switches to the **Deployments** tab so
  you can confirm the pod is `Running`.

![MLRun console — Models tab](/images/modules/mlrun/mlrun-console-models.png)

## Training Runs tab — audit and retry

The **Training Runs** tab is the append-only history of every
`POST /train` call made for this configuration. Each row prints the
framework, status (`succeeded` / `failed`), elapsed seconds, and a
**Retry** action that re-submits with the same hyperparameters. Use
this tab to compare frameworks side-by-side — sklearn, xgboost,
lightgbm, and pytorch each emit the same metrics shape so the columns
are directly comparable.

![MLRun console — Training Runs tab](/images/modules/mlrun/mlrun-console-training-runs.png)

## Running all four frameworks per use-case

The seed script runs all four for both reference use-cases:

```bash
cd backend
./venv/bin/python scripts/seed_mlrun_use_cases.py --use-case all
```

After completion the **Training Runs** tab lists 8 successful rows
(4 per use-case). Each row links back to the trainer’s
`/invocations` URL so a smoke test scoring call can be issued
directly from the UI.

## Multiclass classification (Customer Personality)

The customer-personality target carries 4–6 labels. The trainer:

- One-hot encodes categorical features (`gender`, `income_band`,
  `region`, `life_stage`, `marital_status`).
- Uses a stratified 80/20 split on `personality`.
- Reports `accuracy` and weighted `f1` (instead of `roc_auc`, which
  is binary-only).
- For sklearn / xgboost / lightgbm, the model exposes
  `predict_proba` so the runtime can return a per-label probability
  vector when scoring.
- For pytorch, the wrapper writes an output layer with
  `out_features=len(classes)` and a softmax head; the adapter
  serialises the class index back to the original label string.

## Binary classification (Customer Spend Risk)

`is_high_risk` is the target. The trainer reports `accuracy`,
`roc_auc`, `f1`, and `precision_at_k` (top-decile precision, useful
for fraud-style review queues). All four frameworks emit the same
shape so the UI can compare them in the **Models** tab.

## Programmatic training

The same training run can be reproduced from generated Python (see
[Python Generator](/docs/modules/mlrun/generator)):

```python
from train_model import train_all

results = train_all(trainer_url="http://localhost:8003")
for run in results:
    print(run.run_id, run.framework, run.metrics)
```

Each call hits `POST /train` on the trainer; the response is parsed
into a `MlrunTrainingResponse` and returned alongside the framework
label.

---

## Spend Personality

Source: `docs/modules/spend_personality/access.mdx`
URL: https://ecosystem.ai/docs/modules/spend_personality/access
Summary: Spend Personality

# Spend Personality

### Access Scores

once scores have been generated from static models or generated from dynamic models, you can access the scores and use them in other data sets. There are pre-defined API's to use.

<video
    muted
    playsInline
    controls
>
    <source src="/images/modules/spend_personality/spend-personality-05.mp4" />
</video>

API's can be used to access scores and use them in various situations. Review a full example of the API parameters [here](/docs/runtime/access).

### API Parameters

When using the API to access scores, you will need to provide the following parameters:

#### Campaign
This is the same name as provided when configuring project deployment settings. For dynamic recommenders ensure that the names are the same.

#### Sub-Campaign
The sub-campaign can be used to differentiate between different models that are used in the same campaign. This is useful when using multiple models in the same campaign.

#### Lookup
If there is a parameter lookup configured, then this is the value that will be used to lookup the model scoring parameters. If there is no lookup configured, then this value will be ignored.

#### Channel
Different channels can be used to access the scores. This is useful when using the same model in different channels.

#### Responses
The number of responses to return. This is useful when using the API to return multiple scores. For data lookup options only one response is returned.

#### The in_param parameter
With the `Score` API Selected, use the following options for in_params.

Model based recommender:
```json
{}
```

Note that this approach will bypass any parameter lookup settings in the project deployment configuration. Model based configurations that require data lookup replacement use:
```json
{
  "input":["model_param1","model_param2"],
  "value":["value to score","value to score"]
}
```

Dynamic recommenders use:
```json
{
  "input":["contextual_variable_one","contextual_variable_two"],
  "value":["",""]
}
```

Tensorflow or PyTorch models:
```json
{
  "input":["text"],
  "value":["Place text here"],
  "type":"dense_1"
}
```

Question and answer approaches with deep learning models:
```json
{
  "input":["text","question"],
  "value":["BBC Japan was a general entertainment Channel. Which operated between December 2004 and April 2006.","When did BBC Japan start broadcasting?"],
  "type":"qa"
}
```

---

## Spend Personality

Source: `docs/modules/spend_personality/chatgpt.mdx`
URL: https://ecosystem.ai/docs/modules/spend_personality/chatgpt
Summary: Spend Personality

# Spend Personality

### Custom ChatGPTs

Custom ChatGPTs can be used to create a more personalized experience for users. This can be done by configuring access to the ecosystem.Ai spend Personality APIs. The API can be used to access scores and use them in various situations.

<video
    muted
    playsInline
    controls
>
    <source src="/images/modules/spend_personality/spend-personality-chatgpt.mp4" />
</video>

API's can be used to access scores and use them in various situations.

### Specialized Knowledge

We provide a set of specialized knowledge as part of the module install that can be used to enhance the user experience. This can be used to provide more accurate and relevant information to users.

#### API Access

Use the following OpenAI CustomGPT API to access the spend personality scores:

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "Spending Personality API",
    "description": "API that obtains spending personality and push response once customer values returned.",
    "version": "v1.0.0"
  },
  "servers": [
    {
      "url": "https://bank-score.ecosystem.ai"
    }
  ],
  "paths": {
    "/invocations": {
      "post": {
        "summary": "Obtain, generate, determine, calculate spending personality.",
        "operationId": "invocations",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "campaign": {
                    "type": "string",
                    "default": "spending_personality",
                  },
                  "subcampaign": {
                    "type": "string",
                    "default": "openai",
                    "description": "subcampaign",
                    "example": "openai",
                  },
                  "channel": {
                    "type": "string",
                    "default": "chatgpt",
                  },
                  "customer": {
                    "type": "string",
                  },
                  "numberoffers": {
                    "type": "string",
                    "default": "1",
                  },
                  "userid": {
                    "type": "string",
                    "default": "openai",
                  },
                  "params": {
                    "type": "string",
                    "default": "{}",
                  }
                }
              }
            }
          }
        }
      }
    },
  "/response": {
      "post": {
        "summary": "Respond to spending personality when customer lookup happens.",
        "operationId": "response",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "uuid": {
                        "type": "string",
                      },
                      "offers_accepted": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        },
                        "example": [
                          "offer1"
                        ]
                      },
                      "channel": {
                        "type": "string",
                        "default": "chatgpt"
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "response from the custom API",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "final_result": {
                      "type": "array",
                      "items": {
                        "type": "object"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
  },
  "components": {
    "schemas": {}
  }
}
```

---

## Spend Personality

Source: `docs/modules/spend_personality/configuration.mdx`
URL: https://ecosystem.ai/docs/modules/spend_personality/configuration
Summary: Spend Personality

# Spend Personality

### Project Configuration

You can configure the Spend Personality module to analyze text data and generate predictions. there are a number of pre-defined predictions and dynamic configurations that can be used to generate predictions.

<video
    muted
    playsInline
    controls
>
    <source src="/images/modules/spend_personality/spend-personality-02.mp4" />
</video>

Models can be tested by using the "Test Model" functionality where default parameters are used.

---

## Spend Personality

Source: `docs/modules/spend_personality/data.mdx`
URL: https://ecosystem.ai/docs/modules/spend_personality/data
Summary: Spend Personality

# Spend Personality

### Data Management

In order for the Spend Personality module to generate predictions, you will need to provide it with a dataset of customer transactions and demographic information. The model will use this data to train itself and generate predictions for new customers.

<video
    muted
    playsInline
    controls
>
    <source src="/images/modules/spend_personality/spend-personality-03.mp4" />
</video>

After importing data you can run the algorithm to generate scores.

---

## Spend Personality

Source: `docs/modules/spend_personality/definition.mdx`
URL: https://ecosystem.ai/docs/modules/spend_personality/definition
Summary: Spend Personality

# Spend Personality

### Project Definition

The Spend Personality uses a number of algorithms to analyze text data and generate predictions. The model is trained on a dataset of customer transactions and demographic information, and uses this data to predict the spending behavior of new customers.

<video
  muted
  autoPlay
  playsInline
  controls
>
  <source src="/images/modules/spend_personality/spend-personality-01.mp4" />
</video>

All module assets are pre-defined and can be used as examples to achieve your own project outcomes.

---

## Spend Personality

Source: `docs/modules/spend_personality/enrich.mdx`
URL: https://ecosystem.ai/docs/modules/spend_personality/enrich
Summary: Spend Personality

# Spend Personality

### Enrichment Algorithm

Once data has been imported, either by wizard or direct data access, you can process an enrichment algorithm to generate predictions.

<video
    muted
    playsInline
    controls
>
    <source src="/images/modules/spend_personality/spend-personality-04.mp4" />
</video>

Review generated scores and add to other data sets if needed.

---

## Index

Source: `docs/modules/spend_personality/index.mdx`
URL: https://ecosystem.ai/docs/modules/spend_personality

# Spend Personality Module

## Overview

The Spend Personality module is a generative model that predicts the spending behavior of a user based on their personality traits. The model uses a combination of natural language processing (NLP) and machine learning (ML) techniques to analyze text data and generate predictions.

## Benefits

- **Deeper Insights**: Understand customers through demographic and transaction categorization.
- **Personalized Engagement**: Tailor interactions based on income and spending personalities, boosting engagement.
- **Optimized Usage**: Engage customers intelligently to maximize banking product utilization.
- **Continuous Value**: Sustain engagement with targeted offers, driving long-term loyalty and value.

## Context

There are a number of key use-cases that make the total process of Spend Personality a valuable tool for businesses:
- **Categorize**: Categorize customer demographic and transactions.
- **Personality**: Money and Spend personality to drive interaction and engagement.
- **Activation**: Intelligently engage with customer using personality to ensure maximum usage of retail products.
- **Continuous**: Continuous engagement with offers, nudges, messaging driving customer lifetime value.

![image](/images/modules/spend_personality/spend-personality.png)

## How it Works

The Spend Personality module uses a combination of NLP and ML techniques to analyze text data and generate predictions. The model is trained on a dataset of customer transactions and demographic information, and uses this data to predict the spending behavior of new customers.

---

## AWS Spend Personality

Source: `docs/modules/spend_personality/install/aws.mdx`
URL: https://ecosystem.ai/docs/modules/spend_personality/install/aws
Summary: AWS Spend Personality

# Guide to Installing Spend Personality: AWS

This guide will walk you through the process of setting up the ecosystem.Ai Spend Personality in AWS.

[AWS Marketplace Install](https://aws.amazon.com/marketplace/pp/prodview-2kak2xwqqgd3w)

### Step 1: Search for the Spend Personality App in Marketplace
- Go to the AWS Marketplace and search for the ecosystem.Ai Spend Personality app.
- Click on the app to view the details.

![image](/images/modules/spend_personality/01.png)

### Step 2: Review Configuration of the App
- Click on the "Continue to Subscribe" button.
- Review the pricing details and click on the "Continue to Configuration" button.

![image](/images/modules/spend_personality/02.png)

### Step 3: Configure and Launch the App
- Wait for request to be processed.
- Configure the app by selecting the region, instance type, and other settings.

![image](/images/modules/spend_personality/03.png)

Decide how to launch the app, either through the EC2 console or Launch from Website.
![image](/images/modules/spend_personality/04.png)

Select the VPC, Subnet, and Security Group for the instance. Ensure that the security group allows inbound traffic on port 80, 3000, 3001, 5111, 8090-8099, 54321, 54322.
![image](/images/modules/spend_personality/05.png)

Message then deployment was successful.
![image](/images/modules/spend_personality/06.png)

### Step 4: Review Instance
- Review the instance details in EC2.
- Find the instance id and use it as a password when logging in.

![image](/images/modules/spend_personality/07.png)

### Step 5: Access the Spend Personality App
- Access the app using the instance id as the password.
- Configure the app and start using it.

Sign in to the Workbench as admin@ecosystem.ai with the instance id as the password.
![image](/images/modules/spend_personality/08.png)

Review Spend Personality assets.
![image](/images/modules/spend_personality/10.png)

---

## Azure Spend Personality

Source: `docs/modules/spend_personality/install/azure.mdx`
URL: https://ecosystem.ai/docs/modules/spend_personality/install/azure
Summary: Azure Spend Personality

# Guide to Installing Spend Personality: Azure

This guide will walk you through the process of setting up the ecosystem.Ai Spend Personality in Azure.

[Azure Marketplace Install](https://portal.azure.com/#view/Microsoft_Azure_Marketplace/GalleryItemDetailsBladeNopdl/id/ecogeneticllc1676924558438.ecosystem-spend-personality)

### Step 1: Search for the Spend Personality App in Marketplace
- Go to the Azure Marketplace and search for the ecosystem.Ai Spend Personality app.
- Click on the app to view the details.

![image](/images/modules/spend_personality/azure-01.png)

### Step 2: Review Configuration of the App
- Click on the "Continue" button.
- Review the pricing details and click on the "Continue to Configuration" button.

![image](/images/modules/spend_personality/azure-02.png)

### Step 3: Start Configuration and Launch the App
- Wait for request to be processed.
- Configure the app by selecting the region, instance type, and other settings.

![image](/images/modules/spend_personality/azure-03.png)

Set all the basic settings for resource group etc to get instance configured.
![image](/images/modules/spend_personality/azure-04.png)

Public keys and other settings configured.
![image](/images/modules/spend_personality/azure-05.png)

Kick-off launch of process.
![image](/images/modules/spend_personality/azure-06.png)

Review deployment of resources being initiated.
![image](/images/modules/spend_personality/azure-07.png)

Once completed, review resources and go to resource group.
![image](/images/modules/spend_personality/azure-08.png)

### Step 4: Review Instance
- Review the instance details.
- Review network settings: allow inbound traffic on port 80, 3000, 3001, 5111, 8090-8099, 54321, 54322.

![image](/images/modules/spend_personality/azure-09.png)

![image](/images/modules/spend_personality/azure-10.png)

### Step 5: Access the Spend Personality App
- Access the app using 'password' as the password. Please change once you're logged in.
- Configure the app and start using it.

Sign in to the Workbench as admin@ecosystem.ai with 'password' as the password.
![image](/images/modules/spend_personality/08.png)

Review Spend Personality assets.
![image](/images/modules/spend_personality/10.png)

---

## Two-Tower Module — Access & Operations

Source: `docs/modules/two_tower/access.mdx`
URL: https://ecosystem.ai/docs/modules/two_tower/access
Summary: Operating the Two-Tower module — RBAC, the Solutions hub route, deployment configuration, the embedding/sidecar prerequisites, and a deployment checklist.

# Access & Operations

## Access control

The module is gated by the `two_tower` capability. Grant it to the roles that
should train, batch-score, and deploy two-tower recommenders. The workbench
Solutions hub surfaces the module at the `/two-tower` route.

## Deployment configuration

Real-time scoring is configured entirely through campaign properties (no model
file is loaded):

```properties
predictor.model.type=similarity
plugin.prescore=com.ecosystem.plugin.customer.PrePredictTwoTower
plugin.postscore=com.ecosystem.plugin.customer.PostScoreTwoTower

# optional live user embedding via the PyTorch sidecar
predictor.twotower.user.embed=pytorch:http://ecosystem-notebooks:8010:two_tower_user_v1
```

| Property | Required | Meaning |
| --- | --- | --- |
| `predictor.model.type=similarity` | yes | bypass H2O + dynamic; use cosine/dot scoring |
| `plugin.prescore` | yes | `PrePredictTwoTower` (loads embeddings) |
| `plugin.postscore` | yes | `PostScoreTwoTower` (ranks offers) |
| `predictor.twotower.user.embed` | optional | live user vector via api:pytorch |
| `mojo.key` | omit | not used in similarity mode |

## Prerequisites

1. **A trained run** (`two_tower_runs`) from workbench2 or the PyTorch sidecar.
2. **Embeddings available** to the runtime, via either:
   - precomputed vectors in `two_tower_user_embeddings` /
     `two_tower_item_embeddings`, or
   - a reachable PyTorch sidecar for the user vector plus precomputed item
     vectors.

**Populate embeddings before deploying:** In `similarity` mode the runtime computes scores purely from vectors. If neither
  precomputed embeddings nor the sidecar are available, offers cannot be ranked.
  Confirm the embedding collections are populated (or the sidecar responds) before
  routing traffic.

## Deployment checklist

- [ ] Train towers (H2O via workbench2, or PyTorch via the sidecar).
- [ ] Export user/item embeddings to MongoDB (or stand up the sidecar).
- [ ] Set `predictor.model.type=similarity` and the two plugin properties.
- [ ] (Optional) Set `predictor.twotower.user.embed` for live user vectors.
- [ ] Smoke test with `POST /invocations` and confirm `final_result` ranks offers.
- [ ] Verify logging rows are written (see
  [Logging & Reporting](/docs/runtime/logging)).

## Operations notes

- **Latency** is dominated by vector math and (optionally) a single sidecar call
  per request; it is independent of model size.
- **Retraining** produces a new `run_id`; re-export embeddings and update the
  collections. The runtime reads the latest vectors keyed by `customer_id` /
  `offer`.
- **Cold-start offers** without an embedding are skipped during ranking (logged
  and continued), so a missing vector never fails a request.

Related pages: [Real-Time Scoring](/docs/modules/two_tower/runtime),
[PyTorch Serving](/docs/modules/two_tower/pytorch),
[API Reference](/docs/modules/two_tower/api).

---

## Two-Tower Module — API Reference

Source: `docs/modules/two_tower/api.mdx`
URL: https://ecosystem.ai/docs/modules/two_tower/api
Summary: Complete request and response JSON for two-tower training and scoring across the stack — workbench2 algorithm endpoints, the ecosystem-notebooks PyTorch sidecar, and the ecosystem-runtime invocations contract.

# API Reference

Every endpoint below shows a **copy-pasteable** request body and a sample
response. Endpoints are grouped by component.

## Workbench2 — two-tower algorithm

Base prefix: `/api/v1`.

| Method | Path | Sync/Async |
| --- | --- | --- |
| `GET` | `/algorithms/two-tower/health` | sync |
| `GET` | `/algorithms/two-tower/predictors` | sync |
| `GET` | `/algorithms/two-tower/predictor-date-bounds` | sync |
| `GET` | `/algorithms/two-tower/configs` | sync |
| `POST` | `/algorithms/two-tower/configs` | sync |
| `POST` | `/algorithms/two-tower/configs/{config_id}/prediction-link` | sync |
| `GET` | `/algorithms/two-tower/configs/{config_id}/jobs` | sync |
| `POST` | `/algorithms/two-tower/train` | async job |
| `POST` | `/algorithms/two-tower/batch-score` | async job |
| `POST` | `/algorithms/two-tower/export-embeddings` | async job |
| `POST` | `/algorithms/two-tower/concept-test` | sync |

### Saved configuration

Request (`POST /algorithms/two-tower/configs`):

```json
{
  "config_id": "customer_offer_retrieval_v1",
  "name": "Customer Offer Retrieval v1",
  "engine": "pytorch_notebooks",
  "source": {
    "database": "logging",
    "collection": "ecosystemruntime_flatten",
    "predictor": "my_predictor",
    "from_date": "2026-01-01",
    "to_date": "2026-06-01"
  },
  "features": {
    "target_column": "accepted",
    "user_features": ["customer_id", "price", "rank", "score"],
    "item_features": ["offer", "price", "rank", "score"],
    "categorical_columns": ["customer_id", "offer"]
  },
  "keys": { "customer_key_field": "customer_id", "offer_key_field": "offer" },
  "training": {
    "embedding_dim": 32,
    "epochs": 25,
    "stopping_rounds": 3,
    "batch_size": 256,
    "learning_rate": 0.001,
    "hidden": [128, 64]
  },
  "embedding_export": {
    "database": "ecosystem_meta",
    "user_collection": "two_tower_user_embeddings",
    "item_collection": "two_tower_item_embeddings",
    "metric": "cosine",
    "normalized": true
  }
}
```

Saved configurations are listed in the `/two-tower` table. Jobs should include
`context.config_id` so the page can show all jobs for the selected config.

The deployable Workbench asset is still a prediction entity. Link or create it
from the saved config:

```json
{
  "config_id": "customer_offer_retrieval_v1",
  "predict_id": "customer_offer_retrieval_v1",
  "create_if_missing": true
}
```

The linked prediction stores compact `two_tower` metadata while detailed run
history remains in `two_tower_runs` and async jobs.

### Train

Request:

```json
{
  "config_id": "customer_offer_retrieval_v1",
  "engine": "h2o",
  "database": "logging",
  "flatten_collection": "ecosystemruntime_flatten",
  "predictor": "my_predictor",
  "from_date": "2026-01-01",
  "to_date": "2026-06-01",
  "embedding_dim": 32,
  "epochs": 5,
  "stopping_rounds": 3,
  "run_id": "tt_abc123"
}
```

Response (job accepted) and final job result:

```json
{ "job_id": "job_789" }
```

```json
{
  "run_id": "tt_abc123",
  "user_model_id": "two_tower_user_tt_abc123",
  "item_model_id": "two_tower_item_tt_abc123",
  "user_auc": 0.72,
  "item_auc": 0.68,
  "n_rows": 150000
}
```

### Batch score

Request:

```json
{ "run_id": "tt_abc123", "top_k": 10, "max_users": 5000, "scores_collection": "two_tower_scores" }
```

Response (per-customer document written to MongoDB):

```json
{
  "run_id": "tt_abc123",
  "customer_id": "user_1",
  "ranked": [ { "offer": "ProductB", "score": 0.87 }, { "offer": "ProductC", "score": 0.41 } ],
  "created_at": "2026-06-30T00:00:00Z"
}
```

### Export embeddings

Request:

```json
{
  "run_id": "tt_abc123",
  "config_id": "customer_offer_retrieval_v1",
  "embedding_database": "ecosystem_meta",
  "user_embedding_collection": "two_tower_user_embeddings",
  "item_embedding_collection": "two_tower_item_embeddings",
  "customer_key_field": "customer_id",
  "offer_key_field": "offer",
  "max_users": 100000,
  "max_items": 100000
}
```

Accepted response:

```json
{ "job_id": "job_export_123", "message": "Embedding export started" }
```

Final job result:

```json
{
  "run_id": "tt_abc123",
  "config_id": "customer_offer_retrieval_v1",
  "embedding_database": "ecosystem_meta",
  "user_embedding_collection": "two_tower_user_embeddings",
  "item_embedding_collection": "two_tower_item_embeddings",
  "user_embedding_count": 240000,
  "item_embedding_count": 5800,
  "embeddings_exported_at": "2026-06-30T00:00:00Z"
}
```

### Concept test

Request:

```json
{ "run_id": "tt_abc123", "customer_id": "user_1", "offers": ["ProductA", "ProductB"] }
```

Response:

```json
{
  "success": true,
  "run_id": "tt_abc123",
  "customer_id": "user_1",
  "ranked": [ { "offer": "ProductB", "score": 0.87 }, { "offer": "ProductA", "score": 0.12 } ]
}
```

## ecosystem-notebooks — PyTorch sidecar

Base URL: `http://<notebooks-host>:8010`.

| Method | Path | Purpose |
| --- | --- | --- |
| `POST` | `/pytorch/train` | train MLP or two-tower model |
| `POST` | `/pytorch/invocations` | score / embed by `model_id` |
| `GET` | `/pytorch/models` | list trained model ids |
| `GET` | `/pytorch/health` | health check |

### Train

Request:

```json
{
  "model_id": "customer_offer_retrieval_v1",
  "model_type": "two_tower",
  "async": true,
  "problem_type": "binary_classification",
  "data": {
    "source": {
      "database": "logging",
      "collection": "ecosystemruntime_flatten",
      "pipeline": [
        { "$match": { "predictor": "my_predictor" } },
        { "$project": { "_id": 0, "customer_id": 1, "offer": 1, "price": 1, "rank": 1, "score": 1, "accepted": 1 } }
      ],
      "limit": 100000
    },
    "csv_path": null,
    "inline": null,
    "target_column": "accepted",
    "categorical_columns": ["customer_id", "offer"],
    "train_test_split": 0.2,
    "random_state": 42
  },
  "hyperparameters": {
    "epochs": 25, "batch_size": 256, "hidden": 64, "learning_rate": 0.001,
    "embedding_dim": 32,
    "user_features": ["customer_id", "price", "rank", "score"],
    "item_features": ["offer", "price", "rank", "score"],
    "user_id_column": "customer_id", "item_id_column": "offer"
  }
}
```

Response:

```json
{
  "run_id": "run_2f1c",
  "status": "succeeded",
  "model_id": "two_tower_user_v1",
  "metrics": { "user_auc": 0.71, "item_auc": 0.67 },
  "rows_total": 100000
}
```

### Invocations (score / embed)

Request:

```json
{
  "model_id": "customer_offer_retrieval_v1",
  "instances": [
    { "customer_id": "user_1", "price": 0, "rank": 1, "score": 0, "tower": "user" }
  ]
}
```

Response:

```json
{
  "predictions": [ { "prediction": 0.87, "embedding": [0.11, 0.20, 0.07] } ],
  "final_result": [ { "prediction": 0.87, "embedding": [0.11, 0.20, 0.07] } ],
  "framework": "pytorch"
}
```

**Embedding shape:** `ApiModelClient.embed()` accepts the embedding at `predictions[0].embedding`,
  or top-level `embedding` / `vector` / `outputs[0]`.

## Python runner

The scriptable flow should call the same Workbench APIs as the UI:

```bash
python backend/scripts/two_tower_pipeline.py \
  --config-id customer_offer_retrieval_v1 \
  --steps train,concept-test,export-embeddings \
  --wait
```

Expected JSON output:

```json
{
  "config_id": "customer_offer_retrieval_v1",
  "run_id": "tt_abc123",
  "jobs": [
    { "step": "train", "job_id": "job_train_1", "status": "Completed" },
    { "step": "export-embeddings", "job_id": "job_export_1", "status": "Completed" }
  ],
  "embedding_export": {
    "database": "ecosystem_meta",
    "user_collection": "two_tower_user_embeddings",
    "item_collection": "two_tower_item_embeddings",
    "user_embedding_count": 240000,
    "item_embedding_count": 5800
  },
  "deployment_properties": {
    "predictor.model.type": "similarity",
    "predictor.twotower.run.id": "tt_abc123"
  }
}
```

## ecosystem-runtime — invocations

Request (`POST /invocate`):

```json
{
  "campaign": "two_tower_demo",
  "sub-campaign": "default",
  "channel": "web",
  "customer": "user_1",
  "numberoffers": 3,
  "userid": "ecosystem",
  "in_params": { "input": ["customer_id"], "value": ["user_1"] }
}
```

Response (trimmed):

```json
{
  "final_result": [
    { "rank": 1, "result": { "offer": "ProductB", "offer_name": "ProductB", "score": 0.87 } },
    { "rank": 2, "result": { "offer": "ProductC", "offer_name": "ProductC", "score": 0.41 } }
  ],
  "explore": 0,
  "uuid": "..."
}
```

---

## Two-Tower Module — Architecture & Theory

Source: `docs/modules/two_tower/concepts.mdx`
URL: https://ecosystem.ai/docs/modules/two_tower/concepts
Summary: How dual-encoder recommenders work — the user and item towers, the shared embedding space, L2-normalized dot product / cosine similarity, and retrieval versus ranking.

# Architecture & Theory

## The dual-encoder idea

A two-tower model learns **two functions** that project different entities into a
**single shared vector space**:

- the **user tower** $f_u(\cdot)$ maps a customer's features $x_u$ to a vector
  $u = f_u(x_u) \in \mathbb{R}^p$,
- the **item tower** $f_i(\cdot)$ maps an offer's features $x_i$ to a vector
  $v = f_i(x_i) \in \mathbb{R}^p$.

The model is trained so that customers and the offers they engage with land
**close together** in that space. Compatibility is then just a similarity
between two vectors.

## The similarity score

ecosystem.Ai scores a customer/offer pair with the **dot product of the
L2-normalized embeddings**:

$$
\hat{u} = \frac{u}{\lVert u \rVert_2}, \qquad
\hat{v} = \frac{v}{\lVert v \rVert_2}, \qquad
\text{score}(u, v) = \hat{u} \cdot \hat{v}
$$

Because both vectors are unit length, the dot product equals the **cosine
similarity**, bounded in $[-1, 1]$. Higher means more compatible.

**Why normalize:** L2-normalization makes scores comparable across customers and offers (vector
  *magnitude* no longer affects ranking, only *direction*), and it makes the
  Java runtime's cosine and the training-time dot product agree.

## The two towers in ecosystem.Ai

The built-in workbench implementation trains both towers as **H2O Deep Learning**
networks and reads the **first hidden layer** as the embedding.

| Tower | Inputs (features) | Target | Embedding source |
| --- | --- | --- | --- |
| **User** | `customer_id`, `price`, `rank`, `score` | `accepted` (0/1) | `deepfeatures(layer=0)` |
| **Item** | `offer`, `price`, `rank`, `score` | `accepted` (0/1) | `deepfeatures(layer=0)` |

Each tower is a classifier of "did the customer accept?", and the **hidden-layer
activations** become the embedding. With `hidden=[embedding_dim]`, the single
hidden layer *is* the *p*-dimensional vector.

```mermaid
flowchart TB
  subgraph user [User tower]
    xu["customer_id, price, rank, score"] --> hu["hidden layer = p units"] --> au["accepted?"]
  end
  subgraph item [Item tower]
    xi["offer, price, rank, score"] --> hi["hidden layer = p units"] --> ai["accepted?"]
  end
  hu --> uvec["user embedding"]
  hi --> ivec["item embedding"]
```

## How Workbench, notebooks, and runtime work together

The Two-Tower module is split across three ecosystem components, each with a
clear responsibility:

- **Workbench2** is the control plane. Users create saved Two-Tower
  configurations, choose an engine, launch jobs, run concept tests, export
  embeddings, and bind the exported run to a deployment.
- **ecosystem-notebooks** is the PyTorch training and embedding sidecar. It is
  used when the saved configuration selects the `pytorch_notebooks` engine.
- **ecosystem-runtime** is the real-time scoring plane. It does not train
  models; it reads the deployed configuration and ranks the request's offer
  matrix using exported embeddings and similarity scoring.

### Model training and embedding export

Training starts from a saved configuration in Workbench2. The configuration
captures the source data, feature lists, key fields, training hyperparameters,
engine choice, export collections, and deployment defaults. Workbench2 then
dispatches to the selected engine:

- `h2o` uses the built-in Workbench H2O Deep Learning path.
- `pytorch_notebooks` calls `ecosystem-notebooks /pytorch/train` with
  `model_type="two_tower"`.

After training, Workbench2 stores run metadata in `two_tower_runs`, lets the
user run a concept test, and then runs an explicit embedding export job. That
can stay fast and deterministic.

```mermaid
flowchart TD
  User["User opens Workbench2 /two-tower"] --> Config["Create or select saved Two-Tower config"]
  Config --> Params["Set source, features, keys, engine, hyperparameters"]
  Params --> Engine{"Training engine"}

  Engine --> H2O["Workbench2 H2O Deep Learning trainer"]
  Engine --> PT["ecosystem-notebooks /pytorch/train"]

  H2O --> H2OModels["User tower + item tower models"]
  PT --> PTArtifacts["PyTorch two-tower artifacts"]

  H2OModels --> RunMeta["Workbench2 stores two_tower_runs metadata"]
  PTArtifacts --> RunMeta

  RunMeta --> Concept["Concept test: customer + candidate offers"]
  Concept --> Export["Workbench2 export embeddings job"]
  Export --> UserVectors["Mongo: two_tower_user_embeddings"]
  Export --> ItemVectors["Mongo: two_tower_item_embeddings"]
  Export --> DeployDefaults["Deployment defaults: run id, collections, keys, plugins"]
```

This training flow separates **model production** from **runtime use**. H2O and
PyTorch can produce embeddings in different ways, but the exported shape is the
same: keyed, normalized vectors grouped by `run_id`.

### Real-time scoring

Runtime scoring starts after Workbench2 has generated deployment properties for
the selected Two-Tower run. The deployment marks the model as
`predictor.model.type=similarity` and selects the Two-Tower pre/post plugins.
That tells ecosystem-runtime to bypass the normal H2O/dynamic scoring path for
that predictor and use vector similarity instead.

```mermaid
flowchart TD
  Request["Runtime invocation with customer context + offerMatrix"] --> Mode["predictor.model.type = similarity"]
  Mode --> Pre["PrePredictTwoTower"]
  Pre --> Settings["Read run id, embedding DB, collections, customer key, offer key"]
  Settings --> FetchUser["Fetch one user embedding from Mongo"]
  Settings --> OfferKeys["Extract offer keys from offerMatrix"]
  OfferKeys --> FetchItems["Fetch matching item embeddings from Mongo"]
  FetchUser --> Params["Attach user_embedding to params"]
  FetchItems --> Params2["Attach item_embeddings to params"]
  Params --> Post["PostScoreTwoTower"]
  Params2 --> Post
  Post --> Similarity["SimilarityScorer cosine / dot product"]
  Similarity --> Ranked["Ranked offerMatrix response"]
```

In this scoring flow, ecosystem-runtime does not need to load the training
framework or run neural-network inference on every request. It only needs the
customer vector, the candidate offer vectors, and the configured similarity
metric. This keeps the hot path small while still allowing Workbench2 and
ecosystem-notebooks to evolve the training engines independently.

## Retrieval versus ranking

Two-tower models shine at **retrieval**: with item vectors precomputed, finding
the best offers for a customer is a nearest-neighbour search over vectors —
cheap even across very large catalogues.

| Property | Two-tower (retrieval) | Cross-feature ranker |
| --- | --- | --- |
| User/item interaction | late (dot product only) | early (joint features) |
| Item vectors precomputable | yes | no |
| Cost per candidate | one dot product | a full model score |
| Typical use | shortlist thousands → hundreds | re-rank a small shortlist |

In ecosystem.Ai the same dot-product is used directly for ranking the
**offer matrix** at request time, because the offer matrix is already a curated
candidate set. For very large catalogues you would precompute item vectors and
use an approximate nearest-neighbour (ANN) index in front of the runtime.

## Engine independence

Nothing about the scoring math depends on **how** the towers were trained. The
runtime consumes **embedding vectors**:

- **H2O Deep Learning** towers (workbench) → `deepfeatures(layer=0)` + L2 norm.
- **PyTorch** towers (notebooks sidecar) → the tower's output vector.

Both produce *p*-dimensional vectors that the runtime compares with cosine / dot
product. See [Model Training](/docs/modules/two_tower/training) and
[PyTorch Serving](/docs/modules/two_tower/pytorch).

---

## Two-Tower Module — Data Preparation

Source: `docs/modules/two_tower/data.mdx`
URL: https://ecosystem.ai/docs/modules/two_tower/data
Summary: The interaction data behind two-tower training — the ecosystemruntime_flatten collection, predictor and date selection, and the MongoDB-to-H2O feature frame pipeline.

# Data Preparation

## Source data

Two-tower training reads **interaction-level** rows: one row per customer/offer
exposure, with context numerics and a binary outcome.

| Field | Meaning |
| --- | --- |
| `customer_id` | the customer the offer was shown to |
| `offer` | the offer/product presented |
| `accepted` | `1` if the customer accepted, else `0` (the training target) |
| `price` | offer price at exposure (context) |
| `rank` | the rank the offer was shown at (context) |
| `score` | the model score at exposure (context) |

The default source is the runtime logging collection:

- **Database:** `logging`
- **Collection:** `ecosystemruntime_flatten`

These are produced by the runtime's logging pipeline as interactions accumulate,
so the two-tower model learns directly from real presented/accepted behaviour.

## One interaction dataset, two feature views

The default Workbench flow uses **one training dataset**, not two separate
datasets. The source collection is an interaction table: every row says
"this customer saw this offer/product in this context, and this was the
outcome."

During training, that same row is split into two feature views:

```text
user tower X: customer_id + customer/context features
item tower X: offer/product id + product/context features
target y   : accepted/responded/clicked/etc.
```

Both towers use the same target because the label belongs to the
customer-product interaction. The two trained models learn separate embeddings
from the same interaction evidence, then scoring compares those embeddings with
cosine or dot-product similarity.

Use separate source datasets only when customer profile attributes or product
catalog attributes live outside the interaction collection. In that case,
materialize them into the training frame before training, or configure the
Workbench pipeline so the final training source contains:

- interaction rows with the target label,
- customer-side fields needed by the user tower, and
- product-side fields needed by the item tower.

## Selecting a slice

Training is scoped by a **predictor** and an optional **date range**:

- `predictor` — restricts rows to a single deployment/use-case.
- `from_date` / `to_date` — an inclusive-start, exclusive-end window
  (`datetime >= from_date` and `datetime < to_date`).

Two helper endpoints support the UI:

- `GET /api/v1/algorithms/two-tower/predictors` — distinct predictor values.
- `GET /api/v1/algorithms/two-tower/predictor-date-bounds` — min/max dates and
  the row count for a predictor.

## From MongoDB to an H2O frame

Training reuses the shared feature-frame pipeline (the same one used by Spend
Personality): MongoDB documents are exported to **chunked CSV**, then loaded into
an **H2O frame** named `two_tower_features`. Two-tower adds interaction rows but
does not fork the export logic.

```mermaid
flowchart LR
  mongo[(logging.ecosystemruntime_flatten)] --> csv[Chunked CSV export]
  csv --> frame["H2O frame: two_tower_features"]
  frame --> train["Train user + item towers"]
```

The default training columns pulled from the frame are:

```text
customer_id, offer, accepted, price, rank, score
```

split into per-tower feature sets:

```text
user tower X: customer_id, price, rank, score
item tower X: offer, price, rank, score
target y   : accepted
```

The `/two-tower` configuration can override these defaults. Use the editable
customer key, offer key, user feature list, item feature list, target column,
and categorical columns when your training source has richer customer or product
attributes.

## Many customer and product features

Two-tower models can use many fields, but feature selection still matters. Put
stable customer attributes on the user side, product/catalog attributes on the
item side, and shared exposure context on either side only when it helps the
retrieval task.

Examples:

- Customer/user tower: `customer_id`, segment, geography, lifecycle stage,
  preferences, behavioural aggregates, spend bands, loyalty tier.
- Product/item tower: `offer`, product category, merchant, price bucket,
  margin band, inventory flags, campaign type, eligibility attributes.
- Context: rank, prior score, channel, device, time window, campaign metadata.

High-cardinality identifier fields such as `customer_id` and `offer` should be
categorical. Continuous values should be numeric. Avoid dumping every available
column into both towers: noisy or leakage-prone fields can make embeddings less
portable for real-time scoring. If there are many raw attributes, prefer a
curated set or precomputed aggregates that are available both at training time
and runtime.

**Data hygiene:** Two-tower quality depends on having enough **accepted** interactions across a
  range of customers and offers. Use the predictor date-bounds endpoint to check
  row counts before training; very sparse windows produce weak embeddings.

Next: [Model Training](/docs/modules/two_tower/training).

---

## Two-Tower Module

Source: `docs/modules/two_tower/index.mdx`
URL: https://ecosystem.ai/docs/modules/two_tower
Summary: Dual-encoder (two-tower) recommendation for ecosystem.Ai — train a user tower and an item tower into a shared embedding space, export embeddings, and score in real time through the runtime using cosine / dot-product similarity.

# Two-Tower Module

## Overview

The **Two-Tower module** brings the **dual-encoder** retrieval pattern to
ecosystem.Ai. It trains two neural "towers":

- a **user (customer) tower** that maps a customer's features into a
  *p*-dimensional vector, and
- an **item (offer/product) tower** that maps each candidate offer into the
  **same** *p*-dimensional space.

Compatibility between a customer and an offer is the **similarity of their two
vectors** — a dot product (or, on unit-normalized vectors, the cosine). Because
the two towers are independent at inference time, item vectors can be
**precomputed once** and a customer is matched against thousands of offers with
nothing more than vector math. This is what makes two-tower models the standard
choice for large-scale **candidate retrieval**.

```mermaid
flowchart LR
  cust["Customer features"] --> ut["User tower"]
  off["Offer features"] --> it["Item tower"]
  ut --> uv["User vector (p-dim)"]
  it --> iv["Item vector (p-dim)"]
  uv --> sim["similarity = dot / cosine"]
  iv --> sim
  sim --> rank["Ranked offers"]
```

## Where it fits in ecosystem.Ai

| Stage | Component | Repo |
| --- | --- | --- |
| Configure and operate | `/two-tower` saved configurations, jobs, concept tests, exports | `ecosystem-workbench2` |
| Train towers | H2O Deep Learning or PyTorch engine | `ecosystem-workbench2` / `ecosystem-notebooks` |
| Export embeddings | runtime embedding export job to MongoDB | `ecosystem-workbench2` |
| Real-time scoring | `similarity` model type + `SimilarityScorer` + `PostScoreTwoTower` | `ecosystem-runtime` |
| Storage | embedding collections in MongoDB | shared |

The module is **engine-agnostic**: towers may be trained with **H2O Deep
Learning** (the built-in workbench path) or **PyTorch** (the notebooks sidecar).
Either way the runtime consumes **embedding vectors**, never the model itself, so
real-time scoring carries no model-inference cost in the hot path.

## Main components

| Component | Responsibility |
| --- | --- |
| Two-Tower configuration | saved metadata record describing data source, engine, features, keys, hyperparameters, export collections, and deployment defaults |
| `/two-tower` dashboard | table of saved configs, editable config panel, run buttons, concept test, export status, and per-config job history |
| Python runner | scriptable entry point for train → concept test → export from a saved config or local JSON file |
| H2O engine | trains H2O Deep Learning user/item towers and uses `deepfeatures(layer=0)` for embeddings |
| PyTorch engine | trains `model_type="two_tower"` through `ecosystem-notebooks /pytorch/train` and serves embeddings through `/pytorch/invocations` |
| Embedding export | writes normalized user and item vectors to MongoDB for runtime lookup |
| Runtime plugins | `PrePredictTwoTower` loads vectors; `PostScoreTwoTower` ranks offers with `SimilarityScorer` |

**Two stages, one objective:** "Two-tower" refers to the **two encoders** trained against a single
  similarity objective. It is distinct from the "two-stage"
  (retrieval-then-ranking) system architecture, although two-tower models are
  the usual choice for the *retrieval* stage of such systems.

## Expected User Flow

The normal user path starts in Workbench on **`/two-tower`** and ends with a
runtime deployment that scores with `PrePredictTwoTower` and `PostScoreTwoTower`.
The important rule is that training a model is not enough: the user must also
**export embeddings** and **bind the exported run** into a deployment step.

```mermaid
flowchart TD
  OpenPage["Open Workbench /two-tower"] --> SelectConfig["Select or create saved Two-Tower config"]
  SelectConfig --> LinkPrediction["Link or create prediction entity"]
  LinkPrediction --> ChooseEngine["Choose engine: H2O or PyTorch notebooks"]
  ChooseEngine --> SetParams["Set source, features, keys, and training defaults"]
  SetParams --> Train["Run training job"]
  Train --> ReviewJob["Review job status and two_tower_runs metadata"]
  ReviewJob --> ConceptTest["Run concept test for customer and offers"]
  ConceptTest --> ExportEmbeddings["Export embeddings for runtime"]
  ExportEmbeddings --> MongoEmbeddings["Mongo user and item embedding collections"]
  MongoEmbeddings --> DeploymentEditor["Open deployment editor"]
  DeploymentEditor --> SimilarityMode["Set model type similarity"]
  SimilarityMode --> Plugins["Select PrePredictTwoTower and PostScoreTwoTower"]
  Plugins --> PushRuntime["Generate and push runtime properties"]
  PushRuntime --> RuntimeScore["Runtime invocation ranks offers"]
```

Use this checklist when configuring a new Two-Tower deployment:

1. Open **`/two-tower`** in Workbench.
2. Create a saved metadata configuration, or select an existing one from the
   configuration table.
3. Link the configuration to a `predictions` entity. This makes the Two-Tower
   predictor visible to Projects through `project_predictors`.
4. Select the training engine:
   - `h2o` for the built-in Workbench H2O Deep Learning trainer.
   - `pytorch_notebooks` for `ecosystem-notebooks /pytorch/train`.
   - `pytorch_mlrun` only after a two-tower-capable MLRun handler is available.
5. Confirm the data source: usually `logging.ecosystemruntime_flatten`, filtered
   by `predictor` and optional date range.
6. Confirm feature and key fields:
   - user key: `customer_id`
   - item key: `offer`
   - target: `accepted`
   - default context features: `price`, `rank`, `score`
7. Save the configuration so defaults can be reused by the UI and Python runner.
8. Run **Train**. This creates a job and stores run metadata in
   `ecosystem_meta.two_tower_runs`.
9. Run a **Concept Test** with a customer and candidate offers. This validates
   that the embeddings rank offers sensibly before deployment.
10. Run **Export embeddings for runtime**. This writes normalized vectors to:
    - `ecosystem_meta.two_tower_user_embeddings`
    - `ecosystem_meta.two_tower_item_embeddings`
11. Open the Workbench deployment editor for the prediction case.
12. Set **Model Type** to **Two-Tower Similarity** / `similarity`.
13. Bind the exported `run_id`, embedding database, user collection, item
    collection, customer key, and offer key.
14. Select plugin classes:
    - pre-score: `PrePredictTwoTower.java`
    - post-score: `PostScoreTwoTower.java`
15. Generate or push the deployment. Workbench emits:

```properties
predictor.model.type=similarity
predictor.twotower.run.id=tt_abc123
predictor.twotower.embedding.db=ecosystem_meta
predictor.twotower.user.collection=two_tower_user_embeddings
predictor.twotower.item.collection=two_tower_item_embeddings
predictor.twotower.customer.key=customer_id
predictor.twotower.offer.key=offer
plugin.prescore=com.ecosystem.plugin.customer.PrePredictTwoTower
plugin.postscore=com.ecosystem.plugin.customer.PostScoreTwoTower
```

At runtime, `predictor.model.type=similarity` tells the runtime to bypass normal
H2O/dynamic model scoring. `PrePredictTwoTower` loads the configured vectors and
`PostScoreTwoTower` ranks the offer matrix with cosine / dot-product similarity.

## Lifecycle at a glance

1. **[Data Preparation](/docs/modules/two_tower/data)** — interaction rows in
   `logging.ecosystemruntime_flatten` become a training frame.
2. **[Model Training](/docs/modules/two_tower/training)** — a saved
   configuration trains H2O or PyTorch dual towers.
3. **[Offline Scoring](/docs/modules/two_tower/scoring)** — concept tests
   validate the embeddings and an export job writes runtime vectors to MongoDB.
4. **[Real-Time Scoring](/docs/modules/two_tower/runtime)** — the runtime ranks
   offers per request using precomputed (or live PyTorch) embeddings.
5. **[PyTorch Serving](/docs/modules/two_tower/pytorch)** and
   **[API Reference](/docs/modules/two_tower/api)** cover the serving sidecar
   and the full request/response contracts.

## Key properties

- **Shared embedding space** — both towers output the same dimension
  (`embedding_dim`, default `32`).
- **Similarity score** — dot product of L2-normalized vectors (equivalent to
  cosine). See [Architecture & Theory](/docs/modules/two_tower/concepts).
- **Decoupled inference** — item vectors precomputed; only the user vector is
  needed per request.
- **Runtime integration** — a dedicated `similarity` model type bypasses H2O and
  dynamic scoring and routes to the reusable `SimilarityScorer`.

---

## Two-Tower Module — PyTorch Serving

Source: `docs/modules/two_tower/pytorch.mdx`
URL: https://ecosystem.ai/docs/modules/two_tower/pytorch
Summary: Running PyTorch models for two-tower and general scoring in the runtime — the engine options (api HTTP serving, DJL TorchScript, ONNX), the implemented api:pytorch paths, and the ecosystem-notebooks /pytorch train + invocations sidecar.

# PyTorch Serving

This page covers how **PyTorch** powers two-tower (and general) scoring in
ecosystem.Ai. The runtime itself stays lightweight: PyTorch runs in a **sidecar**
(ecosystem-notebooks `/pytorch`), and the runtime talks to it over HTTP.

In Workbench, PyTorch is an alternative training engine for the `/two-tower`
module. It should produce the same run metadata and Mongo embedding export shape
as the H2O engine, so downstream deployment remains engine-agnostic.

## Engine options in the runtime

| Engine | Status | Two-tower suitability |
| --- | --- | --- |
| `api:` HTTP serving | **Production** | **Recommended** — PyTorch in a sidecar |
| DJL + TorchScript (in-JVM) | Scaffolding only (Maven `-Pdeep`) | Possible later; single model slot |
| ONNX Runtime | Not present | Would be a new integration |
| Precomputed embeddings | Pattern in use | **Best latency** for items |

The recommended path is **`api:` HTTP serving**: it is already wired through
`ApiModelClient` + `ApiResponseNormalizer`, supports `framework=pytorch`, and
keeps `libtorch` out of the JVM.

## Two implemented `api:pytorch` paths

### 1. General PyTorch model scoring

Register an HTTP-served model directly in `mojo.key`:

```properties
mojo.key=api:pytorch:http://ecosystem-notebooks:8010:my_model_v1
```

The runtime POSTs `{model_id, instances:[features]}` to `{base_url}/invocations`
and normalizes the response into the canonical score shape.

### 2. Two-tower user-tower embedding

For two-tower, the user vector can be computed **live** by the sidecar when no
precomputed vector exists:

```properties
predictor.model.type=similarity
predictor.twotower.user.embed=pytorch:http://ecosystem-notebooks:8010:two_tower_user_v1
```

`PrePredictTwoTower` calls `ApiModelClient.embed(...)`, which POSTs the customer
features to `/pytorch/invocations` and reads the embedding from the response. Item
vectors stay precomputed, so there is **one sidecar call per request**, not one
per offer. The call carries explicit deadlines (3s connect / 10s read, tunable
via `-Dembed.connect.timeout.ms` / `-Dembed.read.timeout.ms`) so a hung sidecar
cannot block runtime request threads.

```mermaid
flowchart LR
  pre["PrePredictTwoTower"] --> embed["ApiModelClient.embed()"]
  embed --> sidecar["ecosystem-notebooks /pytorch/invocations"]
  sidecar --> vec["user embedding"]
  vec --> sim["SimilarityScorer"]
```

## The sidecar: ecosystem-notebooks `/pytorch`

The concrete PyTorch service lives in **ecosystem-notebooks** (Flask, port
`8010`) and exposes:

| Endpoint | Purpose |
| --- | --- |
| `POST /pytorch/train` | train an MLP or a two-tower model; save artifacts |
| `POST /pytorch/invocations` | score / embed by `model_id` |
| `GET /pytorch/models` | list trained model ids |
| `GET /pytorch/health` | health check |

### Training contract

Workbench converts a saved Two-Tower configuration into this request. The
`source.pipeline` should match the selected predictor/date filters from
`logging.ecosystemruntime_flatten`.

```json
{
  "model_id": "customer_offer_retrieval_v1",
  "model_type": "two_tower",
  "async": true,
  "problem_type": "binary_classification",
  "data": {
    "source": {
      "database": "logging",
      "collection": "ecosystemruntime_flatten",
      "pipeline": [
        { "$match": { "predictor": "my_predictor" } },
        { "$project": { "_id": 0, "customer_id": 1, "offer": 1, "price": 1, "rank": 1, "score": 1, "accepted": 1 } }
      ],
      "limit": 100000
    },
    "target_column": "accepted",
    "categorical_columns": ["customer_id", "offer"],
    "train_test_split": 0.2,
    "random_state": 42
  },
  "hyperparameters": {
    "epochs": 25, "batch_size": 256, "hidden": 64, "learning_rate": 0.001,
    "embedding_dim": 32,
    "user_features": ["customer_id", "price", "rank", "score"],
    "item_features": ["offer", "price", "rank", "score"],
    "user_id_column": "customer_id", "item_id_column": "offer"
  }
}
```

Training data is read from **MongoDB** (`MONGODB_URI`) via the `source` spec; a
`csv_path` (under the existing `DATA_DIR`) or `inline` rows are also accepted.
Artifacts are written under `DATA_DIR/pytorch_models/{model_id}/`.

The Workbench run metadata should record:

```json
{
  "run_id": "tt_pytorch_abc123",
  "config_id": "customer_offer_retrieval_v1",
  "engine": "pytorch",
  "model_id": "customer_offer_retrieval_v1",
  "pytorch_sidecar_url": "http://ecosystem-notebooks:8010",
  "embedding_dim": 32,
  "user_column": "customer_id",
  "item_column": "offer"
}
```

### Scoring / embedding contract

```json
{
  "model_id": "customer_offer_retrieval_v1",
  "instances": [
    { "customer_id": "user_1", "price": 0, "rank": 1, "score": 0, "tower": "user" }
  ]
}
```

Response carries **both** a score and an embedding, so it satisfies general
scoring and `ApiModelClient.embed()`:

```json
{
  "predictions": [ { "prediction": 0.87, "embedding": [0.11, 0.20, 0.07] } ],
  "final_result": [ { "prediction": 0.87, "embedding": [0.11, 0.20, 0.07] } ],
  "framework": "pytorch"
}
```

**Tower hint:** For `two_tower` models, set `"tower": "user"` or `"tower": "item"` on an
  instance to choose which tower's embedding is returned (default: `user`).

## Exporting PyTorch embeddings to Mongo

For production runtime scoring, Workbench should usually export PyTorch vectors
to MongoDB rather than call the sidecar for every request.

The export job calls `/pytorch/invocations` in batches:

```json
{
  "model_id": "customer_offer_retrieval_v1",
  "instances": [
    { "tower": "user", "customer_id": "user_1", "price": 0, "rank": 1, "score": 0 },
    { "tower": "user", "customer_id": "user_2", "price": 0, "rank": 1, "score": 0 }
  ]
}
```

and:

```json
{
  "model_id": "customer_offer_retrieval_v1",
  "instances": [
    { "tower": "item", "offer": "ProductA", "price": 0, "rank": 1, "score": 0 },
    { "tower": "item", "offer": "ProductB", "price": 0, "rank": 1, "score": 0 }
  ]
}
```

In practice the export job fills the feature values from **sampled source
rows** using the run's recorded `user_features` / `item_features` (the zeros
above are illustrative). The returned embeddings are **L2-normalized in the
workbench** when the export's `normalized` flag is set (the sidecar returns raw
activations) and bulk-upserted into the configured embedding collections
(default database `logging`) using the same document contract as H2O exports.
Real-time scoring then uses the same `PrePredictTwoTower` and
`PostScoreTwoTower` plugins regardless of training engine.

**pytorch_mlrun is reserved:** The `pytorch_mlrun` engine value is rejected at request validation (HTTP
  422). The MLRun trainer sidecar only ships a tabular-MLP handler — it has no
  two-tower support. Use `pytorch` (this notebooks sidecar) for PyTorch
  two-tower training.

See the full request/response samples in the
[API Reference](/docs/modules/two_tower/api).

---

## Two-Tower Module — Real-Time Scoring

Source: `docs/modules/two_tower/runtime.mdx`
URL: https://ecosystem.ai/docs/modules/two_tower/runtime
Summary: Serving two-tower recommendations from ecosystem-runtime — the similarity model type, the predictor.model.type=similarity deployment flag, the reusable SimilarityScorer, the PrePredictTwoTower / PostScoreTwoTower plugins, the MongoDB embedding contract, and the api:pytorch online embedding path.

# Real-Time Scoring

The runtime serves two-tower recommendations **without loading any model**. It
compares a **user embedding** against **item embeddings** with cosine / dot
product and ranks the offer matrix. Embeddings are precomputed in MongoDB, or the
user vector is fetched live from a [PyTorch sidecar](/docs/modules/two_tower/pytorch).

The runtime deployment is bound to an **exported Two-Tower run**. The Workbench
deployment step emits the run id, embedding database, collection names, customer
lookup key, offer-matrix key, and plugin classes. `PrePredictTwoTower` uses those
properties to resolve vectors:

- **User vector** — one indexed point read per request (`{customer_key, run_id}`,
  covered by the export's compound index). O(1) regardless of customer count —
  50M customers are served the same as 50.
- **Item vectors** — loaded **once** per `db|collection|run_id` with a single bulk
  query into an in-memory cache (`float[]` storage; roughly 5&nbsp;MB for 10K offers at
  128 dims) and reused across requests. The cache is rebuilt only by `/refresh`
  or when a new `run_id` is pushed.

All reads use the campaign's **shared MongoDB client**, created at startup and
rebuilt only by `/refresh` — no per-request connections or properties reads.

## The `similarity` model type

A campaign tells the runtime to use two-tower scoring with one property:

```properties
predictor.model.type=similarity
```

When this is set, the runtime:

1. **skips H2O model scoring** (no `mojo.key` is required),
2. **skips dynamic-engagement scoring** (`loadCorporaDynamic` is bypassed), and
3. stamps the score result with `type="similarity"`,

then hands off to the post-score plugin. This is the single switch the deployment
step sets; everything else is plugin and embedding configuration.

```mermaid
flowchart LR
  req["/invocations request"] --> pre["PrePredictTwoTower"]
  pre --> mongo[(embedding collections)]
  pre --> sidecar["api:pytorch sidecar (optional)"]
  pre --> stamp["type = similarity (bypass H2O + dynamic)"]
  stamp --> post["PostScoreTwoTower"]
  post --> sim["SimilarityScorer cosine / dot"]
  sim --> fr["final_result"]
```

## The reusable `SimilarityScorer`

`com.ecosystem.algorithm.similarity.SimilarityScorer` is a pure, stateless helper
that **any** post-score plugin can call when the model type is `similarity`. It:

- detects similarity mode (`isSimilarity(...)`),
- extracts the user vector and per-offer item vectors,
- computes `cosine` (default) or `dot` similarity, and
- builds the sorted `final_result`.

Any existing plugin can adopt two-tower scoring with a single guard:

```java
if (SimilarityScorer.isSimilarity(predictModelMojoResult, params)) {
    return getTopScores(params, SimilarityScorer.apply(predictModelMojoResult, params, "cosine"));
}
```

## The plugins

| Plugin | Role |
| --- | --- |
| `PrePredictTwoTower` | loads the user vector + per-offer item vectors into `params` |
| `PostScoreTwoTower` | delegates to `SimilarityScorer`, then `getTopScores` |

`PrePredictTwoTower` resolves the **user embedding** in this order:

1. precomputed vector from the configured user embedding collection — a single
   indexed point read keyed by `run_id` and the configured customer key;
2. otherwise, if `predictor.twotower.user.embed` is configured, a **live call**
   to the PyTorch sidecar (`ApiModelClient.embed(...)`).

Item vectors come from the configured item embedding collection, keyed by
`run_id` and the configured offer key (or from an `embedding` field on the offer
matrix). They are bulk-loaded once into an in-memory cache and reused across
requests; `/refresh` (and a new `run_id`) invalidates the cache.

`PostScoreTwoTower` then builds `final_result` rows from the offer matrix
(assigning `offer`, `offer_id`, `offer_name`, `price`, `cost`, numeric
`offer_value`, `uuid`, `p`, `explore` — and `spend_limit` when
`predictor.offer.budget` is configured) and runs `getTopScores`. Per-offer
eligibility rules can be added in its `additionalOfferChecks(singleOffer, params)`
extension point — see [Per-offer eligibility checks](#per-offer-eligibility-checks).
When `predictor.epsilon` is set, epsilon slot-level exploration mixes random
offers into the response — see [Exploration with epsilon](#exploration-with-epsilon).

## Runtime properties

Minimum production configuration:

```properties
predictor.model.type=similarity

predictor.twotower.run.id=tt_abc123
predictor.twotower.embedding.db=logging
predictor.twotower.user.collection=two_tower_user_embeddings
predictor.twotower.item.collection=two_tower_item_embeddings
predictor.twotower.customer.key=customer_id
predictor.twotower.offer.key=offer
predictor.twotower.metric=cosine

plugin.prescore=com.ecosystem.plugin.customer.PrePredictTwoTower
plugin.postscore=com.ecosystem.plugin.customer.PostScoreTwoTower
```

**run.id is required:** `predictor.twotower.run.id` is **mandatory** for similarity deployments. The
  runtime bulk-loads item embeddings filtered by `run_id`; without it the load
  is refused (logged as `PrePredictTwoTower:E003`) rather than pulling every
  run's vectors into memory. The runtime's `/validate` properties check and the
  Workbench deploy guardrails both fail when it is missing — and the deploy
  guardrail additionally verifies that **exported embedding documents exist**
  for the configured run id before pushing.

`predictor.twotower.metric` selects the similarity function (`cosine`, the
default, or `dot`). The Workbench emits it from the run's embedding-export
metric; a per-request `in_params.metric` still takes precedence, and unknown
values fall back to cosine with a warning.

**Match the export database:** `predictor.twotower.embedding.db` must match the database the Workbench
  embedding export wrote to. Both the export and the runtime plugin now default
  to the `logging` database; workbench-generated properties always set the
  value explicitly.

Optional live user embedding via PyTorch:

```properties
predictor.twotower.user.embed=pytorch:http://ecosystem-notebooks:8010:customer_offer_retrieval_v1
```

This optional property is most useful when user vectors must be generated from
fresh request features. Item vectors should normally remain precomputed because
the offer catalogue is finite and can be re-exported after training.

Live embed calls carry explicit deadlines so a hung sidecar can never block
`/invocations` threads: connect timeout 3s, read timeout 10s, overridable with
the JVM flags `-Dembed.connect.timeout.ms` / `-Dembed.read.timeout.ms`. On a
timeout the runtime logs `ApiModelClient:E006` and falls back as if no user
embedding was resolved.

## Scale and data-quality behavior

- **Large offer matrices (top-K path).** Above 5,000 offers (tunable via
  `-Dsimilarity.topk.threshold`) the scorer switches to a primitive top-K
  selection: scores are computed into primitive arrays and only the best
  `resultcount + headroom` rows are materialized as JSON, replacing the full
  sort. 100k offers × 128 dims scores in well under 100ms per request.
  Exploration still samples from **outside** the top-K (including cold-start
  offers). Below the threshold the original full-sort path is unchanged.
- **Single bulk load, no stampede.** Concurrent first requests on a cold cache
  trigger exactly one item bulk load (`computeIfAbsent`); the query projects
  only the offer key and embedding fields. The cache key includes the offer key
  field, so campaigns sharing a collection but mapping different id fields never
  collide. The item-cache log line includes the load duration.
- **Degenerate vectors are excluded, not promoted.** Zero-norm or NaN-poisoned
  embeddings score `-Infinity` internally and are dropped from the ranking
  (previously NaN could sort to the top). An embedding whose **length** does not
  match the user vector (for example mixed runs in one collection) is excluded
  with a warning — it does **not** join the cold-start exploration pool, which
  is reserved for offers with *no* embedding.

## MongoDB embedding contract

| Collection | Document shape |
| --- | --- |
| `two_tower_user_embeddings` | `{ run_id, embedding_id, customer_id, embedding, embedding_dim, engine, model_id, normalized, updated_at }` |
| `two_tower_item_embeddings` | `{ run_id, embedding_id, offer, embedding, embedding_dim, engine, model_id, normalized, updated_at }` |

Item vectors may instead be attached to each offer-matrix entry as
`"embedding": [floats]`.

Recommended indexes:

```javascript
db.two_tower_user_embeddings.createIndex({ run_id: 1, customer_id: 1 }, { unique: true })
db.two_tower_item_embeddings.createIndex({ run_id: 1, offer: 1 }, { unique: true })
```

If your configured keys are not `customer_id` and `offer`, create the equivalent
indexes for those key fields.

## Worked example — campaign properties

```properties
predictor.name=two_tower_demo
predictor.model.type=similarity

# no mojo.key, and no dynamic_engagement corpora

plugin.prescore=com.ecosystem.plugin.customer.PrePredictTwoTower
plugin.postscore=com.ecosystem.plugin.customer.PostScoreTwoTower

predictor.twotower.run.id=tt_abc123
predictor.twotower.embedding.db=logging
predictor.twotower.user.collection=two_tower_user_embeddings
predictor.twotower.item.collection=two_tower_item_embeddings
predictor.twotower.customer.key=customer_id
predictor.twotower.offer.key=offer
predictor.twotower.metric=cosine

# optional: live user-tower embedding via the PyTorch sidecar
predictor.twotower.user.embed=pytorch:http://ecosystem-notebooks:8010:customer_offer_retrieval_v1

predictor.offer.matrix={ ... }
```

## Real-time flow

```mermaid
flowchart TD
  Request["Runtime invocation"] --> Pre["PrePredictTwoTower"]
  Pre --> Customer["Resolve customer key"]
  Pre --> Offers["Read offerMatrix and offer key"]
  Customer --> UserVec["Point read user vector from Mongo or PyTorch"]
  Offers --> ItemVecs["Item vectors from in-memory cache (bulk-loaded once, rebuilt on /refresh)"]
  UserVec --> Params["params.user_embedding"]
  ItemVecs --> Params["params.item_embeddings_key"]
  Params --> Post["PostScoreTwoTower"]
  Post --> Checks["additionalOfferChecks (whitelist + eligibility)"]
  Checks --> Similarity["SimilarityScorer cosine or dot"]
  Similarity --> Result["final_result"]
```

## Scoring request and response

Request to the runtime (`POST /invocate`):

```json
{
  "campaign": "two_tower_demo",
  "sub-campaign": "default",
  "channel": "web",
  "customer": "user_1",
  "numberoffers": 3,
  "userid": "ecosystem",
  "in_params": { "input": ["customer_id"], "value": ["user_1"] }
}
```

Response (trimmed):

```json
{
  "final_result": [
    {
      "rank": 1,
      "result": {
        "offer": "PRD_02_B",
        "offer_name": "PRD_02_B",
        "score": 0.87,
        "final_score": 0.87,
        "offer_value": 49.0,
        "price": 49.0,
        "cost": 12.0,
        "uuid": "..."
      },
      "result_full": { "...": "adds offer_id, offer_name_desc, p, explore, modified_offer_score, offer_matrix" }
    },
    { "rank": 2, "result": { "offer": "PRD_03_C", "offer_name": "PRD_03_C", "score": 0.41 } }
  ],
  "explore": 0,
  "uuid": "..."
}
```

Each result row is assigned from the matching **offer matrix** row, following
the same field conventions as the dynamic recommenders: `offer` and
`offer_name` carry the **offer id** (`offer_id` preferred, falling back to
`offer` for matrices where that field itself holds the id), while the
human-readable description goes to `offer_name_desc`. Rows also carry
`offer_id`, `price` (`price`/`offer_price`), `cost` (`cost`/`offer_cost`), and
a numeric `offer_value` (falling back to `price`, then `1.0`). The request
`uuid`, similarity `p`, and `explore` flag are stamped on every row, and
`spend_limit` is added when `predictor.offer.budget` is configured. The full
offer-matrix row rides along as `offer_matrix` inside `result_full`.

## Exploration with epsilon

Two-tower scores are pure user-item similarity: a given user gets the identical
top-N on every call, and offers outside their embedding neighborhood — or offers
with **no embedding yet** — never surface. Setting an exploration epsilon extends
offer coverage over time:

```properties
predictor.epsilon=0.1
```

In the Workbench, set **Exploration epsilon** in the Two-Tower section of the
deployment step (it emits `predictor.epsilon` — the multi-armed bandit option is
not required for similarity deployments).

The two-tower path uses **slot-level mixing** rather than the platform's
request-level epsilon-greedy: after similarity ranking, **each response slot
independently** has probability epsilon of being swapped for a random offer from
outside the top-N, sampled without replacement so a response never contains
duplicate offers. Most slots stay similarity-ranked, so responses remain relevant
while exploration steadily widens which offers get impressions.

- Swapped rows are stamped `explore: 1`; retained rows `explore: 0`. The
  response-level `explore` flag is `1` when any slot explored.
- **Cold-start offers** — offer-matrix rows without an embedding for the active
  `run_id` — join the exploration pool with score `0.0` and a `cold_start: true`
  stamp. They can never rank in the exploit top-N, but exploration can surface
  them so new catalog items gather feedback (and eventually earn embeddings on
  the next training run).
- Each row keeps its own similarity score (`p` / `score`), so response logging
  stays truthful for downstream learning.
- `0` (or unset) disables exploration; `1.0` makes every slot explore. Typical
  production values are `0.05`–`0.1`.

With `predictor.epsilon=0.5` and `numberoffers: 3`, roughly half the slots in
each response are exploration picks:

```text
resp 1  explore=0 | DAT_38_DMD7P0, DAT_12_STN10, BND_04_UTD
resp 2  explore=1 | GSM_07_BASIC*, DAT_12_STN10, BND_04_UTD
resp 3  explore=1 | DAT_38_DMD7P0, HVC_02_CONC*, ROM_09_EMRG*
                    (* = explore: 1 rows; offer ids — descriptions ride in offer_name_desc)
```

**Missing feature-store rows do not block scoring:** In similarity mode a customer missing from the parameter lookup collection no
  longer aborts the request: the runtime warns, continues with empty features,
  and the embedding point read proceeds using the customer key. The response is
  scored offers when an embedding exists, or a clean empty `final_result` when
  it does not.

## Per-offer eligibility checks

`PostScoreTwoTower.additionalOfferChecks(JSONObject singleOffer, JSONObject params)`
is the extension point for per-offer eligibility. It runs before similarity
scoring for every offer-matrix row; return `false` to exclude the offer. Built-in
behavior: when the request carries a **whitelist**, only offers on the list
(matched against `offer_name_final` / `offer_name` / `offer` / `offer_id`,
case-insensitive) are scored, and `resultcount` is capped to the list size.

```java
public static boolean additionalOfferChecks(JSONObject singleOffer, JSONObject params) {
    if (!isOfferOnWhitelist(singleOffer, params)) return false;

    // Example: only offer to customers on a compatible plan
    // JSONObject featuresObj = params.getJSONObject("featuresObj");
    // if (!singleOffer.optString("plan_type").equalsIgnoreCase(featuresObj.optString("plan_type"))) return false;

    return true;
}
```

This mirrors the eligibility-check sections in `PlatformDynamicEngagement` and
`PostScoreBasicOfferMatrix` — customize the plugin, not the algorithm layer.

**Engine-agnostic:** The runtime never loads a tower. Whether embeddings were produced by H2O
  `deepfeatures` or PyTorch, the runtime only does vector math — so latency stays
  flat and independent of model size.

See the [API Reference](/docs/modules/two_tower/api) for full request/response
samples and [PyTorch Serving](/docs/modules/two_tower/pytorch) for the online
embedding path.

---

## Two-Tower Module — Offline Scoring

Source: `docs/modules/two_tower/scoring.mdx`
URL: https://ecosystem.ai/docs/modules/two_tower/scoring
Summary: Validating and using a trained two-tower run offline — the concept test math, batch scoring to MongoDB, and the output shapes.

# Offline Scoring

Offline scoring validates a run and produces recommendations in bulk, before any
real-time deployment. Both paths use the same math:
**dot product of L2-normalized `deepfeatures` embeddings**.

In Workbench, all scoring jobs should be tied back to the saved Two-Tower
configuration (`config_id`). The `/two-tower` page can then show a job-history
table for the selected configuration: train jobs, concept tests, batch scores,
embedding exports, and full pipeline runs.

## Concept test (fast path)

A concept test ranks a fixed list of offers for a single customer. It is the
quickest way to confirm a run's data and metadata are sound.

```mermaid
flowchart LR
  run[(two_tower_runs)] --> load["Load user_model_id + item_model_id"]
  load --> uemb["user deepfeatures + L2 norm"]
  load --> iemb["item deepfeatures + L2 norm"]
  uemb --> dot["dot product"]
  iemb --> dot
  dot --> sort["sort descending"]
```

Request (`POST /api/v1/algorithms/two-tower/concept-test`):

```json
{
  "run_id": "tt_abc123",
  "customer_id": "user_1",
  "offers": ["ProductA", "ProductB", "ProductC"]
}
```

Response:

```json
{
  "success": true,
  "run_id": "tt_abc123",
  "customer_id": "user_1",
  "ranked": [
    { "offer": "ProductB", "score": 0.87 },
    { "offer": "ProductC", "score": 0.41 },
    { "offer": "ProductA", "score": 0.12 }
  ],
  "detail": "H2O DL tower scoring"
}
```

**Default context:** When price/rank/score are not supplied for a concept test, the defaults
  `price=0.0`, `rank=1.0`, `score=0.0` are used so that ranking reflects the
  identity embeddings.

For a PyTorch-trained run, the concept test uses the same request shape but
obtains embeddings by calling the notebooks sidecar:

```json
{
  "model_id": "customer_offer_retrieval_v1",
  "instances": [
    { "tower": "user", "customer_id": "user_1", "price": 0, "rank": 1, "score": 0 },
    { "tower": "item", "offer": "ProductA", "price": 0, "rank": 1, "score": 0 }
  ]
}
```

The Workbench backend computes the dot products and returns the same ranked
response shape.

## Batch scoring

Batch scoring writes top-**K** recommendations per customer into a MongoDB
collection. It iterates distinct customers and offers for the run's predictor and
applies the concept-test ranking to each customer.

Request (`POST /api/v1/algorithms/two-tower/batch-score`, async job):

```json
{
  "run_id": "tt_abc123",
  "top_k": 10,
  "max_users": 5000,
  "scores_collection": "two_tower_scores"
}
```

The job id is returned; poll `GET /api/v1/jobs/{job_id}` for progress. Each
output document:

```json
{
  "run_id": "tt_abc123",
  "customer_id": "user_1",
  "ranked": [
    { "offer": "ProductB", "score": 0.87 },
    { "offer": "ProductC", "score": 0.41 }
  ],
  "created_at": "2026-06-30T00:00:00Z"
}
```

| Parameter | Default | Meaning |
| --- | --- | --- |
| `top_k` | `10` | recommendations kept per customer |
| `max_users` | `5000` | cap on customers processed |
| `scores_collection` | `two_tower_scores` | output collection |
| `scores_database` | run's source DB | output database |

## Embedding export for real-time scoring

Batch scoring writes recommendations. **Embedding export writes vectors.** The
runtime uses the vector collections, not the batch-score recommendation output.

Request (`POST /api/v1/algorithms/two-tower/export-embeddings`, async job):

```json
{
  "run_id": "tt_abc123",
  "config_id": "customer_offer_retrieval_v1",
  "embedding_database": "ecosystem_meta",
  "user_embedding_collection": "two_tower_user_embeddings",
  "item_embedding_collection": "two_tower_item_embeddings",
  "customer_key_field": "customer_id",
  "offer_key_field": "offer",
  "max_users": 100000,
  "max_items": 100000
}
```

The export job:

1. reads distinct customers and offers from the run's source collection,
2. computes normalized user/item embeddings using the run engine (`h2o` or
   `pytorch`),
3. bulk-upserts vectors into MongoDB, and
4. updates `ecosystem_meta.two_tower_runs` with export counts and collection
   names.

User embedding document:

```json
{
  "run_id": "tt_abc123",
  "embedding_id": "tt_abc123:user:user_1",
  "customer_id": "user_1",
  "embedding": [0.11, 0.20, 0.07],
  "embedding_dim": 32,
  "engine": "h2o",
  "model_id": "two_tower_user_tt_abc123",
  "normalized": true,
  "updated_at": "2026-06-30T00:00:00Z"
}
```

Item embedding document:

```json
{
  "run_id": "tt_abc123",
  "embedding_id": "tt_abc123:item:ProductB",
  "offer": "ProductB",
  "embedding": [0.06, 0.44, 0.12],
  "embedding_dim": 32,
  "engine": "h2o",
  "model_id": "two_tower_item_tt_abc123",
  "normalized": true,
  "updated_at": "2026-06-30T00:00:00Z"
}
```

Use idempotent upserts keyed by `(run_id, customer_id)` and `(run_id, offer)` so
re-exporting the same run replaces previous vectors.

**Export database vs runtime default:** The export's `embedding_database` defaults to the **`logging`** database, while
  the runtime plugin defaults to **`ecosystem_meta`**. Set
  `predictor.twotower.embedding.db` in the deployment to the database you
  exported to (as in the example above).

## From offline to online

Concept testing proves the embeddings are meaningful. Exporting embeddings makes
them available to real-time scoring. To serve recommendations per request — with
logging, audit, and the campaign contract — move to
[Real-Time Scoring](/docs/modules/two_tower/runtime), which ranks the offer
matrix using the exported Mongo vectors (or, optionally, a live PyTorch user
embedding).

At serve time the payload is richer than the offline `{offer, score}` shape:
each result row is assigned from the offer matrix (`offer`, `offer_id`,
`offer_name`, `offer_name_desc`, `price`, `cost`, numeric `offer_value`) plus
the request `uuid`, similarity `p`, `explore`, and `spend_limit` when a budget
is configured. Per-offer eligibility rules and request whitelists are applied
through the `additionalOfferChecks` hook in `PostScoreTwoTower` — see
[Real-Time Scoring](/docs/modules/two_tower/runtime#per-offer-eligibility-checks).

---

## Two-Tower Module — Model Training

Source: `docs/modules/two_tower/training.mdx`
URL: https://ecosystem.ai/docs/modules/two_tower/training
Summary: Training the dual towers — H2O Deep Learning estimators, hyperparameters, deepfeatures embeddings, MOJO export, and the two_tower_runs metadata document. PyTorch training is also supported via the notebooks sidecar.

# Model Training

Training is operated from the Workbench **`/two-tower`** page. The page is
configuration-first: users save a Two-Tower metadata configuration, select it
from a table, run jobs from that configuration, and review the job history for
that exact configuration.

## Saved Two-Tower configuration

A configuration captures every parameter needed to repeat the process:

```json
{
  "config_id": "customer_offer_retrieval_v1",
  "name": "Customer Offer Retrieval v1",
  "engine": "h2o",
  "source": {
    "database": "logging",
    "collection": "ecosystemruntime_flatten",
    "predictor": "my_predictor",
    "from_date": "2026-01-01",
    "to_date": "2026-06-01"
  },
  "features": {
    "target_column": "accepted",
    "user_features": ["customer_id", "price", "rank", "score"],
    "item_features": ["offer", "price", "rank", "score"],
    "categorical_columns": ["customer_id", "offer"]
  },
  "keys": {
    "customer_key_field": "customer_id",
    "offer_key_field": "offer"
  },
  "training": {
    "embedding_dim": 32,
    "epochs": 5,
    "stopping_rounds": 3,
    "batch_size": 256,
    "learning_rate": 0.001,
    "hidden": [128, 64]
  },
  "embedding_export": {
    "database": "logging",
    "user_collection": "two_tower_user_embeddings",
    "item_collection": "two_tower_item_embeddings",
    "metric": "cosine",
    "normalized": true
  },
  "deployment_defaults": {
    "model_type": "similarity",
    "pre_score_class_text": "PrePredictTwoTower.java",
    "post_score_class_text": "PostScoreTwoTower.java"
  },
  "prediction_entity": {
    "predict_id": "customer_offer_retrieval_v1"
  }
}
```

The configuration should be stored with a unique `config_id`. Jobs created from
the UI or Python runner include `context.config_id`, making it possible to show
all train, concept-test, export, and pipeline jobs for the selected
configuration.

When a train request carries a `config_id`, the backend **merges the saved
configuration into the request server-side** — source, features, keys, training
hyperparameters, and export settings are filled from the saved config, and any
value supplied explicitly on the request overrides the saved one. Callers only
need to send the fields they want to change.

The `source` block usually points to **one interaction dataset**:
`logging.ecosystemruntime_flatten`. The `features` and `keys` blocks tell
Workbench how to split that one dataset into a user-tower feature view and an
item-tower feature view. Use separate user/profile or product/catalog datasets
only when those attributes are not already materialized into the interaction
rows; the final training frame still needs the interaction label and both sides'
features together.

The `/two-tower` page also links the config to the existing Workbench
`predictions` entity. That keeps Projects using `project_predictors` for the
deployable predictor asset, while `two_tower_runs` remains the operational
history for training and export jobs.

## Workbench process

```mermaid
flowchart TD
  Config["Saved Two-Tower config"] --> Train["Train engine: H2O or PyTorch"]
  Train --> RunMeta["two_tower_runs metadata"]
  RunMeta --> Concept["Concept test"]
  Concept --> Export["Export normalized embeddings"]
  Export --> Mongo["Mongo embedding collections"]
  Mongo --> Deploy["Bind exported run in deployment editor"]
  Config --> Prediction["Prediction entity for Projects"]
```

The `/two-tower` dashboard should expose:

- a table of saved configurations,
- an editable selected-configuration panel,
- action buttons for train, concept test, export embeddings, and full pipeline,
- a per-configuration job history table, and
- latest run/export status such as `run_id`, engine, row count, AUC, exported
  user vectors, exported item vectors, and updated date.

## Dual H2O Deep Learning towers

The built-in trainer fits **two `H2ODeepLearningEstimator` models** against the
same training frame:

```text
user tower:  model_id = two_tower_user_{run_id}
item tower:  model_id = two_tower_item_{run_id}
```

Both share the same configuration:

- `hidden = [embedding_dim]` — a single hidden layer whose width **is** the
  embedding dimension.
- `activation = "Rectifier"`
- `categorical_encoding = "one_hot_internal"`
- `stopping_metric = "AUC"` (binomial classification on `accepted`)
- `seed = 42`, with an 80/20 train/validation split.

For richer datasets, add customer attributes to `user_features` and product
attributes to `item_features`. Keep the key fields (`customer_key_field` and
`offer_key_field`) aligned with the values the runtime will use to fetch
embeddings during real-time scoring.

## Hyperparameters

| Parameter | Default | Range | Meaning |
| --- | --- | --- | --- |
| `embedding_dim` | `32` | 4–256 | width of the shared embedding space |
| `epochs` | `5` | 1–500 | training epochs per tower |
| `stopping_rounds` | `3` | 0–50 | early-stopping patience |
| `predictor` | *(required)* | — | which interactions to train on |
| `from_date` / `to_date` | `null` | — | optional date window |
| `run_id` | auto | — | identifier for this training run |

## Producing embeddings

After training, an embedding for any customer or offer is obtained by reading the
**first hidden layer** of the relevant tower:

```python
# user embedding
u = user_model.deepfeatures(user_frame, layer=0)   # p-dim activations
u = u / norm(u)                                     # L2 normalize

# item embedding
v = item_model.deepfeatures(item_frame, layer=0)
v = v / norm(v)

score = dot(u, v)                                   # cosine on unit vectors
```

This is the exact computation the offline concept test and batch scoring use.

## PyTorch training engine

PyTorch training runs through the `ecosystem-notebooks` `/pytorch` sidecar. From
Workbench, a PyTorch configuration is translated into a `POST /pytorch/train`
request with `model_type="two_tower"`.

```json
{
  "model_id": "customer_offer_retrieval_v1",
  "model_type": "two_tower",
  "async": true,
  "data": {
    "source": {
      "database": "logging",
      "collection": "ecosystemruntime_flatten",
      "pipeline": [
        { "$match": { "predictor": "my_predictor" } },
        { "$project": { "_id": 0, "customer_id": 1, "offer": 1, "price": 1, "rank": 1, "score": 1, "accepted": 1 } }
      ]
    },
    "target_column": "accepted",
    "categorical_columns": ["customer_id", "offer"]
  },
  "hyperparameters": {
    "epochs": 25,
    "batch_size": 256,
    "learning_rate": 0.001,
    "embedding_dim": 32,
    "hidden": 64,
    "user_features": ["customer_id", "price", "rank", "score"],
    "item_features": ["offer", "price", "rank", "score"],
    "user_id_column": "customer_id",
    "item_id_column": "offer"
  }
}
```

Artifacts are stored by the notebooks sidecar under the existing
`DATA_DIR/pytorch_models/{model_id}` path. Workbench still records the run in
`ecosystem_meta.two_tower_runs`, with `engine="pytorch"`, the model id, sidecar
URL, source metadata, feature columns, keys, embedding dimension, metrics, and

## Artifacts

| Artifact | Format | Location |
| --- | --- | --- |
| In-cluster models | H2O model objects | H2O cluster (used for `deepfeatures`) |
| MOJO files | `{model_id}.zip` | `H2O_MODELS` directory |
| PyTorch artifacts | `user_tower.pt`, `item_tower.pt`, preprocessing metadata | `DATA_DIR/pytorch_models/{model_id}` |
| Run metadata | MongoDB document | `ecosystem_meta.two_tower_runs` |

The `two_tower_runs` document records everything needed to reproduce or score a
run:

```json
{
  "run_id": "tt_abc123",
  "config_id": "customer_offer_retrieval_v1",
  "engine": "h2o",
  "database": "logging",
  "flatten_collection": "ecosystemruntime_flatten",
  "user_column": "customer_id",
  "item_column": "offer",
  "predictor": "my_predictor",
  "embedding_dim": 32,
  "epochs": 5,
  "stopping_rounds": 3,
  "user_model_id": "two_tower_user_tt_abc123",
  "item_model_id": "two_tower_item_tt_abc123",
  "user_auc": 0.72,
  "item_auc": 0.68,
  "n_rows": 150000,
  "embedding_database": "logging",
  "user_embedding_collection": "two_tower_user_embeddings",
  "item_embedding_collection": "two_tower_item_embeddings",
  "customer_key_field": "customer_id",
  "offer_key_field": "offer",
  "updated_at": "2026-06-30T00:00:00Z"
}
```

## Exporting embeddings for the runtime

Real-time scoring reads **precomputed embedding vectors** from MongoDB (see
[Real-Time Scoring](/docs/modules/two_tower/runtime)). The expected collections:

| Collection | Document shape |
| --- | --- |
| `two_tower_user_embeddings` | `{ run_id, embedding_id, customer_id, embedding, embedding_dim, engine, model_id, normalized, updated_at }` |
| `two_tower_item_embeddings` | `{ run_id, embedding_id, offer, embedding, embedding_dim, engine, model_id, normalized, updated_at }` |

Item vectors may alternatively ride on the offer matrix as an `embedding` field.

**Exporting vectors:** The training run produces the towers; populating the embedding collections is
  an explicit export job. H2O exports use `deepfeatures(layer=0)`. PyTorch
  exports call `/pytorch/invocations` with `tower="user"` or `tower="item"`.
  Both paths write the same normalized Mongo document shape.

### Engine parity contract

Both engines honor the same export contract so the runtime never needs to know
which engine produced a run:

- **Identical document shape** — the fields shown above, with `engine` set to
  `"h2o"` or `"pytorch"`, and the same `{run_id, key}` compound indexes.
- **L2-normalized vectors** when `embedding_export.normalized` is set. PyTorch
  vectors are normalized in the workbench export path (the sidecar returns raw
  activations); H2O vectors are normalized the same way after `deepfeatures`.
- **Export frames are built from the run's recorded features.** The exporter
  reads `user_features` / `item_features` from the `two_tower_runs` document and
  fills feature values from sampled source rows — the same approach for both
  engines. (Earlier versions padded H2O export frames with hardcoded zeros;
  re-exporting a run trained before this fix will produce different — correct —
  vectors, so expect rankings to shift on the next export.)
- **Same-run invariant** — the user and item vectors for a `run_id` always come
  from one engine and one training run. Never mix engines within a run id: the
  towers only share an embedding space when trained together.

The `pytorch_mlrun` engine value is **reserved** and rejected at request
validation (HTTP 422): the MLRun trainer sidecar has no two-tower handler.
Use `pytorch` (the notebooks sidecar) for PyTorch training.

## Python runner

Power users can run the same process from a script instead of the UI:

```bash
python backend/scripts/two_tower_pipeline.py \
  --config-id customer_offer_retrieval_v1 \
  --steps train,concept-test,export-embeddings \
  --wait
```

The runner loads the saved configuration (or a local JSON/YAML file), calls the
same Workbench APIs as the UI, polls jobs, and prints JSON containing `config_id`,
`run_id`, job ids, final statuses, embedding export counts, and deployment
property hints.

See [PyTorch Serving](/docs/modules/two_tower/pytorch) and the
[API Reference](/docs/modules/two_tower/api) for complete request bodies.

Next: [Offline Scoring](/docs/modules/two_tower/scoring).

---

## Index

Source: `docs/opensource/index.mdx`
URL: https://ecosystem.ai/docs/opensource

# Open Source Technologies

## Overview
We use a number of key open source technologies to build our platform. These technologies are essential to our success and we are grateful to the open source community for their contributions.

## Dashboard Technologies

### Superset

[Apache Superset](https://superset.apache.org/) is a modern, enterprise-ready business intelligence web application. It is a data exploration and visualization platform designed to be visual, intuitive, and interactive. Superset allows you to create and share dashboards and reports, and it supports a wide range of data sources.

### Grafana

[Grafana](https://grafana.com/) is an open source analytics and monitoring platform. It allows you to query, visualize, alert on, and understand your metrics no matter where they are stored. Grafana provides a powerful and flexible platform for creating dashboards and visualizing data.

## Database Technologies

### Postgres

[PostgreSQL](https://www.postgresql.org/) is a powerful, open source object-relational database system. It is highly extensible and supports a wide range of data types and features. PostgreSQL is known for its reliability, robustness, and performance, and it is widely used in production environments.

### MongoDB

[MongoDB](https://www.mongodb.com/docs/manual/administration/install-community/) is a popular open source NoSQL database. It is designed for high performance, scalability, and availability, and it is widely used for building modern applications. MongoDB is known for its flexibility, ease of use, and rich query language.

### Neo4j

[Neo4j](https://github.com/neo4j/neo4j) is an open source graph database. It is designed for storing and querying graph data, and it provides a powerful and flexible platform for building graph-based applications. Neo4j is widely used for social networks, recommendation engines, and network analysis.

### Presto

[Presto](https://prestodb.io/) is an open source distributed SQL query engine for running interactive analytic queries against data sources of all sizes. It is designed for high performance and scalability, and it supports a wide range of data sources and formats. Presto is widely used in production environments for ad hoc analysis and reporting.

### Databricks

[Databricks](https://www.databricks.com/product/open-source) is a unified analytics platform that provides a collaborative environment for data science and machine learning. It is built on top of Apache Spark and provides a powerful and flexible platform for processing and analyzing large datasets. Databricks is widely used for building real-time data pipelines and machine learning applications. The Databricks Community Edition is hosted on Amazon Web Services. However, you do not incur AWS costs when you use the Databricks Community Edition.

## Streaming Technologies

### Apache Kafka

[Apache Kafka](https://kafka.apache.org/) is a distributed event streaming platform. It is designed for high throughput, fault tolerance, and scalability, and it is widely used for building real-time data pipelines and streaming applications. Kafka provides a powerful and flexible platform for processing and analyzing streaming data.

## AI Platform Technologies

### PyTorch

[PyTorch](https://pytorch.org/) is an open source machine learning framework. It is designed for flexibility and ease of use, and it supports a wide range of deep learning models and algorithms. PyTorch is widely used for research and production applications, and it is known for its performance, scalability, and extensibility.

## Tensorflow

[TensorFlow](https://www.tensorflow.org/) is an open source machine learning platform. It is designed for flexibility and scalability, and it supports a wide range of machine learning models and algorithms. TensorFlow is widely used for research and production applications, and it is known for its performance, reliability, and ease of use.

## H2O

[H2O](https://www.h2o.ai/) is an open source machine learning platform. It is designed for scalability and ease of use, and it supports a wide range of machine learning models and algorithms. H2O is widely used for research and production applications, and it is known for its performance, reliability, and extensibility.

## Model Pipelines

### MLflow

[MLflow](https://mlflow.org/) is an open source platform for managing the end-to-end machine learning lifecycle. It allows you to track experiments, package code, and deploy models in a variety of environments. MLflow provides a powerful and flexible platform for managing machine learning projects and workflows.

### Kubeflow

[Kubeflow](https://www.kubeflow.org/) is an open source machine learning platform. It is designed for running machine learning workflows on Kubernetes, and it supports a wide range of machine learning models and algorithms. Kubeflow provides a powerful and flexible platform for building, deploying, and managing machine learning applications.

## Model Repositories

### Hugging Face

[Hugging Face](https://huggingface.co/) is an open source platform for sharing and deploying natural language processing models. It provides a wide range of pre-trained models and tools for building and deploying machine learning applications. Hugging Face is widely used for research and production applications, and it is known for its performance, reliability, and ease of use.

### Model Zoo

[Model Zoo](https://modelzoo.co/) is an open source platform for sharing and deploying machine learning models. It provides a wide range of pre-trained models and tools for building and deploying machine learning applications. Model Zoo is widely used for research and production applications, and it is known for its performance, reliability, and ease of use.

## Development Tools

### IntelliJ IDEA

[IntelliJ IDEA](https://www.jetbrains.com/idea/) is an integrated development environment for building Java, Kotlin, and Groovy applications. It provides a powerful and flexible platform for developing and debugging code, and it supports a wide range of development tools and frameworks. IntelliJ IDEA is widely used by developers for building and deploying applications.

### Visual Studio Code

[Visual Studio Code](https://code.visualstudio.com/) is a lightweight and powerful code editor. It provides a wide range of features for developing and debugging code, and it supports a wide range of programming languages and frameworks. Visual Studio Code is widely used by developers for building and deploying applications.

### Git

[Git](https://git-scm.com/) is an open source distributed version control system. It provides a powerful and flexible platform for managing code and collaborating with other developers. Git is widely used by developers for tracking changes, resolving conflicts, and deploying code.

### Docker

[Docker](https://www.docker.com/) is an open source platform for building, shipping, and running applications in containers. It provides a powerful and flexible platform for packaging code and dependencies, and deploying applications in a consistent and reliable manner. Docker is widely used by developers for building and deploying applications.

### Podman

[Podman](https://podman.io/) is an open source container management tool. It provides a powerful and flexible platform for managing containers and images, and it supports a wide range of container runtimes and storage backends. Podman is widely used by developers for building and deploying containerized applications.

### Jupyter Notebooks

[Jupyter Notebooks](https://jupyter.org/) is an open source web application for creating and sharing documents that contain live code, equations, visualizations, and narrative text. It provides a powerful and flexible platform for interactive computing and data analysis. Jupyter Notebooks is widely used by data scientists and researchers for exploring data, building models, and sharing results.

---

## Superset

Source: `docs/opensource/superset.mdx`
URL: https://ecosystem.ai/docs/opensource/superset

# Superset

## Overview

[Apache Superset](https://superset.apache.org/) is a modern, enterprise-ready business intelligence web application. It is a data exploration and visualization platform designed to be visual, intuitive, and interactive. Superset allows you to create and share dashboards and reports, and it supports a wide range of data sources.

ecosystem.Ai publish a number of default dashboards that are built using Superset. These dashboards provide insights into various aspects of the ecosystem.Ai platform, including model performance, data quality, and user behavior.

Here is an example from the Spend Personality:
<video
    muted
    playsInline
    controls
>
    <source src="/images/modules/spend_personality/spend-personality-07.mp4" />
</video>

## Key Features

### Data Exploration

Superset provides a rich set of data exploration tools that allow you to interactively explore your data and gain insights quickly. You can filter, group, and aggregate your data, and visualize it using a variety of chart types.

### Visualization

Superset supports a wide range of visualization types, including bar charts, line charts, scatter plots, and heatmaps. You can customize the appearance of your charts and dashboards to suit your needs, and share them with others.

### Dashboards

Superset allows you to create interactive dashboards that combine multiple charts and visualizations. You can arrange your charts on a grid, link them together with filters, and set up dynamic interactions between them.

### Data Sources

Superset supports a wide range of data sources, including SQL databases, NoSQL databases, and cloud storage services. You can connect to your data sources using Superset's built-in connectors, or create custom connectors using Superset's extensible architecture.

---

## Docker

Source: `docs/quick_start/docker.mdx`
URL: https://ecosystem.ai/docs/quick_start/docker

# Docker Compose

## Docker Compose

Docker Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application's services. Then, with a single command, you create and start all the services from your configuration.

## ecosystem.Ai Docker Compose

The YAML file is a Docker Compose configuration file which defines multiple Docker services to be run together, connected by a common network named 'ecosystem'. Here is a breakdown of what each segment of code means:

- All container services are part of the `ecosystem` network. This allows them to communicate with each other.

- [`ecosystem-workbench`](https://hub.docker.com/r/ecosystemai/ecosystem-workbench): This service runs the Docker image `ecosystemai/ecosystem-workbench:arm64` and is named `ecosystem-workbench` on creation. It restarts unless manually stopped. It depends on other services which are specified in `depends_on`. Environment variables such as 'IP' and 'PORT' are set here - these are passed into the container on start-up. Note that arm64 is the architecture of the image, and `latest` is for x86 or AMD.

- [`ecosystem-server`](https://hub.docker.com/r/ecosystemai/ecosystem-server): Runs the `ecosystemai/ecosystem-server:arm64` Docker image. This service exposes several ports, uses several environment variables, and mounts the local directory specified by `DATA_PATH` to `/data` inside the container. Database files and other accessible data files are stored in this directory.

- [`ecosystem-runtime-solo`](https://hub.docker.com/r/ecosystemai/ecosystem-runtime-solo), `ecosystem-runtime-solo2`, `ecosystem-runtime-solo3`, `ecosystem-runtime-solo4`, `ecosystem-runtime-solo5`: These five services use the `ecosystemai/ecosystem-runtime-solo:arm64` Docker image. Each one runs on its own unique port, and each one depends on the `ecosystem-server` service. This allows for 'permanently in production' runtime services to be run alongside the server.

- [`ecosystem-notebooks`](https://hub.docker.com/r/ecosystemai/ecosystem-notebooks): This service runs the `ecosystemai/ecosystem-notebooks:arm64` image, and mounts several directories from the host to the container.

- [`ecosystem-grafana`](https://hub.docker.com/r/ecosystemai/ecosystem-grafana): This service runs the `ecosystemai/ecosystem-grafana:arm64` Docker image. Grafana is a tool for visualizing data, and this service exposes port 3000.

All services use the environment variable `ECOSYSTEM_API_KEY`, which has to be provided when you start the Docker Compose stack. Other environment variables are contextual to each service.

The `networks` field defines a network used by the services. In this case, the `ecosystem` network is marked as `external`, which indicates that the network has been created outside of this Docker Compose file and needs to already exist before the command docker-compose up is run. If other ecosystem.Ai services are running on the same network, they will be able to communicate with these services.

The following environment variables have to be set before running the Docker Compose stack:
```
DATA_PATH=
OPENAI_API_KEY=
ECOSYSTEM_API_KEY=
```

An optional variable is used to assign an initial password on startup.
```
INITIAL_PASSWORD=
```

Here is an example of a Docker Compose file for ecosystem.Ai:
```yaml
services:
  ecosystem-workbench:
    image: ecosystemai/ecosystem-workbench:arm64
    container_name: ecosystem-workbench
    restart: unless-stopped
    environment:
      IP: ${SERVER}
      PORT: 3001
    networks:
      - ecosystem
    ports:
      - "80:80"
    depends_on:
      - ecosystem-server
      - ecosystem-runtime-solo
      - ecosystem-runtime-solo2
      - ecosystem-runtime-solo3
      - ecosystem-notebooks
      - ecosystem-grafana

  ecosystem-server:
    image: ecosystemai/ecosystem-server:arm64
    container_name: ecosystem-server
    restart: unless-stopped
    environment:
      CLOUD: "none"
      MASTER_KEY: ${ECOSYSTEM_API_KEY}
      OPENAI_API_KEY: ${OPENAI_API_KEY}
      INITIAL_PASSWORD: ${INITIAL_PASSWORD}
      IP: ${SERVER}
      PORT: 3001
      RESET_USER: "true"
      NO_WORKBENCH: "true"
    volumes:
      - ${DATA_PATH}:/data
    networks:
      - ecosystem
    ports:
      - "3001:3001"
      - "54445:54445"
      - "54321:54321"

  ecosystem-runtime-solo:
    image: ecosystemai/ecosystem-runtime-solo:arm64
    container_name: ecosystem-runtime
    restart: unless-stopped
    environment:
      MASTER_KEY: ${ECOSYSTEM_API_KEY}
      NO_MONGODB: 'true'
      FEATURE_DELAY: 99999
      MONITORING_DELAY: 120
    volumes:
      - ${DATA_PATH}:/data
    networks:
      - ecosystem
    ports:
      - "8091:8091"
    depends_on:
      - ecosystem-server

  ecosystem-runtime-solo2:
    image: ecosystemai/ecosystem-runtime-solo:arm64
    container_name: ecosystem-runtime2
    restart: unless-stopped
    environment:
      MASTER_KEY: ${ECOSYSTEM_API_KEY}
      NO_MONGODB: 'true'
      FEATURE_DELAY: 99999
      MONITORING_DELAY: 240
      PORT: 8092
    volumes:
      - ${DATA_PATH}:/data
    networks:
      - ecosystem
    ports:
      - "8092:8092"
    depends_on:
      - ecosystem-server

  ecosystem-runtime-solo3:
    image: ecosystemai/ecosystem-runtime-solo:arm64
    container_name: ecosystem-runtime3
    restart: unless-stopped
    environment:
      MASTER_KEY: ${ECOSYSTEM_API_KEY}
      NO_MONGODB: 'true'
      FEATURE_DELAY: 99999
      MONITORING_DELAY: 240
      PORT: 8093
    volumes:
      - ${DATA_PATH}:/data
    networks:
      - ecosystem
    ports:
      - "8093:8093"
    depends_on:
      - ecosystem-server

  ecosystem-runtime-solo4:
    image: ecosystemai/ecosystem-runtime-solo:arm64
    container_name: ecosystem-runtime4
    restart: unless-stopped
    environment:
      MASTER_KEY: ${ECOSYSTEM_API_KEY}
      NO_MONGODB: 'true'
      FEATURE_DELAY: 99999
      MONITORING_DELAY: 240
      PORT: 8094
    volumes:
      - ${DATA_PATH}:/data
    networks:
      - ecosystem
    ports:
      - "8094:8094"
    depends_on:
      - ecosystem-server

  ecosystem-runtime-solo5:
    image: ecosystemai/ecosystem-runtime-solo:arm64
    container_name: ecosystem-runtime5
    restart: unless-stopped
    environment:
      MASTER_KEY: ${ECOSYSTEM_API_KEY}
      NO_MONGODB: 'true'
      FEATURE_DELAY: 99999
      MONITORING_DELAY: 240
      PORT: 8095
    volumes:
      - ${DATA_PATH}:/data
    networks:
      - ecosystem
    ports:
      - "8095:8095"
    depends_on:
      - ecosystem-server

  ecosystem-notebooks:
    image: ecosystemai/ecosystem-notebooks:arm64
    container_name: ecosystem-notebooks
    restart: unless-stopped
    environment:
      OPENAI_API_KEY: ${OPENAI_API_KEY}
    volumes:
      - ${DATA_PATH}/notebooks-users/notebooks:/app/Shared Projects
      - ${DATA_PATH}/notebooks-users:/home
      - ${DATA_PATH}:/data
    networks:
      - ecosystem
    ports:
      - "5111:8000"
      - "8010:8010"
    depends_on:
      - ecosystem-server

  ecosystem-grafana:
    image: ecosystemai/ecosystem-grafana:arm64
    container_name: ecosystem-worker-grafana
    restart: unless-stopped
    environment:
      GF_SECURITY_ALLOW_EMBEDDING: "true"
    networks:
      - ecosystem
    ports:
      - "3000:3000"
    depends_on:
      - ecosystem-server

networks:
  ecosystem:
    external: true
```

[Additional variables](/docs/runtime/environment_variables) can be set for the runtime engine.

---

## Index

Source: `docs/quick_start/index.mdx`
URL: https://ecosystem.ai/docs/quick_start

# Quick Start

Follow the guides below to get up and running with ecosystem.Ai as quickly as possible.

## Overview

The platform contains the following components:

![image](/images/overview.png)

The core of the platform is the Prediction Server which is responsible for running the models and making predictions. The Workbench is the user interface for the platform. The Workbench is where you can load modules, create and train models, and make predictions. Python can be used to create custom modules and models.

- **Workbench**: The Workbench is the user interface for the platform. The Workbench is where you can load modules, create and train models, and make predictions.
- **Prediction Server**: The core of the platform is the Prediction Server which is responsible for running the models and making predictions. The server is accessible via API's and can be called from various architectural topologies.
- **Notebooks Server**: The Notebooks Server is where you can create and run Jupyter notebooks. The Notebooks Server is accessible via API's and can be called from various architectural topologies. We have core capabilities in Chat-to-SQL, Vector Stores, Fact-Injection for RAG and other generative capabilities.
- **Python**: Python can be used to ingest data, create models, deploy models and other key functions.
- **Runtime (Client Pulse Responder)**: The runtime is the core of the platform. It is responsible for running the models and making predictions. The runtime can be installed on a local machine or in the cloud. The runtime is accessible via API's and can be called from various architectural topologies.

The prediction server focuses on a [worker architecture](/docs/workers/worker_arch) that allows us to implement and evolve the latest technology and make it accessible universally.

## Install

#### [Local Setup](./quick_start/local_setup)

Use this easy setup guide and start using ecosystem.Ai Workbench and load a sample module.

#### [Marketplace Apps](./quick_start/marketplace)

Install the ecosystem.Ai stack from your favorite cloud marketplace. Azure, AWS and Google Cloud are supported.

---

## Kubernetes

Source: `docs/quick_start/kubernetes.mdx`
URL: https://ecosystem.ai/docs/quick_start/kubernetes

# Kubernetes

ecosystem.Ai can be installed on Kubernetes. This can be tested locally using Minikube. Here we give example deployment configurations for the server, workbench, notebooks, runtime and grafana components.

## Environment Variables

A number of [environment variables](/docs/runtime/environment_variables) can be used when starting up the ecosystem.Ai Deployments. These can be set in a ConfigMap. In addition, you should create a secret containing your license key.

**Environment Variable Config Map:** ```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: ecosystem-env
  namespace: ecosystem
data:
  # Server
  ECOSYSTEM_SERVER_PORT: "3001"
  ECOSYSTEM_SERVER_IP: "http://server.ecosystem.svc.cluster.local"
  ECOSYSTEM_PROP_FILE: "/config/ecosystem.properties"
  CLI_SETTINGS: "-Dserver.port=3001"
  RESET_USER: "true"
  NO_WORKBENCH: "true"

  # Runtime
  MONITORING_DELAY: "240"
  ECOSYSTEM_RUNTIME_PORT: "8091"

  # Workbench
  WORKBENCH_IP: "http://127.0.0.1"
  WORKBENCH_PORT: "3001"

  # Grafana
  GF_SECURITY_ALLOW_EMBEDDING: "true"
  GF_INSTALL_PLUGINS: "marcusolsson-json-datasource,volkovlabs-echarts-panel"
```

## Persistent Volume Claims

Ideally you should create a ReadWriteMany PVC to mount to the various ecosystem.Ai Deployments as it makes management easier. This is illustrated here. If your Kubernetes instance does not support ReadWriteMany PVCs then you will need to create multiple PVCs.

**Persistent Volume Claim:** ```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: ecosystem-data-pvc
  namespace: ecosystem
spec:
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: /desired storage capacity/Gi
```

## Server Deployment

The server Deployment and services are below. Here, and in the subsequent components:
- Images are pulled from Docker Hub. Generally, the images should be stored in a local repository and that repository should be referenced in the Deployment.
- LoadBalancer services are created. This exposes the services externally in Minikube. The Ingress approach supported by your Kuberenetes instance should be used to expose the services.

**Server Deployment:** ```yaml
###############################################################################
# 1) ECOSYSTEM-SERVER (SINGLE INSTANCE)
###############################################################################
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ecosystem-server
  namespace: ecosystem
spec:
  replicas: 1
  selector:
    matchLabels:
      app: ecosystem-server
  template:
    metadata:
      labels:
        app: ecosystem-server
    spec:
      containers:
      - name: ecosystem-server
        image: docker.io/ecosystemai/ecosystem-server-mongo8:arm64
        imagePullPolicy: Always
        env:
          - name: MASTER_KEY
            valueFrom:
              secretKeyRef:
                name: master-key
                key: master-key
          - name: PORT
            valueFrom:
              configMapKeyRef:
                name: ecosystem-env
                key: ECOSYSTEM_SERVER_PORT
          - name: IP
            valueFrom:
              configMapKeyRef:
                name: ecosystem-env
                key: ECOSYSTEM_SERVER_IP
          - name: ECOSYSTEM_PROP_FILE
            valueFrom:
              configMapKeyRef:
                name: ecosystem-env
                key: ECOSYSTEM_PROP_FILE
          - name: CLI_SETTINGS
            valueFrom:
              configMapKeyRef:
                name: ecosystem-env
                key: CLI_SETTINGS
          - name: RESET_USER
            valueFrom:
              configMapKeyRef:
                name: ecosystem-env
                key: RESET_USER
          - name: NO_WORKBENCH
            valueFrom:
              configMapKeyRef:
                name: ecosystem-env
                key: NO_WORKBENCH
        ports:
          - containerPort: 3001
            name: http
          - containerPort: 54321
            name: htwoo
          - containerPort: 54445
            name: mongo
        volumeMounts:
          - name: ecosystem-data
            subPath: data
            mountPath: /data
          - name: ecosystem-data
            subPath: serverconfig
            mountPath: /config
      volumes:
      - name: ecosystem-data
        persistentVolumeClaim:
          claimName: ecosystem-data-pvc

---
###############################################################################
# 2) SERVICES
###############################################################################

apiVersion: v1
kind: Service
metadata:
  name: server
  namespace: ecosystem
spec:
  type: LoadBalancer
  selector:
    app: ecosystem-server
  ports:
    - name: http
      port: 3001
      targetPort: 3001

---

apiVersion: v1
kind: Service
metadata:
  name: mongo
  namespace: ecosystem
spec:
  type: LoadBalancer
  selector:
    app: ecosystem-server
  ports:
    - name: mongo
      port: 54445
      targetPort: 54445

---

apiVersion: v1
kind: Service
metadata:
  name: htwoo
  namespace: ecosystem
spec:
  type: LoadBalancer
  selector:
    app: ecosystem-server
  ports:
    - name: htwoo
      port: 54321
      targetPort: 54321

---
```

## Notebooks and Grafana Deployments

**Notebooks and Grafana Deployments:** ```yaml
###############################################################################
# 1) ECOSYSTEM-NOTEBOOKS
###############################################################################
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ecosystem-notebooks
  namespace: ecosystem
spec:
  replicas: 1
  selector:
    matchLabels:
      app: ecosystem-notebooks
  template:
    metadata:
      labels:
        app: ecosystem-notebooks
    spec:
      containers:
      - name: ecosystem-notebooks
        image: docker.io/ecosystemai/ecosystem-notebooks:arm64
        imagePullPolicy: Always
        ports:
          - containerPort: 8000
            name: notebooks
          - containerPort: 8010
            name: pythonserver
        volumeMounts:
          - name: ecosystem-data
            mountPath: "/app/Shared Projects"
            subPath: "notebooks-users/notebooks"
          - name: ecosystem-data
            mountPath: "/home"
            subPath: "notebooks-users"
          - name: ecosystem-data
            subPath: data
            mountPath: "/data"
      volumes:
        - name: ecosystem-data
          persistentVolumeClaim:
            claimName: ecosystem-data-pvc
      restartPolicy: Always

---

###############################################################################
# 2) ECOSYSTEM-GRAFANA
###############################################################################
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ecosystem-grafana
  namespace: ecosystem
spec:
  replicas: 1
  selector:
    matchLabels:
      app: ecosystem-grafana
  template:
    metadata:
      labels:
        app: ecosystem-grafana
    spec:
      containers:
      - name: ecosystem-grafana
        image: docker.io/ecosystemai/ecosystem-grafana:nojwt
        imagePullPolicy: IfNotPresent
        env:
          - name: GF_SECURITY_ALLOW_EMBEDDING
            valueFrom:
              configMapKeyRef:
                name: ecosystem-env
                key: GF_SECURITY_ALLOW_EMBEDDING
        ports:
          - containerPort: 3000
            name: grafana
        volumeMounts:
          - name: ecosystem-data
            mountPath: /var/lib/grafana
      volumes:
        - name: ecosystem-data
          persistentVolumeClaim:
            claimName: ecosystem-data-pvc
      restartPolicy: Always

---

###############################################################################
# 3) SERVICES
###############################################################################

apiVersion: v1
kind: Service
metadata:
  name: notebooks
  namespace: ecosystem
spec:
  type: LoadBalancer
  selector:
    app: ecosystem-notebooks
  ports:
    - name: notebooks
      port: 8000
      targetPort: 8000

---

apiVersion: v1
kind: Service
metadata:
  name: pythonserver
  namespace: ecosystem
spec:
  type: LoadBalancer
  selector:
    app: ecosystem-notebooks
  ports:
    - name: pythonserver
      port: 8010
      targetPort: 8010

---

apiVersion: v1
kind: Service
metadata:
  name: grafana
  namespace: ecosystem
spec:
  type: LoadBalancer
  selector:
    app: ecosystem-grafana
  ports:
    - name: grafana
      port: 3000
      targetPort: 3000

---
```

## Workbench and Runtime Deployments

The workbench Deployment utilises a ConfigMap which sets the port on which the workbench starts up. In this case we start up the workbench on port 8008.

A single runtime Deployment is created. Separate Deployments should be created for each use case that needs to be pushed to a runtime. The replica count is not specified in the runtime Deployment, this assumes that a HorizontalPodAutoscaler will be created for the runtime. Alternatively the replica count can be set at a volume that can handle the anticipated load.

**Workbench and Runtime Deployments:** ```yaml
###############################################################################
# 1) ECOSYSTEM-WORKBENCH (SINGLE INSTANCE)
###############################################################################

apiVersion: v1
kind: ConfigMap
metadata:
  name: nginx-config
  namespace: ecosystem
data:  
  default.conf: |
    server {
        listen 8008 default_server;
        listen [::]:8008 default_server;

        root /usr/share/nginx/html;

        index index.html;

        server_name _;

        location / {
            try_files $uri$args $uri$args/ /index.html;
        }

        location ~* .(js|css|ttf|ttc|otf|eot|woff|woff2)$ {
                add_header access-control-allow-origin "*";
                expires max;
        }
    }

---

apiVersion: apps/v1
kind: Deployment
metadata:
  name: ecosystem-workbench
  namespace: ecosystem
spec:
  replicas: 1
  selector:
    matchLabels:
      app: ecosystem-workbench
  template:
    metadata:
      labels:
        app: ecosystem-workbench
    spec:
      containers:
      - name: ecosystem-workbench
        image: docker.io/ecosystemai/ecosystem-workbench:arm64
        volumeMounts:
        - name: nginx-config
          mountPath: "/etc/nginx/conf.d"
        securityContext:
          runAsGroup: 0
        imagePullPolicy: IfNotPresent
        env:
          - name: IP
            valueFrom:
              configMapKeyRef:
                name: ecosystem-env
                key: WORKBENCH_IP
          - name: PORT
            valueFrom:
              configMapKeyRef:
                name: ecosystem-env
                key: WORKBENCH_PORT
        ports:
          - containerPort: 8008
            name: http
      volumes:
      - name: nginx-config
        configMap:
          name: nginx-config
      restartPolicy: Always

---

###############################################################################
# 2) ecosystem-runtime
###############################################################################

apiVersion: apps/v1
kind: Deployment
metadata:
  name: ecosystem-runtime1
  namespace: ecosystem
spec:
  #replicas: 1
  selector:
    matchLabels:
      app: ecosystem-runtime1
  template:
    metadata:
      labels:
        app: ecosystem-runtime1
    spec:
      containers:
      - name: ecosystem-runtime1
        image: docker.io/ecosystemai/ecosystem-runtime-solo:arm64
        imagePullPolicy: IfNotPresent
        volumeMounts:
          - name: ecosystem-data
            subPath: data
            mountPath: /data
        env:
          - name: MASTER_KEY
            valueFrom:
              secretKeyRef:
                name: master-key
                key: master-key
          - name: MONITORING_DELAY
            valueFrom:
              configMapKeyRef:
                name: ecosystem-env
                key: MONITORING_DELAY
          - name: PORT
            valueFrom:
              configMapKeyRef:
                name: ecosystem-env
                key: ECOSYSTEM_RUNTIME_PORT
        ports:
          - containerPort: 8091
            name: http
        resources:
          requests:
            cpu: "1"
            memory: "2Gi"
          limits:
            cpu: "1"
            memory: "2Gi"
      volumes:
      - name: ecosystem-data
        persistentVolumeClaim:
          claimName: ecosystem-data-pvc
      restartPolicy: Always

---

###############################################################################
# 3) SERVICES
###############################################################################

apiVersion: v1
kind: Service
metadata:
  name: workbench
  namespace: ecosystem
spec:
  type: LoadBalancer
  selector:
    app: ecosystem-workbench
  ports:
    - name: http
      port: 8008
      targetPort: 8008

---

apiVersion: v1
kind: Service
metadata:
  name: runtime1
  namespace: ecosystem
spec:
  type: LoadBalancer
  selector:
    app: ecosystem-runtime1
  ports:
    - name: runtime1
      port: 8091
      targetPort: 8091

---

```

## Conclusion

**That's it!** You have now configured your ecosystem.Ai instance on Kubernetes.

---

## Local Setup

Source: `docs/quick_start/local_setup.mdx`
URL: https://ecosystem.ai/docs/quick_start/local_setup

# Local Setup Guide

This is a condensed version of our [Local Installation Guide](/docs/local/)

## Step 1. Download the Installation Files

### Manual Download

1. **Go to the Install Option for your Architecture**
    - Project Install Page for x86**: Visit [docker-x86](https://github.com/ecogenetic/ecosystem/tree/main/docker-x86).
    - Project Install Page for ARM64**: Visit [docker-arm](https://github.com/ecogenetic/ecosystem/tree/main/docker-arm).
    - Project Install Page for Windows**: Visit [docker-windows](https://github.com/ecogenetic/ecosystem/tree/main/docker-windows).

2. **Download the ZIP File**: Click the green "Code" button, then click "Download ZIP."

3. **Extract the ZIP File**: Find the downloaded ZIP file, right-click, and select "Extract All...".

### Using Git

Run the following [git](https://git-scm.com/) command in your terminal, from the desired parent directory:

```bash
git clone https://github.com/ecogenetic/ecosystem.git
```

To update to the latest install options and files:
```bash
git pull
```

## Step 2. Install Docker

1. **Download**: Go to [Docker Desktop Download Page](https://www.docker.com/products/docker-desktop) and download Docker Desktop.
2. **Install**: Open the installer and follow the instructions.
3. **Run**: Open Docker Desktop to ensure it is running.

**Notes:**
- Docker Desktop is recommended for most users.
- You may need to restart your computer after installation.

## Step 3. Run the App

1. **Navigate to the Project Directory**

2. **Create and Configure .env File**:
    - Copy the contents of `ecosystem_env.txt` to a new file named `.env`.
    - Fill in any necessary values.

    **Add your keys** for **OPENAI_API_KEY** and **ECOSYSTEM_API_KEY**.
        ```
        DATA_PATH=./data
        OPENAI_API_KEY=
        ECOSYSTEM_API_KEY=
        ```

3. **Start the Application**:
   Find your correct install folder. Run the following command from within the install directory:
    - ARM64
    ```bash
    cd ecosystem/docker-arm
    ./start.sh
    ```

    - x86
    ```bash
    cd ecosystem/docker-x86
    ./start_x86.sh
    ```

    - Windows
    ```bash
    cd ecosystem\docker-windows
    start.bat
    ```
4. **Run the App**:

    Now that your files are configured and the app started, you can access the app:

    ```web
    http://127.0.0.1
    ```
    OR
    ```web
    http://localhost
    ```

## Post-Install

To access your installation follow the [Post Install Setup Guide](/docs/quick_start/post_install).

## Conclusion

**That's it!** You should now have **ecosystem.Ai** running locally on your machine. Enjoy!

---

---

## Marketplace

Source: `docs/quick_start/marketplace.mdx`
URL: https://ecosystem.ai/docs/quick_start/marketplace

# Marketplace Apps

ecosystem.Ai is available on Microsoft Azure and Amazon's AWS. There are a number of install options available depending on your requirements.

This guide assists with your cloud install. If you require a local install follow this: **[Local Setup Guide](/docs/quick_start/local_setup).**

## Step 1. Decide on your install preference

- There are three types of install options available namely; base platform single instance, cluster (Kubernetes) option and module apps.
- Search for the App's in the marketplace search on Azure and AWS.

## Step 2. Configure install

- **Select Install** and select options.
- **Read Access Instructions** where you can access the installed app from your browser [AI Endpoints section](/docs/configuration/).
  - Each component in the ecosystem.Ai stack have a separate port that can be mapped to different web paths.
  - Use the default username and password to access the various components.
- Here are the **Marketplace** app for AWS:

![image](/images/install/aws.png)

- Here are the **Marketplace** app for Azure:

![image](/images/install/azure.png)

## Step 3. Review configuration

- **Edit your existing configuration**
    - Access your installed container and navigate to:
    ```bash
    cd /opt/ecosystem
    ```
    - Review `.env` file and change the OpenAI key if needed.

- **Edit startup parameters**
    - Review the `.yaml` files for update any settings for example loading more runtime instances.
    - Use `start.sh` to restart all services.

**Notes:**
- Please take care when changing anny configuration files.
- Make backups before changing settings.

## Step 4. Run the App

- Now that your files are configured and the app started, you can access the app:

```web
http://127.0.0.1
```

## Step 5. Post-Install

To access your installation follow the [Post Install Setup Guide](/docs/quick_start/post_install).

## Conclusion

**That's it!** You have now configured **Marketplace Apps** for your ecosystem.Ai instance.

---

## Openshift

Source: `docs/quick_start/openshift.mdx`
URL: https://ecosystem.ai/docs/quick_start/openshift

# OpenShift

ecosystem.Ai can be installed on OpenShift. This can be tested locally using `crc`. Here we give example deployment configurations for the server, workbench, notebooks, runtime and grafana components.

## Environment Variables

A number of [environment variables](/docs/runtime/environment_variables) can be used when starting up the ecosystem.Ai Deployments. These can be set in a ConfigMap. In addition, you should create a secret containing your license key.

**Environment Variable Config Map:** ```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: ecosystem-env
  namespace: ecosystem
data:
  # Server
  ECOSYSTEM_SERVER_PORT: "3001"
  ECOSYSTEM_SERVER_IP: "http://server.ecosystem.svc.cluster.local"
  ECOSYSTEM_PROP_FILE: "/config/ecosystem.properties"
  CLI_SETTINGS: "-Dserver.port=3001"
  RESET_USER: "true"
  NO_WORKBENCH: "true"

  # Runtime
  MONITORING_DELAY: "240"
  ECOSYSTEM_RUNTIME_PORT: "8091"
  NO_MONGODB: "true"

  # Workbench
  WORKBENCH_IP: /route for server deployment/
  WORKBENCH_PORT: "3001"

  # Grafana
  GF_SECURITY_ALLOW_EMBEDDING: "true"
  GF_INSTALL_PLUGINS: "marcusolsson-json-datasource,volkovlabs-echarts-panel"
```

**Commands to Create Config Map:** ```bash
oc apply -f ecosystem_configmap.yaml
```

## Persistent Volume Claims

Ideally you should create a ReadWriteMany PVC to mount to the various ecosystem.Ai Deployments as it makes management easier. This is illustrated here. If your OpenShift instance does not support ReadWriteMany PVCs then you will need to create multiple PVCs.

**Persistent Volume Claim:** ```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: ecosystem-data-pvc
  namespace: ecosystem
spec:
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: /desired storage capacity/Gi
```

**Commands to Create Persistent Volume Claim:** ```bash
oc apply -f ecosystem_pvc.yaml
```

## Server Deployment

For the server, and in the subsequent components:
- Images are pulled from Docker Hub. Generally, the images should be stored in a local repository and that repository should be referenced in the Deployment.
- Resources are not specified as they will be specific to the environment.

**Server Deployment:** ```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ecosystem-server
  namespace: ecosystem
spec:
  replicas: 1
  selector:
    matchLabels:
      app: ecosystem-server
  template:
    metadata:
      labels:
        app: ecosystem-server
    spec:
      initContainers:
      - name: init-ecosystem-config
        image: registry.access.redhat.com/ubi9/ubi-minimal:latest
        command: ["/bin/sh", "-c"]
        args:
          - |
            cat << 'EOF' > /config/ecosystem.properties
            # ========
            logging.level=5
            cross.origin=ecosystem.ai
            date.format=yyyy-MM-dd'T'HH:mm:ss.SSSSSSXXX
            logger.level=500
            # these only needed for mongoexport and import
            mongo.ingestion.threads=7
            mongo.export.compress=true
            mongo.port=54445
            mongo.server=127.0.0.1
            mongo.data.port=54445
            mongo.data.server=127.0.0.1
            mongo.authentication.source=admin
            mongo.secure.data=true
            mongo.secure.workbench=true
            mongo.ecosystem.user=ecosystem_user
            mongo.ecosystem.password=EcoEco321
            mongo.profiles.user=ecosystem_user
            mongo.profiles.password=EcoEco321
            # this is primary connection string
            #user.profiles=profilesMaster
            user.profiles=ecosystem_meta
            mongo.connect=mongodb://ecosystem_user:EcoEco321@127.0.0.1:54445/?authSource=admin
            #mongo.connect=mongodb://ecosystem_user:EcoEco321@ecosystem-mongo:54445/?authSource=admin
            # prediction server
            prediction.server.h2o.mode=local
            prediction.server.h2o=http://127.0.0.1:54321
            prediction.server.pytorch={"train_model":"http://ecosystem-worker-pytorch:5010/train_model","training_status":"http://ecosystem-worker-pytorch:5010/get_model","download_model":"http://ecosystem-worker-pytorch:5010/download_model","get_model":"http://ecosystem-worker-pytorch:5010/get_model","load_model":"http://ecosystem-worker-pytorch:5000/load_model","get_current_model":"http://ecosystem-worker-pytorch:5000/get_current_model","score_document_info_formatted_h2o":"http://ecosystem-worker-pytorch:5000/score_document_info_formatted_h2o"}
            prediction.server.orbit={"server":"http://ecosystem-worker-orbit:5100/","connect":"mongodb://ecosystem_user:EcoEco321@ecosystem-server:54445/?authSource=admin"}
            prediction.server.prophet={"server":"http://ecosystem-worker-prophet:5110/","connect":"mongodb://ecosystem_user:EcoEco321@ecosystem-server:54445/?authSource=admin"}
            prediction.server.ecosystem=http://127.0.0.1:8080
            model.list.generative={"default":{"model":"llama3.2", "url":"http://host.docker.internal:11434/api/chat"}}
            # data and model storage
            user.home=./
            user.data=/data/
            user.generated.models=/data/models/
            user.deployed.models=/data/deployed/
            # apply for new application password in google: https://support.google.com/accounts/answer/185833
            user.email={"smtp":"smtp.gmail.com","port":587,"login":"","password":"","admin":"","cc":"","rule":"super_only"}
            # used for code generation of runtime
            sourcecontrol.runtime=[{"server":"https://github.com/ecogenetic/ecosystem-runtime.git","branch":"workbench","user":"ecosystemai","password":""}]
            # presto server
            presto.url=jdbc:trino://ecosystem-worker-trino:8084/
            presto.connection=local/master?user=admin
            logging.database=logging
            logging.collection=ecosystemruntime
            logging.collection.response=ecosystemruntime_response
            EOF
        volumeMounts:
          - name: ecosystem-data
            subPath: serverconfig
            mountPath: /config
      containers:
      - name: ecosystem-server
        image: docker.io/ecosystemai/ecosystem-server:arm64
        imagePullPolicy: IfNotPresent
        env:
          - name: MASTER_KEY
            valueFrom:
              secretKeyRef:
                name: master-key
                key: master-key
          - name: PORT
            valueFrom:
              configMapKeyRef:
                name: ecosystem-env
                key: ECOSYSTEM_SERVER_PORT
          - name: IP
            valueFrom:
              configMapKeyRef:
                name: ecosystem-env
                key: ECOSYSTEM_SERVER_IP
          - name: ECOSYSTEM_PROP_FILE
            valueFrom:
              configMapKeyRef:
                name: ecosystem-env
                key: ECOSYSTEM_PROP_FILE
          - name: CLI_SETTINGS
            valueFrom:
              configMapKeyRef:
                name: ecosystem-env
                key: CLI_SETTINGS
          - name: RESET_USER
            valueFrom:
              configMapKeyRef:
                name: ecosystem-env
                key: RESET_USER
          - name: NO_WORKBENCH
            valueFrom:
              configMapKeyRef:
                name: ecosystem-env
                key: NO_WORKBENCH
        ports:
          - containerPort: 3001
            name: http
          - containerPort: 54321
            name: htwoo
          - containerPort: 54445
            name: mongo
        volumeMounts:
          - name: ecosystem-data
            subPath: data
            mountPath: /data
          - name: ecosystem-data
            subPath: serverconfig
            mountPath: /config
      volumes:
      - name: ecosystem-data
        persistentVolumeClaim:
          claimName: ecosystem-data-pvc
```

**Commands to Create Server:** ```bash
oc apply -f server-deployment-openshift.yaml

oc expose deployment ecosystem-server --port=3001 --name=server
oc expose deployment ecosystem-server --port=54445 --name=mongo
oc expose deployment ecosystem-server --port=54321 --name=htwoo
oc expose svc server --port=3001
oc expose svc mongo --port=54445
oc expose svc htwoo --port=54321
```

## Notebooks and Grafana Deployments

For the notebooks deployment, we configure `runAsUser: 1001570001`. This is a UID with a pre-created user in the Jupyter Notebooks environment. We pre-create the user as user creation will require the pod to run as root. If this `runAsUser` is not allowed by your serviceAccount then you will need to contact ecosystem.Ai to have an allowed UID preconfigured as a user.

The grafana deployment uses the `nojwt` image tag. This requires some manual configuration of the connection between grafana and the server. Automating the connection between grafana and the server can cause permission issues in OpenShift.

**Notebooks and Grafana Deployments:** ```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ecosystem-notebooks
  namespace: ecosystem
spec:
  replicas: 1
  selector:
    matchLabels:
      app: ecosystem-notebooks
  template:
    metadata:
      labels:
        app: ecosystem-notebooks
    spec:
      containers:
      - name: ecosystem-notebooks
        securityContext:
          runAsUser: 1001570001
        image: docker.io/ecosystemai/ecosystem-notebooks:latest
        imagePullPolicy: IfNotPresent
        ports:
          - containerPort: 8000
            name: notebooks
          - containerPort: 8010
            name: alt
        volumeMounts:
          - name: ecosystem-data
            mountPath: "/app/Shared Projects"
            subPath: "notebooks-users/notebooks"
          - name: ecosystem-data
            mountPath: "/home"
            subPath: "notebooks-users"
          - name: ecosystem-data
            subPath: data
            mountPath: "/data"
      volumes:
        - name: ecosystem-data
          persistentVolumeClaim:
            claimName: ecosystem-data-pvc
      restartPolicy: Always

---

apiVersion: apps/v1
kind: Deployment
metadata:
  name: ecosystem-grafana
  namespace: ecosystem
spec:
  replicas: 1
  selector:
    matchLabels:
      app: ecosystem-grafana
  template:
    metadata:
      labels:
        app: ecosystem-grafana
    spec:
      containers:
      - name: ecosystem-grafana
        image: docker.io/ecosystemai/ecosystem-grafana:nojwt
        imagePullPolicy: IfNotPresent
        env:
          - name: GF_SECURITY_ALLOW_EMBEDDING
            valueFrom:
              configMapKeyRef:
                name: ecosystem-env
                key: GF_SECURITY_ALLOW_EMBEDDING
          - name: $GF_AUTH_JWT_URL
            valueFrom:
              configMapKeyRef:
                name: ecosystem-env
                key: GF_AUTH_JWT_URL
          - name: $GF_AUTH_USERNAME
            valueFrom:
              configMapKeyRef:
                name: ecosystem-env
                key: GF_AUTH_USERNAME
          - name: $GF_AUTH_PASSWORD
            valueFrom:
              configMapKeyRef:
                name: ecosystem-env
                key: GF_AUTH_PASSWORD
        ports:
          - containerPort: 3000
            name: http
        volumeMounts:
          - name: ecosystem-data
            subPath: grafana
            mountPath: /var/lib/grafana
      volumes:
        - name: ecosystem-data
          persistentVolumeClaim:
            claimName: ecosystem-data-pvc
      restartPolicy: Always
```

**Commands to Create Notebooks and Grafana:** ```bash
oc apply -f notebooks-grafana-deployment-openshift.yaml

oc expose deployment ecosystem-grafana --port=3000
oc expose svc ecosystem-grafana --port=3000

oc expose deployment ecosystem-notebooks --port=8000 --name=jupyter
oc expose deployment ecosystem-notebooks --port=8010 --name=pythonserver
oc expose svc jupyter --port=8000
oc expose svc pythonserver --port=8010
```

## Workbench and Runtime Deployments

The workbench Deployment utilises a ConfigMap which sets the port on which the workbench starts up. In this case we start up the workbench on port 8008.

A single runtime Deployment is created. Separate Deployments should be created for each use case that needs to be pushed to a runtime. The replica count is not specified in the runtime Deployment, this assumes that a HorizontalPodAutoscaler will be created for the runtime. Alternatively the replica count can be set at a volume that can handle the anticipated load.

**Workbench and Runtime Deployments:** ```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: nginx-config
  namespace: ecosystem
data:  
  default.conf: |
    server {
        listen 8008 default_server;
        listen [::]:8008 default_server;

        root /usr/share/nginx/html;

        index index.html;

        server_name _;

        location / {
            try_files $uri$args $uri$args/ /index.html;
        }

        location ~* .(js|css|ttf|ttc|otf|eot|woff|woff2)$ {
                add_header access-control-allow-origin "*";
                expires max;
        }
    }

---

apiVersion: apps/v1
kind: Deployment
metadata:
  name: ecosystem-workbench
  namespace: ecosystem
spec:
  replicas: 1
  selector:
    matchLabels:
      app: ecosystem-workbench
  template:
    metadata:
      labels:
        app: ecosystem-workbench
    spec:
      containers:
      - name: ecosystem-workbench
        image: docker.io/ecosystemai/ecosystem-workbench:latest
        volumeMounts:
        - name: nginx-config
          mountPath: "/etc/nginx/conf.d"
        securityContext:
          runAsGroup: 0
        imagePullPolicy: IfNotPresent
        env:
          - name: IP
            valueFrom:
              configMapKeyRef:
                name: ecosystem-env
                key: WORKBENCH_IP
          - name: PORT
            valueFrom:
              configMapKeyRef:
                name: ecosystem-env
                key: WORKBENCH_PORT
        ports:
          - containerPort: 8008
            name: http
      volumes:
      - name: nginx-config
        configMap:
          name: nginx-config
      restartPolicy: Always

---

apiVersion: apps/v1
kind: Deployment
metadata:
  name: ecosystem-runtime1
  namespace: ecosystem
spec:
  replicas: 1
  selector:
    matchLabels:
      app: ecosystem-runtime1
  template:
    metadata:
      labels:
        app: ecosystem-runtime1
    spec:
      containers:
      - name: ecosystem-runtime1
        image: docker.io/ecosystemai/ecosystem-runtime-solo:latest
        imagePullPolicy: IfNotPresent
        volumeMounts:
          - name: ecosystem-data
            subPath: data
            mountPath: /data
        env:
          - name: MASTER_KEY
            valueFrom:
              secretKeyRef:
                name: master-key
                key: master-key
          - name: NO_MONGODB
            valueFrom:
              configMapKeyRef:
                name: ecosystem-env
                key: NO_MONGODB
          - name: MONITORING_DELAY
            valueFrom:
              configMapKeyRef:
                name: ecosystem-env
                key: MONITORING_DELAY
          - name: PORT
            valueFrom:
              configMapKeyRef:
                name: ecosystem-env
                key: PORT
        ports:
          - containerPort: 8091
            name: http
      volumes:
      - name: ecosystem-data
        persistentVolumeClaim:
          claimName: ecosystem-data-pvc
      restartPolicy: Always
```

**Commands to Create Workbench and Runtime:** ```bash
oc apply -f workbench-runtime-deployment-openshift.yaml

oc expose deployment ecosystem-workbench --port=8008
oc expose svc ecosystem-workbench --port=8008

oc expose deployment ecosystem-runtime1 --port=8091
oc expose svc ecosystem-runtime1 --port=8091
```

## Workbench2 Deployments

The workbench2 incorporates the generative AI enabled UI and the notebooks functionality through which the python package can be used.

**Workbench2 Deployments:** ```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: workbench2-config
  namespace: ecosystem
data:
  MONGODB_URI: "mongo_connection_string"
  MONGODB_DATABASE: "ecosystem_meta"
  ECOSYSTEM_SERVER: "http://server-ecosystem.apps-crc.testing"
  BACKEND_PORT: "8001"
  CORS_ORIGINS: "http://localhost:5270,http://workbench2.ecosystem.svc.cluster.local:5270"
  LOG_LEVEL: "INFO"
  H2O_URL: "http://htwoo.ecosystem.svc.cluster.local:54321"
  H2O_CONTAINER_DATA_PATH: "/data"
  LOCAL_DATA_PATH: "/data"
  H2O_MODELS: "/data/models"
  H2O_SCORER_PORT: "9090"
  H2O_MODELS_DIR: "/data/models"
  H2O_OFFLINE: "http://localhost:9090"
  H2O_PREFER_OFFLINE_SCORING: "true"
  TRINO_HOST: "trino.ecosystem.svc.cluster.local"
  TRINO_PORT: "8080"
  TRINO_USER: "ecosystem_user"
  TRINO_CATALOG: "mongodb"
  TRINO_SCHEMA: "master"
  CHAT_SERVER: "https://bedrock-runtime.us-west-2.amazonaws.com"
  CHAT_SERVER_TYPE: "bedrock"
  CHAT_SERVER_MODEL: "qwen.qwen3-coder-480b-a35b-v1:0"
  NGINX_PORT: "5270"

---

apiVersion: v1
kind: ConfigMap
metadata:
  name: workbench2-nginx-config
  namespace: ecosystem
data:  
  supervisord.conf: |
    [supervisord]
    nodaemon=true
    logfile=/var/log/supervisor/supervisord.log
    pidfile=/tmp/supervisord.pid
    childlogdir=/var/log/supervisor

    [unix_http_server]
    file=/tmp/supervisor.sock
    chmod=0700

    [rpcinterface:supervisor]
    supervisor.rpcinterface_factory = supervisor.rpcinterface:make_main_rpcinterface

    [supervisorctl]
    serverurl=unix:///tmp/supervisor.sock

    # ==============================================================================
    # H2O Java Scorer
    # ==============================================================================
    [program:h2o-scorer]
    command=java -jar /app/h2o/h2o-scorer-1.0.0.jar --port %(ENV_H2O_SCORER_PORT)s --models %(ENV_H2O_MODELS_DIR)s
    directory=/app/h2o
    autostart=true
    autorestart=true
    startsecs=10
    stopwaitsecs=30
    stdout_logfile=/var/log/supervisor/h2o-scorer.log
    stderr_logfile=/var/log/supervisor/h2o-scorer-error.log
    stdout_logfile_maxbytes=50MB
    stderr_logfile_maxbytes=50MB
    environment=JAVA_OPTS="-Xmx2g -Xms512m"
    priority=100

    # ==============================================================================
    # Backend FastAPI
    # ==============================================================================
    [program:backend]
    command=python -m uvicorn app.main:app --host 0.0.0.0 --port %(ENV_BACKEND_PORT)s
    directory=/app/backend
    autostart=true
    autorestart=true
    startsecs=5
    stopwaitsecs=30
    stdout_logfile=/dev/stdout
    stdout_logfile_maxbytes=0
    stderr_logfile=/dev/stderr
    stderr_logfile_maxbytes=0
    environment=PYTHONPATH="/app/backend/src",PYTHONUNBUFFERED="1"
    priority=200

    # ==============================================================================
    # Nginx (Frontend)
    # ==============================================================================
    [program:nginx]
    command=/usr/sbin/nginx -g "daemon off;"
    autostart=true
    autorestart=true
    startsecs=5
    stopwaitsecs=10
    stdout_logfile=/var/log/supervisor/nginx.log
    stderr_logfile=/var/log/supervisor/nginx-error.log
    stdout_logfile_maxbytes=50MB
    stderr_logfile_maxbytes=50MB
    priority=300

    # ==============================================================================
    # Group all services
    # ==============================================================================
    [group:ecosystem]
    programs=h2o-scorer,backend,nginx
    priority=999

---

apiVersion: v1
kind: Secret
metadata:
  name: workbench2-secrets
  namespace: ecosystem
type: Opaque
stringData:
  CHAT_SERVER_KEY: "INSERTKEYHERE"
  VITE_GOOGLE_MAPS_API_KEY: "INSERTKEYHERE"

---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: workbench2
  namespace: ecosystem
spec:
  replicas: 1
  selector:
    matchLabels:
      app: workbench2
  template:
    metadata:
      labels:
        app: workbench2
    spec:
      containers:
        - name: workbench2
          image: docker.io/ecosystemai/ecosystem-workbench2:amd64
          imagePullPolicy: Always
          ports:
            - name: http
              containerPort: 5270
          envFrom:
            - configMapRef:
                name: workbench2-config
            - secretRef:
                name: workbench2-secrets
          resources:
            requests:
              memory: 1Gi
            limits:
              memory: 2Gi
          volumeMounts:
            - name: nginx-config
              mountPath: "/etc/supervisor/conf.d/supervisord.conf"
              subPath: supervisord.conf
            - name: ecosystem-data
              subPath: data
              mountPath: /data
            - name: ecosystem-data
              subPath: workbench2-logs
              mountPath: /var/log/supervisor
          securityContext:
            runAsGroup: 0
      volumes:
        - name: nginx-config
          configMap:
            name: workbench2-nginx-config
        - name: ecosystem-data
          persistentVolumeClaim:
            claimName: ecosystem-data-pvc
```

**Commands to Create Workbench2:** ```bash
oc apply -f new-workbench.yaml

oc expose deployment workbench2 --port=5270
oc expose svc workbench2 --port=5270
```

## Conclusion

**That's it!** You have now configured your ecosystem.Ai instance on OpenShift. Superset and Airflow components can be added using helm charts if required.

---

## Post Install

Source: `docs/quick_start/post_install.mdx`
URL: https://ecosystem.ai/docs/quick_start/post_install

# Post Install Setup Guide

## Base Install

The ecosystem.Ai platform contain many different options and capabilities. The base install is the starting point from where you can configure other capabilities. The base installation contains the following components:
- **App Workbench**: The main interface for the ecosystem.Ai platform.
- **Prediction Server**: A server for running predictions.
- **Notebooks**: A Jupyter Notebook environment for running Python code.
- **Grafana**: A data visualization tool for creating dashboards.

### Step 1. Log in to the App Workbench

The default username and password is `admin@ecosystem.ai` and `password`. Please change the password immediately after install.

### Step 2. Log in to Notebooks

You need to create a new user account for the Notebooks. The default username is `admin@ecosystem.ai`. You can assign any password during the registration proces.

### Step 3. Setup key and login to Grafana

The default username and password is `admin@ecosystem.ai` and `password`. Please change the password immediately after install.

to access Grafana, navigate to:
```web
http://127.0.0.1:3000
```
OR
```web
http://localhost:3000
```

You need to generate a key in your Workbench in order to connect to the ecosystem.Ai server for viewing your data. In the Workbench navigate to the **Management** menu and click on **Generate API Keys**. Click on the **Create New** button, assign a name and description and time duration for valid validation. Copy the key. You can use this key to connect to the ecosystem.Ai server inside Grafana.

In Grafana navigate to the **Connections** menu and click on **Data Sources**. Click on **ecosystem-server** and scroll down to ```HTTP headers```. Click on ```Reset``` and the field to the left will open up. Type the word ```Bearer ` and then paste your key after the space:
```
Bearer <your key>
```

```Save & Test``` might produce an error, but you can ignore this. You can now create dashboards and panels in Grafana. Navigate to the **Dashboards**.

## Additional Components Install

The additional components package can be obtained from the ecosystem.Ai marketplace. The package contains the following components:
- **Presto**: A distributed SQL query engine for running queries on large datasets.
- **Superset**: A data visualization tool for creating dashboards.
- **Postgres**: A database for storing relational data.

### Login to Superset

The default username and password is `admin@ecosystem.ai` and `password`. Please change the password immediately after install.

---

## API Access

Source: `docs/runtime/access.mdx`
URL: https://ecosystem.ai/docs/runtime/access
Summary: API Access

# Introduction
The ecosystem.Ai runtime exposes APIs that can be used to access and manage your deployed configuration.
- The `/invocations` endpoint is used to access the deployment and receive a response based on the configured rules
- The `/response` endpoint is used to send record successful interactions generated using the information returned by the `/invocations` call. This is used for logging and learning.
- The `/refresh` endpoint is used to refresh the runtime and reload any data held in memory
- The `/refreshWithOptions` endpoint is used to regenerate the [Options Store](/docs/configuration/dynamic/options) and then refresh the runtime.
- The `/learning` endpoint is used to manually trigger the learning process for a Dynamic Interaction deployment. This process is normally triggered based on the [MONITORING_DELAY environment variable](/docs/runtime/environment_variables). Manually triggering the learning is useful for testing and simulation purposes
- The `/updateCassandraConfig` endpoint is used to update the contents of the `conf` file that is use the detail the Cassandra connection information, if required. 

[Custom APIs](/docs/runtime/apiconfiguration/index) can also be exposed.

## `/invocations`
You can access your deployed runtime at the configured URL using the `/invocations` endpoint. The API is a RESTfull API that accepts POST requests.
```bash
curl -X POST http://ecosystem-runtime:8091/invocations \
    -H "Content-Type: application/json" \
    -d '{
        "campaign": "spending_personality",
        "subcampaign": "openai",
        "channel": "chatgpt",
        "customer": "1234",
        "numberoffers": "1",
        "userid": "openai",
        "params": "{}"
    }'
```

Here is another example payload with a in_param set that can later be used in the model.
```json
{
    "campaign": "spending_personality",
    "subcampaign": "openai",
    "channel": "chatgpt",
    "customer": "1234",
    "numberoffers": "1",
    "userid": "openai",
    "params": {
        "airtime_balance": 200,
        "airtime_advance_limit": 30,
        "api_payment_method": "p"
    }
}
```
Modules have different endpoints and payloads. The following is an example of the Spend Personality `/invocations` API in [OpenAPI 3.0](https://swagger.io/specification/) standard.
**Example `/invocations` Response for Spend Personality:** This is the standard return for the Spend Personality API:
```yaml
openapi: 3.0.0
info:
  title: Spend Personality API
  description: API that obtains spending personality insights and pushes responses once customer values are returned.
  version: "1.0.0"
servers:
  - url: https://bankruntime2.ecosystem.ai
paths:
  /invocations:
    post:
      summary: Obtain Spend personality
      operationId: getSpendPersonality
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                campaign:
                  type: string
                  description: Campaign identifier
                  default: spend_personality
                subcampaign:
                  type: string
                  description: Subcampaign identifier
                  default: spend_personality
                channel:
                  type: string
                  description: Customer interaction channel
                  default: copilot
                customer:
                  type: string
                  description: Customer identifier
                  default: 590
                numberoffers:
                  type: string
                  description: Number of offers to display
                  default: "1"
                userid:
                  type: string
                  description: User ID
                  default: copilot
                params:
                  type: string
                  description: Additional parameters in JSON format
                  default: "{}"
      responses:
        "200":
          description: Success response
          content:
            application/json:
              schema:
                type: object
                properties:
                  cache:
                    type: integer
                    description: Indicates if the response is cached (0 for no, 1 for yes)
                    example: 0
                  datetime:
                    type: string
                    format: date-time
                    description: Timestamp of the response
                    example: "2024-12-20T13:04:43.000774Z"
                  explore:
                    type: integer
                    description: Exploration score (default 0)
                    example: 0
                  final_result:
                    type: array
                    description: Array of final results for spend personality analysis
                    items:
                      type: object
                      properties:
                        result:
                          type: object
                          properties:
                            offer:
                              type: string
                              description: The recommended offer
                              example: "Industrious"
                            score:
                              type: number
                              description: Personality trait score associated with the offer
                              example: 0.4742771310552009
                            final_score:
                              type: number
                              description: Final calculated score
                              example: 0.4742771310552009
                            cost:
                              type: integer
                              description: Cost associated with the recommendation
                              example: 1
                            price:
                              type: integer
                              description: Price of the offer
                              example: 1
                            offer_value:
                              type: integer
                              description: Value of the offer
                              example: 1
                            uuid:
                              type: string
                              description: Unique ID for the recommendation
                              example: "fdfbe8f4-7f99-4315-9614-ca68e6c50b4b"
                            arm_reward:
                              type: number
                              description: Reward score associated with the offer
                              example: 0.4742771310552009
                            modified_offer_score:
                              type: number
                              description: Adjusted score for the offer
                              example: 0.5204656402553511
                            offer_name:
                              type: string
                              description: Name of the offer
                              example: "Industrious"
                        result_full:
                          type: object
                          properties:
                            cost:
                              type: number
                              description: Cost metric
                              example: 1
                            industrious:
                              type: number
                              description: Industrious personality score
                              example: 0.4742771310552009
                            offer_name:
                              type: string
                              description: Name of the offer
                              example: "Industrious"
                            personality:
                              type: string
                              description: Detected personality type
                              example: "Industrious"
                            score:
                              type: number
                              description: Overall personality score
                              example: 0.4742771310552009
                            trait:
                              type: string
                              description: Prominent personality trait detected
                              example: "Extrovert"
                        rank:
                          type: integer
                          description: Rank or priority of this result
                          example: 1
                  id:
                    type: string
                    description: Unique identifier for the analysis type
                    example: spend_personality
                  uuid:
                    type: string
                    description: UUID for the overall response
                    example: "fdfbe8f4-7f99-4315-9614-ca68e6c50b4b"
                  in_params:
                    type: object
                    description: Input parameters for the request
                    example: {}
  /response:
    post:
      summary: Respond to Spend personality when customer lookup happens
      operationId: customerResponse
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                uuid:
                  type: string
                  description: Unique identifier for the request
                  example: "fdfbe8f4-7f99-4315-9614-ca68e6c50b4b"
                offers_accepted:
                  type: array
                  description: List of offers accepted by the customer
                  items:
                    type: string
                  example: ["offer1"]
                channel:
                  type: string
                  description: Customer channel type
                  default: chatgpt
      responses:
        "200":
          description: Response confirmation
          content:
            application/json:
              schema:
                type: object
                properties:
                  final_result:
                    type: array
                    description: The final response result from the API
                    items:
                      type: object

components:
  schemas:
    SpendPersonalityRequest:
      type: object
      properties:
        campaign:
          type: string
          description: Campaign identifier
          default: spend_personality
        subcampaign:
          type: string
          description: Subcampaign identifier
          default: spend_personality
        channel:
          type: string
          description: Customer interaction channel
          default: copilot
        customer:
          type: string
          description: Customer identifier
          default: 590
        numberoffers:
          type: string
          description: Number of offers to display
          default: "1"
        userid:
          type: string
          description: User ID
          default: copilot
        params:
          type: string
          description: Additional parameters in JSON format
          default: "{}"
    SpendPersonalityResponse:
      type: object
      properties:
        cache:
          type: integer
          description: Indicates if the response is cached (0 for no, 1 for yes)
          example: 0
        datetime:
          type: string
          description: Timestamp of the response
          example: "2024-12-20T13:04:43.000774Z"
```

If you do not want the API to return an array or document in document JSON objects then use the flatten option. This is especially useful for UI and other technologies that have difficulty with processing nested JSON objects. The example uses the in_param to force a flattened response: `{"in_param": {"flatten_json": true}}`
**Example Flattened `/invocations` Response for Spend Personality:** This is the return for the Spend Personality API when called with `{"in_param": {"flatten_json": true}}`:
```yaml
openapi: 3.0.0
info:
  title: Spend Personality API
  description: API that obtains spending personality insights and pushes responses once customer values are returned.
  version: "1.0.0"
servers:
  - url: https://bankruntime2.ecosystem.ai
paths:
  /invocations:
    post:
      summary: Obtain Spend personality
      operationId: getSpendPersonality
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                campaign:
                  type: string
                  description: Campaign identifier
                  default: spend_personality
                subcampaign:
                  type: string
                  description: Subcampaign identifier
                  default: spend_personality
                channel:
                  type: string
                  description: Customer interaction channel
                  default: copilot
                customer:
                  type: string
                  description: Customer identifier
                  default: 590
                numberoffers:
                  type: string
                  description: Number of offers to display
                  default: "1"
                userid:
                  type: string
                  description: User ID
                  default: copilot
                params:
                  type: string
                  description: Additional parameters in JSON format
                  default: "{}"
      responses:
        "200":
          description: Success response
          content:
            application/json:
              schema:
                type: object
                properties:
                  final_result_0_result_full_industrious:
                    type: number
                    description: Industrious personality score
                    example: 0.4742771310552009
                  final_result_0_result_full_transaction_count:
                    type: integer
                    description: Total transaction count
                    example: 2663
                  final_result_0_result_score:
                    type: number
                    description: Personality trait score associated with the offer
                    example: 0.4742771310552009
                  final_result_0_result_offer_name:
                    type: string
                    description: Name of the offer
                    example: "Industrious"
                  final_result_0_result_full_uuid:
                    type: string
                    description: Unique ID associated with the personality result
                    example: "e98aeb34-786d-453f-8798-a03145a34e2f"
                  uuid:
                    type: string
                    description: Primary UUID of the response
                    example: "e98aeb34-786d-453f-8798-a03145a34e2f"
                  final_result_0_result_full_offer:
                    type: string
                    description: The recommended offer
                    example: "Industrious"
                  final_result_0_result_cost:
                    type: integer
                    description: Cost associated with the recommendation
                    example: 1
                  datetime:
                    type: string
                    format: date-time
                    description: Timestamp of the response
                    example: "2024-12-20T18:08:52.000565Z"
                  final_result_0_result_full_modified_offer_score:
                    type: number
                    description: Adjusted score for the offer
                    example: 0.5204656402553511
                  final_result_0_result_full_personality:
                    type: string
                    description: Detected personality type
                    example: "Industrious"
                  final_result_0_result_full_extrovert:
                    type: number
                    description: Extrovert score for the customer
                    example: 0.5204656402553511
                  final_result_0_result_full_offer_details_1:
                    type: integer
                    description: Offer detail, key `1`
                    example: 1
                  final_result_0_result_full_offer_details_0:
                    type: integer
                    description: Offer detail, key `0`
                    example: 0
                  final_result_0_result_full_trait:
                    type: string
                    description: Prominent personality trait detected
                    example: "Extrovert"
                  final_result_0_result_full_offer_id:
                    type: string
                    description: Identifier for the offer
                    example: "Industrious"
                  final_result_0_result_full_price:
                    type: integer
                    description: Price of the offer
                    example: 1
                  id:
                    type: string
                    description: Unique identifier for the analysis type
                    example: spend_personality
                  final_result_0_result_final_score:
                    type: number
                    description: Final calculated score
                    example: 0.4742771310552009
                  final_result_0_result_full_offer_value:
                    type: integer
                    description: Value of the offer
                    example: 1
                  final_result_0_result_full_intentional:
                    type: number
                    description: Intentional score for the customer
                    example: 0.09500563274502441
                  final_result_0_result_price:
                    type: integer
                    description: Price of the offer
                    example: 1
                  in_params_flatten_json:
                    type: boolean
                    description: Indicates if the input parameters were flattened
                    example: true
                  cache:
                    type: integer
                    description: Indicates if the response is cached (0 for no, 1 for yes)
                    example: 0
                  explore:
                    type: integer
                    description: Exploration score (default 0)
                    example: 0
                  final_result_0_result_full_offer_name:
                    type: string
                    description: Name of the offer
                    example: "Industrious"
                  final_result_0_result_uuid:
                    type: string
                    description: Unique ID for the recommendation
                    example: "e98aeb34-786d-453f-8798-a03145a34e2f"
                  final_result_0_result_modified_offer_score:
                    type: number
                    description: Adjusted score for the offer
                    example: 0.5204656402553511
                  final_result_0_result_full_enthusiastic:
                    type: number
                    description: Enthusiastic personality score
                    example: 0.06759294029290275
                  final_result_0_result_full_score:
                    type: number
                    description: Overall personality score
                    example: 0.4742771310552009
                  final_result_0_rank:
                    type: integer
                    description: Rank or priority of this result
                    example: 1
                  final_result_0_result_full_introvert:
                    type: number
                    description: Introvert score for the customer
                    example: 0.2377018400300413
                  final_result_0_result_full_experiential:
                    type: number
                    description: Experiential personality score
                    example: 0.12129177619226436
                  final_result_0_result_full_cost:
                    type: integer
                    description: Cost metric
                    example: 1
                  final_result_0_result_offer:
                    type: string
                    description: The recommended offer
                    example: "Industrious"
                  final_result_0_result_offer_value:
                    type: integer
                    description: Value of the offer
                    example: 1
                  final_result_0_result_arm_reward:
                    type: number
                    description: Reward score associated with the offer
                    example: 0.4742771310552009
```

URL Encoding is required for the in_param field.

```json
{
    "campaign": "justforyou_nb",
    "subcampaign": "justforyou_nb",
    "channel": "app",
    "customer": "1846573d-ac20-45df-a9f0-2fb14da6e7d1",
    "userid": "ecosystem",
    "numberoffers": "3",
    "params": "%22%7B%5C%22airtime_balance%5C%22:%20200,%20%5C%22airtime_advance_limit%5C%22:%2030,%20%5C%22api_payment_method%5C%22:%20%5C%22p%5C%22%7D%22"
}
```

## `/response`
Use the `/response` API to send the selected uuid from the `/invocations` API in order to record a successful interaction. The `/response` API can be called in two ways. Firstly, as shown in the example, by populating the request body with a JSON objec that contains the `uuid` and `offers_accepted` fields. The `uuid` is the unique identifier returned by the `/invocations` API, and `offers_accepted` is an array of offers that were accepted by the customer. The `channel_name` is also required to indicate the channel through which the interaction occurred. 
```bash
curl -X 'POST' \
  'http://ecosystem-runtime:8091/response' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{"uuid": "dcb54a23-0737-4768-845d-48162598c0f7", "offers_accepted": [{"offer_name": "OFFER_A"}], "channel_name": "app"}'
```
Secondly, if all offers from the `/invocations` API were accepted, you can use the response from the `/invocations` API as the request body for the `/response` API. This is shown in the example below. 
```bash
curl -X 'POST' \
  'http://localhost:8091/response' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
    "cache": 0,
    "datetime": "2025-06-02T11:32:56.000214+02:00",
    "explore": 0,
    "final_result": [
        {
            "result": {
                "contextual_variable_two": "Grade12",
                "cost": 0,
                "learning_reward": 1,
                "contextual_variable_one": "Industrious",
                "uuid": "9fcfc54a-5282-4a1c-a6fc-aabc0b324456",
                "modified_offer_score": 0,
                "offer_name": "Rewards Booster",
                "offer": "Rewards Booster",
                "score": 0.8550094429534856,
                "final_score": 0.8550094429534856,
                "price": 0,
                "offer_value": 0,
                "arm_reward": 0.8550094429534856
            },
            "result_full": {
                "expected_takeup": -1,
                "contextual_variable_two": "Grade12",
                "cost": 0,
                "explore": 0,
                "epsilon_nominated": 1,
                "learning_reward": 1,
                "contextual_variable_one": "Industrious",
                "offer_name_desc": "Recommended offer is Rewards Booster",
                "weighting": 1,
                "uuid": "9fcfc54a-5282-4a1c-a6fc-aabc0b324456",
                "offer_name": "Rewards Booster",
                "modified_offer_score": 0,
                "offer": "Rewards Booster",
                "p": 0.8550094429534856,
                "score": 0.8550094429534856,
                "final_score": 0.8550094429534856,
                "propensity": 0,
                "price": 0,
                "alpha": 1,
                "offer_value": 0,
                "beta": 1,
                "arm_reward": 0.8550094429534856
            },
            "rank": 1
        }
    ],
    "id": "offer_recommend_dynamic",
    "uuid": "9fcfc54a-5282-4a1c-a6fc-aabc0b324456",
    "in_params": {
        "contextual_variable_two": "Grade12",
        "contextual_variable_one": "Industrious"
    }
}'
```

## `/refresh`
The `/refresh` API is called without a request body and will clear and reload the scoring and data structures in the runtimes memory and reconnect to all configured data sources.
```bash
curl -X 'GET' \
  'http://localhost:8091/refresh' \
  -H 'accept: */*'
```

## `/refreshWithOptions`
The `/refreshWithOptions` API can be used when the runtime is configured to use an [Options Store](/docs/configuration/dynamic/options). This API will generate the Options Store  from the setup feature store and then refresh the runtime. In order to do this the runtime calls the `/updateClientPulseResponder` API exposed by the ecosystem.Ai server. You will need to generate a key to connect to the ecosystem.Ai server. This can be done using the [Workbench](/docs/quick_start/post_install). The following example shows how to call the `/refreshWithOptions` API using curl. The `url` and `token` fields are required in the request body. `url` is the URL of the ecosystem.Ai server and `token` is the key generated using the Workbench. You can also include a `campaign` field in the request body to specify the name of the Dynamic Interaction configuration for which the Options Store should be generated. If no `campaign` is specified, the name of the Deployment will be assumed to be same as the name of the Dynamic Interaction configuration.
```bash
curl -X 'POST' \
  'http://localhost:8091/refreshWithOptions' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
"url":"http://ecosystem-server:3001/api"
"token":"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBlY29zeXN0ZW0uYWkiLCJ0eXBlIjoiQVBJX0tFWSIsInNlcnZlcklkIjoiaHR0cDovLzEyNy4wLjAuMSIsImlzcyI6Imh0dHA6Ly8xMjcuMC4wLjEiLCJpYXQiOjE3NDUxNjM4NDEsImV4cCI6MTc0NTI1MDI0MX0.hvb7N0UeEjINAf1nGyCQviug-bC-SVf1LzwFMZk0oIY"
}'
```
There are a number of additional optional fields the can be included in the request body that will change the behavior of the `/refreshWithOptions` API:
- `type`: This field can be set to `generateDefaultOptions`, which will generate the Options Store from scratch, or `generateUpdatedOptions`, which will keep existing options in the Options Store and check the setup feature store for any new options that should be added
- `cassandra_offer_query`: This field specifies a Cassandra query that will be run to retrieve a table of offers to be used to update the Set Up Feature Store, this would generally be the Offer Matrix. The response from the query will be written to `mongo_offer_database.mongo_offer_collection` in the MongoDB database.
- `mongo_offer_database`: This field specifies the name of the MongoDB database that contains the offers
- `mongo_offer_collection`: This field specifies the name of the MongoDB collection that contains the offers
- `mongo_setup_database`: This field specifies the name of the MongoDB database that contains the Set Up Feature Store
- `mongo_setup_collection`: This field specifies the name of the MongoDB collection that contains the Set Up Feature Store
- `contextual_variable_one_name`: This field specifies the name of the first contextual variable 
- `contextual_variable_one_values`: This field specifies the values for the first contextual variable 
- `contextual_variable_two_name`: This field specifies the name of the second contextual variable
- `contextual_variable_two_values`: This field specifies the values for the second contextual variable
- `offer_name_column`: This field specifies the name of the column in `mongo_offer_database.mongo_offer_collection` that contains the offer names

If `mongo_offer_database`, `mongo_offer_collection`, `mongo_setup_database`, `mongo_setup_collection`, `contextual_variable_one_name`, `contextual_variable_one_values`, `contextual_variable_two_name`, `contextual_variable_two_values` and `offer_name_column` are specified then the Set Up Feature Store will be updated before the Options Store is generated. 

If `cassandra_offer_query` is specified then `mongo_offer_database.mongo_offer_collection` will be updated from Cassandra before the Set Up Feature Store is updated.

**Note:** The `/refreshWithOptions` API will reset the entire Options Store to its default values if `type` is set to the default value, i.e. until the Options Store is next updated by the ecosytem.Ai runtime, the history contained in the logging collections will be ignored.

## `/learning`
The `/learning` API is called without a request body and will trigger the Dynamic Interaction learning process.
```bash
curl -X 'GET' \
  'http://localhost:8091/learning' \
  -H 'accept: */*'
```

## `/updateCassandraConfig`
The `/updateCassandraConfig` API update the contents of the `conf` file which contains the details of the Cassandra connection to be used by the runtime. The `/refresh` API should be called in order for the new connection details to take effect.
```bash
curl -X 'POST' \
  'http://localhost:8091/updateCassandraConfig' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '# ECOSYSTEM
datastax-java-driver {
  basic.session-name = my_session
  basic.session-keyspace = my_keyspace
  basic.config-reload-interval = 5 minutes

  basic.request {
    timeout = 5 seconds
    consistency = LOCAL_ONE
    page-size = 5000
    serial-consistency = SERIAL
    default-idempotence = false
  }

  basic.load-balancing-policy {
    class = DefaultLoadBalancingPolicy
    local-datacenter = datacenter1
  }
'
```

---

## API Configuration Plugin

Source: `docs/runtime/apiconfiguration/index.mdx`
URL: https://ecosystem.ai/docs/runtime/apiconfiguration
Summary: API Configuration Plugin

# API Configuration Plugin

The API configuration plugin is used to configure the API settings for the runtime. This plugin allows you to customize the API settings for the runtime, such as the API endpoint and default values for the values pass with the API. The API configuration plugin is used to set up the API settings for the runtime before it is deployed.
- Review the API concepts [here](/docs/configuration/api).
- To test your API review core concepts [here](/docs/runtime/access)

Note that the runtime environment has a number of default API's that can be used to score models, or just lookup scores or obtain values from data. The primary endpoints include:
- **/invocations** - This is the primary endpoint for scoring models.
- **/response** - This endpoint is used to process scoring results for real-time convergence.

These endpoints are used to administer, monitor and update the permanently in production runtime environments.
- **/health** - Used to indicate the health of the runtime environment.
- **/refresh** - This endpoint is used to refresh the runtime environment with new models or data.
- **/config** - Obtain all current configuration settings for the runtime environment.
- **/updateProperties** - Update the runtime environment with new properties.

## Invocation API

The invocations endpoint take a number of standard inputs that are used by default functionality and dashboards, but the ```params``` structure can accept any other parameters depending on your use-case. All these values will be logged and are also accessible in the plugin system.

Here is an example of an ```/invocations``` payload. Note that the ```params``` key contain a specific format used by the dynamic recommender. Static recommenders, interactions or other cases only need an empty object like ```{}```.

```json
{
    "campaign": "mm_messages_budget",
    "subcampaign": "none",
    "customer": "none",
    "channel": "app",
    "numberoffers": 4,
    "userid": "myuser",
    "params": "{\"input\":[\"contextual_variable_one\",\"contextual_variable_two\"],\"value\":[\"Introvert\",\"\"]}"
}
```

Once the API is invoked a full response can be expected that provide all the scores and results as configured in the use-case. This example shows that four messages are returned:

```json
{
    "cache": 0,
    "datetime": "2025-03-21T10:40:07.000264Z",
    "explore": 0,
    "final_result": [
        {
            "result": {
                "offer": "You think theres not enough, until you start saving :)",
                "score": 0.7782344364908448,
                "final_score": 0.7782344364908448,
                "contextual_variable_two": "SWITCH",
                "cost": 0,
                "price": 0,
                "contextual_variable_one": "Introvert",
                "offer_value": 0,
                "uuid": "dfcf43bb-cefd-452c-8ed0-c5883d6d2cc3",
                "arm_reward": 0.7782344364908448,
                "modified_offer_score": 0,
                "offer_name": "You think theres not enough, until you start saving :)"
            },
            "result_full": {
                "expected_takeup": -1,
                "contextual_variable_two": "SWITCH",
                "cost": 0,
                "explore": 0,
                "epsilon_nominated": 1,
                "contextual_variable_one": "Introvert",
                "offer_name_desc": "Recommended offer is You think theres not enough, until you start saving :)",
                "weighting": 1,
                "uuid": "dfcf43bb-cefd-452c-8ed0-c5883d6d2cc3",
                "offer_name": "You think theres not enough, until you start saving :)",
                "modified_offer_score": 0,
                "offer": "You think theres not enough, until you start saving :)",
                "p": 0.7782344364908448,
                "score": 0.7782344364908448,
                "final_score": 0.7782344364908448,
                "propensity": 0,
                "price": 0,
                "alpha": 1,
                "offer_value": 0,
                "beta": 1.2,
                "arm_reward": 0.7782344364908448
            },
            "rank": 1
        },
        {
            "result": {
                "offer": "Start your savings fund with the bank today.",
                "score": 0.7543721046215692,
                "final_score": 0.7543721046215692,
                "contextual_variable_two": "STATUS QUO",
                "cost": 0,
                "price": 0,
                "contextual_variable_one": "Introvert",
                "offer_value": 0,
                "uuid": "dfcf43bb-cefd-452c-8ed0-c5883d6d2cc3",
                "arm_reward": 0.7543721046215692,
                "modified_offer_score": 0,
                "offer_name": "Start your savings fund with the bank today."
            },
            "result_full": {
                "expected_takeup": -1,
                "contextual_variable_two": "STATUS QUO",
                "cost": 0,
                "explore": 0,
                "epsilon_nominated": 1,
                "contextual_variable_one": "Introvert",
                "offer_name_desc": "Recommended offer is Start your savings fund with the bank today.",
                "weighting": 1,
                "uuid": "dfcf43bb-cefd-452c-8ed0-c5883d6d2cc3",
                "offer_name": "Start your savings fund with the bank today.",
                "modified_offer_score": 0,
                "offer": "Start your savings fund with the bank today.",
                "p": 0.7543721046215692,
                "score": 0.7543721046215692,
                "final_score": 0.7543721046215692,
                "propensity": 0,
                "price": 0,
                "alpha": 1,
                "offer_value": 0,
                "beta": 1.3,
                "arm_reward": 0.7543721046215692
            },
            "rank": 2
        },
        {
            "result": {
                "offer": "Setup a savings goal using the tool.",
                "score": 0.7062030587756783,
                "final_score": 0.7062030587756783,
                "contextual_variable_two": "STATUS QUO",
                "cost": 0,
                "price": 0,
                "contextual_variable_one": "Introvert",
                "offer_value": 0,
                "uuid": "dfcf43bb-cefd-452c-8ed0-c5883d6d2cc3",
                "arm_reward": 0.7062030587756783,
                "modified_offer_score": 0,
                "offer_name": "Setup a savings goal using the tool."
            },
            "result_full": {
                "expected_takeup": -1,
                "contextual_variable_two": "STATUS QUO",
                "cost": 0,
                "explore": 0,
                "epsilon_nominated": 1,
                "contextual_variable_one": "Introvert",
                "offer_name_desc": "Recommended offer is Setup a savings goal using the tool.",
                "weighting": 1,
                "uuid": "dfcf43bb-cefd-452c-8ed0-c5883d6d2cc3",
                "offer_name": "Setup a savings goal using the tool.",
                "modified_offer_score": 0,
                "offer": "Setup a savings goal using the tool.",
                "p": 0.7062030587756783,
                "score": 0.7062030587756783,
                "final_score": 0.7062030587756783,
                "propensity": 0,
                "price": 0,
                "alpha": 1,
                "offer_value": 0,
                "beta": 1.1,
                "arm_reward": 0.7062030587756783
            },
            "rank": 3
        },
        {
            "result": {
                "offer": "Saving is a healthy habit. Why not start today?",
                "score": 0.6919484413792653,
                "final_score": 0.6919484413792653,
                "contextual_variable_two": "SWITCH",
                "cost": 0,
                "price": 0,
                "contextual_variable_one": "Introvert",
                "offer_value": 0,
                "uuid": "dfcf43bb-cefd-452c-8ed0-c5883d6d2cc3",
                "arm_reward": 0.6919484413792653,
                "modified_offer_score": 0,
                "offer_name": "Saving is a healthy habit. Why not start today?"
            },
            "result_full": {
                "expected_takeup": -1,
                "contextual_variable_two": "SWITCH",
                "cost": 0,
                "explore": 0,
                "epsilon_nominated": 1,
                "contextual_variable_one": "Introvert",
                "offer_name_desc": "Recommended offer is Saving is a healthy habit. Why not start today?",
                "weighting": 1,
                "uuid": "dfcf43bb-cefd-452c-8ed0-c5883d6d2cc3",
                "offer_name": "Saving is a healthy habit. Why not start today?",
                "modified_offer_score": 0,
                "offer": "Saving is a healthy habit. Why not start today?",
                "p": 0.6919484413792653,
                "score": 0.6919484413792653,
                "final_score": 0.6919484413792653,
                "propensity": 0,
                "price": 0,
                "alpha": 1,
                "offer_value": 0,
                "beta": 1.2,
                "arm_reward": 0.6919484413792653
            },
            "rank": 4
        }
    ],
    "id": "mm_messages_budget",
    "uuid": "dfcf43bb-cefd-452c-8ed0-c5883d6d2cc3",
    "in_params": {
        "input": [
            "contextual_variable_one",
            "contextual_variable_two"
        ],
        "contextual_variable_two": "",
        "contextual_variable_one": "Introvert",
        "value": [
            "Introvert",
            ""
        ]
    }
}
```

## Response API

This endpoint is called once an item has been selected, accepted or used; and you want to track immediate responses. There are basically two formats for this API. The first is a simple response with a single response, and the second is a more complex response with multiple responses.

It's optimal to return the UUID and offer_id using the response.

```json
{
{
    "uuid": "dfcf43bb-cefd-452c-8ed0-c5883d6d2cc3",
    "offers_accepted": [
        {
            "offer_id": "Saving is a healthy habit. Why not start today?"
        }
    ],
    "channel_name": "app"
}
```

It is also possible to send the entire response payload to the response API. Only return the item selected though, otherwise if all items are accepted then send the payload as-is.

---

## Product Master Plugin

Source: `docs/runtime/apiconfiguration/productmaster.mdx`
URL: https://ecosystem.ai/docs/runtime/apiconfiguration/productmaster
Summary: PProduct Master Plugin

# Product Master Plugin

The Product Master plugin is configure the API settings for the runtime.

## How does it work?

The Product Master plugin can be used to configure api endpoints which can be called to interact with the runtime. The two main classes of enpoint that will be configured are those to get predictions and those to store responses based on predictions. The APIs configured to get predictions are set up to populate the `params` object which is passed through the execution process. The APIs configured to store responses are set up to call the `ecosystemResponse.putResponseReturnDetailAsync` function which performs the required actions. Examples of both types of API are shown in the code below.

## Java Code

The class `PlatformDynamicEngagement` extends the `PostScoreSuper` class, which provides functionality that can be used across different post-scoring plugins.

The `getPostPredict()` method accepts a JSONObject with prediction results, parameters for the scoring operation, a session object for a Cassandra database, and an array of preloaded models. The method then processes the results and prediction parameters, including extracting features, evaluating offer eligibility and constructing an array of modified offer scores.

After processing, the results are sorted based on score and the top scores are retrieved. There is also a time tracking operation which logs the time taken to execute the method.

A `Logger` object is initialized for logging purposes. Logging can be done at a variety of levels, including ERROR, WARN, INFO and DEBUG. It is recommended to add detailed logging at the DEBUG level to assist with troubleshooting once the plugin is deployed.

The following is the java implementation of the Product Master plugin:

```java
package com.ecosystem.runtime;

@CrossOrigin
@RolesAllowed({"ADMIN", "USER"})
@RestController()
@SecurityScheme(type = SecuritySchemeType.APIKEY)
@ApiResponses(value = {
		@ApiResponse(responseCode = "200", description = "Successful",
				content = { @Content(mediaType = "application/json",
						schema = @Schema(implementation = ProductMaster.class)) }),
		@ApiResponse(responseCode = "400", description = "Error",
				content = @Content),
		@ApiResponse(responseCode = "404", description = "Error",
				content = @Content) })
@Tag(name = "Predictors", description = "Review model domain details, refresh model parameter loading and perform predictions. " +
	"There are two primary approaches to invoking a prediction for scoring via a model namely; Invoke model and return a JSON response that can be used in any application," +
	" invoke model and deliver result onto a KAFKA topic of your choosing. Model can also be tested by dynamically loading a MOJO, mostly used for testing purposes." +
			"The predictor parameters are broken into two types namely, requiring all parameters via API or requiring a lookup key via API and extracting parameters from a data source." +
			"Use this format for input params: \n " +
			"{'name':'predict1', 'mojo':'model_mojo.zip','dbparam':false,'input': ['x','y'],'value': ['val_x', 'val_y']}" +
			"\nUse this approach for inputs from data source:\n" +
			"{'name':'predict1', 'mojo':'model_mojo.zip','dbparam':true, lookup:{key:'customer',value:1234567890}} " +
			"\nIf there is post-scoring logic, then ise this configuration:\n" +
			"{'name':'predict1', 'mojo': '1','mab': {'class':'mabone', 'epsilon':0.4},'dbparam': true, lookup:{key:'customer',value: 1234567890}, param: {key:'value_field', value:30}}\n")

public class ProductMaster extends ProductMasterSuper {

	private static final Logger LOGGER = LogManager.getLogger(ProductMaster.class.getName());

	public ProductMaster() {
		super();
	}

	/**
	 * Primary Scoring Endpoint for Inference.
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@Operation(summary = "Invocation endpoint: {\"campaign\":\"name\",\"subcampaign\":\"none\",\"customer\":\"1111\",\"channel\":\"app\",\"numberoffers\":1,\"userid\":\"test\",\"params\":\"{}\"}")
	@PostMapping("/invocations")
	public String invoke(@RequestHeader Map<String, String> headers,
							   @RequestBody String request) {
		LOGGER.info("/invocations API");
		JSONObject predictResult = new JSONObject();

		try {
			JSONObject inpObj = new JSONObject(request);

			/************ Validate and use defaults ***********/
			String campaign = settings.getProjectDeploymentID();
			if (inpObj.has("campaign"))
				campaign = String.valueOf(inpObj.get("campaign"));

			String subcampaign = campaign;
			if (inpObj.has("subcampaign"))
				subcampaign = String.valueOf(inpObj.get("subcampaign"));

			String channel = "api";
			if (inpObj.has("channel"))
				channel = String.valueOf(inpObj.get("channel"));

			int numberoffers = 1;
			if (inpObj.has("numberoffers"))
				numberoffers = Integer.parseInt(String.valueOf(inpObj.get("numberoffers")));

			String userid = "api";
			if (inpObj.has("userid"))
				userid = String.valueOf(inpObj.get("userid"));

			String params = "{}";
			if (inpObj.has("params"))
				params = (String) inpObj.get("params");

			String customer = "none";
			if (inpObj.has("customer"))
				customer = String.valueOf(inpObj.get("customer"));

			JSONObject paramsParams = new JSONObject();
			try {
				String in_params = URLDecoder.decode(params);
				if (in_params.startsWith("\"")) in_params = in_params.substring(1, in_params.length() - 1).replaceAll("\\\\", "");
				paramsParams = new JSONObject(in_params);
			} catch (org.json.JSONException e) {
				LOGGER.info("/offerRecommendations malformed params JSON input: " + params);
				return paramsParams.put("ErrorMessage", e).toString().intern();
			}

			/************ Setup values from input params that will be placed in **********/
			JSONObject param = new JSONObject();
			String uuid = generateUUID();
			/** param.put("headers", headers); */
			param.put("uuid", uuid);
			param.put("UPDATE", this.UPDATE);
			LOGGER.info("/invocations:UUID: " + uuid + " predictor: " + campaign);

			param.put("name", campaign);
			param.put("customer", customer);
			param.put("campaign", campaign);
			param.put("subcampaign", subcampaign);
			param.put("channel", channel);
			param.put("subname", subcampaign);
			param.put("resultcount", numberoffers);
			param.put("userid", userid);
			param.put("mojo", "1");

			/* this is needed to not cause a stack overflow as adding current value of json object */
			JSONObject inParam = new JSONObject(param.toString());
			param.put("api_params", inParam);

			/************ Set defaults for model and paramneters from database ***********/
			param.put("in_params", paramsParams);
			if (paramsParams.has("input")) {
				param.put("input", paramsParams.getJSONArray("input"));
				param.put("value", paramsParams.getJSONArray("value"));
				param.put("lookup", new JSONObject().put("value", customer).put("key", "customer"));
				param.put("dbparam", false);
			} else {
				param.put("dbparam", true);
				param = ValidateParams.getLookupFromParams(settings, param, customer);
			}

			/************ Obtain default epsilon from properties or obtain from input params ***********/
			if (!paramsParams.has("mab")) {
				JSONObject mabParam = new JSONObject();
				mabParam.put("class", "mabone");
				mabParam.put("epsilon", settings.getEpsilon());
				param.put("mab", mabParam);
			} else {
				param.put("mab", paramsParams.getJSONObject("mab"));
			}

			/**************** Primary prediction from EcosystemMaster.getPredictionResult **************/
			predictResult = ecosystemMaster.getPredictionResult(mongoClient, param);
			if (param.has("in_params")) predictResult.put("in_params", param.getJSONObject("in_params"));
			if (predictResult.has("ErrorMessage")) {
				predictResult.put("error", 1);
			}
			predictResult.remove("predict_result");

			String detail = "full";
			if (paramsParams.has("detail"))
				detail = paramsParams.getString("detail");

			/**************** Special prediction approaches: Spam **************/
			if (detail.contains("spam") || subcampaign.contains("spam")) {
				JSONObject newResult = new JSONObject();
				newResult.put("uuid", predictResult.getJSONArray("final_result").getJSONObject(0).getJSONObject("result_full").get("uuid"));
				newResult.put("offer", predictResult.getJSONArray("final_result").getJSONObject(0).getJSONObject("result_full").get("offer"));
				newResult.put("ham_confidence", predictResult.getJSONArray("final_result").getJSONObject(0).getJSONObject("result_full").get("ham_confidence"));
				newResult.put("spam_confidence", predictResult.getJSONArray("final_result").getJSONObject(0).getJSONObject("result_full").get("spam_confidence"));
				newResult.put("spam", predictResult.getJSONArray("final_result").getJSONObject(0).getJSONObject("result_full").get("spam"));
				predictResult = newResult;
			}

			/**************** Final step to decide if json needs to be flattened **************/
			if (paramsParams.has("flatten_json") && Boolean.valueOf(String.valueOf(paramsParams.opt("flatten_json")))) {
				predictResult = JSONFlattener.flatten(predictResult);
			}

		} catch (Exception e) {
			e.printStackTrace();
			predictResult.put("ErrorMessage", e.getMessage());
		}

		this.UPDATE = setFinal(false, predictResult);

		return predictResult.toString();
	}

	/**
	 * Update responses based on predictions.
	 *
	 * @param documentJSON documentJSON
	 * @return Result
	 */
	@Operation(description = "Update response based on recommendation accepted (Async): " +
			"{\"uuid\": \"dcb54a23-0737-4768-845d-48162598c0f7\", \"offers_accepted\": [{\"offer_name\": \"OFFER_A\"}], \"channel_name\": \"app\"}" +
			"", summary = "Update response based on predictions accepted")
	@PostMapping("/response")
	public String processResponse(@RequestHeader Map<String, String> headers,
								  @RequestBody String documentJSON) throws Exception {
		LOGGER.info("/response POST API");
		String response = "Success";

		try {
			ecosystemResponse.putResponseReturnDetailAsync(JSONDecode.decode(documentJSON));
		} catch (Exception e) {
			e.printStackTrace();
			JSONObject error = new JSONObject().put("ErrorMessage", e.getMessage());
			response = error.toString();
		}

		return "{\"message\": \"" + response + "\"}";
	}

	/**
	 * Business logic service.
	 *
	 * @param params JSONObject with params
	 * @return Result
	 */
	@Operation(description = "Access the business logic or other calculations." +
			"", summary = "Business logic")
	@RequestMapping(value = "/business", method = RequestMethod.POST)
	public String processBusiness(@RequestHeader Map<String, String> headers,
								  @RequestBody String params) throws Exception {
		LOGGER.info("/business POST API");
		String response = "Success";

		try {
			JSONObject paramsObj = new JSONObject(params);

			this.UPDATE = setFinal(false, new JSONObject());
			paramsObj.put("UPDATE", this.UPDATE);

			return BusinessLogic.getValues(paramsObj).toString();

		} catch (Exception e) {
			e.printStackTrace();
			JSONObject error = new JSONObject().put("ErrorMessage", e.getMessage());
			response = error.toString();
			return "{\"ErrorMessage\": \"" + response + "\"}";
		}

	}

	/**
	 * Update responses based on predictions.
	 *
	 * @param documentJSON documentJSON
	 * @return Result
	 */
	@Operation(description = "Update response based on recommendation accepted and return valid response: " +
			"{\"uuid\": \"dcb54a23-0737-4768-845d-48162598c0f7\", \"offers_accepted\": [{\"offer_name\": \"OFFER_A\"}], \"channel_name\": \"app\"}" +
			"", summary = "Update response based on predictions accepted")
	@RequestMapping(value = "/responseResult", method = RequestMethod.POST)
	public String processResponseResult(@RequestHeader Map<String, String> headers,
										@RequestBody String documentJSON) throws Exception {
		LOGGER.info("/responseResult POST API");
		String response = "Error";

		try {
			JSONObject responseObj = ecosystemResponse.putResponseReturnDetail(JSONDecode.decode(documentJSON));
			if (responseObj.has("uuid"))
				response = responseObj.getString("uuid");
			else
				response = "Error: UUID not found.";
		} catch (Exception e) {
			e.printStackTrace();
			JSONObject error = new JSONObject().put("ErrorMessage", "Validate that uuid is available in log. " + e.getMessage());
			response = error.toString();
		}

		return "{\"message\": \"" + response + "\"}";
	}

}
```

---

## Configuration

Source: `docs/runtime/configuration.mdx`
URL: https://ecosystem.ai/docs/runtime/configuration
Summary: Configuration

# Configuration

Configuration is the process of setting up the ecosystem.Ai platform to work with your data and models. This section provides an overview of the configuration process and the tools you can use to configure the platform.

## Deployment
A project can have a number of deployment actions. Each can have it's own settings and behave independently.

![image](/images/configuration/deployment/project-deployment-01.png)

## Settings
If the version number is changed, it will create a new instance for you. In order to use the ```Generate``` and ```Build``` functionality, please contact your enterprise configuration partner.

![image](/images/configuration/deployment/project-deployment-02.png)

As project settings are toggled, accordians will appear at the bottom of the screen where additional parameters can be provided. For details on the parameters available see [Deployment Configuration](/docs/configuration/deployment/parameters).

---

## Push Your Deployment

Source: `docs/runtime/deployment.mdx`
URL: https://ecosystem.ai/docs/runtime/deployment
Summary: Pushing a configured deployment to the production environment

# Push Your Deployment
Pushing your Deployment is the process of sending your [Deployment](/docs/configuration/deployment) configuration to the runtime endpoint. This requires a [running runtime enpoint](/docs/quick_start). There are a number of approaches to follow, depending on the details of the plugins in your Deployment configuration:
1. Using template pre and post scoring logic: There is no java compilation required so the basic push functionality can be used.
2. Custom post scoring logic: Use the built in compilation functionality in the workbench or python before doing the push
3. Additional custom classes: When using custom pre scoring or API logic or post scoring logic made up of multiple classes, you will need to implement a build pipeline to compile the java classes. These compiled java classes can then be copied to the plugins structure of a runtime before using the push functionality.

## Template pre and post scoring logic
If you are using one of the template pre and post scoring logic options, as described in the documentation on the [Deployment parameters](/docs/configuration/deployment/parameters) documentation. Once your Deployment is configured either click the `Push` button in the workbench or use the python functionality. Note that when using python there are two options for pushing the deployment show in the code snippet below. The first shows how to push the deployment to a single runtime endpoint. The second shows how to push the deployment to an endpoint which may have multiple replicas being load balanced behind a single endpoint.
```python
# Import the required packages
from prediction.apis import ecosystem_generation_engine as ge
from prediction import jwt_access

# Authenticate
ecosystem_password = getpass.getpass("Enter your ecosystem password")
auth = jwt_access.Authenticate("http://ecosystem-server:3001/api", "user@ecosystem.ai", ecosystem_password)

# Select the deployment to push
project_id = "Demo Project"
deployment_id = "demo_recommender"
version = "001"
deployment_step = get_deployment_step(auth, project_id, deployment_id, version)

# Push deployment and print properties file for single runtime endpoint
push_result = ge.process_push(auth,deployment_step)
if "ErrorMessage" in push_result:
    print(push_result["ErrorMessage"])
else:
    print(push_result["properties"])

# Push deployment and print properties file for multiple runtime endpoint in OpenShift
push_result = ge.process_push(auth,deployment_step)
if "ErrorMessage" in push_result:
    print(push_result["ErrorMessage"])
else:
    print(push_result["properties"])
    # oc is used to manage the OpenShift environment so we need to configure the connection parameters.
    # If oc is not available set use_oc to False and manual instructions will be printed
    openshift_server = "https://api.crc.testing:6443"
    oc_user = "developer"
    oc_path = "/home/developer/.crc/oc"

    dm.udate_properties_and_refresh(
        name=deployment_id
        ,openshift_server=openshift_server
        ,oc_user=oc_user
        ,oc_path=oc_path
        ,properties=push_result["properties"]
    )
```
**Note:** When using the Workbench push functionality with an endpoint load balancing multiple replica runtimes, only a sinlge runtime will be reloaded to use the new configuration that has been pushed. You will need to call the `/refresh` API for each runtime in order for the update to propogate to each replica. This is handled automatically when using the python functionality.

## Custom pre and post scoring logic
When using custom pre and post scoring logic you will need to use the compile functionality in the Workbench to compile the java class before completing the push. In order to create and test your custom pre and post scoring logic we recommend that you follow the [plugin development guide](/docs/user_guides/runtime_plugin_development/). Once you have pushed your custom logic back to the server you can use the Just In Time compilation functionality. To compile the class click the `Compile` button in the Plugins accordion of your Deployment Configuration on the workbench. This will use the `/generateClass` runtime endpoint to compile the java class, as part of this process and unique string will be appended to the name. Once the compile process is completed you will see that the name of the class on the workbench has changed to include this unique string, do not change this string as it is linked to the class that has now been compiled in the runtime. You can now follow the standard push process outlined in the previous section using either the workbench or python.

The compilation step can also be completed using the python package. The code snippet below shows how to compile  and deploy custom post scoring logic.
```python
# Import the required packages
from prediction.apis import ecosystem_generation_engine as ge
from prediction import jwt_access

# Authenticate
ecosystem_password = getpass.getpass("Enter your ecosystem password")
auth = jwt_access.Authenticate("http://ecosystem-server:3001/api", "user@ecosystem.ai", ecosystem_password)

# Select the deployment
project_id = "Demo Project"
deployment_id = "demo_recommender"
version = "001"

# Get the deployment step and extract the post scoring logic
deployment_step = dm.get_deployment_step(auth, project_id, deployment_id, version)
post_score_code = deployment_step["plugins"]["post_score_class_code"]
# Compile the post scoring logic file and add the new file name to the deployment step 
compile_results = o.generate_class(auth_runtime, post_score_code)
deployment_step["plugins"]["post_score_class_text"] = compile_results["javaFileName"]
# Save the new deployment step
dm.update_deployment_step(auth, project_id, deployment_id, version, deployment_step)

#Push deployment and produce properties file
push_result = ge.process_push(auth,deployment_step)
if "ErrorMessage" in push_result:
    print(push_result["ErrorMessage"])
else:
    print(push_result["properties"])
```

**Note:** In order to preserve the compiled class if the runtime is restarted, you will need to mount the `/app` folder when creating the runtime endpoint. Alternatively you can repeat the compile and push process if the runtime needs to be restarted.

## Additional custom classes
If you are adding additional custom classes to your Deployment configuration beyond the post scoring logic, you will need to implement a build pipeline to compile the java classes. In order to create and test your custom logic we recommend that you follow the [plugin development guide](/docs/user_guides/runtime_plugin_development/). Here we will illustrate the process using a Tekton pipeline in OpenShift, other pipelining tools can also be used as long as the java classes are compiled and copied to the correct location in the runtime.

The below pipeline will configure a base runtime environment, clone a git repository containing the custom logic, compile the custom java classes, copy the compiled classes to the runtime and then push the Deployment from the server to the runtime.
```yaml
apiVersion: tekton.dev/v1
kind: Task
metadata:
  name: create-base-runtime
  namespace: ecosystem
spec:
  params:
    - name: project
      description: The namespace of the case to be deployed
      type: string
    - name: port
      description: The port number of the service
      type: string
    - description: The name of the deployment
      name: deployment-id
      type: string
    - description: The name of the project containing the deployment
      name: ecosystem-project
      type: string
    - description: The ecosystem version of the deployment
      name: ecosystem-version
      type: string
    - description: The version of the runtime container
      name: runtime-version
      type: string
    - description: The name of the pvc used by the deployments
      name: nfs-volume-claim
      type: string
    - description: The number of replicas to be created
      name: replica-number
      type: string
    - description: The ecosystem license key
      name: ecosystem-key
      type: string
    - description: The number of seconds between refreshes for the dynamic interaction configurations
      name: monitoring-delay
      type: string
    - description: The mongo connection string
      name: mongo-connect
      type: string
  steps:
    - name: create-deployment-config
      image: image-registry.openshift-image-registry.svc:5000/ecosystem/ecosystem-python:0.1.30
      imagePullPolicy: IfNotPresent
      workingDir: /workspace/source
      script: |
          #!/usr/bin/env python
          from prediction.apis import deployment_management as dm

          ecosystem_key = "$(inputs.params.ecosystem-key)"
          monitoring_delay = $(inputs.params.monitoring-delay)
          port = $(inputs.params.port)
          deployment_id = "$(inputs.params.deployment-id)"
          mongo_connect = "$(inputs.params.mongo-connect)"
          version = "$(inputs.params.runtime-version)"
          namespace = "$(inputs.params.project)"
          volume = "$(inputs.params.nfs-volume-claim)"
          replicas = $(inputs.params.replica-number)
          port = $(inputs.params.port)
          print(mongo_connect)

          environment_variables = [
              f"MASTER_KEY={ecosystem_key}",
              f"MONITORING_DELAY={monitoring_delay}",
              "CASSANDRA_CONFIG=/config/cassandra.conf",
              "TZ=Africa/Johannesburg",
              f"PORT={port}",
              f"MONGO_CONNECT={mongo_connect}"
          ]

          deployment_config = dm.get_openshift_deployment_config(
            name=deployment_id
            , version=version
            , environment_variables=environment_variables
            , namespace=namespace
            , volume=volume
            , replicas=replicas
            , port=port
          )

          deployment_config["spec"]["template"]["spec"]["containers"][0]["image"] = f"image-registry.openshift-image-registry.svc:5000/ecosystem/ecosystem-runtime:{version}"

          print(deployment_config)
          with open(f'deployment-{deployment_id}.yml', 'w+') as f:
            yaml.dump(deployment_config, f)
    - name: create-base-deployment
      image: image-registry.openshift-image-registry.svc:5000/openshift/cli:latest
      workingDir: /workspace/source
      script: |
          #!/bin/bash

          oc patch deployment management --type='json' -p='[{"op": "add", "path": "/spec/template/spec/containers/0/volumeMounts/-", "value": {"mountPath": "/$(inputs.params.deployment-id)-data", "name": "tc-ecosystem-disk", "subPath": "$(inputs.params.deployment-id)-data"}}]'
          sleep 15
          managementpodname=$(oc get pods -l deployment=management -o jsonpath="{.items[0].metadata.name}")
          echo $managementpodname
          oc exec $managementpodname -- /bin/sh -c "cd /$(inputs.params.deployment-id)-data&&mkdir logs"

          echo Create base deployment and test
          oc project $(inputs.params.project)
          oc apply -f deployment-$(inputs.params.deployment-id).yml
          echo "Checking pod for running status"
          sleep 5
          pod_status=$(oc get pods -l deployment=$(inputs.params.deployment-id) -o jsonpath="{.items[0]['status.phase']}")
          while :
          do
            if [[ $pod_status == "Running" ]]; then
                  echo "Pod is running"
                  break
            fi
            echo $pod_status
            sleep 30
            pod_status=$(oc get pods -l deployment=$(inputs.params.deployment-id) -o jsonpath="{.items[0]['status.phase']}")
          done

          podname=$(oc get pods -l deployment=$(inputs.params.deployment-id) -o jsonpath="{.items[0].metadata.name}")
          echo "Pod Name: "
          echo $podname

          sleep 10
          echo "Checking local container ping"
          wget -qO- --header="accept: */*" http://localhost:8091/ping
          local_ping=$(oc rsh $podname wget -qO- --header="accept: */*" http://localhost:$(inputs.params.port)/ping)
          echo $local_ping
  workspaces:
    - name: source

apiVersion: tekton.dev/v1
kind: Task
metadata:
  name: copy-maven-build-files
  namespace: ecosystem
spec:
  params:
    - description: The name of the deployment
      name: deployment-id
      type: string
  steps:
    - name: copy-files
      image: image-registry.openshift-image-registry.svc:5000/openshift/cli:latest
      imagePullPolicy: IfNotPresent
      workingDir: /workspace/source
      script: |
          #!/bin/bash
          oc patch deployment management --type='json' -p='[{"op": "add", "path": "/spec/template/spec/containers/0/volumeMounts/-", "value": {"mountPath": "/$(inputs.params.deployment-id)-plugins", "name": "tc-ecosystem-disk", "subPath": "$(inputs.params.deployment-id)-plugins"}}]'
          managementpodname=$(oc get pods -l deployment=management -o jsonpath="{.items[0].metadata.name}")
          runtimepodname=$(oc get pods -l deployment=$(inputs.params.deployment-id) -o jsonpath="{.items[0].metadata.name}")
          echo $managementpodname
          echo $runtimepodname
          cd /workspace/source/clone/
          mkdir base
          cd base
          oc cp $runtimepodname:/app/com/ecosystem/. .
          oc exec $managementpodname -- /bin/sh -c "cd /$(inputs.params.deployment-id)-plugins&&rm -r *"
          oc cp . $managementpodname:/$(inputs.params.deployment-id)-plugins/
          echo "Check for plugins folder and copy required files if present"
          cd ..
          if [ -d "target" ]; then
            echo "Plugins folder found, copying to persistent volume claim"
            cd target
            oc cp /workspace/source/clone/target/classes/com/ecosystem/plugin/. $managementpodname:/$(inputs.params.deployment-id)-plugins/plugin/
            oc cp /workspace/source/clone/target/classes/com/ecosystem/runtime/ProductMaster.class $managementpodname:/$(inputs.params.deployment-id)-plugins/runtime/ProductMaster.class
          fi
  workspaces:
    - name: source

apiVersion: tekton.dev/v1
kind: Task
metadata:
  name: create-runtime-and-endpoint
  namespace: ecosystem
spec:
  params:
    - name: project
      description: The namespace of the case to be deployed
      type: string
    - name: server-user
      description: username for logging into the ecosystem server
      type: string
    - name: server-password
      description: password for logging into the ecosystem server
      type: string
    - name: server-url
      description: ecosystem server url
      type: string
    - name: port
      description: The port number of the service
      type: string
    - description: The name of the deployment
      name: deployment-id
      type: string
    - description: The name of the project containing the deployment
      name: ecosystem-project
      type: string
    - description: The ecosystem version of the deployment
      name: ecosystem-version
      type: string
    - description: The version of the runtime container
      name: runtime-version
      type: string
    - description: The name of the pvc used by the deployments
      name: nfs-volume-claim
      type: string
    - description: The number of replicas to be created
      name: replica-number
      type: string
    - description: The ecosystem license key
      name: ecosystem-key
      type: string
    - description: The number of seconds between refreshes for the dynamic interaction configurations
      name: monitoring-delay
      type: string
    - description: The mongo connection string
      name: mongo-connect
      type: string
  steps:
    - name: create-deployment-config
      image: image-registry.openshift-image-registry.svc:5000/ecosystem/ecosystem-python:0.1.30
      imagePullPolicy: IfNotPresent
      workingDir: /workspace/source
      script: |
          #!/usr/bin/env python
          from prediction.apis import deployment_management as dm

          ecosystem_key = "$(inputs.params.ecosystem-key)"
          monitoring_delay = $(inputs.params.monitoring-delay)
          port = $(inputs.params.port)
          deployment_id = "$(inputs.params.deployment-id)"
          mongo_connect = "$(inputs.params.mongo-connect)"
          version = "$(inputs.params.runtime-version)"
          namespace = "$(inputs.params.project)"
          volume = "$(inputs.params.nfs-volume-claim)"
          replicas = $(inputs.params.replica-number)
          port = $(inputs.params.port)
          print(mongo_connect)

          environment_variables = [
              f"MASTER_KEY={ecosystem_key}",
              f"MONITORING_DELAY={monitoring_delay}",
              "CASSANDRA_CONFIG=/config/cassandra.conf",
              "TZ=Africa/Johannesburg",
              f"PORT={port}",
              #f"MONGO_CONNECT={mongo_connect}"
          ]

          deployment_config = dm.get_openshift_deployment_config(
            name=deployment_id
            , version=version
            , environment_variables=environment_variables
            , namespace=namespace
            , volume=volume
            , replicas=replicas
            , port=port
          )

          deployment_config["spec"]["template"]["spec"]["containers"][0]["image"] = f"image-registry.openshift-image-registry.svc:5000/ecosystem/ecosystem-runtime:{version}"
          deployment_config["spec"]["template"]["spec"]["containers"][0]["volumeMounts"].append(
            {
            "mountPath": "/app/com/ecosystem",
            "name": "tc-ecosystem-disk",
            "subPath": "$(inputs.params.deployment-id)-plugins"
            }
          )

          print(deployment_config)
          with open(f'deployment-{deployment_id}.yml', 'w+') as f:
            yaml.dump(deployment_config, f)
    - name: create-base-deployment
      image: image-registry.openshift-image-registry.svc:5000/openshift/cli:latest
      workingDir: /workspace/source
      script: |
          #!/bin/bash
          echo Create base deployment and test
          oc project $(inputs.params.project)
          oc apply -f deployment-$(inputs.params.deployment-id).yml
          echo "Checking pod for running status"
          sleep 5
          pod_status=$(oc get pods -l deployment=$(inputs.params.deployment-id) -o jsonpath="{.items[0]['status.phase']}")
          while :
          do
            if [[ $pod_status == "Running" ]]; then
                  echo "Pod is running"
                  break
            fi
            echo $pod_status
            sleep 30
            pod_status=$(oc get pods -l deployment=$(inputs.params.deployment-id) -o jsonpath="{.items[0]['status.phase']}")
          done

          podname=$(oc get pods -l deployment=$(inputs.params.deployment-id) -o jsonpath="{.items[0].metadata.name}")
          echo "Pod Name: "
          echo $podname

          sleep 10
          echo "Checking local container ping"
          local_ping=$(oc rsh $podname wget -qO- --header="accept: */*" http://localhost:$(inputs.params.port)/ping)
          while :
          do
            if [[ $local_ping == *" successful"* ]]; then
                  echo "Local ping successful"
                  break
            fi
            echo $local_ping
            sleep 10
            local_ping=$(oc rsh $podname wget -qO- --header="accept: */*" http://localhost:$(inputs.params.port)/ping)
          done
          echo $local_ping

          echo "Creating service"
          oc expose deployment $(inputs.params.deployment-id) --port=$(inputs.params.port)
          sleep 10
          echo "Checking service ping"
          service_ip=$(oc get service $(inputs.params.deployment-id) -o jsonpath='{.spec.clusterIP}')
          service_ping=$(wget -qO- --header="accept: */*" http://${service_ip}:$(inputs.params.port)/ping)
          if [[ $service_ping == *" successful"* ]]; then
              echo "Service ping successful"
          else
              echo "Service ping failed, stopping setup"
              exit 1
          fi

          echo "Creating route"
          oc expose svc $(inputs.params.deployment-id) --port=$(inputs.params.port)
          oc annotate route $(inputs.params.deployment-id) haproxy.router.openshift.io/balance=roundrobin
          oc annotate route $(inputs.params.deployment-id) haproxy.router.openshift.io/disable_cookies='true'
          sleep 15
          echo "Checking route ping"
          route_path=$(oc get route $(inputs.params.deployment-id) -o jsonpath='{.spec.host}')
          route_ping=$(wget -qO- --header="accept: */*" http://${route_path}/ping)
          if [[ $route_ping == *" successful"* ]]; then
              echo "Route ping successful"
          else
              echo "Route ping failed, stopping setup"
              exit 1
          fi

          echo "Route Path:"
          echo http://${route_path}
          echo http://${route_path} > route_name.txt
    - name: update-deployment-and-refresh
      image: image-registry.openshift-image-registry.svc:5000/ecosystem/ecosystem-python:0.1.30
      imagePullPolicy: IfNotPresent
      workingDir: /workspace/source
      script: |
          #!/usr/bin/env python
          from prediction.apis import deployment_management as dm
          from prediction.apis import ecosystem_generation_engine as ge
          from prediction import jwt_access

          auth = jwt_access.Authenticate("$(inputs.params.server-url)/api", "$(inputs.params.server-user)", "$(inputs.params.server-password)")

          ecosystem_project = "$(inputs.params.ecosystem-project)"
          ecosystem_version = "$(inputs.params.ecosystem-version)"
          deployment_id = "$(inputs.params.deployment-id)"

          deployment_step = dm.get_deployment_step(auth,ecosystem_project,deployment_id,ecosystem_version)

          print(ecosystem_project,deployment_id,ecosystem_version)
          print(deployment_step)

          with open("route_name.txt", "r") as f:
            for line in f:
              route_name = line.strip()

          print(route_name)
          if deployment_step["project_status"] == "experiment":
           deployment_step["paths"]["scoring_engine_path_dev"] = route_name

          push_result = ge.process_push(auth,deployment_step)
          if "ErrorMessage" in push_result:
            print(push_result["ErrorMessage"])
          else:
            print(push_result["properties"])
  workspaces:
    - name: source

apiVersion: image.openshift.io/v1
kind: ImageStream
metadata:
  name: ecosystem-python
  namespace: ecosystem
spec:
  lookupPolicy:
    local: true
  tags:
  - name: "0.1.30"
    from:
      kind: DockerImage
      name: docker.io/ecosystemai/ecosystem-algorithms:latest
    referencePolicy:
      type: Local

apiVersion: image.openshift.io/v1
kind: ImageStream
metadata:
  name: maven
  namespace: ecosystem
spec:
  lookupPolicy:
    local: true
  tags:
  - name: '3.9.9-amazoncorretto-17'
    from:
      kind: DockerImage
      name: maven:3.9.9-amazoncorretto-17
    referencePolicy:
      type: Local

apiVersion: image.openshift.io/v1
kind: ImageStream
metadata:
  name: ecosystem-runtime
  namespace: ecosystem
spec:
  lookupPolicy:
    local: true
  tags:
  - name: "0.9.5.0"
    from:
      kind: DockerImage
      name: docker.io/ecosystemai/ecosystem-runtime-solo:0.9.5.0
    referencePolicy:
      type: Local

apiVersion: tekton.dev/v1
kind: Pipeline
metadata:
  name: ecosystem-deployment-pipeline
  namespace: ecosystem
spec:
  params:
    - description: git repo url
      name: git-url
      type: string
    - description: git repo branch
      name: git-branch
      type: string
      default: main
    - description: path of folder in git branch
      name: git-branch-path
      type: string
      default: ""
    - description: The namespace of the case to be deployed
      name: project
      type: string
      default: bdp-rts-dev
    - description: The name of the deployment
      name: deployment-id
      type: string
    - description: The name of the project containing the deployment
      name: ecosystem-project
      type: string
    - description: The ecosystem version of the deployment
      name: ecosystem-version
      type: string
    - description: The ecosystem version of the deployment
      name: runtime-version
      type: string
    - description: Prefix for the deployment name, should be oc-tc- or oc-fs-
      name: prefix
      type: string
      default: "oc-fs-"
    - description: Monitoring delayt environment variable
      name: monitoring-delay
      type: string
      default: 600
    - description: Mongo connection string
      name: mongo-connect
      type: string
    - description: The storage class of the persistent volume claims
      name: storage-class
      type: string
      default: thin
    - name: nfs-volume-claim
      type: string
      default: tc-ecosystem-disk 
    - name: replica-number
      type: string
      default: 1
    - name: environment-variables
      description: Environment variables to be passed to the ecosystem.Ai runtime
      type: array
    - name: port
      description: The port number of the service
      type: string
      default: 8091
    - name: server-user
      description: username for logging into the ecosystem server
      type: string
    - name: server-password
      description: password for logging into the ecosystem server
      type: string
    - name: server-url
      description: ecosystem server url
      type: string
    - name: ecosystem-key
      description: The ecosystem license key
      type: string
  tasks:  
    - name: git-clone
      params:
        - name: url
          value: $(params.git-url)
        - name: revision
          value: $(params.git-branch)
        - name: refspec
          value: ''
        - name: submodules
          value: 'false'
        - name: depth
          value: '1'
        - name: sslVerify
          value: 'false'
        - name: crtFileName
          value: ca-bundle.crt
        - name: subdirectory
          value: ''
        - name: sparseCheckoutDirectories
          value: $(params.git-branch-path)
        - name: deleteExisting
          value: 'true'
        - name: httpProxy
          value: ''
        - name: httpsProxy
          value: ''
        - name: noProxy
          value: ''
        - name: verbose
          value: 'true'
        - name: gitInitImage
          value: 'gcr.io/tekton-releases/github.com/tektoncd/pipeline/cmd/git-init:v0.40.2'
        - name: userHome
          value: /home/git
      taskRef:
        kind: Task
        name: git-clone
      workspaces:
        - name: output
          subPath: clone
          workspace: source
    - name: maven
      params:
        - name: MAVEN_IMAGE
          value: 'image-registry.openshift-image-registry.svc:5000/ecosystem/maven:3.9.9-amazoncorretto-17'
        - name: GOALS
          value:
            - clean
            - compile
        - name: MAVEN_MIRROR_URL
          value: 'file:///workspace/maven-local-repo'
        - name: SERVER_USER
          value: ''
        - name: SERVER_PASSWORD
          value: ''
        - name: PROXY_USER
          value: ''
        - name: PROXY_PASSWORD
          value: ''
        - name: PROXY_PORT
          value: ''
        - name: PROXY_HOST
          value: ''
        - name: PROXY_NON_PROXY_HOSTS
          value: ''
        - name: PROXY_PROTOCOL
          value: http
        - name: CONTEXT_DIR
          value: .
      runAfter:
        - git-clone
      taskRef:
        kind: Task
        name: maven
      workspaces:
        - name: source
          subPath: clone
          workspace: source
        - name: maven-settings
          workspace: custom-maven-settings
        - name: maven-local-repo
          subPath: m2-repo
          workspace: maven-local-repo
    - name: create-base-runtime
      params:
        - name: project
          value: $(params.project)
        - name: git-branch-path
          value: $(params.git-branch-path)
        - name: port
          value: $(params.port)
        - name: deployment-id
          value: $(params.deployment-id)
        - name: ecosystem-project
          value: $(params.ecosystem-project)
        - name: ecosystem-version
          value: $(params.ecosystem-version)
        - name: runtime-version
          value: $(params.runtime-version)
        - name: nfs-volume-claim
          value: $(params.nfs-volume-claim)
        - name: replica-number
          value: $(params.replica-number)
        - name: ecosystem-key
          value: $(params.ecosystem-key)
        - name: monitoring-delay
          value: $(params.monitoring-delay)
        - name: mongo-connect
          value: $(params.mongo-connect)
      runAfter:
        - maven
      taskRef:
        kind: Task
        name: create-base-runtime
      workspaces:
        - name: source
          workspace: source
    - name: copy-maven-build-files
      params:
        - name: deployment-id
          value: $(params.deployment-id)
      runAfter:
        - create-base-runtime
      taskRef:
        kind: Task
        name: copy-maven-build-files
      workspaces:
        - name: source
          workspace: source
    - name: create-runtime-and-endpoint
      params:
        - name: project
          value: $(params.project)
        - name: git-branch-path
          value: $(params.git-branch-path)
        - name: server-user
          value: $(params.server-user)
        - name: server-password
          value: $(params.server-password)
        - name: server-url
          value: $(params.server-url)
        - name: port
          value: $(params.port)
        - name: deployment-id
          value: $(params.deployment-id)
        - name: ecosystem-project
          value: $(params.ecosystem-project)
        - name: ecosystem-version
          value: $(params.ecosystem-version)
        - name: runtime-version
          value: $(params.runtime-version)
        - name: nfs-volume-claim
          value: $(params.nfs-volume-claim)
        - name: replica-number
          value: $(params.replica-number)
        - name: ecosystem-key
          value: $(params.ecosystem-key)
        - name: monitoring-delay
          value: $(params.monitoring-delay)
        - name: mongo-connect
          value: $(params.mongo-connect)
      runAfter:
        - copy-maven-build-files
      taskRef:
        kind: Task
        name: create-runtime-and-endpoint
      workspaces:
        - name: source
          workspace: source
  workspaces:
    - name: source
    - name: custom-maven-settings
    - name: maven-local-repo

apiVersion: tekton.dev/v1
kind: PipelineRun
metadata:
  name: maven-test-pipeline-run
spec:
  pipelineRef:
    name: ecosystem-deployment-pipeline
  params:
  - name: git-url
    value: 'https://github.com/ecogenetic/example-dynamic-recommender.git'
  - name: git-branch
    value: ""
  - name: git-branch-path
    value: ""
  - name: prefix
    value: ""
  - name: environment-variables
    value:
    - MASTER_KEY=<Key>
    - MONITORING_DELAY=120
    - FEATURE_DELAY=99999
    - CASSANDRA_CONFIG=/config/cassandra.conf
    - TZ=Africa/Johannesburg
    - PORT=8999
  - name: server-user
    value: user@ecosystem.ai
  - name: deployment-id
    value: example-dynamic-recommender
  - name: ecosystem-project
    value: "Example Project"
  - name: ecosystem-version
    value: "001"
  - name: runtime-version
    value: "0.9.5.0"
  - name: project
    value: "ecosystem"
  workspaces:
    - name: custom-maven-settings
      configMap:
        name: custom-maven-settings
    - name: source
      volumeClaimTemplate:
        spec:
          accessModes:
            - ReadWriteOnce
          resources:
            requests:
              storage: 1Gi
    - name: maven-local-repo
      persistentvolumeclaim:
        claimName: tc-ecosystem-disk 
```

---

## Environment Variables

Source: `docs/runtime/environment_variables.mdx`
URL: https://ecosystem.ai/docs/runtime/environment_variables
Summary: Environment Variables

# Environment Variables

Environment variables are used to manage a number of runtime behaviors which cannot be changed once the runtime is live. These variables can be set for native installations or in the Dockerfile for Docker installations.

## Variables

The possible environment variables are:
- **MASTER_KEY**: The master key for the ecosystem.Ai instance.
- **LOGGING_LEVEL_ROOT**: The level of logs that the runtime should produce. Valid values are OFF, FATAL, ERROR, WARN, INFO, DEBUG, TRACE and ALL. The default value is INFO.
- **NO_MONGODB**: Boolean variable indicating whether the runtime should start it's own MongoDB instance or if an external MongoDB instance will be used.
- **MONITORING_DELAY**: The time period in seconds between updates of the options store when the runtime is configured to use the Ecosystem Rewards Dynamic Interaction algorithm.
- **PORT**: The port exposed by the runtime.
- **TZ**: The time zone that the runtime uses.
- **ECOSYSTEM_PROP_FILE**: The location of the ecosystem.Ai properties file in the the runtime file structure.
- **CASSANDRA_CONFIG**: The location of the Cassandra config file in the runtime file structure.
- **CLI_SETTINGS**: Command line options to be added to the runtime at startup.
- **ECOSYSTEM_XMX**: The amount of memory allocated to the runtime. This translated into the -Xmx option for the JVM.
- **MONGO_CONNECT**: The connection string for the MongoDB instance to be used the runtime.

To be supported in the future:
- **FEATURE_DELAY**: The time period in seconds between updates of the real time features.

## Docker Startup Example

Variables can be set in the Docker run command like so:

```bash
docker run --rm -d -p 8091:8091 --env MASTER_KEY=<from ecosystem.Ai> --env LOGGING_LEVEL_ROOT=ERROR ecosystemai/ecosystem-runtime-solo
```

## IntelliJ Run Configuration Example

Environment variables can be set in the run configuration in IntelliJ IDEA. This is done by adding the variables to the Environment Variables section of the run configuration.

![IntelliJ Environment Variables](/images/runtime/IntelliJ_environment_variables.png)

## OpenShift Deployment Example

Environment variables can be set in the OpenShift deployment configuration yaml file as shown below.

```yaml
kind: Deployment
apiVersion: apps/v1
metadata:
  ...
spec:
  replicas: 1
  selector:
    ...
  template:
    metadata:
      ...
    spec:
      containers:
        - name: ecosystem-runtime
          env:
            - name: NO_MONGODB
              value: 'true'
            - name: ECOSYSTEM_PROP_FILE
              value: /config/ecosystem.properties
```

## Security

If the runtime engine is started with ```--security``` in CLI_SETTINGS then two additional variables can be set to define defaults:
- **SPRING_SECURITY_USER_NAME**: The default username for the runtime.
- **SPRING_SECURITY_USER_PASSWORD**: The default password for the runtime.

On restart of the runtime access is only allowed by the username and password set in these variables. The runtime will not allow access if access credentials are not set.

---

## Calling External Runtimes

Source: `docs/runtime/externalruntimecalls.mdx`
URL: https://ecosystem.ai/docs/runtime/externalruntimecalls
Summary: Calling one runtime from another runtime

# Calling External Runtimes
It is often necessary to combine the results of multiple runtimes to produce the desired output. The preferred approach to do this is using the [Network Runtime](/docs/user_guides/network). If the Network Runtime functionality is not sufficient to acheive the desired results, it is possible to call one runtime from another using the `callExternalRuntimeSync` and `callExternalRuntimeAsync` methods.

## How does it work?
To use the `callExternalRuntimeSync` method your post scoring logic must import `com.ecosystem.plugin.lib.ExternalRuntimeSync`. To use the `callExternalRuntimeAsync` method your post scoring logic must import `com.ecosystem.plugin.lib.ExternalRuntimAsync`. `callExternalRuntimeSync` and `callExternalRuntimeAsync` takes three arguments; `params`, `overwrite_api`,  and `url`. `params` is the `JSONObject` object that is passed through the runtime process. `overwrite_api` is a `JSONObject` object that contains the parameters to be passed to the external runtime, this will override the values in `params` which are used as defaults. `url` is the endpoint of the external runtime to be called. This is illustrated in this truncated example:
```java
    String url = "http://ecosystem-runtime-two:8092";

    JSONObject overwrite_api = new JSONObject();
    overwrite_api.put("customer", customer_number);
    overwrite_api.put("campaign", "demo-recommender");
    overwrite_api.put("subcampaign", "demos");
    overwrite_api.put("channel", "callExternal");
    api_paroverwrite_apiams.put("result_count", 2);
    overwrite_api.put("userid", "runtime_one");
    overwrite_api.put("in_params", new JSONObject());

    JSONObject response = ExternalRuntimeSync.callExternalRuntimeSync(params, overwrite_api, url);
```

`callExternalRuntimeSync` will return the response from the runtime as a `JSONObject` object. The response can then be used in the remainder of the runtime process. Note that `callExternalRuntimeAsync` does not return the response from the external runtime, it merely triggers an asynchronous call to the configured runtime.

---

## Runtime

Source: `docs/runtime/index.mdx`
URL: https://ecosystem.ai/docs/runtime
Summary: Runtime

# Runtime Overview: Client Pulse Responder

The ecosystem.Ai platform is a powerful tool that allows you to build, train, and deploy machine learning models. Use the runtime to deploy your predictors, track their performance, and make predictions in real-time.

## Why do you need a runtime?

The runtime is the core component of the ecosystem.Ai platform. It is responsible for managing the lifecycle of your predictors, tracking their performance, and making predictions in real-time. The runtime provides a set of tools and libraries that help you build, deploy, and manage your predictors.

## What is a runtime?

The runtime engine is used to access data, score models, perform other related real-time functions and manage the lifecycle of the predictor. The runtime engine is responsible for processing user input, generating responses, and managing conversations.

---

## Logging

Source: `docs/runtime/logging.mdx`
URL: https://ecosystem.ai/docs/runtime/logging
Summary: Logging

# Logging

Logging is the process of recording events that occur during the execution of a program. It is an essential part of the machine learning lifecycle as it helps you monitor the performance of your predictors, track errors, and debug issues. The ecosystem.Ai platform provides a set of tools and libraries that help you log events, monitor the performance of your predictors, and analyze the data generated during the execution of your predictors.

## Why do you need logging?

Logging is an essential part of the machine learning lifecycle. It helps you monitor the performance of your predictors, track errors, and debug issues. Logging allows you to record events that occur during the execution of your predictors, analyze the data generated during the execution, and make informed decisions about the performance of your predictors.

You can use the logged data to track model and data drift over time, identify patterns in the data, and optimize the performance of your predictors. Logging also helps you debug issues, troubleshoot errors, and improve the accuracy of your predictors.

## What is logging?

Logging is the process of recording events that occur during the execution of a program. It involves capturing information about the execution of your predictors, such as input data, output data, errors, warnings, and other events. Logging allows you to monitor the performance of your predictors, track errors, and debug issues.

### Logging on Contact

Here is an example of a log message:

```json
{
    "server": {
        "hostname": "1267d1abfa6d",
        "address": "172.19.0.10",
        "port": "8093",
        "version": "0.9.4.0"
    },
    "cache": 0,
    "explore": 1,
    "final_result": [
        {
            "result": {
                "offer": "Enthusiastic",
                "score": 0.983224112956522,
                "final_score": 0.983224112956522,
                "contextual_variable_two": "",
                "cost": 0,
                "price": 0,
                "contextual_variable_one": "",
                "offer_value": 0,
                "uuid": "2096e0e2-5a18-493f-8c6d-571fd0711cb0",
                "arm_reward": 0.983224112956522,
                "modified_offer_score": 0,
                "offer_name": "Enthusiastic"
            },
            "result_full": {
                "expected_takeup": -1,
                "contextual_variable_two": "",
                "cost": 0,
                "explore": 0,
                "epsilon_nominated": -1,
                "contextual_variable_one": "",
                "offer_name_desc": "Recommended offer is Enthusiastic",
                "weighting": 1,
                "uuid": "2096e0e2-5a18-493f-8c6d-571fd0711cb0",
                "offer_name": "Enthusiastic",
                "modified_offer_score": 0,
                "offer": "Enthusiastic",
                "p": 0.983224112956522,
                "score": 0.983224112956522,
                "final_score": 0.983224112956522,
                "propensity": 0,
                "price": 0,
                "alpha": 0,
                "offer_value": 0,
                "beta": 0,
                "arm_reward": 0.983224112956522
            },
            "rank": 1
        }
    ],
    "whitelist": {},
    "params": {
        "value": 267,
        "key": "customer"
    },
    "uuid": "2096e0e2-5a18-493f-8c6d-571fd0711cb0",
    "userid": "test",
    "in_params": {
        "contextual_variable_two": "",
        "contextual_variable_one": ""
    },
    "api_params": {
        "resultcount": 1,
        "mojo": "1",
        "subname": "predict",
        "name": "spend_personality_dynamic",
        "subcampaign": "predict",
        "channel": "simulation",
        "campaign": "spend_personality_dynamic",
        "uuid": "2096e0e2-5a18-493f-8c6d-571fd0711cb0",
        "userid": "test",
        "customer": "267"
    },
    "date_index": 202406,
    "date_log": {
        "$date": "2024-06-11T12:10:53.284Z"
    },
    "mojo": "1",
    "stats": {
        "end_date": "2024-06-11T12:10:53.000284Z",
        "duration_paramsdb": 3.823583,
        "runtime_version": "0.9.4.0",
        "error": 0,
        "userid": "test",
        "epsilon": 0.2,
        "duration": 7.336166,
        "duration_whitelist": 0.0025,
        "start_time": 35292507795082,
        "duration_ns": 7336166,
        "duration_cache": 0.001166,
        "predictor": "spend_personality_dynamic",
        "model": "No Model",
        "start_date": "2024-06-11T12:10:53.000277Z"
    },
    "day_index": 11,
    "predictor": "spend_personality_dynamic",
    "_id": {
        "$oid": "66683ecdcb4d977a27c0bf14"
    },
    "minute_index": 0,
    "hour_index": 12,
    "scoring_data": {
        "Extrovert": 0.6059602649006622,
        "education": "Grade12",
        "gender": "M",
        "changeIndicatorThree": "stable",
        "language": "English",
        "numberOfProducts": 5,
        "changeIndicatorSix": "increase",
        "Introvert": 0.3675496688741722,
        "numberOfChildren": 4,
        "numberOfAddresses": 1,
        "personality": "Industrious",
        "segment_enum": 2,
        "segment": "Segment C",
        "region": 104,
        "maritalStatus": "Unmarried",
        "age": 31,
        "proprtyOwnership": "Tenant",
        "customer": 267
    }
}
```

### Logging on Response

On accepted return action this message will be logged in the system:

```json
{
    "server": {
        "hostname": "1267d1abfa6d",
        "address": "172.19.0.10",
        "port": "8093",
        "version": "0.9.4.0"
    },
    "response_log": {
        "server": {
            "hostname": "1267d1abfa6d",
            "address": "172.19.0.10",
            "port": "8093",
            "version": "0.9.4.0"
        },
        "cache": 0,
        "explore": 0,
        "final_result": [
            {
                "result": {
                    "offer": "Industrious",
                    "score": 0,
                    "final_score": 0,
                    "contextual_variable_two": "",
                    "cost": 0,
                    "price": 0,
                    "contextual_variable_one": "",
                    "offer_value": 0,
                    "uuid": "d9126376-bb1a-411d-8eb1-bb05233c52b9",
                    "arm_reward": 0,
                    "modified_offer_score": 0,
                    "offer_name": "Industrious"
                },
                "result_full": {
                    "expected_takeup": -1,
                    "contextual_variable_two": "",
                    "cost": 0,
                    "explore": 0,
                    "epsilon_nominated": 1,
                    "contextual_variable_one": "",
                    "offer_name_desc": "Recommended offer is Industrious",
                    "weighting": 1,
                    "uuid": "d9126376-bb1a-411d-8eb1-bb05233c52b9",
                    "offer_name": "Industrious",
                    "modified_offer_score": 0,
                    "offer": "Industrious",
                    "p": 0,
                    "score": 0,
                    "final_score": 0,
                    "propensity": 0,
                    "price": 0,
                    "alpha": 0,
                    "offer_value": 0,
                    "beta": 1,
                    "arm_reward": 0
                },
                "rank": 1
            }
        ],
        "whitelist": {},
        "params": {
            "value": 82,
            "key": "customer"
        },
        "uuid": "d9126376-bb1a-411d-8eb1-bb05233c52b9",
        "userid": "test",
        "in_params": {
            "contextual_variable_two": "",
            "contextual_variable_one": ""
        },
        "api_params": {
            "resultcount": 1,
            "mojo": "1",
            "subname": "predict",
            "name": "spend_personality_dynamic",
            "subcampaign": "predict",
            "channel": "simulation",
            "campaign": "spend_personality_dynamic",
            "uuid": "d9126376-bb1a-411d-8eb1-bb05233c52b9",
            "userid": "test",
            "customer": "82"
        },
        "date_index": 202406,
        "date_log": {
            "$date": "2024-06-11T12:10:53.47Z"
        },
        "mojo": "1",
        "stats": {
            "end_date": "2024-06-11T12:10:53.000470Z",
            "duration_paramsdb": 1.178917,
            "runtime_version": "0.9.4.0",
            "error": 0,
            "userid": "test",
            "epsilon": 0.2,
            "duration": 6.389041,
            "duration_whitelist": 0.000833,
            "start_time": 35292694391582,
            "duration_ns": 6389041,
            "duration_cache": 0.001,
            "predictor": "spend_personality_dynamic",
            "model": "No Model",
            "start_date": "2024-06-11T12:10:53.000463Z"
        },
        "day_index": 11,
        "predictor": "spend_personality_dynamic",
        "_id": {
            "$oid": "66683ecdcb4d977a27c0bf19"
        },
        "minute_index": 0,
        "hour_index": 12,
        "scoring_data": {
            "Extrovert": 0.5296052631578947,
            "education": "Grade12",
            "gender": "F",
            "changeIndicatorThree": "stable",
            "language": "English",
            "numberOfProducts": 5,
            "changeIndicatorSix": "increaseLarge",
            "Introvert": 0.43256578947368424,
            "numberOfChildren": 2,
            "numberOfAddresses": 1,
            "personality": "Industrious",
            "segment_enum": 2,
            "segment": "Segment C",
            "region": 90,
            "maritalStatus": "Unmarried",
            "age": 35,
            "proprtyOwnership": "Tenant",
            "customer": 82
        }
    },
    "response_uuid": "7d78f07e-2678-4ecc-90d1-04ecf4a48846",
    "uuid": "d9126376-bb1a-411d-8eb1-bb05233c52b9",
    "date_index": 202406,
    "date_log": {
        "$date": "2024-06-11T12:10:53.485Z"
    },
    "stats": {
        "end_date": "2024-06-11T12:10:53.000486Z",
        "duration": 0.069833,
        "start_time": 35292716547707,
        "duration_ns": 69833,
        "runtime_version": "0.9.4.0",
        "error": 0,
        "start_date": "2024-06-11T12:10:53.000485Z"
    },
    "response": {
        "channel_name": "simulation",
        "cache": 0,
        "explore": 0,
        "predictor": "spend_personality_dynamic",
        "offers_accepted": [
            {
                "offer": "Industrious",
                "score": 0,
                "final_score": 0,
                "contextual_variable_two": "",
                "cost": 0,
                "price": 0,
                "contextual_variable_one": "",
                "offer_value": 0,
                "uuid": "d9126376-bb1a-411d-8eb1-bb05233c52b9",
                "arm_reward": 0,
                "modified_offer_score": 0,
                "offer_name": "Industrious"
            }
        ],
        "whitelist": {},
        "userid": "test",
        "in_params": {
            "contextual_variable_two": "",
            "contextual_variable_one": ""
        },
        "uuid": "d9126376-bb1a-411d-8eb1-bb05233c52b9"
    },
    "day_index": 11,
    "predictor": "spend_personality_dynamic",
    "_id": {
        "$oid": "66683ecdcb4d977a27c0bf1a"
    },
    "minute_index": 0,
    "hour_index": 12
}
```

---

## MCP Support

Source: `docs/runtime/mcp.mdx`
URL: https://ecosystem.ai/docs/runtime/mcp
Summary: MCP and custom API configuration

# Ecosystem Runtime MCP

The Ecosystem Runtime MCP provides an MCP interface to the ecosystem Runtime as well as providing a python interface which can be used to provide custom APIs to the ecosystem Runtime.

## Installing the Runtime MCP

The Runtime MCP can be added to your ecosystem environment using a configuration similar to the docker compose snippet below

```sh
  ecosystem-runtime-solo:
    image: ecosystemai/ecosystem-runtime-mcp:arm64
    container_name: ecosystem-runtime
    restart: unless-stopped
    environment:
      RUNTIME_URL: 'http://ecosystem-runtime-backend:8081'
      PORT: 8091
      MLFLOW_TRACKING_URI: 'http://mlflowurl:8085'
      RUNTIME_CONFIG: '/data/config/runtime_config.json'
      MONGO_CONNECT: ${MONGO_CONNECT_STRING}
    volumes:
      - ${DATA_PATH}:/data
    networks:
      - ecosystem
    ports:
      - "8091:8091"
    depends_on:
      ecosystem-runtime-backend:
        condition: service_healthy
```

For this configuration the OpenAPI style docs can be accessed at `http://ecosystem-runtime:8091/docs` and the MCP interface can be access at `http://ecosystem-runtime:8091/mcp`.

## Environment Variables

The following environment variables can be used to set the behaviour of the Runtime MCP:
- **RUNTIME_URL**: The master key for the ecosystem.Ai instance.
- **PORT**: The port exposed by the Runtime MCP
- **MLFLOW_TRACKING_URI**: The MLFlow link to use for downloading models
- **RUNTIME_CONFIG**: The location of the config file giving the details of the MLFlow models to use
- **MONGO_CONNECT**: The mongo connect string used by the runtime

## Custom APIs

Custom APIs can be set up by creating a python file aligned with the following template
```python
from fastapi import APIRouter, Body
from .custom_api_super import invocations, response
from ..type_models import Invocation, Response

# Create a logger instance
logger = logging.getLogger(__name__)

router = APIRouter()

@router.post(
    "/myCustomInvocationsName",
    operation_id="custom_invocations_call",
    description="Get a list of responses from the runtime",
    tags=["Predictors"]
    )
async def my_custom_invocations(
    customer: str = Body(..., description="The customer ID for the custom invocation."),
    params: str = Body(..., description="Parameters for the custom invocation, typically a JSON string.")
):
    """
    Custom endpoint to call /invocations on the runtime
    """
    body = Invocation(
        customer=customer,
        params=params
    )
    logger.info(f"Received request for custom invocations: {body}")
    return await invocations(body)

@router.post(
    "/myCustomResponseName",
    operation_id="custom_response_call",
    description="Send a response to the ecosystem.Ai runtime if the customer reaction generated using the result from the /invocations endpoint is a success",
    tags=["Predictors"]
    )
async def my_custom_response(
    body: Response = Body(..., description="The response to send to the runtime")
):
    """
    Customer endpoint to call /response on the runtime
    """
    logger.info(f"Received request for custom response: {body}")
    return await response(body)
```

This python file can be passed to the MCP using the workbench. When configuring [plugins in a deployment](/docs/configuration/deployment/parameters), place your python file in the editor in the API tab and push the Compile button.

---

## MLFlow Integration

Source: `docs/runtime/mlflowintegration.mdx`
URL: https://ecosystem.ai/docs/runtime/mlflowintegration
Summary: Import models from the MLFlow model registry

# MLFlow Integration
If models are not trained using the ecosystem Server, the trained models need to be made available to the ecosystem Runtime as part of the deployment process. The supported approach to do this is to use MLFlow as a model registry and import the models from MLFlow into the runtime.

**Looking to train models in-platform?:** This page is for **importing** models from an external MLFlow
  registry. To train sklearn / xgboost / lightgbm / pytorch models
  directly from a MongoDB collection through the Workbench2 console
  — and optionally deploy them onto Docker Desktop Kubernetes
  alongside `ecosystem-runtime` — see the
  [MLRun module](/docs/modules/mlrun).

**Note:** Integration is currently supported from models trained using H2O where either the mojo is stored as an artifact in MLFlow or the Runtime MCP has access to an h2o server used by MLFlow

## Configuration
MLFlow integration requires the use of the [Runtime MCP](/docs/runtime/mcp) api interface. The `MLFLOW_TRACKING_URI` environment variable should be configured, pointing to your MLFlow environment. The MLFlow security variables can also be configured if required. Specify the models required using the config file with the following format:
```json
{
    "mlflow_models": [
                    {"name":"recommender-demo","version":7,"type":"h2o_mojo","mojo_artifact_path":"mojo"},
                    {"name":"recommender-demo","version":7,"type":"h2o_model","h2o_url":"http://localhost:54321"}
                    ]
}
```
The location of the config file is specified using the `RUNTIME_CONFIG` environment variables. Use the `/update_runtime_config` api to update the config file. The currently supported types in the config file are `h2o_mojo` and `h2o_model`. `h2o_mojo` is preferred and requires that the mojo is stored as an artifact in MLFlow. `h2o_model` can be used when the mojo is not stored in MLFlow but it requires that the Runtime MCP have access to the H2O server used by MLFlow so that the model can be loaded into MLFlow and the mojo can be downloaded.

Calling the `/refresh` API on the Runtime MCP will, in addition to the standard `/refresh` functionality, download and load the models from MLFlow.

**Logging a mojo to MLFlow:** Below we give a minimal example showing how a mojo can be logged to MLFlow as part of the model logging process:
```python
# Import packages
from pathlib import Path
from h2o.estimators import H2OGradientBoostingEstimator

# Train the model

# Connect to H2O
h2o.init()

# Import the prostate dataset into H2O:
prostate = h2o.import_file("http://s3.amazonaws.com/h2o-public-test-data/smalldata/prostate/prostate.csv")

# Set the predictors and response; set the factors:
prostate["CAPSULE"] = prostate["CAPSULE"].asfactor()
predictors = ["ID","AGE","RACE","DPROS","DCAPS","PSA","VOL","GLEASON"]
response = "CAPSULE"

# Build and train the model:
pros_gbm = H2OGradientBoostingEstimator(nfolds=5,
                                        seed=1111,
                                        keep_cross_validation_predictions = True)
pros_gbm.train(x=predictors, y=response, training_frame=prostate)

# Eval performance:
perf = pros_gbm.model_performance()

# Download the mojo the be logged as an artifact to MLFlow
mojo_path = pros_gbm.download_mojo()

# Log the model to MLFlow

# Connect to MLFlow
mlflow.set_tracking_uri(uri="http://localhost:8085")

# Create a new MLflow Experiment
mlflow.set_experiment("MLflow Quickstart")

# Start an MLflow run
with mlflow.start_run():
    # Log the hyperparameters
    mlflow.log_param("nfolds", 5)
    mlflow.log_param("seed", 1111)

    # Log the loss metric
    mlflow.log_metric("accuracy",perf.accuracy()[0][1])

    # Log the mojo for scoring
    mlflow.log_artifact(Path(mojo_path))
    
    # Log the model, which inherits the parameters and metric
    model_info = mlflow.h2o.log_model(
        h2o_model=pros_gbm,
        name="prostate_model",
        registered_model_name="tracking-quickstart"
    )

    # Set a tag that we can use to remind ourselves what this model was for
    mlflow.set_logged_model_tags(
        model_info.model_id, {"Training Info": "Basic GBM model for prostate data"}
    )
```
    When viewing the model in MLFlow you should now be able to see the mojo as well as the standard H2O artifacts.

---

## Plugins

Source: `docs/runtime/plugins/index.mdx`
URL: https://ecosystem.ai/docs/runtime/plugins
Summary: Plugins

# Plugins

Plugins are a powerful way to extend the functionality of the ecosystem.Ai platform. You can use plugins to add new features, customize the platform, and integrate with other tools and services. This section provides an overview of the plugin system and the different types of plugins you can create and use.

## Why do you need plugins?

Runtime plugins are used to extend scoring functionality by adding custom scoring logic. This allows you to customize the scoring process to meet your specific needs and requirements. Plugins can be used to add new scoring algorithms, preprocessors, postprocessors, and other components to the scoring pipeline.

The following default plugins are available in the ecosystem.Ai platform:
- **Pre-predict** plugin: This plugin is used to preprocess input data before it is passed to the predictor.
- **Post-predict** plugin: This plugin is used to postprocess the output of the predictor before it is returned to the client.
- **Business Logic** plugin: This plugin is used to define custom business logic that can be used to make decisions based on the output of the predictor.
- **API** plugin: This plugin is used to expose custom endpoints that can be called by external services.
- **Algorithm** plugin: This plugin is used to define custom scoring algorithms that can be used by the predictor.

## Development

You can develop plugins in a number of different ways:
- **Workbench**: Use the Workbench to develop, test, and deploy plugins in a local environment. You can configure a full build and deployment pipeline interface.
- **IntelliJ IDEA**: Use IntelliJ IDEA ecosystem.Ai plugin to develop, test, and deploy plugins in a local environment. Use the associated git repo. Follow the [user guide](/docs/user_guides/runtime_plugin_development) to set up your IntelliJ environment.

---

## Post-Predict Plugins

Source: `docs/runtime/plugins/postpredict.mdx`
URL: https://ecosystem.ai/docs/runtime/plugins/postpredict
Summary: Post-Predict Plugins

# Post-Predict

Post-predict plugins are used to postprocess the output of the predictor before it is returned to the client. This allows you to customize the output of the predictor to meet your specific needs and requirements. Post-predict plugins can be used to add new postprocessing algorithms, formatters, and other components to the scoring pipeline.

## Post-Predict Plugins

- **[Post-Predict Plugins](/docs/runtime/postpredict/)** plugin: This plugin is used to format the output of the predictor before it is returned to the client.

---

## Pre-Predict Plugins

Source: `docs/runtime/plugins/prepredict.mdx`
URL: https://ecosystem.ai/docs/runtime/plugins/prepredict
Summary: Pre-Predict Plugins

# Pre-Predict Plugins

Pre-predict plugins are used to preprocess input data before it is passed to the predictor. This allows you to customize the input data to meet your specific needs and requirements. Pre-predict plugins can be used to add new preprocessing algorithms, validators, and other components to the scoring pipeline.

## Pre-Predict Plugins

- **[Pre-Predict Plugins](/docs/runtime/prepredict/)** plugin: This plugin is used to format the input of the predictor before it is passed into the overall process.

---

## Post-Predict Plugins

Source: `docs/runtime/postpredict/index.mdx`
URL: https://ecosystem.ai/docs/runtime/postpredict
Summary: Post-Predict Plugins

# Post-Predict Plugins

Post-predict plugins are used to postprocess the output of the predictor before it is returned to the client. This allows you to customize the output of the predictor to meet your specific needs and requirements. Post-predict plugins can be used to add new postprocessing algorithms, formatters, and other components to the scoring pipeline.

The following default post-predict plugins are available in the ecosystem.Ai platform:
- **[Post Score Basic](/docs/runtime/postpredict/postscorebasic)** plugin: This plugin is used to format the output of the predictor before it is returned to the client.
- **[Post Score Dynamic Engagement](/docs/runtime/postpredict/platformdynamicengagement)** plugin: This plugin is used with the dynamic configurations for dynamic recommenders, experimentation, real-time convergence models etc.
- **[Post Score Recommender Offers](/docs/runtime/postpredict/postscorerecommenderoffers)** plugin: This plugin is used as a default recommender system to rank and filter product offers based on the model's predicted probabilities.
- **[Post Score Network](/docs/runtime/postpredict/postscorenetwork)** plugin: This plugin is used as a default for the network runtime.

---

## Platform Dynamic Engagement Plugin

Source: `docs/runtime/postpredict/platformdynamicengagement.mdx`
URL: https://ecosystem.ai/docs/runtime/postpredict/platformdynamicengagement
Summary: Platform Dynamic Engagement Plugin

# Platform Dynamic Engagement Plugin

The Platform Dynamic Engagement plugin is used to format the output of a Dynamic Interaction predictor before it is returned to the client. This plugin is responsible for converting the predictor's output into a format that can be easily consumed by the client. The Platform Dynamic Engagement plugin is a default post-predict plugin that is available in the ecosystem.Ai platform and can be extended to create custom post-scoring logic plugins.
 
## How does it work?

The Platform Dynamic Engagement plugin takes the output of the predictor and formats it into a JSON object. The JSON object contains the predictor's output along with any additional metadata that is required by the client. The plugin can be customized to add additional post-scoring logic to the predictor's output. This can include filtering the output, sorting the output, or adding additional information to the output.

## Java Code

The class `PlatformDynamicEngagement` extends the `PostScoreSuper` class, which provides functionality that can be used across different post-scoring plugins. 

The `getPostPredict()` method accepts a JSONObject with prediction results, parameters for the scoring operation, a session object for a Cassandra database, and an array of preloaded models. The method then processes the results and prediction parameters, including extracting features, evaluating offer eligibility and constructing an array of modified offer scores.

After processing, the results are sorted based on score and the top scores are retrieved. There is also a time tracking operation which logs the time taken to execute the method.

A `Logger` object is initialized for logging purposes. Logging can be done at a variety of levels, including ERROR, WARN, INFO and DEBUG. It is recommended to add detailed logging at the DEBUG level to assist with troubleshooting once the plugin is deployed.

The following is the java implementation of the Platform Dynamic Engagement plugin:

```java
package com.ecosystem.plugin.customer;

/**
 * ECOSYSTEM.AI INTERNAL PLATFORM SCORING
 * Use this class to score with dynamic sampling configurations. This class is configured to work with no model.
 */
public class PlatformDynamicEngagement extends PostScoreSuper {
	private static final Logger LOGGER = LogManager.getLogger(PlatformDynamicEngagement.class.getName());

	public PlatformDynamicEngagement() {
	}

	/**
	 * Pre-post predict logic
	 */
	public void getPostPredict () {
	}

	/**
	 * getPostPredict
	 * Example params:
	 *    {"contextual_variable_one":"Easy Income Gold|Thin|Senior", "contextual_variable_two":"", "batch": true}
	 *
	 * @param predictModelMojoResult Result from scoring
	 * @param params                 Params carried from input
	 * @param session                Session variable for Cassandra
	 * @return JSONObject result to further post-scoring logic
	 */
	public static JSONObject getPostPredict(JSONObject predictModelMojoResult, JSONObject params, CqlSession session, EasyPredictModelWrapper[] models) {
		double startTimePost = System.nanoTime();
		try {
			/** Setup JSON objects for specific prediction case */
			JSONObject featuresObj = predictModelMojoResult.getJSONObject("featuresObj");
			//JSONObject domainsProbabilityObj = predictModelMojoResult.getJSONObject("domainsProbabilityObj");

			JSONObject offerMatrixWithKey = new JSONObject();
			boolean om = false;
			if (params.has("offerMatrixWithKey")) {
				offerMatrixWithKey = params.getJSONObject("offerMatrixWithKey");
				om = true;
			} else {
				LOGGER.info("No Offer Matrix with key configured, using generated defaults.");
			}

			JSONObject work = params.getJSONObject("in_params");

			/***************************************************************************************************/
			/** Standardized approach to access dynamic datasets in plugin.
			 * The options array is the data set/feature_store that's keeping track of the dynamic changes.
			 * The optionParams is the parameter set that will influence the real-time behavior through param changes.
			 */
			/***************************************************************************************************/
			JSONArray options = getOptions(params);
			JSONObject optionParams = getOptionsParams(params);
			JSONObject locations = getLocations(params);

			JSONObject contextual_variables = optionParams.getJSONObject("contextual_variables");
			JSONObject randomisation = optionParams.getJSONObject("randomisation");

			/***************************************************************************************************/
			/** Test if contextual variable is coming via api or feature store: API takes preference... */
			if (!work.has("contextual_variable_one")) {
				if (featuresObj.has(contextual_variables.getString("contextual_variable_one_name")))
					work.put("contextual_variable_one", featuresObj.get(contextual_variables.getString("contextual_variable_one_name")));
				else
					work.put("contextual_variable_one", "");
			}
			if (!work.has("contextual_variable_two")) {
				if (featuresObj.has(contextual_variables.getString("contextual_variable_two_name")))
					work.put("contextual_variable_two", featuresObj.get(contextual_variables.getString("contextual_variable_two_name")));
				else
					work.put("contextual_variable_two", "");
			}
			/***************************************************************************************************/

			JSONArray finalOffers = new JSONArray();
			int offerIndex = 0;
			int explore;
			int[] optionsSequence = generateOptionsSequence(options.length(), options.length());
			String contextual_variable_one = String.valueOf(work.get("contextual_variable_one"));
			String contextual_variable_two = String.valueOf(work.get("contextual_variable_two"));

			for(int j : optionsSequence) {
				if (j > params.getInt("resultcount")) break;

				JSONObject option = options.getJSONObject(j);

				/** Skip the item if offer matrix does not contain option */
				/*
				if (!offerMatrixWithKey.has(option.getString("optionKey")))
					continue;
				 */
				/** GENERATE DEFAULT IF OPTION IS NOT IN OFFER MATRIX! */
				String offer = option.getString("optionKey");
				if (!offerMatrixWithKey.has(option.getString("optionKey"))) {
					JSONObject singleOffer = defaultOffer(offer);
					offerMatrixWithKey.put(option.getString("optionKey"), singleOffer);
					LOGGER.warn("BEWARE, DEFAULT OFFER GENERATED. IN OPTIONS STORE AND NOT OFFER MATRIX: " + option.getString("optionKey"));
				}

				/** Test eligibility TODO: CREATE A SEPARATE SUPERCLASS WITH THIS IN IT! */
				if (locations != null) {
					try {
						if (locations.getJSONObject(offer).has("open_times")) {
							String day = params.getJSONObject("in_params").getString("day");
							String time = params.getJSONObject("in_params").getString("time");

							if (locations.getJSONObject(offer).getJSONObject("open_times").has(day)) {
								if (locations.getJSONObject(offer).getJSONObject("open_times").getJSONObject(day).has("opening1") &&
										locations.getJSONObject(offer).getJSONObject("open_times").getJSONObject(day).has("closing1")) {

									LOGGER.info("It's Open!");
									if (!locations.getJSONObject(offer).getJSONObject("open_times").getString("operatingStatus").equals("operating"))
										continue;

									SimpleDateFormat sdf = new SimpleDateFormat("hh:mm a");

									Date opening = sdf.parse(locations.getJSONObject(offer).getJSONObject("open_times").getJSONObject(day).getString("opening1"));
									Date closing = sdf.parse(locations.getJSONObject(offer).getJSONObject("open_times").getJSONObject(day).getString("closing1"));
									if (closing.before(opening)) {
										Calendar cal = Calendar.getInstance();
										cal.setTime(closing);
										cal.add(Calendar.DATE, 1);
										closing = cal.getTime();
									}
									Date time_now = sdf.parse(time);
									if (time_now.after(opening) && time_now.before(closing)) {
										LOGGER.info("It's Open!");
									} else {
										continue;
									}

								}
							}
						}
					} catch (Exception e) {
						LOGGER.info("\n\n" + offer + " -> Oh no, there's something wrong with the time range check, and will be ignored! use api params: {day:'monday', 'time': '11.00 AM'} " + e.getMessage() + "\n\n");
					}
				}

				String contextual_variable_one_Option = "";
				if (option.has("contextual_variable_one") && !contextual_variable_one.equals(""))
					contextual_variable_one_Option = String.valueOf(option.get("contextual_variable_one"));
				String contextual_variable_two_Option = "";
				if (option.has("contextual_variable_two") && !contextual_variable_two.equals(""))
					contextual_variable_two_Option = String.valueOf(option.get("contextual_variable_two"));

				if (contextual_variable_one_Option.equals(contextual_variable_one) && contextual_variable_two_Option.equals(contextual_variable_two)) {

					double alpha = (double) DataTypeConversions.getDoubleFromIntLong(option.get("alpha"));
					double beta = (double) DataTypeConversions.getDoubleFromIntLong(option.get("beta"));
					double accuracy = 0.001;
					if (option.has("accuracy"))
						accuracy = (double) DataTypeConversions.getDoubleFromIntLong(option.get("accuracy"));

					/***************************************************************************************************/
					/* r IS THE RANDOMIZED SCORE VALUE */
					double p = 0.0;
					double arm_reward = 0.001;

					explore = 0;
					if (option.has("arm_reward")) {
						p = (double) option.get("arm_reward");
					} else {
						p = arm_reward;
					}
					arm_reward = p;

					/** Check if values are correct */
					if (p != p) p = 0.0;
					if (alpha != alpha) alpha = 0.0;
					if (beta != beta) beta = 0.0;
					if (arm_reward != arm_reward) arm_reward = 0.0;
					/***************************************************************************************************/

					JSONObject singleOffer = new JSONObject();
					double offer_value = 1.0;
					double offer_cost = 1.0;
					double modified_offer_score = p;
					if (om) {
						if (offerMatrixWithKey.has(offer)) {

							singleOffer = offerMatrixWithKey.getJSONObject(offer);

							if (singleOffer.has("offer_price"))
								offer_value = DataTypeConversions.getDouble(singleOffer, "offer_price");
							if (singleOffer.has("price"))
								offer_value = DataTypeConversions.getDouble(singleOffer, "price");

							if (singleOffer.has("offer_cost"))
								offer_cost = singleOffer.getDouble("offer_cost");
							if (singleOffer.has("cost"))
								offer_cost = singleOffer.getDouble("cost");

							modified_offer_score = p * ((double) offer_value - offer_cost);
						}
					}

					JSONObject finalOffersObject = new JSONObject();

					finalOffersObject.put("offer", offer);
					finalOffersObject.put("offer_name", offer);
					finalOffersObject.put("offer_name_desc", option.getString("option"));

					/* process final */
					finalOffersObject.put("score", p);
					finalOffersObject.put("final_score", p);
					finalOffersObject.put("modified_offer_score", modified_offer_score);
					finalOffersObject.put("offer_value", offer_value);
					finalOffersObject.put("price", offer_value);
					finalOffersObject.put("cost", offer_cost);

					finalOffersObject.put("p", p);
					if (option.has("contextual_variable_one"))
						finalOffersObject.put("contextual_variable_one", option.getString("contextual_variable_one"));
					else
						finalOffersObject.put("contextual_variable_one", "");

					if (option.has("contextual_variable_two"))
						finalOffersObject.put("contextual_variable_two", option.getString("contextual_variable_two"));
					else
						finalOffersObject.put("contextual_variable_two", "");

					finalOffersObject.put("alpha", alpha);
					finalOffersObject.put("beta", beta);
					finalOffersObject.put("weighting", (double) DataTypeConversions.getDoubleFromIntLong(option.get("weighting")));
					finalOffersObject.put("explore", explore);
					finalOffersObject.put("uuid", params.get("uuid"));
					finalOffersObject.put("arm_reward", arm_reward);

					/* Debugging variables */
					if (!option.has("expected_takeup"))
						finalOffersObject.put("expected_takeup", -1.0);
					else
						finalOffersObject.put("expected_takeup", (double) DataTypeConversions.getDoubleFromIntLong(option.get("expected_takeup")));

					if (!option.has("propensity"))
						finalOffersObject.put("propensity", -1.0);
					else
						finalOffersObject.put("propensity", (double) DataTypeConversions.getDoubleFromIntLong(option.get("propensity")));

					if (!option.has("epsilon_nominated"))
						finalOffersObject.put("epsilon_nominated", -1.0);
					else
						finalOffersObject.put("epsilon_nominated", (double) DataTypeConversions.getDoubleFromIntLong(option.get("epsilon_nominated")));

					finalOffers.put(offerIndex, finalOffersObject);
					offerIndex = offerIndex + 1;
				}
			}

			JSONArray sortJsonArray = JSONArraySort.sortArray(finalOffers, "arm_reward", "double", "d");
			predictModelMojoResult.put("final_result", sortJsonArray);

			predictModelMojoResult = getTopScores(params, predictModelMojoResult);

			double endTimePost = System.nanoTime();
			LOGGER.info("PlatformDynamicEngagement:I001: time in ms: ".concat( String.valueOf((endTimePost - startTimePost) / 1000000) ));

		} catch (Exception e) {
			e.printStackTrace();
			LOGGER.error(e);
		}

		return predictModelMojoResult;

	}

}

```

---

## Post-Score Basic Plugin

Source: `docs/runtime/postpredict/postscorebasic.mdx`
URL: https://ecosystem.ai/docs/runtime/postpredict/postscorebasic
Summary: Post-Score Basic Plugin

# Post-Score Basic Plugin

The Post Score Basic plugin is used to format the output of the predictor before it is returned to the client. This plugin is responsible for converting the predictor's output into a format that can be easily consumed by the client. The Post Score Basic plugin is a default post-predict plugin that is available in the ecosystem.Ai platform.

## How does it work?

The Post Score Basic plugin takes the output of the predictor and formats it into a JSON object. The JSON object contains the predictor's output along with any additional metadata that is required by the client. The Post Score Basic plugin is a simple plugin that is designed to be used in conjunction with other post-predict plugins to customize the output of the predictor.

## Java Code

This Java code belongs to a custom plugin extending the abilities of a runtime engine for 'post-scoring' tasks in a predictive modelling environment. The package path suggests that it could be a part of an ecosystem or AI subsystem.

The class `PostScoreBasic` extends a `PostScoreSuper` class, which likely provides basic functionality for all subclasses and this subclass extends or customizes that behavior. The structure and comments of this class suggest that it provides additional logic after a predictive model has made its predictions (i.e., "post-scoring").

The `getPostPredict()` method accepts a JSONObject with prediction results, parameters for the scoring operation, a session object for a Cassandra database, and an array of preloaded models. The method then processes the results and prediction parameters, including extracting features, evaluating offer eligibility and constructing an array of modified offer scores.

It does some checking and manipulation of the input data, (e.g. a whitelist for offers, a preload corpora), different scoring of offers based on different model types (clustering, anomaly detection, regression, etc.) and inserts additional information into a JSONObject.

After processing, the results are sorted based on score and the top scores are retrieved. There is also a time tracking operation which logs the time taken to execute the method.

The code is designed to handle various types of predictive models and use their predictions in a post-processing stage to create ranked lists of offers to return as a final result.

Apart from the processing method, an empty constructor and an empty `getPostPredict` method (presumably meant to be overwritten) has been declared. A `Logger` object has been initialized for logging purposes.

The following is an example of the Post Score Basic plugin implemented in Java:

```java
package com.ecosystem.plugin.customer;

/**
 * This the ecosystem/Ai generic post-score template.
 * Customer plugin for specialized logic to be added to the runtime engine.
 * This class is loaded through the plugin loader system.
 */
public class PostScoreBasic extends PostScoreSuper {
	private static final Logger LOGGER = LogManager.getLogger(PostScoreBasic.class.getName());

	public PostScoreBasic() {
	}

	/**
	 * Pre-post predict logic
	 */
	public void getPostPredict () {
	}

	/**
	 * getPostPredict
	 *
	 * @param predictModelMojoResult Result from scoring
	 * @param params                 Params carried from input
	 * @param session                Session variable for Cassandra
	 * @param models 				 Preloaded H2O Models
	 * @return JSONObject result to further post-scoring logic
	 */
	public static JSONObject getPostPredict(JSONObject predictModelMojoResult, JSONObject params, CqlSession session, EasyPredictModelWrapper[] models) {
		double startTimePost = System.nanoTime();
		try {
			/* Setup JSON objects for specific prediction case */
			JSONObject featuresObj = predictModelMojoResult.getJSONObject("featuresObj");
			JSONObject domainsProbabilityObj = new JSONObject();
			if (predictModelMojoResult.has("domainsProbabilityObj"))
				domainsProbabilityObj = predictModelMojoResult.getJSONObject("domainsProbabilityObj");

			/* If whitelist settings then only allow offers on list */
			boolean whitelist = false;
			ArrayList<String> offerWhiteList = new ArrayList<>();
			if (params.has("whitelist")) {
				if (!params.getJSONObject("whitelist").isEmpty()) {
					offerWhiteList = (ArrayList<String>) params.getJSONObject("whitelist").get("whitelist");
					params.put("resultcount", offerWhiteList.size());
					whitelist = DataTypeConversions.getBooleanFromString(params.getJSONObject("whitelist").get("logicin"));
				}
			}

			if (params.has("preloadCorpora")) {
				if (params.getJSONObject("preloadCorpora").has("network")) {
					JSONObject a = params.getJSONObject("preloadCorpora");
					JSONObject preloadCorpora = a.getJSONObject("network");
				}
			}

			JSONArray finalOffers = new JSONArray();
			int resultcount = (int) params.get("resultcount");
			/* For each offer in offer matrix determine eligibility */
			/* get selector field from properties: predictor.selector.setup */
			// String s = new JSONObject(settings.getSelectorSetup()).getJSONObject("lookup").getString("fields");

			/** This loop can be used to add number of offers/options to return result */
			JSONObject finalOffersObject = new JSONObject();
			int offerIndex = 0;
			for (int i = 0; i < resultcount; i++) {

				/** Model type based approaches */
				String type = "";
				boolean explainability = false;
				// LOGGER.info("predictModelMojoResult: " + predictModelMojoResult.toString());
				if (predictModelMojoResult.get("type").getClass().getName().toLowerCase().contains("array")) {
					type = predictModelMojoResult
							.getJSONArray("type")
							.get(0)
							.toString().toLowerCase().trim();
					if (predictModelMojoResult.has("shapley_contributions"))
						explainability = true;
				} else {
					type = ((String) predictModelMojoResult.get("type")).toLowerCase().trim();
				}

				/** Offer name, defaults to type (replace with offer matrix etc) */
				if (featuresObj.has("offer_name_final"))
					finalOffersObject.put("offer_name", featuresObj.get("offer_name_final"));
				else
					finalOffersObject.put("offer_name", type);

				if (featuresObj.has("offer"))
					finalOffersObject.put("offer", featuresObj.get("offer"));
				else
					finalOffersObject.put("offer", type);

				if (featuresObj.has("offer_id"))
					finalOffersObject.put("offer", featuresObj.get("offer_id"));
				else
					finalOffersObject.put("offer_id", type);

				if (featuresObj.has("price"))
					finalOffersObject.put("price", featuresObj.get("price"));
				else
					finalOffersObject.put("price", 1.0);

				if (featuresObj.has("cost"))
					finalOffersObject.put("cost", featuresObj.get("cost"));
				else
					finalOffersObject.put("cost", 1.0);

				/** Score based on model type */
				if (type.contains("clustering")) {
					finalOffersObject.put("cluster", predictModelMojoResult.getJSONArray("cluster").get(0));
					finalOffersObject.put("score", DataTypeConversions.getDouble(domainsProbabilityObj, "score"));
					finalOffersObject.put("modified_offer_score", DataTypeConversions.getDouble(domainsProbabilityObj, "score"));
				} else if (type.contains("anomalydetection")) {
					double[] score = (double[]) domainsProbabilityObj.get("score");
					finalOffersObject.put("score", score[0]);
					finalOffersObject.put("modified_offer_score", score[0]);
				} else if (type.contains("regression")) {
					Object score = predictModelMojoResult.getJSONArray("value").get(0);
					finalOffersObject.put("score", score);
					finalOffersObject.put("modified_offer_score", score);
				} else if (type.contains("multinomial")) {
					Object probability = predictModelMojoResult.getJSONArray("probability").get(0);
					Object label = null;
					try {
						label = predictModelMojoResult.getJSONArray("label").get(0);
					} catch (Exception e) {
						LOGGER.error("PostScoreBasic:getPostPredict:E001: Error relates to scoring your model. The model wasn't loaded or is not accessible.");
						e.printStackTrace();
					}
					Object response = predictModelMojoResult.getJSONArray("response").get(0);
					finalOffersObject.put("score", probability);
					finalOffersObject.put("modified_offer_score", probability);
					finalOffersObject.put("offer", label);
					finalOffersObject.put("offer_name", response);
				} else if (type.contains("coxph")) {
					Object score = predictModelMojoResult.getJSONArray("value").get(0);
					finalOffersObject.put("score", score);
					finalOffersObject.put("modified_offer_score", score);
				} else if (type.contains("wordembedding")) {
					float[] score = (float[]) predictModelMojoResult.getJSONArray("_text_word2vec").get(0);
					finalOffersObject.put("score", Double.valueOf(String.valueOf(score[0])));
					finalOffersObject.put("embedding", score);
					finalOffersObject.put("modified_offer_score", 0.0);
				} else if (type.contains("deeplearning")) {
					/** From TensorFlow or PyTorch */
					Object score = domainsProbabilityObj.getDouble("1");
					finalOffersObject.put("score", score);
					finalOffersObject.put("modified_offer_score", score);
					Object response = predictModelMojoResult.getJSONArray("response").get(0);
					finalOffersObject.put("offer_name", response);
				} else if (type.contains("empty score")) {
					/** This is typically used for data lookup only, obtain values from feature store! */
					if (featuresObj.has("offer_name"))
						finalOffersObject.put("offer_name", featuresObj.get("offer_name"));

					if (featuresObj.has("offer"))
						finalOffersObject.put("offer", featuresObj.get("offer"));

					if (featuresObj.has("score"))
						finalOffersObject.put("score", Double.valueOf(String.valueOf(featuresObj.get("score"))));
					else
						finalOffersObject.put("score", 1.0);

					if (featuresObj.has("modified_offer_score"))
						finalOffersObject.put("modified_offer_score", Double.valueOf(String.valueOf(featuresObj.get("modified_offer_score"))));
					else
						finalOffersObject.put("modified_offer_score", 1.0);

					if (featuresObj.has("cost"))
						finalOffersObject.put("cost", Double.valueOf(String.valueOf(featuresObj.get("cost"))));
					else
						finalOffersObject.put("cost", 0.0);

				} else {
					finalOffersObject.put("score", 1.0);
					finalOffersObject.put("modified_offer_score", 1.0);
				}

				finalOffersObject.put("offer_details", domainsProbabilityObj);
				if (explainability) {
					finalOffersObject.put("shapley_contributions", predictModelMojoResult.get("shapley_contributions"));
					finalOffersObject.put("shapley_contributions_names", predictModelMojoResult.get("shapley_contributions_names"));
				}

				/** Default value, could be replaced by offer matrix or feature store */
				double offer_value = 1.0;
				finalOffersObject.put("offer_value", offer_value);
				finalOffersObject.put("uuid", params.get("uuid"));

				/** Add other structures to the final result */
				finalOffersObject.put("offer_matrix", featuresObj);

				/** Budget processing option, if it's set in the properties */
				if (settings.getPredictorOfferBudget() != null) {
					JSONObject budgetItem = obtainBudget(featuresObj, params.getJSONObject("featuresObj"), offer_value);
					double budgetSpendLimit = budgetItem.getDouble("spend_limit");
					finalOffersObject.put("spend_limit", budgetSpendLimit);
				}

				/** Prepare offer array before final sorting */
				finalOffers.put(offerIndex, finalOffersObject);
				offerIndex = offerIndex + 1;
			}

			/** Sort final offer list based on score */
			JSONArray sortJsonArray = JSONArraySort.sortArray(finalOffers, "score", "double", "d");
			predictModelMojoResult.put("final_result", sortJsonArray);

		} catch (Exception e) {
			LOGGER.error(e);
		}

		/** Get top scores and test for explore/exploit randomization */
		predictModelMojoResult = getTopScores(params, predictModelMojoResult);

		double endTimePost = System.nanoTime();
		LOGGER.info("getPostPredict:I001: execution time in ms: ".concat( String.valueOf((endTimePost - startTimePost) / 1000000) ));
		return predictModelMojoResult;
	}

}

```

---

## Post Score Network Plugin

Source: `docs/runtime/postpredict/postscorenetwork.mdx`
URL: https://ecosystem.ai/docs/runtime/postpredict/postscorenetwork
Summary: Post Score Network Plugin

# Post Score Network Plugin

The Post Score Network plugin is used to format the responses collected by a network runtime before they are returned to the client.

## Java Code

```java
package com.ecosystem.plugin.customer;

/**
 */
public class PostScoreNetwork extends PostScoreNetworkSuper {

    private static final Logger LOGGER = LogManager.getLogger(PostScoreNetwork.class.getName());

    public PostScoreNetwork() {
    }

    /**
     * Pre-post predict logic
     */
    public void getPostPredict () {
    }

    /**
     * getPostPredict
     *
     * @param predictModelMojoResult Result from scoring
     * @param params                 Params carried from input
     * @param session                Session variable for Cassandra
     * @param models                  Preloaded H2O Models
     * @return JSONObject result to further post-scoring logic
     */
    public static JSONObject getPostPredict(JSONObject predictModelMojoResult, JSONObject params, CqlSession session, EasyPredictModelWrapper[] models) {
        double startTimePost = System.nanoTime();
        String type = "";
        try {
            /* Setup JSON objects for specific prediction case */
            JSONObject featuresObj = predictModelMojoResult.getJSONObject("featuresObj");
            System.out.println("\n>>> " + featuresObj.toString());

            /** Final offer list based on score */
            JSONArray sortJsonArray = new JSONArray();

            /** Execute network based on settings in corpora */
            /**
             * Configure a network of client pulse responders by changing configuration based on lookup, scoring and
             * other criteria. Ensure that the lookup settings coordinate and that defaults have been set or removed.
             * Example, if there's a customer, or other settings in the __network collection, it will use those.
             * If you want customer to go straight through, then remove that default.
             *
             * Additional corpora settings in project:
             * [
             * {name:'network',database:'mongodb',db:'master',table:'bank_full_1__network', type:'static', key:'value' },
             * {name:'network_config',database:'mongodb',db:'master',table:'bank_full_1__network_config', type:'static', key:'name' }
             * ]
             * Add this line to "Additional Corpora" in your project:
             * [{name:'network',database:'mongodb',db:'master',table:'bank_full_1__network', type:'static', key:'value' },{name:'network_config',database:'mongodb',db:'master',table:'bank_full_1__network_config', type:'static', key:'name' }]
             *
             * bank_full_1__network_config, ensure that this document contains this: "name": "network_config":
             * {
             *   "switch_key": "marital",
             *   "name": "network_config"
             *   "type": "model_selector",
             * }
             *
             *
             * bank_full_1__network, all options will be setup here. Ensure that "value": "" contains a valid value as per switch_key:
             * {
             *   "numberoffers": 4,
             *   "subcampaign": "recommender_dynamic_bayes",
             *   "channel": "app",
             *   "campaign": "recommender_dynamic_bayes",
             *   "params": "{}",
             *   "value": "married",
             *   "userid": "ecosystem_network",
             *   "url": "http://customer.ecosystem.ai:8091",
             *   "customer": "281db655-d667-4671-a715-8402c29d7d11"
             * }
             */

            params = handlePreloadCorpora(params, featuresObj);
            sortJsonArray = params.getJSONArray("sortJsonArray");
            predictModelMojoResult.put("final_result", sortJsonArray);

        } catch (Exception e) {
            LOGGER.error("PostScoreNetwork:E001: " + e);
        }

        /** Get top scores and test for explore/exploit randomization */
        type = getType(params);
        if (!type.equals("lookup_passthrough")) {
            predictModelMojoResult = getTopScores(params, predictModelMojoResult);
        }
        //predictModelMojoResult = getTopScores(params, predictModelMojoResult);

        double endTimePost = System.nanoTime();
        LOGGER.info("PostScoreNetwork:I001: execution time in ms: ".concat( String.valueOf((endTimePost - startTimePost) / 1000000) ));
        return predictModelMojoResult;
    }

}

```

---

## Post-Score Recommender Plugin

Source: `docs/runtime/postpredict/postscorerecommenderoffers.mdx`
URL: https://ecosystem.ai/docs/runtime/postpredict/postscorerecommenderoffers
Summary: Post-Score Recommender Plugin

# Post-Score Recommender Offers Plugin

The Post Score Recommender plugin is used to customize the output of a predictor by formatting the output into a JSON object. This plugin is designed to be used in conjunction with other post-predict plugins to customize the output of the predictor. The Post Score Recommender plugin is a simple plugin that is designed to be used in conjunction with other post-predict plugins to customize the output of the predictor.

## How does it work?

The Post Score Recommender Offer plugin loops over the eligible offers as per the offer matrix associated with the project. Note that this Plugin requires an Offer Matrix to be configured with a [specific data format](/docs/configuration/data/meta).

## Java Code

This Java code follows the default standard as outlined in the [Basic](/docs/runtime/postpredict/postscorebasic) post score plugin. Note that this class obtains the Offer Matrix from the pre-defined loaded data as defined here: ``` offerMatrix = params.getJSONArray("offerMatrix");```.

This recommender system ranks and filters product offers based on the model's predicted probabilities. It is designed for use with a single predictive model trained on ```offer_id``` as the response column. The input offerMatrix is expected to contain all available offers, each with pricing details.

The key method, getPostPredict, processes the model's prediction output along with input parameters to:
- Retrieve probabilities per offer from model output.
- Match these probabilities against offer IDs or names from the input offer matrix.
- Compute a modified_offer_score using the formula: probability * (offer_value - offer_cost)
- Sort the offers based on this score.
- Return the top-ranked offers for further downstream usage.

The following is an example of the Post Score Recommender Offer plugin implemented in Java:

```java
package com.ecosystem.plugin.customer;

/**
 * recommender_smp - Single model for all products with Offermatrix
 * Multiclass classifier trained on offer_name response column, offer matrix need to have all the offers loaded with offer_price.
 */
public class PostScoreRecommenderOffers extends PostScoreSuper {
    private static final Logger LOGGER = LogManager.getLogger(PostScoreRecommenderOffers.class.getName());

    public PostScoreRecommenderOffers() {
    }

    /**
     * Pre-post predict logic
     */
    public void getPostPredict () {
    }

    /**
     * getPostPredict
     *
     * @param predictModelMojoResult Result from scoring
     * @param params                 Params carried from input
     * @param session                Session variable for Cassandra
     * @return JSONObject result to further post-scoring logic
     */
    public static JSONObject getPostPredict(JSONObject predictModelMojoResult, JSONObject params, CqlSession session, EasyPredictModelWrapper[] models) {
        double startTimePost = System.nanoTime();
        try {
            /** Value obtained via API params */
            JSONObject work = params.getJSONObject("in_params");
            double in_balance = 1000.0;
            if (work.has("in_balance"))
                in_balance = DataTypeConversions.getDouble(work, "in_balance");
            else
                LOGGER.info("getPostPredict:I001aa: No in_balance specified, default used. (1000.00)");

            JSONArray sortJsonArray = new JSONArray();
            JSONArray finalOffers = new JSONArray();

            /* Setup JSON objects for specific prediction case */
            JSONObject featuresObj = predictModelMojoResult.getJSONObject("featuresObj");
            if (predictModelMojoResult.has("ErrorMessage")) {
                LOGGER.error("getPostPredict:E001a:" + predictModelMojoResult.get("ErrorMessage"));
                return null;
            }

            JSONArray offerMatrix = new JSONArray();
            if (params.has("offerMatrix"))
                offerMatrix = params.getJSONArray("offerMatrix");

            JSONObject domainsProbabilityObj = predictModelMojoResult.getJSONObject("domainsProbabilityObj");
            try {
                String label = predictModelMojoResult.getJSONArray("label").getString(0).trim();
                JSONArray domains = predictModelMojoResult.getJSONArray("domains");
            } catch (Exception e) {
                LOGGER.error("getPostPredict:E001b:Model could not be loaded, check deployment path: " + e);
            }

            int offerIndex = 0;
            int explore = (int) params.get("explore");

            /** Select top items based on number of offers to present */
            for (int i = 0; i < offerMatrix.length(); i++) {
                JSONObject singleOffer = offerMatrix.getJSONObject(i);
                JSONObject finalOffersObject = new JSONObject();

                double offer_value = 1.0;
                if (singleOffer.has("offer_price"))
                    offer_value = DataTypeConversions.getDouble(singleOffer, "offer_price");
                if (singleOffer.has("price"))
                    offer_value = DataTypeConversions.getDouble(singleOffer, "price");

                double offer_cost = 1.0;
                if (singleOffer.has("offer_cost"))
                    offer_cost = singleOffer.getDouble("offer_cost");
                if (singleOffer.has("cost"))
                    offer_cost = singleOffer.getDouble("cost");

                String offer_id = "";
                String offer_name = "";
                if (domainsProbabilityObj.has(singleOffer.getString("offer_id").trim())) {
                    offer_id = singleOffer.getString("offer_id").trim();
                } else if (domainsProbabilityObj.has(singleOffer.getString("offer").trim())) {
                    offer_id = singleOffer.getString("offer").trim();
                } else if (domainsProbabilityObj.has(singleOffer.getString("offer_name").trim())) {
                    offer_name = singleOffer.getString("offer_name").trim();
                } else {
                    LOGGER.error("offerRecommender:E002-1: " + params.get("uuid") + " - Not available (offer_id, offer, offer_name from probabilities): " + singleOffer.getString("offer_name"));
                }

                double p = 0.0;
                if (domainsProbabilityObj.has(offer_id.trim())) {
                    offer_id = singleOffer.getString("offer_id").trim();
                    p = domainsProbabilityObj.getDouble(offer_id);
                } else {
                    LOGGER.error("offerRecommender:E002-1: " + params.get("uuid") + " - Not available: " + singleOffer.getString("offer_name"));
                }

                double modified_offer_score = 1.0;
                modified_offer_score = p * ((double) offer_value - offer_cost);

                finalOffersObject.put("offer", offer_id);
                finalOffersObject.put("offer_name", offer_name);
                finalOffersObject.put("offer_name_desc", offer_name + " - " + i);

                /** process final */
                // double p = domainsProbabilityObj.getDouble(label);
                finalOffersObject.put("score", p);
                finalOffersObject.put("final_score", p);
                finalOffersObject.put("modified_offer_score", modified_offer_score);
                finalOffersObject.put("offer_value", offer_value); // use value from offer matrix
                finalOffersObject.put("price", offer_value);
                finalOffersObject.put("cost", offer_cost);
                finalOffersObject.put("uuid", params.get("uuid"));

                finalOffersObject.put("p", p);
                finalOffersObject.put("explore", explore);

                /** Prepare array before final sort */
                finalOffers.put(offerIndex, finalOffersObject);
                offerIndex = offerIndex + 1;
            }

            sortJsonArray = JSONArraySort.sortArray(finalOffers, "modified_offer_score", "double", "d");
            predictModelMojoResult.put("final_result", sortJsonArray);

            /** Select the correct number of offers */
            predictModelMojoResult = getTopScores(params, predictModelMojoResult);

        } catch (Exception e) {
            e.printStackTrace();
            LOGGER.error(e);
        }

        /** Top scores from final_result */
        predictModelMojoResult = getTopScores(params, predictModelMojoResult);

        double endTimePost = System.nanoTime();
        LOGGER.info("PostScoreRecommenderOffers:I001: time in ms: ".concat( String.valueOf((endTimePost - startTimePost) / 1000000) ));

        return predictModelMojoResult;

    }

}
```

---

## Pre-Predict Plugins

Source: `docs/runtime/prepredict/index.mdx`
URL: https://ecosystem.ai/docs/runtime/prepredict
Summary: Pre-Predict Plugins

# Pre-Predict Plugins

Pre-predict plugins are used to preprocess the input data before it is sent to the predictor. This allows you to customize the input data to meet your specific needs and requirements. Pre-predict plugins can be used to add new preprocessing algorithms, formatters, and other components to the scoring pipeline.

The following default pre-predict plugins are available in the ecosystem.Ai platform:
- **[Pre-Score Basic](/docs/runtime/prepredict/prescorebasic)** plugin: This plugin is used to format the input of the predictor before it is returned to the client.
- **[Pre-Score Dynamic](/docs/runtime/prepredict/prescoredynamic)** plugin: This plugin is used to format the input of the predictor before it is returned to the client and also supports dynamic variables.
- **[Pre-Score Auto Date](/docs/runtime/prepredict/prepredictautodate)** plugin: This plugin is used to add the current date and time and related features to the assigned offer matrix.
- **[Pre-Score Lookup](/docs/runtime/prepredict/prescorelookup)** plugin: This plugin is used to add the current date and time and related features to the assigned offer matrix.

---

## Pre-Predict Auto Date

Source: `docs/runtime/prepredict/prepredictautodate.mdx`
URL: https://ecosystem.ai/docs/runtime/prepredict/prepredictautodate
Summary: Pre-Predict Auto Date Plugin

# Pre-predict Auto Date Plugin

This plugin is used to add the current date and time and related features to the assigned offer matrix. The scoring engine can then use these values or you can access values in post score plugins.

## How does it work?

Determine the current date and add all related values to the lookup feature store.

## Java Code

Refer to [pre score basic](/docs/runtime/prepredict/prescorebasic) for the basic Java operations:

```java
package com.ecosystem.plugin.customer;

/**
 * This is the same structure as PrePredictAutoDate where date and other defaults are added to the lookup store.
 */
public class PrePredictAutoDate {

    public static DateUtils dateUtils = new DateUtils();
    public static DateFormatConverter converter = new DateFormatConverter();

    public PrePredictAutoDate() {
    }

    /**
     * Pre-pre predict, after feature store is read and before dynamic and static corpora.
     */
    public void getPrePredict() {
    }

    /**
     * getPostPredict
     * @param params
     * @param session
     * @return
     */
    public static JSONObject getPrePredict(JSONObject params, CqlSession session) {

        /*
        Manipulate params that will be used by scoring and post-scoring
         */

        JSONObject featuresObj = params.getJSONObject("featuresObj");
        JSONArray input = params.getJSONArray("input");
        JSONArray value = params.getJSONArray("value");

        String format = "yyyy-MM-dd'T'HH:mm:ssZ";
        String todayDate = dateUtils.nowDate();

        // datetime: "2024-12-18T09:05:46.019Z"
        String mongoAttribute = "datetime";
        ZonedDateTime dateTxDate = convertStringToDate(todayDate, format);
        featuresObj.put(mongoAttribute + "_day", converter.getDayOfMonth(dateTxDate))
                    .put(mongoAttribute + "_day_of_week_no", converter.getDayOfWeek(dateTxDate))
                    .put(mongoAttribute + "_day_of_week", converter.getDayOfWeek(dateTxDate).toString())
                    .put(mongoAttribute + "_day_weekend", converter.isWeekend(dateTxDate) ? 1 : 0)
                    .put(mongoAttribute + "_month", converter.getMonthOfYear(dateTxDate).getValue())
                    .put(mongoAttribute + "_year", converter.getYear(dateTxDate))
                    .put(mongoAttribute + "_day_of_year", converter.getDayOfYear(dateTxDate))
                    .put(mongoAttribute + "_year_month",
                            converter.getYear(dateTxDate) + "-" +
                                    String.format("%02d", converter.getMonthOfYear(dateTxDate).getValue()))
                    .put(mongoAttribute + "_date", converter.getDate(dateTxDate))
                    .put(mongoAttribute + "_public_holiday", converter.isPublicHoliday(dateTxDate, ""))
                    .put(mongoAttribute + "_date_full", getFormattedDateTime(dateTxDate))
                    .put(mongoAttribute + "_epoch", converter.getEpoch(dateTxDate))
                    .put(mongoAttribute + "_week_of_month", converter.getWeekOfMonth(dateTxDate))
                    .put(mongoAttribute + "_week_of_year", converter.getWeekOfYear(dateTxDate))
                    .put(mongoAttribute + "_week_and_day",
                            converter.getWeekOfYear(dateTxDate) + "-" +
                                    converter.getDayOfWeekString(dateTxDate))
                    .put(mongoAttribute + "_time", converter.getTime(dateTxDate))
                    .put(mongoAttribute + "_hour", converter.getHour(dateTxDate))
                    .put(mongoAttribute + "_minutes", converter.getMinutes(dateTxDate))
                    .put(mongoAttribute + "_time_of_day", converter.getTimeOfDay(dateTxDate))
                    .put(mongoAttribute + "_time_eat", converter.getTimeOfDay(dateTxDate));

        for (String key : featuresObj.keySet()) {
            input.put(key);                       // Add key to input array
            value.put(featuresObj.get(key));     // Add corresponding value to values array
        }

        return params;

    }

}
```

---

## Pre-Score Basic Plugin

Source: `docs/runtime/prepredict/prescorebasic.mdx`
URL: https://ecosystem.ai/docs/runtime/prepredict/prescorebasic
Summary: Pre-Score Basic Plugin

# Pre-Score Basic Plugin

The Pre-Score Basic plugin is a plugin that is used to format the input of the predictor before it is returned to the client. The Pre-Score Basic plugin is a simple plugin that is designed to be used in conjunction with other pre-predict plugins to customize the input of the predictor.

## How does it work?

The Pre-Score Basic plugin is a simple plugin that is designed to be used in conjunction with other pre-predict plugins to customize the input of the predictor. The Pre-Score Basic plugin is a simple plugin that is designed to be used in conjunction with other pre-predict plugins to customize the input of the predictor.

## Java Code

This Java code represents a class named `PrePredictCustomer` residing in the package `com.ecosystem.plugin.customer`.

This class imports several libraries:
- `com.datastax.oss.driver.api.core.CqlSession` which is a Java driver from the Apache Cassandra database.
- `org.json.JSONObject` used to work with JSON objects.
- `java.util.List` used to work with lists.

The class contains a default constructor `PrePredictCustomer()` and two methods.

The first method `getPrePredict()` has no parameters and returns no value. According to the comments above the method, it's related to a pre-preprocess before certain operations and after the feature store is read. However, there is no implementation of this method in the code snippet you provided.

The second method, `getPrePredict(JSONObject params, CqlSession session)`, is a static method that takes two parameters: a JSONObject `params` and a `CqlSession` session. The method return the same JSONObject `params` it receives and there is a comment indicating that this method is used to manipulate the params that will be used by scoring and post-scoring. Just like the previous method, there is no implementation of this in the code snippet you provided.

The following is an example of the Post Score Basic plugin implemented in Java:

```java
package com.ecosystem.plugin.customer;

public class PrePredictCustomer {

    public PrePredictCustomer() {
    }

    /**
     * Pre-pre predict, after feature store is read and before dynamic and static corpora.
     */
    public void getPrePredict() {
    }

    /**
     * getPostPredict
     * @param params
     * @param session
     * @return
     */
    public static JSONObject getPrePredict(JSONObject params, CqlSession session) {

        /*
        Manipulate params that will be used by scoring and post-scoring
         */

        return params;
    }

}
```

---

## Pre-Score Dynamic Plugin

Source: `docs/runtime/prepredict/prescoredynamic.mdx`
URL: https://ecosystem.ai/docs/runtime/prepredict/prescoredynamic
Summary: Pre-Score Dynamic Plugin

# Pre-Score Dynamic Plugin

The Pre-Score Dynamic plugin is a plugin that is used to format the input to the predictor before when using Dynamic Interaction configurations. The Pre-Score Dynamic plugin is a default pre-predict plugin that is available in the ecosystem.Ai platform and can be extended to create custom pre-scoring logic plugins.

## How does it work?

The Pre-Score Dynamic plugin loads the Dynamic Interaction configurations. It then uses these configurations to set any Virtual Variables that have been configured and then adds the values of the contextual variables to the params object that is carried through the runtime process.

## Java Code

This Java class named `PreScoreDynamic` extends `PreScoreSuper`, which provides functionality that can be used across different pre-scoring plugins. 

Then, there is a static method named `getPrePredict(MongoClient mongoClient, JSONObject params, CqlSession session)`. This function takes three parameters: a `MongoClient` object (which is used to interact with a MongoDB database), a `JSONObject` object `params` (which is used the pass data through the runtime process), and a `CqlSession` object `session` (which provides a session for executing CQL commands on a Cassandra database.)

The function first checks if `lookupDatabase` is null, if it is then it returns the input `params` as is.

If `lookupDatabase` isn't null, then the function uses `getDynamicSettings` to get the Dynamic Interaction configuration from the MongoDB database using the locations for the configurations contained in `params`. It uses the configuration to populate the Virtual variables using `getVirtualVariables` and populate the contextual variables using `getPrepopulateContextualVariables`.

If any exception occurs during the execution of the function, it logs the error message (`LOGGER.error()`) including the UUID from the params and specifics of the failed dynamic parameters, also prints the stack trace of the exception (`e.printStackTrace();`). The function then returns the params object.

The following is an example of the Post Score Basic plugin implemented in Java:

```java
package com.ecosystem.plugin.customer;

/**
 * Add key/value to properties predictor.param.lookup to allow for contextual variable lookup:
 * dynamic_lookup: 'dynamic_lookup_just4u_v1'
 */
public class PreScoreDynamic extends PreScoreSuper {

    public PreScoreDynamic() throws Exception {

    }

    /**
     * Pre-pre predict
     */
    public void getPrePredict() {
    }

    /**
     * getPostPredict
     * example setting in properties file (look for dynamic_lookup: 'dynamic_lookup_just4u'):
     * predictor.param.lookup={predictor:'justforyou',mojo:1,database:'mongodb',db:'vodacom',table:'fs_score_all_estore_gsm_recommender_rel_1',dynamic_lookup: 'dynamic_lookup_just4u',lookup:{"value":123,"key":"msisdn"},result:{parm1:'field1', parm2:'field2'}}
     * @param params
     * @param session
     * @return
     */
    public static JSONObject getPrePredict(MongoClient mongoClient, JSONObject params, CqlSession session) throws IOException {

        if (lookupDatabase == null) return params;

        try {

            /** Get dynamic properties and add virtual variables to the feature store. */
            params = getDynamicSettings(mongoClient, params);
            params = getVirtualVariables(params);

            /** Pupulate contextual variables by default based on settings. */
            params = getPrepopulateContextualVariables(params);

        } catch (Exception e) {
            LOGGER.error("PreScoreDynamic:E001:UUID: " + params.get("uuid") + " Dynamic parameters failed: " + params.toString());
            e.printStackTrace();
        }

        return params;
    }

}
```

---

## Pre-Score Lookup Plugin

Source: `docs/runtime/prepredict/prescorelookup.mdx`
URL: https://ecosystem.ai/docs/runtime/prepredict/prescorelookup
Summary: Pre-Score Lookup Plugin

# Pre-Score Lookup Plugin
The Pre-Score Lookup plugin is a template plugin showing how a lookup to a MongoDB collection can be performed in the Pre Scoring Logic and stored in `params` to be used in the remainder of the runtime structure.

**Note:** The preferred approach to load data into the ecosystem runtime is using either [Parameters From Data Source](/docs/configuration/deployment/parameters) or [Additional Corpora](/docs/configuration/deployment/parameters). Explicit lookups coded in the Pre or Post Scoring logic should be avoided where possible.

## How does it work?
The Pre-Score Lookup plugin is passed the MongoDB connection. An aggregation pipeline can then be used to return the desired data. The result of the aggregation pipeline is then stored in `params`, making it available for use in the remainder of the runtime process. Data from the contacts and response logging collections can be accessed using the `getContactsLoggingDetails` and `getResponseLoggingDetails` functions respectively.

## Java Code
This Java class named `PreScoreLookup` extends `PreScoreSuper`, which provides functionality that can be used across different pre-scoring plugins. 

Then, there is a static method named `getPrePredict(MongoClient mongoClient, JSONObject params, CqlSession session)`. This function takes three parameters: a `MongoClient` object (which is used to interact with a MongoDB database), a `JSONObject` object `params` (which is used the pass data through the runtime process), and a `CqlSession` object `session` (which provides a session for executing CQL commands on a Cassandra database.)

The `getContactsLoggingDetails` and `getResponseLoggingDetails` functions can be used to access data from the contacts and responses logging collections respectively. These functions take the following arguments
```java
getContactsLoggingDetails(MongoClient mongoClient, JSONObject params, boolean customer_match, boolean predictor_match, boolean unwind_offers, String limit, String offer, String start_date)
```
- `mongoClient` is the mongo connection passed to `getPrePredict`
- `params` is the params object used to pass information through the runtime process
- `customer_match` is a boolean indicating whether the logs should be matched to the current customer number
- `predictor_match` is a boolean indicating whether the logs should be matched to the current predictor
- `unwind_offers` is a boolean indicating whether the offers object returned from the logs should be unwound before returning the results
- `limit` set the number of items to be returned, use an empty string to set no limit
- `start_date` is the date and time before which the logs should not be matched, use an empty string to set no start date
The full `PreScoreLookup` class is shown below:
```java
package com.ecosystem.plugin.customer;

/**
 * Perform a mongo lookup and store the results in params for subsequent usage
 */
public class PreScoreLookup extends PreScoreSuper {

    public PreScoreLookup() throws Exception {

    }

    /**
     * Pre-pre predict
     */
    public void getPrePredict() {
    }

    /**
     * getPrePredict
     * @param mongoClient The mongo connection
     * @param params The params object used to pass data through the runtime process
     * @param session The cassandra connection
     * @return params
     */
    public static JSONObject getPrePredict(MongoClient mongoClient, JSONObject params, CqlSession session) throws IOException {
        try {
            /* Get the data from the logs */
            JSONArray resultArrayContacts = getContactsLoggingDetails(mongoClient, params, true, true, false, "100", "", "");
            JSONArray resultArrayResponses = getResponseLoggingDetails(mongoClient, params, true, true, true, "100", "", "");

            /* Write the results to params to be passed through the runtime */
            JSONObject loggingDetails = new JSONObject();
            loggingDetails.put("resultArrayContacts", resultArrayContacts);
            loggingDetails.put("resultArrayResponses", resultArrayResponses);
            params.put("prescore_data_lookup",loggingDetails);
        } catch (Exception e) {
            LOGGER.error("PreScoreLookup:E001:UUID: Lookup failed, prescore data lookup not written to params." + e.getMessage());
        }
        return params;
    }

}
```

**Note:** The name of the class used must include either `PreScoreLookup` or `PreScoreDynamic` in order for `mongoClient` to be passed to the prescore. For versions prior to `0.9.4.3` for `PreScoreDynamic` and `0.9.6.0` for `PreScoreLookup` a mongo connection will need to be opened manually.

---

## ecosystem.Ai runtime release notes

Source: `docs/runtime/runtimeversion.mdx`
URL: https://ecosystem.ai/docs/runtime/runtimeversion
Summary: The release notes of the ecosystem runtime from version 0.9.0.0

# ecosystem.Ai runtime release history

## 0.9.7 - Preview

### New functionality
- Builtin MCP
- Improved threading
- Deploy multiple use cases to a single runtime instance
- Automated testing
- Runtime dashboard

## 0.9.6.1.4

### New functionality
- Fix for refresh functionality occassionally not updating all configs

## 0.9.6.1.3

### New functionality
- Fix for `predictor.param.lookup.default` JSON formatting causing index creation error with Dynamic Recommenders
- Prevent learning iterations from overlapping when using Ecosystem Rewards algorithm

## 0.9.6.1.2

### New functionality
- Fix for Dynamic Recommender learning for multiple offers
- Updated h2o version to address CVE-2025-6544

### Updated dependencies
- org.springframework.boot: 3.5.6
- ai.h2o.h2o-core: 3.46.0.8

## 0.9.6.1.1

### New functionality
- Updates to batch process to improve response logging functionality
- Asymmetric custom rewards for Ecosystem Rewards Dynamic Interactions
- Fixed issue where refresh would fail for Dynamic Interactions under certain conditions

## 0.9.6.1

### New functionality
- External runtime data lookups. Parameter access and additional corpora can be configured to get data from an external runtime. This allows for data to be pulled from different data stores into a single runtime and can be used to reduce the number of connection sockets if many runtimes connect to the same tables.
- Human behavioural algorithms. Added a number of Dynamic Interaction algorithms based on human behavioural constructs.
- Virtual variables supported by all deployment types.
- `/refreshWithOptions` API call which updates the Options Store.
- `/learning` API call which manually triggers the Dynamic Interaction learning.
- `/updateCassandraConfig` API call which updates the cassandra.conf file.
- MCP server functionality
- Custom API configuration in python.
- MLFlow integration
- Miscellaneous
  - Fixed issue where Dynamic Interaction configurations behind network runtimes would intermittently stop learning
  - Changed scaling of Bayesian Probabilistic scoring results

### Updated dependencies
- org.springframework.boot: 3.5.0

## 0.9.6.0

### New functionality
- JIT java compilation. Generation of required class files from java source files. Removes the need for a build pipeline when using customer pre and post scoring logic.
- Split runtime into with and without deeplearning. By default deeplearning functionality will not be applied.
- Threading updates to improve performance
- Further OpenApi updates
- `callParallelDeployment` method added to PostScoreSuper to enable additional testing of Dynamic Interaction deployments.
- Allow for pre score classes containing `PreScoreLookup` to be passed the `mongoClient` object argument to allow for arbitrary arggregation pipelines to be run in the pre scoring phase
- Allow for the specification of lookups from multiple tables to construct `featuresObj`
- Custom rewards functions for Dynamic Interaction algorithms
- Localbuild repo changes updates
  - RuntimeApplication
    - Renamed rollingMaster to rollingEcosystemRewards
    - Added rollingQLearning to Dynamic Interaction algorithm initialisation
    - Added check for null mongoClient before close() and Dynamic Interaction updated
    - Added try catch block for Dynamic Interaction update processing
  - ProductMaster
    - Changed `@CrossOrigin` to `@CrossOrigin(origins = "*")`
  - Added rewards plugin structure to allow for custom rewards for Dynamic Interactions
- Miscellaneous
  - Fixed issue where Project level epsilon settings would not be reflected in params for the Ecosystem Rewards algorithm
  - Changed error message on failed `offerMatrixStatic` load to be a warning and edited the message to clarify that `offerMatrixStatic` is not loaded rather than the Offer Matrix in general

### Updated dependencies
- org.springframework.boot: 3.4.4
- mongodb.version: 6.0.20
- djl.version: 0.32.0
- org.springframework.cloud: 4.2.1
- apache.httpcomponents.client5
- presto: 0.291
- org.apache.commons: 2.11.0
- org.springframework.boot.spring-boot-loader
- org.springdoc.springdoc-openapi-starter-webmvc-ui: 2.8.5
- org.apache.maven.plugins.maven-compiler-plugin: 3.10.1

## 0.9.5.0

### New functionality
- Runtime details output
  - /config API displays extensive details of current runtime configuration. This is an ongoing activity to enhance the resilience capabilities.
- Allow Q-learning reward function to use logging data for state calculations
- Add uniform as an approach for handling missing offers in the Bayesian Dynamic interaction algorithm. This will score missing offers by smapling from a random distribution in order to add exploration rather than the default approach of ignoring missing offers
- Threading updates to improve performance
- Reviewed mongoDB connection strategy to better cater for new mongoDB drivers
- Dynamic Eligibility Enhancements
  - Added support for conditional variables, whose value varies based on a condition, and conditional rules, which are applied when a condition is met.
  - Added support for looking up values from any data structure available in the scoring process
- LocalBuild repo updates
  - RuntimeApplication
    - Added import of:
      - com.ecosystem.plugin.PluginLoader
      - com.ecosystem.utils.EnvironmentalVariables
      - com.ecosystem.worker.license.ValidationService
      - com.ecosystem.utils.log.LogManager
      - com.ecosystem.utils.log.Logger
      - org.springdoc.core.models.GroupedOpenApi
      - org.springframework.boot.autoconfigure.kafka.KafkaAutoConfiguration
      - org.springframework.context.ConfigurableApplicationContext
      - org.springframework.security.config.Customizer
      - org.springframework.security.web.SecurityFilterChain
      - com.ecosystem.worker.license.ValidationService.getEnvKey
      - com.ecosystem.worker.license.ValidationService.setEnvKey
      - java.io.IOException
      - java.util.*
  - ProductMaster
    - Add tracking of UPDATE for refreshing of Virtual Variables
    - Add mongoClient to getPredictionResult in /invocations
    - Migration from swagger to OpenApi
  - Added PrePredictAutoDate which will automatically add date enrichments to the feature store to be used in model scoring and post scoring logic
- Miscellaneous
  - MONGO_CONNECT environment variable can be used to specify the connection string for MongoDB at startup
  - Moved com.ecosystem.utils.DateUtils to com.ecosystem.utils.DateUtilities.DateUtils
  - Allow SSL_KEYSTORE_LOCATION and SSL_KEYSTORE_PASSWORD to be used in the kerberos authentication for kafka
  - Add JSONFlattener util which flattens out nested JSON structures which are to be written to SQL databases
  - Enhanced date format conversion functionality
  - Enhaced /refresh API to refresh Virtual Variables without requiring a restart. This includes changes changes to PreScoreSuper as well as in other areas of the code base
  - Bug fix for the minute index in the contacts and responses logging collections

### Updated and additional dependencies
- org.springframework.boot: 3.4.1
- kerberos.extension.version: 2.1.1
- java.version: 17
- h2o.version: 3.46.0.6
- mongodb.version: 5.3.1
- djl.version: 0.31.1
- com.github.oshi.oshi-core: 6.6.5
- ai.djl.pytorch.pytorch-native-cpu: 2.5.1
- ai.djl.pytorch.pytorch-jni: 2.5.1-0.31.1
- org.apache.logging.log4j 2.24.3
- org.apache.lucene: 9.12.1
- org.springframework.cloud: 4.2.1
- org.apache.httpcomponents.client5.httpclient5
- org.apache.commons.commons-configuration2: 2.11.0
- org.apache.commons.commons-lang3: 3.17.0
- org.facebook.presto.presto-jdbc: 0.290
- org.codehaus.plexus.plexus-utils: 3.6.0
- org.apache.kafka.kafka-clients: 3.9.0
- org.thymeleaf.thymeleaf: 3.1.3.RELEASE
- org.springdoc.springdoc-openapi-starter-webmvc-ui: 2.8.3
- joda-time.joda-time.jar: 2.13.1
- org.json.json: 20250107

## 0.9.4.3

### New functionality
- Ecosystem Rewards Algorithm
  - Dynamic Eligbility functionality allows configuration of eligibility rules which are applied before and during the scoring of the Ecosystem Rewards algorithm, improving performance and reducing the need for custom logic in the post scoring phase. Only supported through the ecosystem.Ai python package.
- Parameter Access
  - Added support for virtual variables to the Parameter Access. Virtual variables can be used to create a new variable in the Parameter Access featuresObj by bucketing or combining variables in the existing dataset.
    - PreScoreDynamic pre score added which is used to add the virtual variables to params
    - MongoClient added to prePredictStageOne to allow for reading of Virtual Variable configuration
- Threading updates to improve performance
- Network Runtime
  - Added lookup_passthrough network type. lookup_passthrough networks will route based on the value of a key in the parameter access store and will pass the results from the routed runtime back without any further processing.
    - Validity of network key values can be managed using a network_validity configuration with validity specified using either cohort_active_yn or active date ranges. Invalid cohorts will be assigned a default value. If not default is specified 0 will be used
- Bayesian Probabilistic Algorithm
  - Added support for the Baysian Probabilistic Dynamic Interaction algorithm which uses a Naive Bayes style online learning algorithm
- LocalBuild repo updates
  - RuntimeApplication
    - Added import of org.json.JSONArray
    - Added initialSettings object used to test for changes in additional IntelliJ plugin settings to allow for automatic refresh
    - Added mongoClient parameter to rollingMaster.indexes
  - Added PreScoreDynamic for DynamicInteraction cases, required for Virtual Variable functionality
  - Use generateOptionsSequence for looping through options store in PlatformDynamicEngagement
- Miscellaneous
  - Adjustments to date processing functionality
  - Update /refresh API to cater for additional functionality
  - Add MongoClient to ecosystemMaster.getPredictionResult to allow access to mongo logging and improve latency of Options Store access
  - generateOptionsSequence added to PostScoreSuper to allow for more efficient looping through the Options Store in the post scoring logic
  - PlatformDynamicEngagement template updated to include generateOptionsSequence
  - Change static_offers offer matrix error to warning as a version of the offer matrix is still loaded
  - Adjustments to default Q-learning rewards functionality
  - Increased limit on number of Additional Corpora to 16

### Updated and additional dependencies
- mongodb.version: 5.0.1
- djl.version: 0.27.0
- org.apache.logging.log4j: 2.23.1
- org.apache.lucene: 9.10
- org.facebook.presto.presto-jdbc: 0.286
- org.apache.commons.commons-configuration2: 2.10.1
- org.json.json: 20240303

## 0.9.2.1

### New functionality
- Ecosystem Rewards Algorithm
  - Thompson Sampling based algorithm for online learning
  - Options Store functionality added which tracks the state of an online learning algorithm in production
  - dynamic_engagement collection added to ecosystem_meta storing configurations of online learning algorithms
  - Logging collections used for online updates, requiring additional indexes to be created
- Network Runtime
  - Network runtimes can be configured to route traffic to different runtimes based on the lookup of a key in the parameter access store or by dyanmically allocating customers to experiment groups.

### Updated and additional dependencies
- org.springframework.boot: 2.7.7
- tensorflow.version: 0.4.2
- h2o.version: 3.40.0.1
- mongodb.version: 4.8.2
- org.springframework.boot.spring-boot-maven-plugin: 2.7.8
- org.springframework.security.kerberos.spring-security-kerberos-client: 1.0.1.RELEASE
- org.springframework.boot.spring-boot-starter-security
- org.springframework.boot.spring-boot-starter-web
- org.springframework.boot.spring-boot-starter-data-cassandra
- net.lingala.zip4j: 2.11.3
- com.facebook.presto.presto-jdbc: 0.279
- org.codehaus.plexus.plexus-utils: 3.5.0
- org.apache.kafka.kafka-clients: 3.4.0
- org.thymeleaf.thymeleaf: 3.1.1.RELEASE
- org.springdoc.springdoc-openapi-ui: 1.6.14
- org.springdoc.springdoc-openapi-webmvc-core: 1.6.14
- joda-time.jar: 2.12.2
- org.reactivestreams.reactive-streams: 1.0.4
- org.json.json: 20220924
- com.datastax.oss.java-driver-core: 4.15.0
- com.datastax.oss.java-driver-query-builder: 4.15.0
- com.datastax.oss.native-protocol: 1.5.1
- org.apache.logging.log4j: 2.19.0
- org.slf4j.slf4j-nop: 1.7.36
- org.slf4j.slf4j-api: 1.7.36
- org.iq80.leveldb.leveldb: 0.12
- com.google.guava.guava: 31.1-jre
- org.rocksdb.rocksdbjni: 6.29.5
- org.fusesource.leveldbjni.leveldbjni-all: 1.8
- org.mapdb.mapdb: 3.0.9

---

## Deployment

Source: `docs/user_guides/dynamic/deployment.mdx`
URL: https://ecosystem.ai/docs/user_guides/dynamic/deployment
Summary: Deployment is where you deploy machine learning models into production environments, ensuring they are operational, scalable, and integrated seamlessly with existing systems to deliver real-time insights and actions.

# Introduction
The Deployment section of the Workbench is where you deploy machine learning models into production environments, ensuring they are operational, scalable, and integrated seamlessly with existing systems to deliver real-time insights and actions.

Now that you have uploaded, ingested and viewed your data, and configured your dynamic recommender, you will need to put it into production. Deployment is where you will set your dynamic recommender to be used in the Production, Quality Assurance or Test environment.

In the <u>Deployment</u> section of the Workbench, you will find <u>Projects</u>.

This is where you will be able to configure the parameters of your deployment, and push it to the desired environment.
**Default settings are good!:** Most of the settings in this step can be left at their default values.

Find your project in the list of projects and click on it to view or create the deployments for it.

![deployments list](/images/recommender/6_Deployment/0_deployments.png)

## Add Deployment
To view and edit a pre-existing deployment configuration, click on the deployment name. In order to create a new deployment, select **+ Add Deployment**.

![Add deployment](/images/recommender/6_Deployment/1_deployments_add.png)
A window will open up below where you can specify the details of your new deployment.

## Configure Deployment
Set the case configuration for your dynamic recommender deployment.

![Configure deployment](/images/recommender/6_Deployment/2_deployments_details.png)

Create a unique *Prediction Case ID* name. Add a *Description* that is relevant to the specific deployment you are configuring. Add the *Type* and the *Purpose* of your deployment. You can leave the *Type* and *Purpose* blank if you are unsure of what to put there.

Input the properties details and set the *Version* of the deployment step.

This *Version* number should be updated every time you make changes to the deployment. Specify the *Environment Status* in which you will be deploying your configuration. Then input the *Performance Expectation* and *Complexity* settings for your set up. **Update** your deployment before proceeding to selecting and filling in the details in the settings dropdowns.

## Deployment Settings
Selecting any of the checkboxes on the right, will reveal the <u>Settings</u> sections relevant to that option, at the bottom of the page.

![Deployment settings dropdowns](/images/recommender/6_Deployment/3_deployments_settings.png)

### Plugins
Select *Plugins* to use the pre-defined scoring class in your experiment.

Use the dropdown to *Select a Predefined Post-score Class* and choose PlatformDynamicEngagement. You will see that this selection will populate the pre-score and post-score class windows.

### New Knowledge (explore/exploit)
Select *New Knowledge (explore/exploit)* to assign the UUID you generated in <u>Dynamic Experiments</u>.

In the *Dynamic Pulse Responder Reference* section, set the UUID of the configuration that you are going to push into production.

Click on the UUID in the field and click out again to validate the dynamic parameter.

You don't need to worry about the rest of the fields, but it is suggested that you set the epsilon to 0 for most dynamic recommender setups.

## Prediction Activators
There are a range of different Prediction Activators that can be selected to enhance the functionality of your deployments.
**Prediction Activators further documentation:** Detailed documentation coming soon

### Offer matrix
    - loaded in memory and accessed in the plugins. For the purpose of default pricing, category and other forms of lookup.
    - the offer matrix has a [specific data format](/docs/configuration/data/meta) if default functionality is to be used.
### Plugins
    - supports three primary areas: API definition, pre-score logic and post-score logic. There are a number of post-score templates.
### Budget Tracker
    - track offers and other items used through the scoring engine, and alter the behavior of the scoring system. Must include the post-score template for this option to work.
### Whitelist
    - allows you to test certain options with customers. The results will be obtained from a lookup table. Must include the post-score template for this option to work.
### New knowledge
    - allows you to add exploration to your recommender. This will happen by specifying the epsilon parameter. Epsilon% (eg. 0.3 = 30%) of the interactions will be selected at random, while the remaining ones will be selected using the model.
### Pattern selector
    - allows different patterns when options are presented, through the scoring engine result.

## Push Configuration
Remember to **Update**!
When you are done with your deployment configuration, click **Push** to set the deployment up in your specified environment. No downtime is required!

The **Generate** and **Build** buttons are not needed for now, they are designed for Enterprise and on-premise setups.

#### Your predictions are now ready to be used in your desired environment, we suggest you test your APIs in the Workbench before going live!

---

## Manage Files & Feature Engineering

Source: `docs/user_guides/dynamic/files_features.mdx`
URL: https://ecosystem.ai/docs/user_guides/dynamic/files_features
Summary: Files and Feature Engineering is where you import, manage, and transform raw data into valuable features to enhance machine learning models, enabling efficient data preparation and preprocessing.

# Introduction 
The <u>Files</u> section, and the <u>Feature Engineering</u> section of the Workbench is where you import, manage, and transform raw data into valuable features to enhance machine learning models, enabling efficient data preparation and preprocessing.

The data used to configure your dynamic recommender can range from just a list of offers, to a full set of customer-level data with historical behavior. Examples of different styles of data sets can be found in the example projects. 

## Add Data to the ecosystem.Ai Platform
In the <u>Data and Features</u> section of the Workbench, you will find <u>Manage Files</u>.

![Manage files](/images/dynamic_recommender/3_Files_Features/0_files_manage.png)

Here, you will be able to add, view, delete and download the data files available for you to build predictions with.

### Upload Data
To upload a file of your own, select **+ Upload File.**

![Upload files](/images/dynamic_recommender/3_Files_Features/1_files_upload.png)

A section will open below the files list where you can input the details of your upload. Files must be uploaded in either CSV or JSON format.  Upload and then refresh, the file will appear in your files list.

### Download Data
To download a file, click on the file name.

![Download files](/images/recommender/3_Files_Features/2_files_download.png)

A section will open up where you can view the details of your download. Click **Download** and select your download location.

### Delete Data
To delete a file, click **Delete** to the right of the file name.

![Delete files](/images/dynamic_recommender/3_Files_Features/3_files_delete.png)

Deleting a file from here will remove the file from all projects whether active or inactive!

## Connect a Database
In the <u>Data and Features</u> section of the Workbench, you will find <u>Feature Engineering</u>. Add a database using connection strings with the <u>Presto Data Navigator</u>.

![Presto navigator](/images/dynamic_recommender/3_Files_Features/4_features_presto.png)

If you have your own database, you can connect it here. This database access option uses the Presto Worker in the platform. Add a Connection path, similar to this example: <code>local/master?user=admin</code>. Then write a SQL statement to extract the data you want, similar to this example:<code>select * from master.bank_customer limit 2</code>. Then click **Execute**.

**Using Presto in the Workbench:** In order to add data using the presto functionality, you must first have your presto connection accurately set up.

## Ingest Data into the Workbench
Ingest data to be used in your projects with the <u>Ecosystem Data Navigator</u>. 

![Ingest Data](/images/dynamic_recommender/3_Files_Features/5_features_data_ingest.png)

Once data has been added to the Platform it must be ingested into a specified database and collection.

## Add Database
You can either select a database and ingest your file into it, or create a new database by selecting **+ Add Database**. 

![Add database](/images/dynamic_recommender/3_Files_Features/6_features_database_add.png)

Add a unique database name related to your project. Click the **Database** button to the left of the input field to create it. 

![Create database](/images/dynamic_recommender/3_Files_Features/7_features_database_create.png)

Once your database has been created, refresh the database list and click into it.

![View database](/images/dynamic_recommender/3_Files_Features/8_features_database_view.png)

## Ingest Collections
To ingest your file as a new collection inside your chosen database, select **+ Ingest Collection**. 

![Ingest collection](/images/dynamic_recommender/3_Files_Features/9_features_collection_ingest.png)

Select your file from the file list. 

![Select collection](/images/dynamic_recommender/3_Files_Features/10_features_collection_ingest_data.png)

You will see the file name appear above the *Ingest: input field*. Either copy this name or choose a unique one related to your project, then click **Ingest** to the left of the input.

**Check collection name before ingesting!:** If the name of the collection you are ingesting already exists, the new data will be appended to the existing data. It will not replace the existing data.

#### Now that you have consolidated your data, it's time to put it to work!

---

## How it Works

Source: `docs/user_guides/dynamic/how_it_works.mdx`
URL: https://ecosystem.ai/docs/user_guides/dynamic/how_it_works
Summary: The ecosystem.Ai Dynamic recommenders use real-time feedback to learn how to more effectively rank offers.

# ecosystem.Ai Dynamic Recommenders
Dynamic recommenders use real-time feedback to learn how to more effectively rank offers.

The real-time feedback learning system can be activated with or without data, how this is done depends on the availability of your data. Whether there is none available, or using data on user context (demographic, behavioral, etc.) and historical behavior.

Each time a user interacts with the real-time feedback learning system, that interaction is logged. Every logged interaction then advances the state of knowledge of the system. This knowledge can be further used to enhance the effectiveness of the traditional data science process, if running in parallel. Ensuring effective learning without focusing too extensively on a single option through testing.

The system uses an experimentation based methodology, which is a testing approach to presenting offers to customers. Rather than selecting just one solution and missing the opportunity to explore the rest, experimentation allows you to run multiple tests at the same time. The offers to experiment with could be in the form of products, customer engagement messages, design constructs, special offers, and more.

## About Data
Dynamic recommendation does not require any data to be available, but can incorporate additional data as and when it becomes available.

Starting without data does not affect the activation of the recommender, all that is required is a list of offers. Having no data could be due to opting in for a cold-start scenario, such as if a new product is being launched and there is no historical data available. It could also be due to capacity and/or technical constraints associated with access to the needed data.

If data is available in addition to the offer list, it can help to improve the effectiveness of the system's learning. If segmentation variables are available those can be used to add context to the learning. Context can also be set at a customer level for truly personalized predictions. If historical data is available it can be used to provide a more informed starting point.

## Time Dependence
Systems involving human behavior will always be affected by time.

Time alters human behavior for a number of reasons: evolving trends, communal rituals, personal events and environmental changes. These changes are often not consistent, and will therefore happen at varying points in the time scale.

Dynamic recommenders incorporates a range of functionality, allowing human changes to be captured and effectively taken into account:

- Real-time learning 
  - In the moment capture of activity.

- Sophisticated forgetfulness 
  - Offer level options that can be set based on applications, and adjusted as the application is running.

- Repeated customer interactions 
  - Sophisticated options that account for human ritual. Tuned based on applications, and adjusted as the application is running.

---

## Introduction

Source: `docs/user_guides/dynamic/index.mdx`
URL: https://ecosystem.ai/docs/user_guides/dynamic
Summary: This lesson outlines the steps you will take to build the configurations needed for your dynamic recommender.

# Introduction
This lesson outlines the steps you will take to build the configurations needed for your dynamic recommender. 

- Accurately configure settings in the Workbench or Notebook.
- Set up simulations to test hypotheses.
- Follow the guide to then analyze and monitor the in-process results of your live experiments using Dashboards.

Dynamic recommenders should be an integral part of every Data Science job. This capability is designed to allow you to overcome common difficulties associated with the data science process

## Challenges of Implementing Dynamic Recommenders
1. Data access challenges include bottlenecks in making data available for modeling and handling cold-start scenarios with insufficient data for new use cases.
2. Resource constraints are evident with a shortage of data scientists needed to build numerous models and the complexity of scaling model development across an organization.
3. Time dependence challenges arise from the need to manage real-time constraints and latency issues, which affect the timely generation and delivery of recommendations.

## How ecosystem.Ai Addresses These Challenges
#### 1. Streamlined Data Access
  - Dynamic recommenders streamline data accessibility by integrating real-time data streams, ensuring that the most current data is always available for both modeling and scoring.
  - The capability leverages advanced algorithms to handle cold-start scenarios effectively, using contextual and behavioral data to make initial predictions.
#### 2. Optimized Resource Utilization
  - Dynamic recommenders automate much of the model-building process, reducing the dependency on a large number of data scientists.
  - The system uses machine learning and AI to rapidly develop and deploy models, ensuring scalability and efficient resource utilization.
#### 3. Effective Time Management
  - Dynamic recommenders are designed to handle time-dependent contexts by providing real-time data processing and recommendation generation.
  - The platform ensures low-latency responses and considers the temporal aspect of customer interactions to deliver timely and relevant suggestions.

## Enhancing the Data Science Process
The system continuously learns from new data and user interactions, improving the accuracy and relevance of recommendations over time. Dynamic recommenders facilitate quick experimentation and iteration, enabling data scientists to test and refine models rapidly. The platform automates many aspects of the recommendation process, reducing the workload on data scientists and ensuring efficient resource use. Additionally, by considering the temporal context, dynamic recommenders deliver recommendations that are relevant to the user's current situation, enhancing the overall user experience.

---

## Get Started

Source: `docs/user_guides/dynamic/intro.mdx`
URL: https://ecosystem.ai/docs/user_guides/dynamic/intro
Summary: Building out and configuring your dynamic recommender project in the ecosystem.Ai Prediction Platform

# Introduction
Building out and configuring your dynamic recommender project in the ecosystem.Ai Prediction Platform. 

![Recommender introduction](/images/recommender/0_Introduction/Recommender.png)

Two main interfaces can be used to access the ecosystem.Ai functionality: 
- The Workbench graphical interface
- Jupyter Notebooks. 

#### This lesson takes you through the Workbench configuration for Recommenders.

**Alternative interface:** If you would prefer to build your Recommender in a Notebook, head to <u>Dashboard</u> in your Workbench, and click on the <u>Jupyter Notebooks</u> icon. From there, navigate to <u>Documents</u>, <u>Get Started</u>> and find “Get Started Recommenders”.

---

## Monitoring

Source: `docs/user_guides/dynamic/monitoring.mdx`
URL: https://ecosystem.ai/docs/user_guides/dynamic/monitoring
Summary: For monitoring, the ecosystem.Ai Prediction Platform has Grafana and Superset integrations.

# Introduction
For monitoring your predictions in production, the ecosystem.Ai Prediction Platform has Grafana and Superset integrations.
- Grafana is used for real-time scoring and operational metrics, ensuring your machine learning models are performing effectively.
- Superset is for comprehensive business intelligence and data visualization, allowing you to track and analyze key performance indicators and business processes in detail.

Once your recommender is running it is important to keep track of its behavior, and begin to examine the results. There are two dashboard softwares we have linked up to be accessible in your worker ecosystem

## Grafana Real-Time Dashboard

In the <u>Dashboard</u> of the Workbench, select the Real-Time Dashboard icon to go to Grafana, there you can set up and view the real-time results of your deployment.
![Grafana dashboard](/images/recommender/8_Monitoring/0_monitoring_dashboard_grafana.png)
Log in to Grafana to get a real-time view of your recommenders in production.
Our Grafana Dashboards illustrate the behavior of the recommender in production. Showing which options are being recommended, and which are successful. As well as providing information on performance, and how the recommender is trading off between exploring and exploiting.

To set up your Grafana Dashboard, and link it to your chosen deployment, you will need to login as an admin. We have already pre-built a dashboard for you to view all the most important elements of your real-time deployment. However, if you have experience with Grafana, or are looking to monitor something very specific, you can build your own dashboard: https://grafana.com/docs/grafana/next/getting-started/build-first-dashboard/.

### Manage Dashboards
Now that you have logged in, Navigate to the left hand menu, click on the <u>'dashboards'</u> icon and select <u>Manage</u>.

![Manage dashboards](/images/recommender/8_Monitoring/1_grafana_navigate.png)
At this point, you will see a list of folders. Select the <u>Runtime2</u> folder and click on Scoring Dashboard: Client Pulse Responder.

![Manage dashboards list](/images/recommender/8_Monitoring/2_grafana_manage.png)
To view the pre-built dashboard configuration. The dropdown menu called Prediction case is where you can see all the deployments linked to this dashboard. Find your Deployment there if you have used one of the pre-configured solutions.

### Add Dashboards
To add a new deployment, go to the <u>Dashboard Settings</u> icon in the top right corner.

![Add dashboard](/images/recommender/8_Monitoring/3_grafana_dashboard.png)
This will take you to the settings page where you can manage elements of the dashboard.

Go the Variables in the menu on the left, and then click on <u>Prediction</u>.

![Dashboard settings](/images/recommender/8_Monitoring/4_grafana_settings.png)
You will notice in the Custom Options field that the deployments currently linked to this dashboard are listed, separated by commas.

Simply add your deployment case name in this field.

![Edit variables](/images/recommender/8_Monitoring/5_grafana_edit.png)
Then click **Update**. When this refreshes, click **Save Dashboard** on the left, this will link to a popup where you can specify the details of your changes. This is not a compulsory step, but it is good practice to document all changes.

Then click **Save**. Press the back button in the top left hand corner to go back to the dashboard, give it a minute to load and then you will be able to view your new deployment in the Prediction Case list.

## Superset Business Dashboard

In the <u>Dashboard</u> of the Workbench, select the Business Dashboard icon to go to Superset, to view more comprehensive results of your deployment.

![Superset dashboards](/images/recommender/8_Monitoring/6_monitoring_dashboard_superset.png)
Access the Superset Dashboard to view further illustrations of your recommender in production.

![Superset](/images/recommender/8_Monitoring/7_superset.png)
The superset dashboards allow you to view and analyze the results of the whole recommendation process. Including costing, counts, successes and fails.

**Further documentation and help:** To learn more about how to build, manage, and interpret the dashboards for your recommenders, visit the documentation site of the accompanying technology: Grafana or Superset.

---

## Projects

Source: `docs/user_guides/dynamic/projects.mdx`
URL: https://ecosystem.ai/docs/user_guides/dynamic/projects
Summary: Projects are where you will make, manage and keep track of all of the work linked to the completion of any particular deployment project.

# Introduction 
The Projects section of the Workbench is where you will make, manage and keep track of all of the work linked to the completion of any particular deployment project.

When you log into the Workbench you will see example projects that have already been created for you in the <u>Dashboard</u> and <u>Projects</u> sections. 
**Note:** community edition users will not see example projects

## Managing Projects

![Projects dashboard](/images/recommender/1_Projects/0_projects_dashboard.png)

In <u>Projects</u>, you can either edit one of the existing projects or add a new one. 

![Projects](/images/recommender/1_Projects/1_projects.png)

To view or edit a project, click on the project name. A section will open below the project list with all the project details.

To create a new project, select **+ Add Project**. 

![Projects add](/images/recommender/1_Projects/2_projects_add.png)

A section will open below the project list where you can input the details of your new project. In
Project ID specify a name that everyone in your team can relate to. Add an accurate Description and provide an indication of the Type (eg. Recommender). Specify the Project Purpose. You can also assign dates and individuals to the project. This is more for administrative purposes than a necessity.

The Projects Elements dropdowns are for administrative purposes only.

![Projects elements](/images/recommender/1_Projects/3_projects_elements.png)

Adding Files, Feature Stores, Predictors, Deployments and Analysis files here will only add the names of the files, not the files themselves.

#### As you progress with your recommender configurations, you will link items to the project as they are created. Such as the models, frames, simulations and other elements.

---

## Dynamic Pulse Responder Configuration

Source: `docs/user_guides/dynamic/pulse_responder.mdx`
URL: https://ecosystem.ai/docs/user_guides/dynamic/pulse_responder
Summary: The Experiments section of the workbench is where you build, test, and optimize dynamic recommenders, allowing you to experiment with different strategies and algorithms to enhance personalization and improve model performance.

# Introduction
The Experiments section of the workbench is where you build, test, and optimize dynamic recommenders, allowing you to experiment with different strategies and algorithms to enhance personalization and improve model performance.

Dynamic Experimentation allows you to configure the specifications of your dynamic recommenders. This includes configuring the options you want to test and how you want to balance the exploring and exploiting in your learning approach. You can also configure how much detail from your data you are going to use, and how the recommender should handle changes in human behavior over time.
**Default settings are good!:** Most of the settings in this section can remain default.

## Configurations and Settings
In the <u>Experiments</u> section of the Workbench, you will find <u>Dynamic Experiments</u>.
![List experiments](/images/dynamic_recommender/4_Dynamic_Experiments/0_experiment_list.png)
Here you will find a list of all of the existing dynamic recommender Configurations. To view or edit the details, click on the name. 
![Experiment settings](/images/dynamic_recommender/4_Dynamic_Experiments/1_experiment_settings.png)
When you click into the name, you will notice a series of tabs along the top. These are your configuration tabs for that dynamic recommender.To create a new Dynamic recommender, select Create New. 
![Create experiment](/images/dynamic_recommender/4_Dynamic_Experiments/2_experiment_create.png)
In Settings is where you can view or create the Unique Name and Description. The UUID field will be populated automatically when you click Save. This UUID will be used in Deployments. 
![Save experiment](/images/dynamic_recommender/4_Dynamic_Experiments/3_experiment_save.png)
The Batch dropdown is where you can specify whether your recommender will be run in real-time or batch mode. When Batch is set to false, a real-time recommender will generate results for one customer interaction at a time. Feedback, in the form of an action, is fed into the system as soon as it is available. When Batch is set to True, it generates results for a number of customers at once. It does not incorporate feedback until the actions from those customers are loaded into the system at a later point.

When choosing between batch and real-time approaches it is useful to know that real-time is the more effective approach. However, your ability to run a real-time recommender may be impacted by technical constraints within an organization.

In the Feature Store: Training and Scoring dropdown you will need to specify the location of the data you will use to set up your dynamic recommender. 
![Feature store: training and scoring](/images/dynamic_recommender/4_Dynamic_Experiments/3_experiment_save.png)
Use the Feature Store Database dropdown to find the database you created in Feature Engineering, and then allocate the Feature Store Collection. You can leave the Feature Store Connection empty if you are unsure about what to input here.

In the Options Store: Real-time Scoring dropdown you will specify the location where the options store will be created to. 
![Options store: real-time scoring](/images/dynamic_recommender/4_Dynamic_Experiments/5_experiment_options.png)
An options store is a list of offers, with information about the state of knowledge for each one.

You should not need to do anything in the Advanced: Client Pulse Responder dropdown. 
![Advanced: client pulse responder](/images/dynamic_recommender/4_Dynamic_Experiments/6_experiment_advanced.png)
If you want to, you can click on the Properties file that has been populated to double check whether it has been successfully linked. But this is not essential.

Save your Settings before continuing to Engagement. 

## Add and configure your Engagement and Variables
In Engagement you will be prompted through a series of configuration steps by the Setup Wizard.
img

Before going through the wizard, you will need to select which algorithm you wish to use. If you are unsure of which to choose, select the Ecosystem Rewards Algorithm. 

Once you have chosen your Algorithm, Save your progress before continuing to the Wizard steps. 

In the History step, you will need to use the toggle to specify whether you have decided to use historical data in your dynamic recommender.
img

If you are following our prompts to set up a test without data, click Next.

In the Interactions step, you will need to provide some educated guesses reagrding the expected rate of interaction and offer take-up. 
img

The configurations you set in this part of the process are not set in stone. You can use these values to run simulations to explore the impact of your settings.

Next, you will need to set up your Uncertainty parameters. 
img

Here you will set the learning windows of forgetfulness, the caching period of showing specific offers, and specifying the learning of interaction importance.

In the last step, you will generate the Engagement configuration.
img

Click Generate to populate the advanced dropdowns with these settings, Save and then go to Variables.

If you wish to toggle setting in the Advanced: Settings, see the 

In Variables you will specify the data that will be used in your configuration options store setup.
img

In these fields, you will be able to extract and view the details of your vidget features (keys). Here you will need to specify the details (if any) on user context, such as demographic, behavioral, etc. and historical behavior.

Click on the Key List field to automatically return a list of keys in your data. 
img

Then use the Offer Key dropdown to select the key you wish to use and Retrieve Offers to bring back a list of the Offer Key Values. 
img

The only required input is Offer Key. This is where you will specify the name of the vidgets to be ranked in your data set. In addition to the Offer Key you can add a Takeup Field.
img

You will only specify the details here, if your data includes historical behavior. A tracking key can be added if you want to track behavior and learn at an individual customer level. This will only be used if there are regular repeated engagements with individual customers.

In the Contextual Variable One and Contextual Variable Two dropdowns, you will specify the data on user context. 
img

Contextual Variables allow you to set other layers of context for your offers. If you have segments in your data which interactions can be tracked and learned from, you will specify them here. For example, you can produce different rankings for different segments of people you want to display offers to.

Once all of the Variables have been set, click Generate to create, store and display the Options Store. 

When you click Generate you will be redirected to Options which is where you will find the Options Store. 
img

In the Options Store, you will be able to track the activity of your dynamic recommender as it ranks the offers and takeup in production, based on customer feedback.

## Add and configure your dynamic recommenders Graph and JSON
In Graph you will be able to view a graphical depiction of your options store set up. 
img

Use the various dropdowns to set the graph variables, in order to view factors such as Closeness, Cose, and more.

In JSON you will be able to view your configuration as stored in the platform metadata. 
img

Once your dynamic recommender has been created and all the configurations set, be sure to Save before heading back to the Configuration tab.
Take note of the UUID associated with your configuration. 
img

#### Now that your Dynamic recommender is set up, it is time to configure your Deployment details.

---

## Testing

Source: `docs/user_guides/dynamic/testing.mdx`
URL: https://ecosystem.ai/docs/user_guides/dynamic/testing
Summary: Manage APIs is where you create, test, and manage APIs, ensuring they are robust and ready for integration with other systems.  Simulations is where you run and analyze simulations to validate the accuracy and performance of machine learning models before deployment.

# Introduction 
The Manage APIs section is where you create, test, and manage APIs, ensuring they are robust and ready for integration with other systems. The Simulations section is where you run and analyze simulations to validate the accuracy and performance of machine learning models before deployment.

Once you have pushed your deployment configuration you should do some testing to see if the results align with your expectations. There are two ways to test your deployment:

## 1. Test your API

In the <u>Laboratory</u> section of the Workbench, you will find <u>Manage APIs</u>. Here you will find a list of all your deployments.

![Manage APIs](/images/recommender/7_Testing/0_testing_api.png)
If you have been going through this User Guide using one of the pre-configured examples, click on the relevant deployment to view the details. 

![View API](/images/recommender/7_Testing/1_testing_api_configuration.png)

### Create API
If you have created your own <u>Project</u> and <u>Deployment</u>, click **Create New** to make a new API.

![Create API](/images/recommender/7_Testing/2_testing_api_create.png)
Provide the *Unique Name* of your deployment and click **Next** to add it to the list.

![List APIs](/images/recommender/7_Testing/3_testing_api_list.png)

Select the configuration to view and edit the details of your API. 

### Configure API Test
Go to the <u>Configuration</u> tab and select the one you want to test.

![Configure API](/images/recommender/7_Testing/4_testing_api_edit.png)

Fill in the relevant details of the campaign, then click on the campaign to bring down the API test window.

![API Test](/images/recommender/7_Testing/5_testing_api_test.png)

Click **Execute** to bring back the API results and ensure your deployment is functioning.

![Execute API test](/images/recommender/7_Testing/5_testing_api_test.png)

### 2. Build a simulation
**Coming soon!:** Simulation documentation for the Workbench in progress, please check back again.

Now that you have built, deployed and tested the configuration of your recommender, it is time to watch it in action.

In the <u>Dashboard</u> you will find the worker ecosystem with links to various accompanying elements. 

![Simulations in Notebooks](/images/recommender/7_Testing/7_testing_dashboard_notebooks.png)

Click on the Jupyter Notebooks to configure the simulation of your recommender deployment. The steps of how to complete this part of the journey is laid out in the Notebooks.

---

## Testing Dynamic Interaction Deployments

Source: `docs/user_guides/dynamic_interaction_deployments.mdx`
URL: https://ecosystem.ai/docs/user_guides/dynamic_interaction_deployments
Summary: This lesson outlines how to run a dynamic deployment in parallel in production.

# Introduction
There are a number of ways to test your Dynamic Interaction deployments before putting them live in production. These include:
1. [Simulation](/docs/configuration/simulations) using assumed take up rates or historical logs
2. Run the deployment in parallel in production
3. Use a [network runtime](/docs/user_guides/network) to route a portion of the traffic to the new deployment.

In this lesson we will outline how to run a deployment in parallel in production.

## Configure your Dynamic Interaction deployment
Configure your [Dynamic Interaction](/docs/configuration/dynamic/) and [Deployment](/docs/configuration/deployment/) as you normally would. Push the deployment to an endpoint in the environment in which you want to run the test - ideally the production environment.

In order to test the Deployment we will be calling the `/invocations` API for the Dynamic Interaction Deployment when `/invocations` is called for the existing Deployment and we will be simulating `/response` calls based on the responses received by the existing deployment.

## Calling the invocations API
The invocations API for the Dynamic Deployment will be called from the post scoring logic of the existing deployment using the `callParallelDeployment` method as shown in this code snippet:
```java
        /** Get top scores and test for explore/exploit randomization */
        predictModelMojoResult = getTopScores(params, predictModelMojoResult);

        /** Call parallel deployment if specified in in_params or corpora */
        callParallelDeployment(params);
```
`callParallelDeployment` is a method in the `PostScoreSuper` class so your post scoring logic will need to extend `PostScoreSuper` in order to use this method.

In order to successfully make the call to the parallel deployment two parameters need to be provided; the URL of the parallel deployment endpoint and the campaign. These parameters can be provided in two ways:
1. As part of the `params` JSONObject in the `/invocations` API call by adding `parallel_url` and `parallel_campaign` to the `params` JSONObject.
2. As an [Additional Corpora](/docs/configuration/deployment/parameters/) named parallel_deployment with fields `url` and `campaign`.

An example ```params```:
```json
{
    "parallel_url":"http://ecosystem-runtime:8091",
    "parallel_campaign":"recommender_dynamic_bayes"
}
```

If both methods are used the values in the `params` JSONObject will be used. By default, the remainder of the `/invocations` call will be the same as the existing deployment. These defaults can be overridden using the same structure. For example, to set the `subcampaign` either add `parallel_subcampaign` to `params` or add a field `subcampaign` to the `parallel_deployment` Additional Corpora.

In order to mitigate the increase in latency from adding the additional API call, `callParallelDeployment` is asynchronous and will not delay the execution of the post scoring logic. The additional calls will increase the load on the databases used for logging and lookups to the same degree as a standard Dynamic Interaction deployment.

**Note:** As the `callParallelDeployment` method is asynchronous it cannot be included in a `static` post scoring logic class. If your existing deployment is using `static` post scoring logic you will need to adjust this when including the `callParallelDeployment` method.

**Note:** `callParallelDeployment` is available from version 0.9.6.0 and later. If you are using an earlier version of the runtime you will need to implement your own asynchronous method to call the parallel deployment.

## Calling the response API
As the offers recommended by the Dynamic Interaction deployment are not presented to the customer, the learning will have to be an approximation of the actual learning. There are a number of ways to simulate offer take up in the form of `/response` calls. Here we will use an approach utilizing the take up rate of the offers generated by the existing deployment, but other methods may be more appropriate for your use case.

To simulate responses we will set up logic to determine which `/response` calls to make in one minute intervals. This scheduling could be done using cron or a pipelining tool, here we use python to both schedule the check and to make the required calls.
```python
#Import the required packages
from prediction.apis import data_management_engine as dme
from prediction import jwt_access
from runtime.apis import predictor_engine as o
from runtime import access
from datetime import datetime, timedelta

# Connect to the server
ecosystem_password = getpass.getpass("Enter your ecosystem password")
auth = jwt_access.Authenticate("http://ecosystem-server:3001/api", "user@ecosystem.ai", ecosystem_password)

# Connect to the runtime configured with the parallel deployment
auth_runtime = access.Authenticate("http://ecosystem-runtime:8091")

# Set up the initial schedule interval
now = datetime.now()
# Set the difference between the notebook and runtime time zones in minutes
time_zone_shift = 120
# Set the scheduling interval in minutes
interval = 1
# The starting point for the interval
now_less_schedule = datetime.strftime(now - timedelta(minutes = time_zone_shift+interval),"%Y-%m-%d %H:%M:%S")
# Loop through the response call check until interrupted
while True:
    # Get an acceptance count for each offer in the interval
    offer_count_list = dme.post_mongo_db_aggregate_pipeline(
        auth,
        {
        # Assumes the standard logging configuration, adjust if required
        "database":"logging","collection":"ecosystemruntime_response"
        ,"pipeline":[
            {"$match":{"$expr":{"$and":[
                {"$eq":["$predictor","offer_recommend_single_model"]}
                ,{"$ne":["$response_log.final_result",[]]}
                ,{"$gte":["$date_log",{"$toDate":now_less_schedule}]}
            ]}}}
            ,{"$unwind":"$response_log.final_result"}
            ,{"$project":{"offer":"$response_log.final_result.result.offer","_id":0}}
            ,{"$group":{"_id":"$offer","count":{"$sum":1}}}
        ]
        }
    )

    # Loop through offers accepted and make the corresponding response calls
    for offer_iter in offer_count_list:
        offers_for_response = dme.post_mongo_db_aggregate_pipeline(
            auth,
            {
            # Assumes the standard logging configuration, adjust if required
            "database":"logging","collection":"ecosystemruntime"
            ,"pipeline":[
                # Get the offers made by the dynamic interaction deployment
                {"$match":{"$expr":{"$and":[
                    {"$eq":["$predictor","offer_recommend_dynamic"]}
                    ,{"$ne":["$final_result",[]]}
                    ,{"$gte":["$date_log",{"$toDate":now_less_schedule}]}
                ]}}}
                # Unwind final result to cater for multiple offers in a sinlge response
                ,{"$unwind":"$final_result"}
                # Match the offer being simulated
                ,{"$match":{"$expr":{"$eq":["$final_result.result.offer",offer_iter["_id"]]}}}
                # Sort the offers based on the modified offer score. Here we have added some random noise, this can be removed if not required
                ,{"$addFields":{"randomised_score":{"$add":["$final_result.result.modified_offer_score",{"$divide":[{"$rand":{}},20]}]}}}
                # Sort based on the score and limit to the number of offers accepted. Note that if the number of times the offer has been recommended by the dynamic interaction deployment is less than the number made by the existing deployment, then the result will be less than offer_iter["count"]
                ,{"$sort":{"randomised_score":-1}}
                ,{"$limit":offer_iter["count"]}
                # Structure the output as required by the response API
                ,{"$project":{
                    "uuid":1
                    ,"offer":"$final_result.result.offer"
                    ,"offers_accepted":[{"offer_name":"$final_result.result.offer"}]
                    ,"channel":"simulation"
                    ,"_id":0
                }}
            ]
            }
        )
        # Call the response API for each offer with simulated take up
        for response_iter in offers_for_response:
            o.put_offer_recommendations(auth_runtime, response_iter, " ")

    #Set the starting point for the next interval
    now_less_schedule = datetime.strftime(datetime.now() - timedelta(minutes = time_zone_shift),"%Y-%m-%d %H:%M:%S")
    #Wait for the interval duration before checking again
    time.sleep(interval*60)
```

## Explore the results
Thanks to the calls to the `/invocations` and `/response` APIs, you should now have a reasonable approximation of the behaviour of the Dynamic Interaction deployment in the logging collections configured for the deployment. The behaviour of the Dynamic Interaction deployment then can be explored using the standard Grafana dashboards or by running any other desired analysis on the data.

---

## Exploration using epsilon

Source: `docs/user_guides/epsilon_exploration.mdx`
URL: https://ecosystem.ai/docs/user_guides/epsilon_exploration
Summary: This lesson outlines the different ways to explore using an epsilon based approach.

# Introduction
Exploring your prediction space by making a portion of your recommendations at random on an on going basis has a number of benefits. These include having a clean set of data to use for further modelling, mitigating fixation for Dynamic Interaction algorithms and providing a performance baseline. This type of exploration is known as $\epsilon$ exploration and is configured by setting an $\epsilon$ parameter which is the proportion of recommendations that are made at random.

There are currently three approaches for implementing $\epsilon$ exploration in the ecosystem.Ai platform:
1. Project level $\epsilon$ which randomises the order of the items recommended in the post scoring logic.
2. Model level $\epsilon$ for the Ecosystem Rewards algorithm which randomises the arm reward generated by the Ecoystem Rewards algorithm before passing the results to the post scoring logic.
3. The $\epsilon$-greedy Dynamic Interactions algorithm which presents randomised offers to a proportion of customers and presents the best performing offers to the rest of the customers.

Below we outline the implementation of each of these approaches to highlight to advantages and disadvantages of each approach.

## Project level epsilon

**Note:** - There is a known issue with Project level epsilon when using the Eccosystem Rewards Dynamic Interaction algorithm with runtime versions 0.9.5.0 and earlier. In these past versions of the runtime `explore` in `params` is not set correctly when using the Ecosystem Rewards algorithm.
    - To work around this issue, `explore` should be set in the the post scoring logic using the project level epsilon value.

### Configuring epsilon
Project level $\epsilon$ is configured in the [Deployment](/docs/configuration/deployment) settings. The $\epsilon$ parameter is a number between 0 and 1 which specifies the proportion of recommendations that should be made at random. For example, if $\epsilon$ is set to 0.1, then 10% of the recommendations will be made at random. In order to set the $\epsilon$ parameter in the workbench enable New Knowledge in the Deployment and set the epsilon value in the accordion that appears at the bottom of the screen. To set the $\epsilon$ parameter in the python package, set the `epsilon` parameter in the `define_deployment_multi_armed_bandit` function. The following truncated example shows how to set the $\epsilon$ parameter in the python package:
```python
from prediction.apis import deployment_management as dm
from prediction.apis import ecosystem_generation_engine as ge
#Configure epsilon
new_knowledge = dm.define_deployment_multi_armed_bandit(epsilon=0.1)
#Create a deployment using the configured value of epsilon
deployment_step = dm.create_deployment(
    auth,
    project_id=project_id,
    deployment_id=deployment_id,
    version=version,
    plugin_post_score_class="PlatformDynamicEngagement.java",
    plugin_pre_score_class="PreScoreDynamic.java",
    scoring_engine_path_dev=runtime_path,
    parameter_access=parameter_access,
    multi_armed_bandit=new_knowledge,
    setup_offer_matrix=offer_matrix,
)
#Push the deployment and print the resulting properties file
push_result = ge.process_push(auth,deployment_step)
if "ErrorMessage" in push_result:
    print(push_result["ErrorMessage"])
else:
    print(push_result["properties"])
```
The properties file that is generated by pushing the configured Deployment will contain the following entry:
```properties
predictor.epsilon=0.1
```
This value will be used by the runtime to allocate API calls for the exploration approach. These changes will require a push or `/refresh` of the deployment to take effect.

### How epsilon is used
The $\epsilon$ parameter is used to allocate API calls for exploration during the scoring process. As part of the scoring process a random number is generated and compared to the $\epsilon$ parameter. If the random number is less than the $\epsilon$ parameter, then the API call is allocated for exploration. If an item is allocated for exploration, the `explore` integer in the `params` JSONObject is set to 1, otherwise it is set to 0. If the getTopScores method is then used in the post scoring logic to generate the object that is returned then this value of `explore` will automatically be used to determine whether the top scores are selected randomly or not. The following code snippet shows how this is done:
```java
	/**
	 * @param params
	 * @param predictResult
	 * @return
	 */
	private static JSONObject getTopScores(JSONObject params, JSONObject predictResult) {
		int resultCount = 1;
		if (params.has("resultcount")) resultCount = params.getInt("resultcount");
		if (predictResult.getJSONArray("final_result").length() <= resultCount)
			resultCount = predictResult.getJSONArray("final_result").length();

		/* depending on epsilon and mab settings */
		if (params.getInt("explore") == 0) {
			predictResult.put("final_result", getSelectedPredictResult(predictResult, resultCount));
			predictResult.put("explore", 0);
		} else {
			predictResult.put("final_result", getSelectedPredictResultRandom(predictResult, resultCount));
			predictResult.put("explore", 1);
		}
		return predictResult;
	}
```
The `explore` integer can also be extracted from the `params` JSONObject earlier in the post scoring logic and used to construct additonal logic if required.

## Model level epsilon for Ecosystem Rewards

### Configuring epsilon
Model level $\epsilon$ can be set for the Ecosystem Rewards algorithm as part of the [Dynamic Interaction set up](/docs/configuration/dynamic/parameters/) in the engagement tab. $\epsilon$ can be set in the Advanced Setting accordion. Once $\epsilon$ is set and the configuration has been saved, the value of $\epsilon$ should be set if in `randomisation` object of the configuration stored in the `dynamic_engagement` collection in the `ecosystem_meta` database. This change will require a push or `/refresh` of the deployment to take effect. The following truncated example shows how to set the $\epsilon$ parameter in the python package:
```python
from prediction.apis import online_learning_management as ol
from prediction.apis import deployment_management as dm
from prediction.apis import ecosystem_generation_engine as ge
#Configure epsilon
online_learning_uuid = ol.create_online_learning(
        auth,
        name=deployment_id,
        description=dynamic_interaction_description,
        feature_store_collection=ol_feature_store_collection,
        feature_store_database=ol_feature_store_database,
        options_store_database=options_collection,
        options_store_collection=options_db,
        randomisation_success_reward = 0.5,
        randomisation_fail_reward = 0.05,
        randomisation_processing_count = 200,
        randomisation_processing_window = 604800000,
        randomisation_epsilon = 0.1,
        contextual_variables_offer_key="offer"
)
#Configure the deployment to use the Dynamic Interaction configuration
new_knowledge = dm.define_deployment_multi_armed_bandit(epsilon=0, dynamic_interaction_uuid=online_learning_uuid)
#Create a deployment using the configured value of epsilon
deployment_step = dm.create_deployment(
    auth,
    project_id=project_id,
    deployment_id=deployment_id,
    version=version,
    plugin_post_score_class="PlatformDynamicEngagement.java",
    plugin_pre_score_class="PreScoreDynamic.java",
    scoring_engine_path_dev=runtime_path,
    parameter_access=parameter_access,
    multi_armed_bandit=new_knowledge,
    setup_offer_matrix=offer_matrix,
)
#Push the deployment and print the resulting properties file
push_result = ge.process_push(auth,deployment_step)
if "ErrorMessage" in push_result:
    print(push_result["ErrorMessage"])
else:
    print(push_result["properties"])
```

### How epsilon is used
The $\epsilon$ parameter is used to allocate API calls for exploration during the scoring process. As part of the scoring process a random number is generated and compared to the $\epsilon$ parameter. If the random number is less than the $\epsilon$ parameter, then the API call is allocated for exploration. If an item is allocated for exploration, then the `arm_reward` score is set to a number sampled from a uniform distribution between 0 and 1 instead of being sampled from the Beta distribution defined by the $\alpha$ and $\beta$ parameters. 

In contrast to the project level $\epsilon$ approach, the model level $\epsilon$ approach applies the exploration before the post scoring logic so the scope for further processing and additional logic is limited.

## Epsilon-greedy Dynamic Interactions
The $\epsilon$-greedy Dynamic Interactions algorithm uses $\epsilon$ exploration as the core prediction approach rather than as an addition to another approach as in the previous two approaches. The details of the algorithm are described in the [Dynamic Interactions](/docs/configuration/dynamic/parameters/) section.

---

## Data From Another Runtime

Source: `docs/user_guides/external_runtime_data.mdx`
URL: https://ecosystem.ai/docs/user_guides/external_runtime_data
Summary: This lesson outlines how to get data from an external runtime.

# Introduction
The Parameter Access and Additional Corpora components of a [Deployment](/docs/configuration/deployment/) can be configured to get their data from a different runtime which is configured to get the data from MongoDB, Cassandra or Presto. This enables two use cases:
1. If multiple runtime cases are configured to connect to the same tables, passing the data requests through a single runtime will reduce the number of connections opened to the database.
2. Each runtime can connect to a single instance of MongoDB, Cassandra or Presto. If data from multiple runtimes is required in a single runtime, then that data can be accessed through the runtime that is connected to desired instance. 

Below we outline the implementation of each of these approaches to highlight to advantages and disadvantages of each approach.

**Note:** - Only `static` and `dynamic` type Additional Corpora can be configured to use a runtime as a data source. The `dynamic_engagement` and `experiment` types cannot be configured to use a runtime as a data source.
    - The Additional Corpora types should be the same across the two runtimes.
    - The `/refresh` endpoint needs to be called on both runtimes for all of the data to be refreshed.

## Configure a runtime to pass data
The first step is to configure a runtime to get the data from the data source of interest. Both Parameter Access and Additional Copora can be configured. `PostScoreProvideData` should be configured as the post scoring logic in order to generate an API response containing the data in the expected format. Below we show an example of how the runtime can be configured using the python package:
```python
from prediction.apis import deployment_management as dm
from prediction.apis import ecosystem_generation_engine as ge

# The name of the project and deployment on which you will be working.
project_id = "Example Project"
deployment_id_lookup = "external_data_lookup"
runtime_path_lookup="http://ecosystem-runtime:8091"
# The database from which the data will be pulled
db = "recommender_demos"
#Configure the lookup to the customer feature store
parameter_access_lookup = dm.define_deployment_parameter_access(
    auth,
    lookup_key="customer",
    lookup_type="int",
    database=db,
    table_collection="offer_feature_store",
    datasource="mongodb"
)
#Configure the additional corpora
additional_corpora = [
    {"name":"location_details","database":"mongodb","db":"recommender_demos","table":"location_information","type":"dynamic","key":"location"}
    ,{"name":"device_details","database":"mongodb","db":"recommender_demos","table":"device_info","type":"static","key":"device"}
]
#Create a deployment
version = "001"
deployment_step = dm.create_deployment(
    auth,
    project_id=project_id,
    deployment_id=deployment_id_lookup,
    description="External data lookup",
    version=version,
    plugin_post_score_class="PostScoreProvideData.java",
    scoring_engine_path_dev=runtime_path_lookup,
    mongo_connect=f"mongodb://ecosystem_user:{mongo_password}@ecosystem-server:54445/?authSource=admin",
    parameter_access=parameter_access_lookup,
    corpora=additional_corpora,
)
#Push deployment and make a test call to validate the results
deployment_step = dm.get_deployment_step(auth, project_id, deployment_id_lookup, version,project_status="experiment")
push_result = ge.process_push(auth,deployment_step)
if "ErrorMessage" in push_result:
    print(push_result["ErrorMessage"])
    raise ValueError("Push failed")
#Test your deployment
post_invocations_input = {
                            "campaign": deployment_id_lookup
                          , "subcampaign": "none"
                          , "channel": "notebooks"
                          , "customer": 793
                          , "userid": "test"
                          , "numberoffers": 1
                          , "params": "{additional_corpora:[location_details,device_details]}"
                        }
offer_response = o.invocations(auth_lookup, post_invocations_input)
print(offer_response)
```

## Configure a runtime to use to passed data
To use data from another runtime, Parameter Access and Additional Corpora should be configured to use runtime as a Data Source and the URL of the runtime to get the data from should be configured. Below we show an example of how the runtime can be configured using the python package:
```python
from prediction.apis import deployment_management as dm
from prediction.apis import ecosystem_generation_engine as ge
from prediction.apis import online_learning_management as ol

#The name of the project and deployment on which you will be working.
deployment_id = "offer_recommend_dynamic"
runtime_path="http://ecosystem-runtime2:8092"
#Get a dynamic interaction configuration to add to the deployment
dynamic_interaction_uuid = ol.get_dynamic_interaction_uuid(auth,deployment_id)
dynamic_interaction = dm.define_deployment_multi_armed_bandit(epsilon=0, dynamic_interaction_uuid=dynamic_interaction_uuid)
#Configure the lookup to the customer feature store
parameter_access = dm.define_deployment_parameter_access(
    auth,
    lookup_key="customer",
    lookup_type="int",
    datasource="runtime",
    url=runtime_path_lookup,
    lookup_fields=parameter_access_lookup["lookup_fields"]
)
#Configure the additional corpora
additional_corpora = [
    {"name":"location_details","database":"runtime","url":"http://ecosystem-runtime:8091","type":"dynamic","key":"location"}
    ,{"name":"device_details","url":"http://ecosystem-runtime:8091","database":"runtime","type":"static","key":"device"}
]
#Create your deployment
version = "001"
deployment_step = dm.create_deployment(
    auth,
    project_id=project_id,
    deployment_id=deployment_id,
    description="Ecosystem Rewards algorithm getting data from external source",
    version=version,
    plugin_post_score_class="PlatformDynamicEngagement.java",
    plugin_pre_score_class="PreScoreDynamic.java",
    scoring_engine_path_dev=runtime_path,
    mongo_connect=f"mongodb://ecosystem_user:{mongo_password}@ecosystem-server:54445/?authSource=admin",
    parameter_access=parameter_access,
    multi_armed_bandit=dynamic_interaction,
    corpora=additional_corpora
)
#Push deployment and make a test call to validate the results
deployment_step = dm.get_deployment_step(auth, project_id, deployment_id, version,project_status="experiment")
push_result = ge.process_push(auth,deployment_step)
if "ErrorMessage" in push_result:
    print(push_result["ErrorMessage"])
    raise ValueError("Push failed")
#Test your deployment
post_invocations_input = {
                            "campaign": deployment_id_lookup
                          , "subcampaign": "none"
                          , "channel": "notebooks"
                          , "customer": 793
                          , "userid": "test"
                          , "numberoffers": 1
                          , "params": "{}"
                        }
offer_response = o.invocations(auth_runtime, post_invocations_input)
pp.pprint(offer_response)
```
The properties file that is generated by pushing the configured Deployment will contain the following entries:
```properties
predictor.param.lookup={predictor:'offer_recommend_dynamic',mojo:1,database:'runtime',db:'default',table:'default',url:'http://ecosystem-runtime:8091',lookup:{"value":123,"key":"customer"},result:{parm1:'field1', parm2:'field2'}}

predictor.corpora=[{"database":"runtime","name":"location_details","type":"dynamic","url":"http://ecosystem-runtime:8091","key":"location"},{"database":"runtime","name":"device_details","type":"static","url":"http://ecosystem-runtime:8091","key":"device"},{"database":"mongodb","name":"dynamic_engagement","update":true,"type":"dynamic_engagement","uuid":"1db3c3b2-a140-4af5-a26e-91ca2bc59022","db":"ecosystem_meta","table":"dynamic_engagement"},{"database":"mongodb","name":"dynamic_engagement","update":true,"type":"dynamic_engagement_options","uuid":"1db3c3b2-a140-4af5-a26e-91ca2bc59022","db":"recommender_demos","table":"dynamic_set_up_feature_store_options"}]
```

---

## Intro

Source: `docs/user_guides/index.mdx`
URL: https://ecosystem.ai/docs/user_guides
Summary: Collection of "user guides" providing an overview of various features offered by ecosystem.Ai

# User Guides

Whether you're a new user or looking to explore more advanced features, this comprehensive collection is designed to help you navigate through the various functionalities of ecosystem.Ai seamlessly. We discuss business, data science and technological concepts.

- [**Recommender**](/docs/user_guides/recommender): This guide provides an overview of a Recommender implementation in ecosystem.Ai.
- [**Dynamic Recommender**](/docs/user_guides/dynamic): Implement the Dynamic Recommender configuration and parameters in ecosystem.Ai.
- [**Runtime Plugin Development**](/docs/user_guides/runtime_plugin_development): This guide provides an overview of how to set up your local environment for pre and post scoring logic development and includes guidelines on developing the logic.
- [**Exploration Using Epsilon**](/docs/user_guides/epsilon_exploration): Provides an overview of the different ways in which $\epsilon$ exploration can be implemented in ecosystem.Ai.
- [**Virtual Variables**](/docs/user_guides/virtual_variables): This guide provides an overview of the Virtual Variables functionality in ecosystem.Ai. The Virtual Variable functionality allows new variables to be derived from the customer lookups.
- [**Network Selector**](/docs/user_guides/network): Provides an overview of how to configure the Network Selector. The Network Selector allows you to route traffic to different runtimes based on a number of different criteria.
- [**Testing Dynamic Interaction Deployments**](/docs/user_guides/dynamic_interaction_deployments): This guide provides an overview of how to test Dynamic Interaction deployments using the `callParallelDeployment` method in PostScoreSuper.
- [**Converting static model deployments to Dynamic Interaction Deployments**](/docs/user_guides/static_to_dynamic): Provides detailed instructions for converting deployments configured using static models to use a Dynamic Interaction configuration.
- [**Use runtimes as data sources**](/docs/user_guides/external_runtime_data): This guide details how runtimes can be used as data sources.

---

## Network Selector

Source: `docs/user_guides/network.mdx`
URL: https://ecosystem.ai/docs/user_guides/network
Summary: The Network Selector enables routing of calls to the ecosystem.Ai runtime to different logic configurations.

# Network Selector

The Network Selector is a powerful tool that allows you to define and manage the routing of requests based on various criteria.

![Network Configuration](/images/runtime/network.png)

The network selector in ecosystem.ai uses a configuration to dynamically route each prediction or interaction request to one of multiple ecosystem runtime configurations (e.g., Configuration A, B, or C). This lets you easily compare different model versions, capture feedback and logs, and adapt to evolving experiments - all managed under a single, unified API.

When setting up a project to support network routing, you will need to configure the network selector. This involves defining the network configuration and specifying the routing criteria. 

**Note:** Use the `PostScoreNetwork` postscore plugin in your project deployment to enable the network selector.

## Network Types

Here are the different types of network selectors, that will perform different routing mechanisms based on the network configuration:

- **model_selector**:
Calls an external model selector to get a sorted list of options based on scores. It then calls other runtimes in sequence based on the model selector's score.

- **no_logging_router**:
Routes requests without logging. It uses a switch key in a data lookup to determine the network configuration and calls an external service based on this configuration.

- **experiment_selector**:
Routes requests based on an experiment setup. Customers are randomly allocated to experimental groups on first interaction with the experiment and then follow the same routing on subsequent interactions.

- **lookup_passthrough**:
Looks up a value with result pass-through. It uses a switch key in a data lookup to determine the network configuration and calls an external service based on this configuration. 

- **default**:
The default routing mechanism. It uses a switch key in a data lookup to determine the network configuration and calls an external service based on this configuration. 

## Network Configuration

There are two configuration settings that need to be created for the selector to work, `network` and `network_config`. `network_config` specifies the type of the network and any network level settings. `network` is a collection of documents specifying the parameters for the network nodes. `network` contains one document for each node in the network.

## Model Selector

The model selector is a network configuration that calls an external model selector to get a sorted list of options based on scores. It then calls other runtimes in sequence based on the model selector's score.

### **network_config**:
The network_config should have a `type` of `model_selector` and include a `selector` object which contains the details of the runtime to call to get the ordering of external runtimes to call to generate the final result set.

Example:
```json
{
  "name": "network_config",
  "type": "model_selector",
  "selector": {
    "subcampaign": "recommender_dynamic_bayes",
    "channel": "app",
    "campaign": "recommender_dynamic_bayes",
    "params": "{}",
    "value": "married",
    "userid": "ecosystem_network",
    "url": "http://customer.ecosystem.ai:8091",
    "customer": "281db655-d667-4671-a715-8402c29d7d11"
  }
}
```

### **network**:
This configuration file contains the actual network options. Each entry corresponds to a possible value of the offers returned by the selector specified in the network_config. It includes parameters such as numberoffers, subcampaign, channel, campaign, in_params, value, userid, url, and customer.

Example:
```json
{
  "numberoffers": 4,
  "subcampaign": "recommender_dynamic_bayes",
  "channel": "app",
  "campaign": "recommender_dynamic_bayes",
  "in_params": "{}",
  "value": "married",
  "userid": "ecosystem_network",
  "url": "http://customer.ecosystem.ai:8091",
  "customer": "281db655-d667-4671-a715-8402c29d7d11"
}
```

**Note:** If you pass `exclude_category` as a key in the `params` of the original API call then the corresponding value will be exclude even if it is included in the response from the selector

## Lookup Passthrough, Default and No Logging Router

The lookup passthrough default and no logging routers uses a switch_key to determine the network configuration and call an external service based on this configuration. The switch key is the name of a feature in the `parameter access` configured for the network runtime. The `lookup_passthrough` type will pass the exact response received by the network runtime, `default` will standardise the formatting of the responses and `no_logging_router` will not log the network runtime interactions.

### **network_config**:
```json
{
   "switch_key": "cohort",
   "name": "network_config",
   "type": "lookup_passthrough"
}
```

### **network**:
In this example the network configuration is set to route requests based on the cohort value. It includes parameters such as numberoffers, subcampaign, channel, campaign, in_params, value, userid, url, and customer. If those are not present, then it will pass it through from the calling service.
```json
{
  "campaign": "dynamic-recommender",
  "value": "1",
  "url": "http://localhost:8015"
}
```

## Experiment Selector

The `experiment_selector` network will randomly assign customers to experiment groups based on proportions defined in the `network_config`. The first time customers interact with a configuration they will be assigned to an experiment group, on subsequent interactions that assigned group will persist. This is done using the contacts logging collection. To enable this:
- The logging connection and database should be the same for all of the ecosystem.Ai runtimes in the network, including the network runtime itself
- An index `{"params.value":1,"predictor":1}` should be added to those already present in the logging collection

### **network_config**:
```json
{
  "name": "network_config",
  "selector": {
    "random_splits": [
      0.4
    ],
    "groups": [
      "experiment__group_a",
      "experiment__group_b"
    ]
  },
  "predictor": "experiment__options",
  "type": "experiment_selector",
  "version": "001"
}
```

### **network**:
In this example the network configuration is set to route requests based on assigned experiment group. It includes parameters such as numberoffers, subcampaign, channel, campaign, in_params, value, userid, url, and customer. If those are not present, then it will pass it through from the calling service.
```json
{
  "campaign": "dynamic-recommender",
  "value": "experiment__group_a",
  "url": "http://localhost:8015"
}
```

## Logging

Besides the `no_logging_router` network type, both the Network Selector runtime and the node runtime will generate contact and response logs, so both the performance of the node and the network as a whole can be easily monitored. In order for this to occur the following process is followed:
1. When a response to the Network Selector `/invocations` API is received, it will contain the UUID of the contact logged by the node runtime
2. The contact logged by the node runtime will contain the UUID of the Network Selector contact as a field in the `in_params` object
3. When the `/response` API is called on the Network Selector with the `/invocations` UUID it will first log a response for the node runtime and then use the UUID in `in_params` of the node contact to create a response for the Network Selector. 

**Note:** - The Network Selector and nodes should use the same contacts and response collections
  - The `/response` API should be called on the Network Selector runtime rather than the node runtime

---

## Deployment

Source: `docs/user_guides/recommender/deployment.mdx`
URL: https://ecosystem.ai/docs/user_guides/recommender/deployment
Summary: Deployment is where you deploy machine learning models into production environments, ensuring they are operational, scalable, and integrated seamlessly with existing systems to deliver real-time insights and actions.

# Put your predictions into production
The Deployment section of the Workbench is where you deploy machine learning models into production environments, ensuring they are operational, scalable, and integrated seamlessly with existing systems to deliver real-time insights and actions.

Now that you have uploaded, ingested and viewed your data, built a feature store and generated and trained models, you will need to put your recommender into production. The deployment is where you will set your recommender to be used in the Production, Quality Assurance or Test environment.
**Default settings are good!:** Most of the settings in this step can be left at their default values.

## View Deployments
In the <u>Deployment</u> section of the Workbench, you will find <u>Projects</u>.

This is where you will be able to configure the parameters of your deployment, and push it to the desired environment.
Find your project in the list of projects and click on it to view or create the deployments for it.

![deployments list](/images/recommender/6_Deployment/0_deployments.png)

## Add Deployment
To view and edit a pre-existing deployment configuration, click on the deployment name. In order to create a new deployment, select **+ Add Deployment**.
A window will open up below where you can specify the details of your new deployment.

![Add deployment](/images/recommender/6_Deployment/1_deployments_add.png)

## Configure Deployment
Set the case configuration for your recommender deployment.
- Create a unique *Prediction Case ID* name.
- Add a *Description* that is relevant to the specific deployment you are configuring.
- Add the *Type* and the *Purpose* of your deployment. You can leave the *Type* and *Purpose* blank if you are unsure of what to put there.
- Input the properties details and set the *Version* of the deployment step. This *Version* number should be updated every time you make changes to the deployment.
- Specify the *Environment Status* in which you will be deploying your configuration.
- Then input the *Performance Expectation* and *Complexity* settings for your set up.

![Configure deployment](/images/recommender/6_Deployment/2_deployments_details.png)

## Deployment Settings
Selecting any of the checkboxes on the right, will reveal the <u>Settings</u> sections relevant to that option, at the bottom of the page.

![Deployment settings dropdowns](/images/recommender/6_Deployment/3_deployments_settings.png)

### Prediction Model
Select *Prediction Model* and specify the model that you want to use in your recommender.
Enter the names of the models that you have generated, trained and saved in <u>Predictions</u> for deployment.

![Prediction model](/images/recommender/6_Deployment/4_deployments_prediction_model.png)

### Parameters from Data Source
Select *Parameters from Data Source* to access a database.
This is for when you want to get data for making predictions from a database that is accessible to your production environment. The alternative to this, is passing the data through the API.
Data uploaded to the platform and ingested, will be available to the recommender in production.

![Parameters from data source](/images/recommender/6_Deployment/5_deployments_parameters.png)

## Serving Engine Settings
There are a range of different Serving Engine Settings that can be selected to enhance the functionality of your deployments.
**Prediction Activators further documentation:** Detailed documentation coming soon

![Prediction activators](/images/recommender/6_Deployment/6_deployments_ses.png)

### Offer matrix
Loaded in memory and accessed in the plugins. For the purpose of default pricing, category and other forms of lookup. To use default functionality you need to review the [specific data format](/docs/configuration/data/meta).
### Plugins
Supports three primary areas: API definition, pre-score logic and post-score logic. There are a number of post-score templates.
### Budget Tracker
Track offers and other items used through the scoring engine, and alter the behavior of the scoring system. Must include the post-score template for this option to work.
### Whitelist
Allows you to test certain options with customers. The results will be obtained from a lookup table. Must include the post-score template for this option to work.
### New knowledge
Allows you to add exploration to your recommender. This will happen by specifying the epsilon parameter. Epsilon% (eg. 0.3 = 30%) of the interactions will be selected at random, while the remaining ones will be selected using the model.
### Pattern selector
Allows different patterns when options are presented, through the scoring engine result.

## Push Configuration
Remember to **Update**!
When you are done with your deployment configuration, click **Push** to set the deployment up in your specified environment. No downtime is required!
The **Generate** and **Build** buttons are not needed for now, they are designed for Enterprise and on-premise setups.

![Push configuration](/images/recommender/6_Deployment/7_deployments_push.png)

**Note:** Your predictions are now ready to be used in your desired environment, we suggest you test your APIs in the Workbench before going live!

---

## Feature Stores

Source: `docs/user_guides/recommender/feature_stores.mdx`
URL: https://ecosystem.ai/docs/user_guides/recommender/feature_stores
Summary: Feature Stores is where you store, manage, and retrieve precomputed features, ensuring consistency and reusability across various machine learning models and applications.

# Build Feature Stores for Predictions
The Feature Stores section of the Workbench is where you store, manage, and retrieve precomputed features, ensuring consistency and reusability across various machine learning models and applications.

Using the collection you have just exported, you will need to create a feature store to be used in your recommender. 

## Manage Feature Stores
In the <u>Recommenders</u> section of the Workbench, you will find <u>Feature Stores</u>.
Here, you will be able to add, view, and delete all the feature stores.

![Feature stores](/images/recommender/4_Feature_Stores/0_stores.png)

## Add a Feature Store
To create a feature store from your exported data set, click **+ Feature Store**.
The input fields will be where you set the configuration settings for your final Feature Store. You will need to provide a unique name in *Feature Store ID* and a good *Description*.
The feature store can also be allocated to an existing project to help ease your project creation journey. 

![Add feature store](/images/recommender/4_Feature_Stores/1_stores_add.png)

## Check Data
Specify the characteristics of the file you will be building the feature store on, and click **Check Data**.
Clicking **Check Data** will create a table of all of the columns in your data set. You can change the automatically allocated type of each column on the right. You can also add descriptions to those columns if you wish.
Once you have correctly typed and described the details, the *Destination Frame* will be pre-populated with your feature store name .hex file.
If you want your feature store to have a different name, you can change it here. This .hex file will be used in the next step when configuring your predictions.

![Check feature store data](/images/recommender/4_Feature_Stores/2_stores_check_data.png)

## Parse Data
To trigger the creation of your feature store with all these details, click **Parse Data**.

![Parse data](/images/recommender/4_Feature_Stores/3_stores_parse.png)

**Note:** Make sure to always **Save** your feature store definitions as you progress through the steps.

---

## Files & Feature Engineering

Source: `docs/user_guides/recommender/files_features.mdx`
URL: https://ecosystem.ai/docs/user_guides/recommender/files_features
Summary: Files and Feature Engineering is where you import, manage, and transform raw data into valuable features to enhance machine learning models, enabling efficient data preparation and preprocessing.

# Manage your Data and do Feature Engineering 
The Files section, and the Feature Engineering section of the Workbench is where you import, manage, and transform raw data into valuable features to enhance machine learning models, enabling efficient data preparation and preprocessing.

The data used to set up your recommender will likely consist of historical information. Whether offers that have been taken up by clients, and/or characteristics of the client at the point they were presented with offers. 
**Note:** Examples of different styles of recommender data sets can be found in the example projects.

## Add Data
In the <u>Data and Features</u> section of the Workbench, you will find <u>Manage Files</u>.
Here, you will be able to add, view, delete and download the data files available for you to build predictions with.

![Manage files](/images/recommender/3_Files_Features/0_files_manage.png)

## Upload Data
To upload a file of your own, select **+ Upload File.**
A section will open below the files list where you can input the details of your upload. Files must be uploaded in either CSV or JSON format.  Upload and then refresh, the file will appear in your files list.

![Upload files](/images/recommender/3_Files_Features/1_files_upload.png)

## Download Data
To download a file, click on the file name.
A section will open up where you can view the details of your download. Click **Download** and select your download location.

![Download files](/images/recommender/3_Files_Features/2_files_download.png)

## Delete Data
To delete a file, click **Delete** to the right of the file name.
Deleting a file from here will remove the file from all projects whether active or inactive!

![Delete files](/images/recommender/3_Files_Features/3_files_delete.png)

## Connect a Database
In the <u>Data and Features</u> section of the Workbench, you will find <u>Feature Engineering</u>. Add a database using connection strings with the <u>Presto Data Navigator</u>.
If you have your own database, you can connect it here. This database access option uses the Presto Worker in the platform. Add a Connection path, similar to this example: <code>local/master?user=admin</code>. Then write a SQL statement to extract the data you want, similar to this example:<code>select * from master.bank_customer limit 2</code>. Then click **Execute**.

![Presto navigator](/images/recommender/3_Files_Features/4_features_presto.png)

**Using Presto in the Workbench:** In order to add data using the presto functionality, you must first have your presto connection accurately set up.

## Ingest Data
Ingest data to be used in your projects with the <u>Ecosystem Data Navigator</u>. 
Once data has been added to the Platform it must be ingested into a specified database and collection.

![Ingest Data](/images/recommender/3_Files_Features/5_features_data_ingest.png)

## Add a Database
You can either select a database and ingest your file into it, or create a new database by selecting **+ Add Database**. 

![Add database](/images/recommender/3_Files_Features/6_features_database_add.png)

Add a unique database name related to your project. Click the **Database** button to the left of the input field to create it. 

![Create database](/images/recommender/3_Files_Features/7_features_database_create.png)

Once your database has been created, refresh the database list and click into it.

![View database](/images/recommender/3_Files_Features/8_features_database_view.png)

## Ingest Collections
To ingest your file as a new collection inside your chosen database, select **+ Ingest Collection**. 

![Ingest collection](/images/recommender/3_Files_Features/9_features_collection_ingest.png)

Select your file from the file list. 
You will see the file name appear above the *Ingest: input field*. Either copy this name or choose a unique one related to your project, then click **Ingest** to the left of the input.

![Select collection](/images/recommender/3_Files_Features/10_features_collection_ingest_data.png)

**Check collection name before ingesting!:** If the name of the collection you are ingesting already exists, the new data will be appended to the existing data. It will not replace the existing data.

## Find & Export Collections
Once data has been ingested, it must be put into a format in which it can be used by machine learning algorithms. In order to do this, export your Collection to the ecosystem platform. You can then create a feature store from the exported data. Refresh the page if your Collection has not yet appeared on the list. 
Find your Collection. Using the Options dropdown to the right of your collection name, click **Export**. 

![Export collection](/images/recommender/3_Files_Features/11_features_collection_export.png)

View and edit the details of your export. 
Most of the settings in this tab can remain default. If you are unsure of how much data to export, leave the Number to Export as 0 to export it all. Click **Export**.

![Export details](/images/recommender/3_Files_Features/12_features_collection_export_details.png)

**Note:** Now that you have consolidated your data, it's time to put it to work!

---

## How it Works

Source: `docs/user_guides/recommender/how_it_works.mdx`
URL: https://ecosystem.ai/docs/user_guides/recommender/how_it_works
Summary: The ecosystem.Ai recommender capability uses sophisticated tools that enable you to build more effective offers (recommendations).

# ecosystem.Ai Recommenders
The ecosystem.Ai recommender capability uses sophisticated tools that enable you to build more effective offers (recommendations).

Worker architecture allows for use of the latest modeling packages. Architected from the ground up for durability and performance, it returns results in real-time and is highly resilient. You also have easy deployment to production at the push of a button. If you want to use default functionality note that there is a [specific data format](/docs/configuration/data/meta) that will facilitate ease of use.

There are many ways to structure your recommenders:
- Multinomial models
- Collections of binomial models
- Incorporating an exploration component
- Stacked ensembles of recommendations.

## The Value of Real-Time Recommendations

Real-time allows you to use the latest information about your customer. Letting you use real-time features such as location, time of day, balance, etc. which aren’t available to batch models at all. Real-time ultimately removes the problems associated with batch-generated offers becoming irrelevant over time.

The difference between batch and real-time extends beyond the recommendation itself, in real-time, you will be able to view, analyze and adjust according to the customer response, the very moment it happens.

## Recommender Structures

There are a number of different model frameworks you can use in your recommender structure:

- **Multinomial models:**

A single model is built which predicts the offer that a customer is most likely to engage with.

- **Collections of binomial models:**

A model is built for each offer, which predicts the likelihood of a customer engaging with that offer.

- **Incorporating an exploration component (Bandit Algorithms):**

Rather than only presenting an offer which is predicted to be the most likely to be engaged with, occasionally present other offers in a way that allows you to explore whether the human behavior in your system has changed.

- **Stacked ensembles of recommendations:**

The output of one model can be used to inform the next model. For example, one model could recommend a design construct, while the next model sets the messaging within that design.

- **Knowledge-Based Systems:**

Recommends offers based on specific knowledge about users and items, often using a rule-based framework.

- **Reinforcement Learning:**

Models the recommendations as a series of sequential decisions, the uses reinforcement learning algortihms to optimize long-term interactions.

**Some more common model frameworks:** - Collaborative Filtering
- Content-based Filtering
- Hybrid Methods
- Deep Learning Models

---

## Introduction

Source: `docs/user_guides/recommender/index.mdx`
URL: https://ecosystem.ai/docs/user_guides/recommender
Summary: This lesson outlines the steps you will take to build the configurations needed for your recommender.

# Introduction
This lesson outlines the steps you will take to build the configurations needed for your recommender. 

- Go through the steps to: 
  - Identify the right kind of data for your project
  - Assign recommender model types
  - Configure deployment details 

- Learn how to view and analyze your recommender dashboards to alter variables and increase recommendation effectiveness.

Recommenders are one of the most commonly used types of prediction when adding intelligence to customer interactions. They can be used for recommending products, messages, design constructs, special offers, and more. 
A recommendation can be  made at any point in a customer journey when there is a choice of what to show to a customer.

## Challenges Associated with Recommenders
1. Real-time recommenders add significant value by providing instant, contextually relevant suggestions, but they are challenging to implement correctly.
2. Recommendations are often deployed at critical points in customer journeys, meaning there is no margin for error in terms of uptime and responsiveness.
3. Some recommendation approaches require the building and management of a large number of models.
4. Offering discounts and special offers as part of recommendations can be costly, necessitating careful budget management.
5. Focusing on a single recommendation option limits the exploration of possibilities, which is necessary to keep up with changing human contexts.

## Addressing Challenges with ecosystem.Ai
### 1. Clarifying Real-Time Complexity
Leveraging a scalable, low-latency infrastructure with robust data integration and processing capabilities, the platform uses online and continuous machine learning to keep models updated in real-time.
### 2. Managing High Stakes in Key Customer Journeys
Ensuring high availability and fault tolerance through distributed systems and redundant resources, the platform optimizes system performance to handle high traffic and ensure rapid response times.
### 3. Enhancing Model Management
Implementing automated tools for model management, including training, deployment, and monitoring, the platform uses a centralized system to manage multiple models efficiently and ensure consistency.
### 4. Ensuring Budget Management for Offers
Developing cost-efficient recommendation strategies that maximize ROI, the platform implements dynamic budgeting tools to adjust offers based on real-time data and performance metrics.
### 5. Balancing Exploration vs. Exploitation
Using reinforcement learning and multi-armed bandit algorithms to balance exploration and exploitation, the platform fosters a culture of continuous innovation and experimentation to stay ahead of market changes.

---

## Get Started

Source: `docs/user_guides/recommender/intro.mdx`
URL: https://ecosystem.ai/docs/user_guides/recommender/intro
Summary: Building out and configuring your recommender project in the ecosystem.Ai Prediction Platform

# Introduction

![Recommender introduction](/images/recommender/0_Introduction/Recommender.png)
In order to begin building out and configuring your recommender project in the Prediction Platform, two main interfaces can be used to access ecosystem.Ai functionality: 
- The Workbench graphical interface
- Jupyter Notebooks. 

#### This lesson takes you through the Workbench configuration for Recommenders.

**Alternative interface:** If you would prefer to build your Recommender in a Notebook, head to <u>Dashboard</u> in your Workbench, and click on the <u>Jupyter Notebooks</u> icon. From there, navigate to <u>Documents</u>, <u>Get Started</u>> and find “Get Started Recommenders”.

---

## Monitoring

Source: `docs/user_guides/recommender/monitoring.mdx`
URL: https://ecosystem.ai/docs/user_guides/recommender/monitoring
Summary: For monitoring, the ecosystem.Ai Prediction Platform has Grafana and Superset integrations.

# Configure your Dashboards
For monitoring your predictions in production, the ecosystem.Ai Prediction Platform has Grafana and Superset integrations.
- Grafana is used for real-time scoring and operational metrics, ensuring your machine learning models are performing effectively.
- Superset is for comprehensive business intelligence and data visualization, allowing you to track and analyze key performance indicators and business processes in detail.

Once your recommender is running it is important to keep track of its behavior, and begin to examine the results. There are two dashboard softwares we have linked up to be accessible in your worker ecosystem

## Grafana Real-Time Dashboards

In the <u>Dashboard</u> of the Workbench, select the Real-Time Dashboard icon to go to Grafana, there you can set up and view the real-time results of your deployment.
Our Grafana Dashboards illustrate the behavior of the recommender in production. Showing which options are being recommended, and which are successful. As well as providing information on performance, and how the recommender is trading off between exploring and exploiting.

![Grafana dashboard](/images/recommender/8_Monitoring/0_monitoring_dashboard_grafana.png)

Log in to Grafana to get a real-time view of your recommenders in production.
To set up your Grafana Dashboard, and link it to your chosen deployment, you will need to login as an admin. We have already pre-built a dashboard for you to view all the most important elements of your real-time deployment. However, if you have experience with Grafana, or are looking to monitor something very specific, you can build your own dashboard: https://grafana.com/docs/grafana/next/getting-started/build-first-dashboard/.

![Log in to Grafana](/images/recommender/8_Monitoring/1_grafana_login.png)

### Manage Dashboards
Now that you have logged in, Navigate to the left hand menu, click on the <u>'dashboards'</u> icon and select <u>Manage</u>.

![Manage dashboards](/images/recommender/8_Monitoring/1_grafana_navigate.png)

At this point, you will see a list of folders. Select the <u>Runtime2</u> folder and click on Scoring Dashboard: Client Pulse Responder.
To view the pre-built dashboard configuration. The dropdown menu called Prediction case is where you can see all the deployments linked to this dashboard. Find your Deployment there if you have used one of the pre-configured solutions.

![Manage dashboards list](/images/recommender/8_Monitoring/2_grafana_manage.png)

### Add Dashboards
To add a new deployment, go to the <u>Dashboard Settings</u> icon in the top right corner.
This will take you to the settings page where you can manage elements of the dashboard.

![Add dashboard](/images/recommender/8_Monitoring/3_grafana_dashboard.png)

Go the Variables in the menu on the left, and then click on <u>Prediction</u>.
You will notice in the Custom Options field that the deployments currently linked to this dashboard are listed, separated by commas.

![Dashboard settings](/images/recommender/8_Monitoring/4_grafana_settings.png)

Simply add your deployment case name in this field.
Then click **Update**. When this refreshes, click **Save Dashboard** on the left, this will link to a popup where you can specify the details of your changes. This is not a compulsory step, but it is good practice to document all changes.

Click **Save**. Press the back button in the top left hand corner to go back to the dashboard, give it a minute to load and then you will be able to view your new deployment in the Prediction Case list.

![Edit variables](/images/recommender/8_Monitoring/5_grafana_edit.png)

## Superset Business Dashboards

In the <u>Dashboard</u> of the Workbench, select the Business Dashboard icon to go to Superset, to view more comprehensive results of your deployment.
The Superset dashboards allow you to view and analyze the results of the whole recommendation process. Including costing, counts, successes and fails.

![Superset dashboards](/images/recommender/8_Monitoring/6_monitoring_dashboard_superset.png)

Access the Superset Dashboard to view further illustrations of your recommender in production.

![Superset](/images/recommender/8_Monitoring/7_superset.png)

**Further documentation and help:** To learn more about how to build, manage, and interpret the dashboards for your recommenders, visit the documentation site of the accompanying technology: Grafana or Superset.

---

## Predictions

Source: `docs/user_guides/recommender/predictions.mdx`
URL: https://ecosystem.ai/docs/user_guides/recommender/predictions
Summary: Predictions is where you deploy, manage, and monitor machine learning models to generate real-time predictions, providing actionable insights and driving data-driven decisions.

# Create and Test Predictions 
The Predictions section of the Workbench is where you deploy, manage, and monitor machine learning models to generate real-time predictions, providing actionable insights and driving data-driven decisions. The next step is to begin making the models for your project, using all the configurations you have set up in the previous steps.

In the <u>Recommenders</u> section of the Workbench, you will find <u>Predictions</u>. This is where you will manage the models for your recommender. 

You will see a list of all of previously configured models, as well as being able to create new models. Creating models using this interface is more suited to cases which use a small number of models. Cases where tens or hundreds of models will need to be trained are better handled in our <u>Jupyter Notebooks</u>.

## Create Models
To create a new model for your recommender project, select **+ Create Model**. 
The details you input here will be used to generate a number of models that can be tested and selected for your project.

![Create model](/images/recommender/5_Predictions/0_predictions.png)

You will need to provide a unique *Predict ID* and *Description*. You will refer back to this *Unique ID* at any point in the process. You can also link the model to a previously created project in *Allocated to projects*.

![Model details](/images/recommender/5_Predictions/1_predictions_create.png)

- Specify the *Model ID* associated with this version of the model, and remember to add the version number to the ID. 

- You will almost always have multiple versions. Assigning a *Version* will ensure you can appropriately track changes, as you experiment with the parameters of your models.

- Choose a *Model Type* from the list of supported model and provide the *Model Category*. These details will allow you to more effectively organize your overall model training.

- Select the Primary Data Frame .hex file that you created in the <u>Feature Store</u> and update the Version number. 

**Please note:** Make sure the number in the *Version* field correlates with the version number in your *Model ID*.

## Generate & Specify Model Parameters
In *Model Parameters* you can specify the details and add notes to be stored with the model. Use the *Describe model purpose, parameters and other actions* to take notes. 

![Model parameters](/images/recommender/5_Predictions/2_predictions_parameters.png)

For the *Model Parameters* functionality, you can click **Generate Default** to generate a list of the model parameters and their default values. 
These can be modified to change the behaviour of the model. Examples of model parameter set ups can be found in the other pre-configured example projects. 

![Generate parameters](/images/recommender/5_Predictions/3_predictions_parameters_generate.png)

**Find documentation for accompanying technologies:** Further details of all of the Model Parameters functionality can be found in the Prediction Workers documentation. Each worker has its own documentation:
    - H2O, PyTorch, Ludwig and Tensorflow.

## Taking Notes & Retrieving Features
Notes should include the features you will be using in the model. All of which can be retrieved using the **Retrieve Features** button.
Notes should also include the model parameters, as well as a summary of the changes made, in each version of the model.

**Save** your model configuration in the top right corner. 

![Retrieve features](/images/recommender/5_Predictions/4_predictions_parameters_retrieve.png)

## Generate Models
Begin building out your model and view the **Result**, by clicking the **Generate Model** button. This will start the model training process, which may take some time to complete. 

![Generate model](/images/recommender/5_Predictions/5_predictions_model_generate.png)

To view training progress, and any interim models being produced, continue to click the **Result** button. This will update the list and present the models being trained. Once the models have been trained they will appear in the table. 

![Trained models](/images/recommender/5_Predictions/6_predictions_model_list.png)

Clicking on a model will show you the metrics and its effectiveness. This action is how you can select which of the models is the preferred one for your needs.

![Model metrics](/images/recommender/5_Predictions/7_predictions_model_metrics.png)

**Please note:** There may not always be multiple models generated.

## Deploy Models
Once a model has been selected, *Save* and *Deploy Model*, to have it ready to use in the next (deployment) step. 
You can view all deployed models in the window below your trained models list.

![Deploy models](/images/recommender/5_Predictions/8_predictions_model_deployment.png)

**Note:** You can go through this step as many times as you like in order to acheive your desired results. Be sure to select a model that suits your needs before progressing to deployments.

---

## Projects

Source: `docs/user_guides/recommender/projects.mdx`
URL: https://ecosystem.ai/docs/user_guides/recommender/projects
Summary: Projects are where you will make, manage and keep track of all of the work linked to the completion of any particular deployment project.

# Projects in the Workbench
The Projects section of the ecosystem.Ai Workbench is where you will make, manage and keep track of all of the work linked to the completion of any particular deployment project.

When you log into the Workbench you will see example projects that have already been created for you in the <u>Dashboard</u> and <u>Projects</u> sections.
**Please Note:** If you have chosen a 'clean instance' or have the Community Edition, you will not see example projects.

Follow the steps to *Create* rather than *Edit* in this lesson.

## Manage Projects

![Projects dashboard](/images/recommender/1_Projects/0_projects_dashboard.png)

The following projects are pre-configured first examples of various recommenders:

- Simple Recommender
- Offer Recommender Single-Model:
  - shows how offers can be recommended using a single multivariate
- Offer Recommender Multi-Model:
  - uses a collection of binomial models.
-Recommender Experiment:
  - shows how exploration can be incorporated into a recommender environment.
- Message Recommender:
  - show how customer engagement messages can be personalized using a recommendation engine.
- Many more examples are added over time.

Note that the default Recommender functionality will require a [specific data format](/docs/configuration/data/meta) for the Offer Matrix.

## Add/Edit Projects
In <u>Projects</u>, you can either edit one of the existing projects or add a new one.
To view or edit a project, click on the project name. A section will open below the project list with all the project details.
To create a new project, click **+ Add Project**.

![Projects](/images/recommender/1_Projects/1_projects.png)

A section will open below the project list where you can input the details of your new project.
In *Project ID* specify a name that everyone in your team can relate to. Add an accurate *Description* and provide an indication of the Type (eg. Recommender). Specify the *Project Purpose*.
You can also assign dates and roles to the project, but this is more for administrative purposes than a necessity.

![Projects add](/images/recommender/1_Projects/2_projects_add.png)

The *Projects Elements* dropdowns are for administrative purposes only.
Adding Files, Feature Stores, Predictors, Deployments and Analysis files here. You can eport your project as a Module, with all the specified elements by clicking **Export**.

![Projects elements](/images/recommender/1_Projects/3_projects_elements.png)

**Note:** As you progress with your recommender configurations, you will link items to the project as they are created. Such as the models, frames, simulations and other elements.

---

## Testing

Source: `docs/user_guides/recommender/testing.mdx`
URL: https://ecosystem.ai/docs/user_guides/recommender/testing
Summary: Manage APIs is where you create, test, and manage APIs, ensuring they are robust and ready for integration with other systems.  Simulations is where you run and analyze simulations to validate the accuracy and performance of machine learning models before deployment.

# Introduction 
The Manage APIs section is where you create, test, and manage APIs, ensuring they are robust and ready for integration with other systems. The Simulations section is where you run and analyze simulations to validate the accuracy and performance of machine learning models before deployment.

Once you have pushed your deployment configuration you should do some testing to see if the results align with your expectations. There are two ways to test your deployment:

## 1. Test your API
### View APIs
In the <u>Laboratory</u> section of the Workbench, you will find <u>Manage APIs</u>. Here you will find a list of all your deployments.

![Manage APIs](/images/recommender/7_Testing/0_testing_api.png)

If you have been going through this User Guide using one of the pre-configured examples, click on the relevant deployment to view the details. 

![View API](/images/recommender/7_Testing/1_testing_api_configuration.png)

### Create API
If you have created your own <u>Project</u> and <u>Deployment</u>, click **Create New** to make a new API.

![Create API](/images/recommender/7_Testing/2_testing_api_create.png)

Provide the *Unique Name* of your deployment and click **Next** to add it to the list.

![List APIs](/images/recommender/7_Testing/3_testing_api_list.png)

### Configure API Test
Select the configuration to view and edit the details of your API. Go to the <u>Configuration</u> tab and select the one you want to test.

![Configure API](/images/recommender/7_Testing/4_testing_api_edit.png)

Fill in the relevant details of the campaign, then click on the campaign to bring down the API test window.

![API Test](/images/recommender/7_Testing/5_testing_api_test.png)

Click **Execute** to bring back the API results and ensure your deployment is functioning.

![Execute API test](/images/recommender/7_Testing/5_testing_api_test.png)

## 2. Build a simulation

**Coming soon!:** Simulation documentation for the Workbench in progress, please check back again.

Now that you have built, deployed and tested the configuration of your recommender, it is time to watch it in action.

In the <u>Dashboard</u> you will find the worker ecosystem with links to various accompanying elements. 
Click on the Jupyter Notebooks icon to configure the simulation of your recommender deployment. The steps of how to complete this part of the journey is laid out in the Notebooks.

![Simulations in Notebooks](/images/recommender/7_Testing/7_testing_dashboard_notebooks.png)

**Note:** Test your predictions and revert back to any one of the previous steps in order to get the expected outcome. Once your predictions are actively in production, move on the <u>Monitoring</u> step to configure and view your dashboards.

---

## Local Environment Setup

Source: `docs/user_guides/runtime_plugin_development/environment_setup.mdx`
URL: https://ecosystem.ai/docs/user_guides/runtime_plugin_development/environment_setup
Summary: Configure your local environment to develop your own pre and post scoring logic plugins for the runtime.

# Set up your development environment
In order to develop your own java classes to use for pre and post scoring and API management, it is recommended that you set up a local development evironment in order to test and debug your code.

## Prerequisites
Before you can configure your pre and post scoring logic, you will need to have the following set up on your local machine:
- Install IntelliJ or update your current install to the latest version
- Install Java Corretto 17 
- Clone the ecosystem-runtime-localbuild repo from GitHub https://github.com/ecogenetic/ecosystem-runtime-localbuild. There are different branches for different versions of the runtime. The default branch is for the latest version of the runtime. If you are working with a specific version of the runtime then check out the branch for that version. 

## IntelliJ Configuration
We want to open the project in the ecosystem-runtime-localbuild repo in IntelliJ. Start IntelliJ, select Open Project and select the folder created when cloning the repo. Trust the project. Once IntelliJ has finished processing the project you should see the following view. If the pom.xml file is not open in the editor window then open it from the file structure menu on the left of the screen.
![Open project in IntelliJ](/images/local_dev_setup/01_import-project.png)

Copy the text below from the pom.xml file
```xml
<settings>
   <mirrors>
     <mirror>
         <id>ecosystem-repo</id>
         <name>Maven Repository Manager running on customer.ecosystem.ai</name>
         <url>https://maven.ecosystem.ai</url>
         <mirrorOf>ecosystem-repo</mirrorOf>
     </mirror>
   </mirrors>
</settings>
```

Open Settings and navigate to the Maven section (see screenshot) and take note of the file location in the User settings file box
![Maven user settings](/images/local_dev_setup/02_maven-settings.png)

Create a settings.xml file in the specified location and copy the text from the pom into the file. 

Go back to the settings menu and select plugins. Install the ecosystem.Ai prediction server plugin.
![Install the ecosystem.Ai plugin](/images/local_dev_setup/03_ecosystem-plugin.png)

Now in the settings menu go to Tools and select the ecosystem plugin and change the server to http://your-server-url:3001.
![Configure the ecosystem.Ai plugin](/images/local_dev_setup/04_ecosystem-plugin-configure.png)

You should now be able to open the ecosystem.Ai on the right hand side of the interface and the panel which opens should show the projects loaded in your local environment.
![ecosystem.Ai plugin](/images/local_dev_setup/05_ecosystem-plugin-menu.png)

Next open the plugin.properties file and specify the project name, deployment name and deployment version of the configuration that you would like to work on in IntelliJ.
![plugin.properties](/images/local_dev_setup/06_plugin-properties.png)

Open the Tool menu and select Pull Plugin from ecosystem.Ai server.
![Pull plugin from ecosystem.Ai server](/images/local_dev_setup/07_pull-plugin.png)

Right click on the project root folder and select Refresh from Disk to have the pulled files appear in the tree.
![Refresh from disk](/images/local_dev_setup/08_refresh-from-disk.png)

Now in the IntelliJ menu go to File -> Project Structure, select SDKs under Platform Settings, click the + to add a new SDK and select corretto-17.
![Add SDK](/images/local_dev_setup/09_add-sdk.png)

Now go to the Run menu and select Edit Configurations.
![Create run configuration](/images/local_dev_setup/10_edit-configurations-menu.png)

Add a new configuration and select Application. Then change the three settings highlighted in the image below.
![Run configuration settings](/images/local_dev_setup/11_edit-configurations.png)

Now select Environment variables create the MASTER_KEY environment variable. MASTER_KEY should be the license key your license key for the ecosystem.Ai environment. There are a number of additional [environment variables](/docs/runtime/environment_variables.mdx) which can be set.
![Environment variables](/images/local_dev_setup/12_environment-variables.png)

Open the maven menu in IntelliJ and reload the project.
![Reload Maven project](/images/local_dev_setup/13_reload-project.png)

If you receive errors after running this step there are a couple of troubleshooting steps:
- Confirm that you can access https://maven.ecosystem.ai/ in your browser. If not you will need to connect to another network where the URL is accessible before proceeding.
- Navigate to the directory you created the settings.xml file and delete the repository and wrapper folders if they are present. Then in the maven menu in IntelliJ select Execute Maven Goal and run `mvn -U clean install`.
![Maven clean install](/images/local_dev_setup/14_mvn-clean.png)
Once you have completed the troubleshooting steps select Reload All Maven Projects from the Maven menu.

We can now run the default project. Click debug.
![Run project](/images/local_dev_setup/15_run-project.png)

The logs for the runtime should now appear in the console.
![Runtime logs](/images/local_dev_setup/16_runtime-logs.png)

You can now use this environment to develop and debug your pre and post scoring logic for the runtime.

---

## Local Environment Update

Source: `docs/user_guides/runtime_plugin_development/environment_update.mdx`
URL: https://ecosystem.ai/docs/user_guides/runtime_plugin_development/environment_update
Summary: Updating your local environment

# Update your development environment
If you update the version of the runtime for which you are developing, you will need to update your local environment to match the new version. This will require:
- Updating the branch of the ecosystem-runtime-localbuild repo to match the new version of the runtime.
- Installing the required maven dependencies

## Updating the branch
Migrate the custom logic that you have written to a new repo based on the branch for the version to which you want to migrate. The [release notes](/docs/runtime/runtimeversion/) for the runtime contain details of the changes in the localbuild repo between versions. However, if you are not overriding any of the built in methods then you should be able to migrate your code without any issues.

## Updating the maven dependencies
The updated maven dependiencies should ideally be installed automatically when you reload the project. To do this
open the maven menu in IntelliJ and reload the project.
![Reload Maven project](/images/local_dev_setup/13_reload-project.png)

Version conflicts can arise when updating the maven dependencies. If you receive errors after running the reload, there are a couple of troubleshooting steps:
- Navigate to the directory you created the settings.xml file and delete the repository and wrapper folders if they are present. 
- In the maven menu in IntelliJ select Execute Maven Goal and run `mvn -U clean install`.
![Maven clean install](/images/local_dev_setup/14_mvn-clean.png)
Once you have completed the troubleshooting steps select Reload All Maven Projects from the Maven menu.

You can now test your configuration as you normally would in order to confirm that the migration has not introduced any issues.

---

## Introduction

Source: `docs/user_guides/runtime_plugin_development/index.mdx`
URL: https://ecosystem.ai/docs/user_guides/runtime_plugin_development
Summary: This lesson outlines the steps you will take to develop your own pre and post scoring logic plugins for the runtime.

# Introduction
This lesson outlines the steps you will take to develop your own pre and post scoring logic plugins for the runtime. The pre and post scoring logic functionality

- Go through the steps to: 
  - Set up your local development environment
  - Understand the default pre and post scoring logic templates available
  - Understand the structure of the parameters available in the pre and post scoring logic
  - Learn how to use the business logic functionality to reuse functionality across cases

---

## Pre and Post Scoring Logic Structures

Source: `docs/user_guides/runtime_plugin_development/pre_post_scoring_structures.mdx`
URL: https://ecosystem.ai/docs/user_guides/runtime_plugin_development/pre_post_scoring_structures
Summary: The structure of the pre and post scoring logic plugins for the runtime.

# Pre and Post Scoring Logic Structures
The pre and post scoring logic functionality allows you to define custom logic that is executed before and after the model is scored. There are a number of data structures and functions available to you when developing your pre and post scoring logic. This guide will outline the structures available to you and how to use them as well as guidelines on structuring your logic.

## Pre and Post Scoring Logic Templates
There are two categories for pre and post scoring logic templates; those for static and dynamic models. The key difference between the two is in how results are looped through in order to apply eligibility and other offer level logic. For static models the offer loop is handled by looping through the Offer Matrix. For dynamic models the loop is handled by looping through the options store.

### Template for dynamic models
The class `PlatformDynamicEngagement` extends the `PostScoreSuper` class, which provides functionality that can be used across different post-scoring plugins. 

The `getPostPredict()` method accepts a JSONObject with prediction results, parameters for the scoring operation, a session object for a Cassandra database, and an array of preloaded models. The method then processes the results and prediction parameters, including extracting features, evaluating offer eligibility and constructing an array of modified offer scores.

After processing, the results are sorted based on score and the top scores are retrieved. There is also a time tracking operation which logs the time taken to execute the method.

A `Logger` object is initialized for logging purposes. Logging can be done at a variety of levels, including ERROR, WARN, INFO and DEBUG. It is recommended to add detailed logging at the DEBUG level to assist with troubleshooting once the plugin is deployed.

The following is the java implementation of the Platform Dynamic Engagement plugin:

```java
package com.ecosystem.plugin.customer;

/**
 * ECOSYSTEM.AI INTERNAL PLATFORM SCORING
 * Use this class to score with dynamic sampling configurations. This class is configured to work with no model.
 */
public class PlatformDynamicEngagement extends PostScoreSuper {
	private static final Logger LOGGER = LogManager.getLogger(PlatformDynamicEngagement.class.getName());

	public PlatformDynamicEngagement() {
	}

	/**
	 * Pre-post predict logic
	 */
	public void getPostPredict () {
	}

	/**
	 * getPostPredict
	 * Example params:
	 *    {"contextual_variable_one":"Easy Income Gold|Thin|Senior", "contextual_variable_two":"", "batch": true}
	 *
	 * @param predictModelMojoResult Result from scoring
	 * @param params                 Params carried from input
	 * @param session                Session variable for Cassandra
	 * @return JSONObject result to further post-scoring logic
	 */
	public static JSONObject getPostPredict(JSONObject predictModelMojoResult, JSONObject params, CqlSession session, EasyPredictModelWrapper[] models) {
		double startTimePost = System.nanoTime();
		try {
			/** Setup JSON objects for specific prediction case */
			JSONObject featuresObj = predictModelMojoResult.getJSONObject("featuresObj");
			//JSONObject domainsProbabilityObj = predictModelMojoResult.getJSONObject("domainsProbabilityObj");

			JSONObject offerMatrixWithKey = new JSONObject();
			boolean om = false;
			if (params.has("offerMatrixWithKey")) {
				offerMatrixWithKey = params.getJSONObject("offerMatrixWithKey");
				om = true;
			} else {
				LOGGER.info("No Offer Matrix with key configured, using generated defaults.");
			}

			JSONObject work = params.getJSONObject("in_params");

			/***************************************************************************************************/
			/** Standardized approach to access dynamic datasets in plugin.
			 * The options array is the data set/feature_store that's keeping track of the dynamic changes.
			 * The optionParams is the parameter set that will influence the real-time behavior through param changes.
			 */
			/***************************************************************************************************/
			JSONArray options = getOptions(params);
			JSONObject optionParams = getOptionsParams(params);
			JSONObject locations = getLocations(params);

			JSONObject contextual_variables = optionParams.getJSONObject("contextual_variables");
			JSONObject randomisation = optionParams.getJSONObject("randomisation");

			/***************************************************************************************************/
			/** Test if contextual variable is coming via api or feature store: API takes preference... */
			if (!work.has("contextual_variable_one")) {
				if (featuresObj.has(contextual_variables.getString("contextual_variable_one_name")))
					work.put("contextual_variable_one", featuresObj.get(contextual_variables.getString("contextual_variable_one_name")));
				else
					work.put("contextual_variable_one", "");
			}
			if (!work.has("contextual_variable_two")) {
				if (featuresObj.has(contextual_variables.getString("contextual_variable_two_name")))
					work.put("contextual_variable_two", featuresObj.get(contextual_variables.getString("contextual_variable_two_name")));
				else
					work.put("contextual_variable_two", "");
			}
			/***************************************************************************************************/

			JSONArray finalOffers = new JSONArray();
			int offerIndex = 0;
			int explore;
			int[] optionsSequence = generateOptionsSequence(options.length(), options.length());
			String contextual_variable_one = String.valueOf(work.get("contextual_variable_one"));
			String contextual_variable_two = String.valueOf(work.get("contextual_variable_two"));

			for(int j : optionsSequence) {
				if (j > params.getInt("resultcount")) break;

				JSONObject option = options.getJSONObject(j);

				/** Skip the item if offer matrix does not contain option */
				/*
				if (!offerMatrixWithKey.has(option.getString("optionKey")))
					continue;
				 */
				/** GENERATE DEFAULT IF OPTION IS NOT IN OFFER MATRIX! */
				String offer = option.getString("optionKey");
				if (!offerMatrixWithKey.has(option.getString("optionKey"))) {
					JSONObject singleOffer = defaultOffer(offer);
					offerMatrixWithKey.put(option.getString("optionKey"), singleOffer);
					LOGGER.warn("BEWARE, DEFAULT OFFER GENERATED. IN OPTIONS STORE AND NOT OFFER MATRIX: " + option.getString("optionKey"));
				}

				/** Test eligibility TODO: CREATE A SEPARATE SUPERCLASS WITH THIS IN IT! */
				if (locations != null) {
					try {
						if (locations.getJSONObject(offer).has("open_times")) {
							String day = params.getJSONObject("in_params").getString("day");
							String time = params.getJSONObject("in_params").getString("time");

							if (locations.getJSONObject(offer).getJSONObject("open_times").has(day)) {
								if (locations.getJSONObject(offer).getJSONObject("open_times").getJSONObject(day).has("opening1") &&
										locations.getJSONObject(offer).getJSONObject("open_times").getJSONObject(day).has("closing1")) {

									LOGGER.info("It's Open!");
									if (!locations.getJSONObject(offer).getJSONObject("open_times").getString("operatingStatus").equals("operating"))
										continue;

									SimpleDateFormat sdf = new SimpleDateFormat("hh:mm a");

									Date opening = sdf.parse(locations.getJSONObject(offer).getJSONObject("open_times").getJSONObject(day).getString("opening1"));
									Date closing = sdf.parse(locations.getJSONObject(offer).getJSONObject("open_times").getJSONObject(day).getString("closing1"));
									if (closing.before(opening)) {
										Calendar cal = Calendar.getInstance();
										cal.setTime(closing);
										cal.add(Calendar.DATE, 1);
										closing = cal.getTime();
									}
									Date time_now = sdf.parse(time);
									if (time_now.after(opening) && time_now.before(closing)) {
										LOGGER.info("It's Open!");
									} else {
										continue;
									}

								}
							}
						}
					} catch (Exception e) {
						LOGGER.info("\n\n" + offer + " -> Oh no, there's something wrong with the time range check, and will be ignored! use api params: {day:'monday', 'time': '11.00 AM'} " + e.getMessage() + "\n\n");
					}
				}

				String contextual_variable_one_Option = "";
				if (option.has("contextual_variable_one") && !contextual_variable_one.equals(""))
					contextual_variable_one_Option = String.valueOf(option.get("contextual_variable_one"));
				String contextual_variable_two_Option = "";
				if (option.has("contextual_variable_two") && !contextual_variable_two.equals(""))
					contextual_variable_two_Option = String.valueOf(option.get("contextual_variable_two"));

				if (contextual_variable_one_Option.equals(contextual_variable_one) && contextual_variable_two_Option.equals(contextual_variable_two)) {

					double alpha = (double) DataTypeConversions.getDoubleFromIntLong(option.get("alpha"));
					double beta = (double) DataTypeConversions.getDoubleFromIntLong(option.get("beta"));
					double accuracy = 0.001;
					if (option.has("accuracy"))
						accuracy = (double) DataTypeConversions.getDoubleFromIntLong(option.get("accuracy"));

					/***************************************************************************************************/
					/* r IS THE RANDOMIZED SCORE VALUE */
					double p = 0.0;
					double arm_reward = 0.001;

					explore = 0;
					if (option.has("arm_reward")) {
						p = (double) option.get("arm_reward");
					} else {
						p = arm_reward;
					}
					arm_reward = p;

					/** Check if values are correct */
					if (p != p) p = 0.0;
					if (alpha != alpha) alpha = 0.0;
					if (beta != beta) beta = 0.0;
					if (arm_reward != arm_reward) arm_reward = 0.0;
					/***************************************************************************************************/

					JSONObject singleOffer = new JSONObject();
					double offer_value = 1.0;
					double offer_cost = 1.0;
					double modified_offer_score = p;
					if (om) {
						if (offerMatrixWithKey.has(offer)) {

							singleOffer = offerMatrixWithKey.getJSONObject(offer);

							if (singleOffer.has("offer_price"))
								offer_value = DataTypeConversions.getDouble(singleOffer, "offer_price");
							if (singleOffer.has("price"))
								offer_value = DataTypeConversions.getDouble(singleOffer, "price");

							if (singleOffer.has("offer_cost"))
								offer_cost = singleOffer.getDouble("offer_cost");
							if (singleOffer.has("cost"))
								offer_cost = singleOffer.getDouble("cost");

							modified_offer_score = p * ((double) offer_value - offer_cost);
						}
					}

					JSONObject finalOffersObject = new JSONObject();

					finalOffersObject.put("offer", offer);
					finalOffersObject.put("offer_name", offer);
					finalOffersObject.put("offer_name_desc", option.getString("option"));

					/* process final */
					finalOffersObject.put("score", p);
					finalOffersObject.put("final_score", p);
					finalOffersObject.put("modified_offer_score", modified_offer_score);
					finalOffersObject.put("offer_value", offer_value);
					finalOffersObject.put("price", offer_value);
					finalOffersObject.put("cost", offer_cost);

					finalOffersObject.put("p", p);
					if (option.has("contextual_variable_one"))
						finalOffersObject.put("contextual_variable_one", option.getString("contextual_variable_one"));
					else
						finalOffersObject.put("contextual_variable_one", "");

					if (option.has("contextual_variable_two"))
						finalOffersObject.put("contextual_variable_two", option.getString("contextual_variable_two"));
					else
						finalOffersObject.put("contextual_variable_two", "");

					finalOffersObject.put("alpha", alpha);
					finalOffersObject.put("beta", beta);
					finalOffersObject.put("weighting", (double) DataTypeConversions.getDoubleFromIntLong(option.get("weighting")));
					finalOffersObject.put("explore", explore);
					finalOffersObject.put("uuid", params.get("uuid"));
					finalOffersObject.put("arm_reward", arm_reward);

					/* Debugging variables */
					if (!option.has("expected_takeup"))
						finalOffersObject.put("expected_takeup", -1.0);
					else
						finalOffersObject.put("expected_takeup", (double) DataTypeConversions.getDoubleFromIntLong(option.get("expected_takeup")));

					if (!option.has("propensity"))
						finalOffersObject.put("propensity", -1.0);
					else
						finalOffersObject.put("propensity", (double) DataTypeConversions.getDoubleFromIntLong(option.get("propensity")));

					if (!option.has("epsilon_nominated"))
						finalOffersObject.put("epsilon_nominated", -1.0);
					else
						finalOffersObject.put("epsilon_nominated", (double) DataTypeConversions.getDoubleFromIntLong(option.get("epsilon_nominated")));

					finalOffers.put(offerIndex, finalOffersObject);
					offerIndex = offerIndex + 1;
				}
			}

			JSONArray sortJsonArray = JSONArraySort.sortArray(finalOffers, "arm_reward", "double", "d");
			predictModelMojoResult.put("final_result", sortJsonArray);

			predictModelMojoResult = getTopScores(params, predictModelMojoResult);

			double endTimePost = System.nanoTime();
			LOGGER.info("PlatformDynamicEngagement:I001: time in ms: ".concat( String.valueOf((endTimePost - startTimePost) / 1000000) ));

		} catch (Exception e) {
			e.printStackTrace();
			LOGGER.error(e);
		}

		return predictModelMojoResult;

	}

}
```

### Template static models

```java
package com.ecosystem.plugin.customer;

/**
 * This the ecosystem/Ai personality series.
 * Customer plugin for specialized logic to be added to the runtime engine. This class is loaded through the plugin
 * loader system.
 */
public class PostScoreBasicOfferMatrix extends PostScoreSuper {
	private static final Logger LOGGER = LogManager.getLogger(PlatformDynamicEngagement.class.getName());

	public PostScoreBasicOfferMatrix() {
	}

	/**
	 * Pre-post predict logic
	 */
	public void getPostPredict () {
	}

	/**
	 * getPostPredict
	 *
	 * @param predictModelMojoResult Result from scoring
	 * @param params                 Params carried from input
	 * @param session                Session variable for Cassandra
	 * @param models 				 Preloaded H2O Models
	 * @return JSONObject result to further post-scoring logic
	 */
	public static JSONObject getPostPredict(JSONObject predictModelMojoResult, JSONObject params, CqlSession session, EasyPredictModelWrapper[] models) {
		try {
			/* Setup JSON objects for specific prediction case */
			JSONObject featuresObj = predictModelMojoResult.getJSONObject("featuresObj");
			JSONObject domainsProbabilityObj = predictModelMojoResult.getJSONObject("domainsProbabilityObj");
			JSONArray offerMatrix = params.getJSONArray("offerMatrix");

			/* If whitelist settings then only allow offers on list */
			boolean whitelist = false;
			ArrayList<String> offerWhiteList = new ArrayList<>();
			if (params.has("whitelist")) {
				if (!params.getJSONObject("whitelist").isEmpty()) {
					offerWhiteList = (ArrayList<String>) params.getJSONObject("whitelist").get("whitelist");
					params.put("resultcount", offerWhiteList.size());
					whitelist = DataTypeConversions.getBooleanFromString(params.getJSONObject("whitelist").get("logicin"));
				}
			}

			JSONArray finalOffers = new JSONArray();

			/* For each offer in offer matrix determine eligibility */
			int offerIndex = 0;
			for (int i = 0; i < offerMatrix.length(); i++) {
				JSONObject singleOffer = offerMatrix.getJSONObject(i);

				/* If whitelist settings then only allow offers on list */
				if (offerWhiteList.size() > 0) {
					boolean skip = true;
					for (int w = 0; w < offerWhiteList.size(); w++) {
						if ((singleOffer.getString("offer_name_final").equalsIgnoreCase(offerWhiteList.get(w)))) {
							skip = false;
							w = offerWhiteList.size() + 1;
						}
					}
					if (skip) continue;
				}

				/* get selector field from properties: predictor.selector.setup */
				String s = new JSONObject(settings.getSelectorSetup()).getJSONObject("lookup").getString("fields");

				if (!offerMatrix.getJSONObject(i).has(s)) { LOGGER.error("Not in offerMatrix: ".concat(s)); break; }
				if (!featuresObj.has(s)) { LOGGER.error("Not in featuresObj: " + s); break; }

				if (offerMatrix.getJSONObject(i).getString(s).equalsIgnoreCase(featuresObj.getString(s))) {
					// String cop_car = singleOffer.getString("cop_car").toLowerCase();

				JSONObject finalOffersObject = new JSONObject();
				finalOffersObject.put("offer_name", singleOffer.getString("offer_name_final"));
				finalOffersObject.put("score", domainsProbabilityObj);
				finalOffersObject.put("offer_value", 0.0);

				finalOffersObject.put("offer_matrix", singleOffer);

				if (settings.getPredictorOfferBudget() != null) {
					JSONObject budgetItem = obtainBudget(singleOffer, params.getJSONObject("featuresObj"), 0.0);
					double budgetSpendLimit = budgetItem.getDouble("spend_limit");
					finalOffersObject.put("spend_limit", budgetSpendLimit);
				}

				finalOffers.put(offerIndex, finalOffersObject);
				offerIndex = offerIndex + 1;
				}
			}

			JSONArray sortJsonArray = JSONArraySort.sortArray(finalOffers, "modified_offer_score", "double", "d");
			predictModelMojoResult.put("final_result", sortJsonArray);

		} catch (Exception e) {
			LOGGER.error(e);
		}

		predictModelMojoResult = getTopScores(params, predictModelMojoResult);
		return predictModelMojoResult;

	}
}
```

### Data structures and functions available for pre and post scoring logic
The following data structures and functions are available to you when developing your pre and post scoring logic:
- `JSONObject defaultOffer(String offer)`: Returns a JSONObject with the same structure usually obtained when reading from the offer matrix. This is used when an offer is found in the Option Store but not in the Offer Matrix.
- `JSONArray getOptions(JSONObject params)`: Returns the scored options from the Options Store in an array that can be looped over when determining eligibility.
- `JSONObject getOptionsParams(JSONObject params)`: Returns the dynamic interaction configuration parameters.
- `int[] generateOptionsSequence(int resultCount, int totalOptions)`: Generates a sequence used to loop through the Options Store.
- `JSONObject getTopScores(JSONObject params, JSONObject predictResult)`: Returns the top scores from the predictResult, taking into account whether exploration or exploitation has been selected for the prediction and taking budget parameters into account if they have been configured.
- `params`: The `params` JSONObject contains the parameters passed to the plugin from the runtime. This includes the `featuresObj` which contains the features used in the prediction, the `domainsProbabilityObj` which contains the prediction results, and the `offerMatrix` which contains the offer matrix.

---

## Converting Static Model Cases to Dynamic Interactions

Source: `docs/user_guides/static_to_dynamic.mdx`
URL: https://ecosystem.ai/docs/user_guides/static_to_dynamic
Summary: This lesson outlines how to convert a static model configuration to a Dynamic Interaction.

# Introduction
[Static model configurations](/docs/configuration/static_models/) use traditional machine learning techniques to predict outcomes based on a set of features, using models that are updated by offline retraining. In situations where the behaviour being predicted is varaible over time, [Dynamic Interaction](/docs/configuration/dynamic/) configurations can prove to be more effective. In this lesson we outline the approach to migrate a static model configuration to a Dynamic Interaction configuration.

The migration consists of the following steps:
1. Selecting a Dynamic Interaction algorithm
2. Creating your Dynamic Interaction configuration
3. Duplicating the static model Deployment Configuration and updating it to use the Dynamic Interaction configuration.
4. Adjusting your pre and post scoring logic to use the Dynamic Interaction configuration
5. Testing your Dynamic Interaction configuration
6. Run your [Dynamic Interaction configuration in parallel](/docs/user_guides/dynamic_interaction_deployments) to the static model in production
7. Use a [Network Runtime](/docs/user_guides/network) to route a portion of the traffic to the new Dynamic Interaction configuration
8. Use the Network Runtime to test multiple Dynamic Interaction configurations

Below we give more details on implementing each of these steps.

## Selecting a Dynamic Interaction algorithm
There are a number of different [Dynamic Interaction algorithms](/docs/configuration/dynamic) available, which are described in detail in the Dynamic Models section of the documentation. Here we give a brief overview of the algorithms:
1. **$\epsilon$-greedy**: This is the simplest algorithm. A portion ($\epsilon$) of the recommendations are made at random, with the remainder being the best performing offer, given the values of the contextual variables. This is a good algorithm to use when you want to explore your prediction space and have a clean set of data to use for further modelling or when you want the behaviour of the algorithm to be as explainable as possible.
2. **[Ecosystem Rewards](/docs/configuration/dynamic/ecosystemrewards)**: This algorithm uses a Thompson Sampling approach to rank offers. A Beta distribution is generated and updated for each option and combination of contextual variable values and options are scored by sampling from the Beta distributions. The Ecosystem Rewards algorithm provides a good balance between learning and explainability, and it has more optionality in how historical data is used in the learning process than the other algorithms.
3. **[Bayesian Probabilistic](/docs/configuration/dynamic/baysianprobabilistic)**: This algorithm uses a Naive Bayes model to score options, with a number of approaches available to impact how missing data in the Naive Bayes training is handled. This algorithm has less focus on balancing exploration and exploitation and instead uses a larger number of features to aim to improve the prediction accuracy. While still explainable, this algorithm is less interpretable than the Ecosystem Rewards and $\epsilon$-greedy algorithms.
4. **[Q-learning](/docs/configuration/dynamic/qlearning)**: The Q-learning algorithm allows for specific rewards and policies to be taken into account. However, it is the most complex algorithm to implement as the reward function must be implemented using the java plugin system. 

While one of these algorithms should be selected initially, it is possible to test multiple algorithms in parallel using the [Network Runtime](/docs/user_guides/network) and then select the best performing algorithm based on the results of the tests. This is described in more detail in the last section of this lesson.

## Creating your Dynamic Interaction configuration
Once you have selected a Dynamic Interaction algorithm, you will need to create the Dynamic Interaction configuration. Here we will discuss the Ecosystem Rewards algorithm as an example, but the same approaches apply to the other algorithms. 

The first step is to select the contextual variables or features that you want to use to inform the Dynamic Interaction learning process. One option for this when converting from a static model is to use the features with the highest variable importance from the static model. If you want to create new variables to use or combine existing variables you can set up [Virtual Variables](/docs/user_guides/virtual_variables) to do this.

To implement your configuration you can follow the [configuration documentation](/docs/configuration/dynamic/parameters) or follow the [Dynamic Interaction user guide](/docs/user_guides/dynamic).

**Creating an Ecosystem Rewards configuration using python:** The example shows the creation of an Ecosystem Rewards configuration using the python package, a full example including deployment and testing of the simulation is included at the end of the lesson.
```python
# Import packages

from prediction.apis import online_learning_management as ol
from prediction import jwt_access

# Connect to the ecosystem.Ai environment

ecosystem_password = getpass.getpass("Enter your ecosystem password")
mongo_password = getpass.getpass("Enter your MongoDB password")
auth = jwt_access.Authenticate("http://ecosystem-server:3001/api", "user@ecosystem.ai", ecosystem_password)

# Set the parameters for the configuration

# The name of the project and deployment on which you will be working.
project_id = "Demo Project"
deployment_id = "interaction_science_messages_eco_rewards"
db = "interaction_science" # The name of the MongoDB database to use for the set up feature store and options store

# Set up your Dynamic Interaction configuration

# Set the list of options to be recommended, a table of options can also be used.
list_of_messages = [
    "Get 10 percent off your next purchase"
    ,"We are excited to offer you a 10 percent discount"
    ,"Thanks for everything, get 10 percent off your next purchase"
]
# Create the set up feature store collection
setup_feature_store_collection = "messaging_set_up_feature_store"
contextual_variable_values = {"personality_type":["Enthusiastic","Industrious","Intentional","Experiential"],"education":["Graduate","Grade10","Grade12","Honours","PhD","Diploma"]}
ol.online_learning_ecosystem_rewards_setup_feature_store(
    auth,
    contextual_variable_values,
    db,
    setup_feature_store_collection,
    "message",
    list_of_offers=list_of_messages
)
#Create your online learing configuration
options_store_collection="messaging_options"
dynamic_interaction_uuid = ol.create_online_learning(
        auth,
        name=deployment_id,
        description="Interaction Science messages using Ecosystem Rewards template",
        feature_store_collection=setup_feature_store_collection,
        feature_store_database=db,
        options_store_database=db,
        options_store_collection=options_store_collection,
        randomisation_success_reward = 0.5,
        randomisation_fail_reward = 0.05,
        randomisation_processing_count = 200,
        randomisation_processing_window = 604800000,
        contextual_variables_offer_key="message",
        contextual_variables_contextual_variable_one_name="personality_type",
        contextual_variables_contextual_variable_one_from_data_source=True,
        contextual_variables_contextual_variable_one_lookup="personality_type",
        contextual_variables_contextual_variable_two_name="education",
        contextual_variables_contextual_variable_two_from_data_source=True,
        contextual_variables_contextual_variable_two_lookup="education",
        #update=True
)
```

## Set up the Deployment Configuration
When migrating from a static model configuration to a Dynamic Interaction configuration, the easiest way to create the Deployment Configuration is by duplicating the existing static model Deployment Configuration and updating it to use the Dynamic Interaction configuration. Changing the version of the static Deployment Configuration and clicking `Update` will create a copt that you can use for this purpose. At the same time you will probably want to change the name of the Deployment Configuration to be the same of the name of the Dynamic Interaction configuration you created in the previous step.

In your new Deployment Configuration, select the `New Knowledge` option and deselect the `Prediction Model` and `Model Selector` options. Scroll down to the `New Knowledge` accordion, expand it and select the Dynamic Interaction configuration that you created in the previous step.

You will also need to update the pre and post scoring logic in the Plugins accordion. This is discussed in more detail in the next section.

**Note:** Once you have created the Deployment Configuration and updated the pre and post scoring logic, you can deploy the configuration by following the [deployment guide](/docs/runtime/deployment). If you need access to the `properties` file for the Deployment Configuration, it is produced as an output by the `process_push` function in the python package. The code snippet below shows how to do this:
```python
#Push deployment and produce properties file
push_result = ge.process_push(auth,deployment_step)
if "ErrorMessage" in push_result:
    print(push_result["ErrorMessage"])
else:
    print(push_result["properties"])
```

## Adjusting your pre and post scoring logic
You will need to adjust your pre and post scoring logic to use the Dynamic Interaction configuration. If you do not have custom pre and post scoring logic, this is as simple as switch templates in your Deployment Interaction Configuration. Alternatively, you will need to make some minor changes to your existing pre and post scoring logic.

**Note:** If you are editing custom pre and post scoring logic the recommended approach is to [test and debug the code locally using IntelliJ](/docs/user_guides/runtime_plugin_development) before building the code in the Workbench.

### Pre scoring logic
The pre scoring logic will need to be updated if you are using contextual variables and the contextual variable values are being looked up from a data source. In this case you should either use the `PreScoreDynamic.java` [template](/docs/runtime/prepredict/prescoredynamic) prescore or if you have existing custom prescoring logic you will need to ensure that the pre scoring class extends `PreScoreSuper` and then call the `getDynamicSettings` and `getPrepopulateContextualVariables` methods, as per the code snippet below:
```java
    params = getDynamicSettings(mongoClient, params);        
    params = getPrepopulateContextualVariables(params);
```

**Note:** `getDynamicSettings` requires the `mongoClient` to be passed in as a parameter, in order for `mongoClient` to be passed to the pre score, the name of the pre score class must contain the string `PreScoreDynamic` or `PreScoreLookup`.

### Post scoring logic
If you are not using custom post scoring logic, you can use the `PlatformDynamicEngagement.java` [template](/docs/runtime/postpredict/platformdynamicengagement) post score. If you have existing custom post scoring logic, you will need to make two key changes, which are illustrated in `PlatformDynamicEngagement.java`:
1. Extract the results of the Dynamic Interaction scoring from `params`
2. Loop through the Options Store when processing options rather than the Offer Matrix or Model Scoring results
3. Decide how to handle options which are in the Options Store but not in the Offer Matrix
4. Get the offer score by getting the `arm_reward` from the `option` in the Options Store
5. Add the Dynamic Interaction specific outputs to the API response for logging, explainability and to enable the online learning process

To extract the results of the Dynamic Interaction scoring from `params`, check that your post scoring logic extends `PostScoreSuper` and use the following code snippet:
```java
	/***************************************************************************************************/
	/** Standardized approach to access dynamic datasets in plugin.
	 * The options array is the data set/feature_store that's keeping track of the dynamic changes.
	 * The optionParams is the parameter set that will influence the real-time behavior through param changes.
	 */
	/***************************************************************************************************/
	JSONArray options = getOptions(params);
	JSONObject optionParams = getOptionsParams(params);
	JSONObject locations = getLocations(params);

	JSONObject contextual_variables = optionParams.getJSONObject("contextual_variables");
	JSONObject randomisation = optionParams.getJSONObject("randomisation");

	/***************************************************************************************************/
	/** Test if contextual variable is coming via api or feature store: API takes preference... */
	if (!work.has("contextual_variable_one")) {
		if (featuresObj.has(contextual_variables.getString("contextual_variable_one_name")))
			work.put("contextual_variable_one", featuresObj.get(contextual_variables.getString("contextual_variable_one_name")));
		else
			work.put("contextual_variable_one", "");
	}
	if (!work.has("contextual_variable_two")) {
		if (featuresObj.has(contextual_variables.getString("contextual_variable_two_name")))
			work.put("contextual_variable_two", featuresObj.get(contextual_variables.getString("contextual_variable_two_name")));
		else
			work.put("contextual_variable_two", "");
	}
	/***************************************************************************************************/
```
These variables will be used rather than `domainsProbabilityObj` to get the scoring results. You can look at `PlatformDynamicEngagement.java` for an example of how this, and subsequent, snippets can be used.

To loop through the Options Store when processing options, you can use the following code snippet:
```java
	int[] optionsSequence = generateOptionsSequence(options.length(), options.length());
	String contextual_variable_one = String.valueOf(work.get("contextual_variable_one"));
	String contextual_variable_two = String.valueOf(work.get("contextual_variable_two"));

	for(int j : optionsSequence) {
		JSONObject option = options.getJSONObject(j);
```

If an option is in the Options Store but not in the Offer Matrix you can either ignore that option or generate a default Offer Matrix entry for that option and generate a warning in the logs
```java
	/** Skip the item if offer matrix does not contain option */
	/*
	if (!offerMatrixWithKey.has(option.getString("optionKey")))
		continue;
	 */
	/** Generate default offer matrix entry if offer is not in the Offer Matrix */
	String offer = option.getString("optionKey");
	if (!offerMatrixWithKey.has(option.getString("optionKey"))) {
		JSONObject singleOffer = defaultOffer(offer);
		offerMatrixWithKey.put(option.getString("optionKey"), singleOffer);
		LOGGER.warn("BEWARE, DEFAULT OFFER GENERATED. IN OPTIONS STORE AND NOT OFFER MATRIX: " + option.getString("optionKey"));
	}
```

To get the score for the offer from the current option in the loop, you can use the following code snippet:
```java
	double p = 0.0;
	double arm_reward = 0.001;
	double learning_reward = 1.0;

	if (option.has("arm_reward")) {
		p = (double) option.get("arm_reward");
	} else {
		p = arm_reward;
	}
	arm_reward = p;
```

To add the Dynamic Interaction specific outputs to the API response, you can use the following code snippet:
```java
    /** Add dynamic interaction specific outputs to the API response */
	finalOffersObject.put("p", p);
	if (option.has("contextual_variable_one"))
		finalOffersObject.put("contextual_variable_one", option.getString("contextual_variable_one"));
	else
		finalOffersObject.put("contextual_variable_one", "");

	if (option.has("contextual_variable_two"))
		finalOffersObject.put("contextual_variable_two", option.getString("contextual_variable_two"));
	else
		finalOffersObject.put("contextual_variable_two", "");

	double alpha = (double) DataTypeConversions.getDoubleFromIntLong(option.get("alpha"));
	double beta = (double) DataTypeConversions.getDoubleFromIntLong(option.get("beta"));
	finalOffersObject.put("alpha", alpha);
	finalOffersObject.put("beta", beta);
	if (!option.has("weighting"))
		finalOffersObject.put("weighting", -1.0);
	else
		finalOffersObject.put("weighting", (double) DataTypeConversions.getDoubleFromIntLong(option.get("weighting")));
	finalOffersObject.put("arm_reward", arm_reward);
	finalOffersObject.put("learning_reward", learning_reward);

	/* Debugging variables */
	if (!option.has("expected_takeup"))
		finalOffersObject.put("expected_takeup", -1.0);
	else
		finalOffersObject.put("expected_takeup", (double) DataTypeConversions.getDoubleFromIntLong(option.get("expected_takeup")));

	if (!option.has("propensity"))
		finalOffersObject.put("propensity", -1.0);
	else
		finalOffersObject.put("propensity", (double) DataTypeConversions.getDoubleFromIntLong(option.get("propensity")));

	if (!option.has("epsilon_nominated"))
		finalOffersObject.put("epsilon_nominated", -1.0);
	else
		finalOffersObject.put("epsilon_nominated", (double) DataTypeConversions.getDoubleFromIntLong(option.get("epsilon_nominated")));
```

If you want to add a check to confirm that any contextual variables are being correctly processed, you can use the following code snippet in the loop through the Options Store:
```java
	String contextual_variable_one_Option = "";
	if (option.has("contextual_variable_one") && !contextual_variable_one.equals(""))
		contextual_variable_one_Option = String.valueOf(option.get("contextual_variable_one"));
	String contextual_variable_two_Option = "";
	if (option.has("contextual_variable_two") && !contextual_variable_two.equals(""))
		contextual_variable_two_Option = String.valueOf(option.get("contextual_variable_two"));

	if (contextual_variable_one_Option.equals(contextual_variable_one) && contextual_variable_two_Option.equals(contextual_variable_two)) {
```

**Note:** The online learning process for the Dynamic Interaction configuration expects specific structures to be present in the logging collections and API responses. If you are following the templates provided and using the `getTopScores` structure in your post scoring logic then these structures will be automatically generated. If not using the `getTopScores` method you will need to ensure the the logging collections contain a `final_offers` array with the following structure:
```json
    "final_result": [
        {
            "result": {
                "contextual_variable_two": "Grade12",
                "cost": 0,
                "learning_reward": 100,
                "contextual_variable_one": "Industrious",
                "uuid": "f396e071-7890-432c-894c-f400f0e0bc89",
                "modified_offer_score": 0,
                "offer_name": "Bulk Purchase Discount",
                "offer": "Bulk Purchase Discount",
                "score": 0.5948571746701846,
                "final_score": 0.5948571746701846,
                "price": 0,
                "offer_value": 0,
                "arm_reward": 0.5948571746701846
            },
            "result_full": {
                "expected_takeup": -1,
                "contextual_variable_two": "Grade12",
                "cost": 0,
                "explore": 0,
                "epsilon_nominated": 1,
                "learning_reward": 100,
                "contextual_variable_one": "Industrious",
                "offer_name_desc": "Recommended offer is Bulk Purchase Discount",
                "weighting": 1,
                "uuid": "f396e071-7890-432c-894c-f400f0e0bc89",
                "offer_name": "Bulk Purchase Discount",
                "modified_offer_score": 0,
                "offer": "Bulk Purchase Discount",
                "p": 0.5948571746701846,
                "score": 0.5948571746701846,
                "final_score": 0.5948571746701846,
                "propensity": 0,
                "price": 0,
                "alpha": 1,
                "offer_value": 0,
                "beta": 1.1,
                "arm_reward": 0.5948571746701846
            },
            "rank": 1
        }
    ]
```
    Additionally, the predictor in the logs should be the same as the name of the Dynamic Interaction configuration and the name of the Deployment Configuration:
```json
    "predictor": "offer_recommend_dynamic"
```

## Testing your Dynamic Interaction configuration
Once you have deployed your Dynamic Interaction configuration deployment configuration, you can run tests by making individual API calls or by running a simulation. This can be done in python or using the workbench. In the workbench use the [API Management](/docs/configuration/api) functionality for individual calls or the [Simulation](/docs/configuration/simulations) functionality for running a simulation. In python these test can be run as per the example below.

**Pushing and Testing a Deployment Configuration using python:** The example shows the pushing and testing of a Dynamic Interaction deployment configuration.
```python
# Deploy your configuration and call the endpoint to check the results

#Push deployment and produce properties file
deployment_step = dm.get_deployment_step(auth, project_id, deployment_id, version, project_status="experiment")
push_result = ge.process_push(auth,deployment_step)
if "ErrorMessage" in push_result:
    print(push_result["ErrorMessage"])
else:
    print(push_result["properties"])
#Test your deployment
post_invocations_input = {
                            "campaign": deployment_id
                          , "subcampaign": "none"
                          , "channel": "notebooks"
                          , "customer": 793
                          , "userid": "test"
                          , "numberoffers": 1
                          , "params": "{}"
                        }
offer_response = o.invocations(auth_runtime, post_invocations_input)
pp.pprint(offer_response)

# Run a simulation

number_of_iterations = 10000
#Set take up rates
simulated_take_up = {}
for i in list_of_messages:
    simulated_take_up[i] = random()
#Define API parameters
post_invocations_input = {
                            "campaign": deployment_id
                          , "subcampaign": "none"
                          , "channel": "notebooks"
                          , "userid": "test"
                          , "numberoffers": 1
                          , "params": "{}"
                        }
#Run simulation
for i in range(number_of_iterations):
    #Get customer
    dme.create_document_collection_index(auth, parameter_access["database"], parameter_access["table_collection"], {"education":1})
    dme.create_document_collection_index(auth, parameter_access["database"], parameter_access["table_collection"], {parameter_access["lookup"]["key"]:1})
    customer = dme.post_mongo_db_aggregate_pipeline(
        auth,
        {
        "database":parameter_access["database"],"collection":parameter_access["table_collection"]
        ,"pipeline":[
            {"$match":{"education":{"$ne":"temp_user"}}}
            ,{"$sample":{"size":1}}
            ,{"$project":{parameter_access["lookup"]["key"]:1,"_id":0}}
        ]
        }
    )[0][parameter_access["lookup"]["key"]]
    post_invocations_input["customer"] = customer
    #Get offer
    offer_response = o.invocations(auth_runtime, post_invocations_input)
    if len(offer_response["final_result"]) == 0:
        print(f"Empty response returned during simulation, simulation halted after {i} iterations.\n\nResponse:\n{offer_response}\n\nLogs:")
        print(u.get_container_log(auth,20,"pulse_responder_8091")["log"][0][1:-1].replace("\n, ","\n"))
        break
    offer = offer_response["final_result"][0]["result"]["offer"]
    #Check take up
    if simulated_take_up[offer] <= random():
        o.put_offer_recommendations(auth_runtime, offer_response, " ")
o.refresh(auth_runtime,"")

# Plot the Beta Distributions after the simulation has been run
for con_var_one in contextual_variable_values[list(contextual_variable_values.keys())[0]]:
    for con_var_two in contextual_variable_values[list(contextual_variable_values.keys())[1]]:
        #Plot the resulting Beta distributions
        boxes = mu.ecosystem_rewards_beta_box_plots(auth,options_store_collection,db,con_var_one,con_var_two)
        fig, ax = plt.subplots()  
        ax.bxp(boxes, showfliers=False)
        ax.set_ylabel("PDF")
        ax.set_title(f"{con_var_one} and {con_var_two}")
        plt.xticks(rotation=90)
        plt.show() 
```

## Run your Dynamic Interaction configuration in parallel
To run initial tests of your Dynamic Interaction configuration in production you can run the Dynamic Interaction deployment in parallel to the existing static model deployment. This can be done by following the [Testing Dynamic Interaction Deployments guide](/docs/user_guides/dynamic_interaction_deployments).

## Route some traffic to your Dynamic Interaction configuration
Once you have completed the testing of your Dynamic Interaction deployment you can route a portion of the traffic currently going to the static model deployment to the Dynamic Interaction deployment. This can be done using the [Network Runtime](/docs/user_guides/network) functionality. The Network Runtime allows you to route traffic in a variety of ways. The `experiment_selector` network type is likely to be a good option for this but the type to use can be evaluated based on the requirements of your use case.

## Test multiple Dynamic Interaction configurations
Once you have a Dynamic Interaction configuration running in production, it is good practice to test multiple Dynamic Interaction configurations. This can be done using the [Network Runtime](/docs/user_guides/network) functionality. The Network Runtime allows you to route traffic to multiple Dynamic Interaction configurations and compare the results. The `experiment_selector` network type is likely to be a good option for this but the type to use can be evaluated based on the requirements of your use case.

**Creating, deploying and testing an Ecosystem Rewards configuration:** The example shows the creation, deployment and testing of an Ecosystem Rewards configuration using the python package.
```python
# Import packages

from prediction.apis import deployment_management as dm
from prediction.apis import ecosystem_generation_engine as ge
from prediction.apis import data_management_engine as dme
from prediction.apis import data_munging_engine as mu
from prediction.apis import online_learning_management as ol
from prediction.apis import prediction_engine as pe
from prediction.apis import worker_file_service as fs
from prediction.apis import utilities as u
from prediction import jwt_access
from runtime.apis import predictor_engine as o
from runtime import access
pp = pprint.PrettyPrinter(indent=1)
from random import random

# Connect to the ecosystem.Ai environment

ecosystem_password = getpass.getpass("Enter your ecosystem password")
mongo_password = getpass.getpass("Enter your MongoDB password")
auth = jwt_access.Authenticate("http://ecosystem-server:3001/api", "user@ecosystem.ai", ecosystem_password)

# Set the parameters for the configuration

# The name of the project and deployment on which you will be working.
project_id = "Demo Project"
deployment_id = "interaction_science_messages_eco_rewards"
version = "001" # deployment version
db = "interaction_science" # The name of the MongoDB database to use for the set up feature store and options store
# The url of the ecosystem.Ai runtime
runtime_path="http://ecosystem-runtime:8091"
auth_runtime = access.Authenticate(runtime_path)

# Set up your Dynamic Interaction configuration

# Set the list of options to be recommended, a table of options can also be used.
list_of_messages = [
    "Get 10 percent off your next purchase"
    ,"We are excited to offer you a 10 percent discount"
    ,"Thanks for everything, get 10 percent off your next purchase"
]
# Create the set up feature store collection
setup_feature_store_collection = "messaging_set_up_feature_store"
contextual_variable_values = {"personality_type":["Enthusiastic","Industrious","Intentional","Experiential"],"education":["Graduate","Grade10","Grade12","Honours","PhD","Diploma"]}
ol.online_learning_ecosystem_rewards_setup_feature_store(
    auth,
    contextual_variable_values,
    db,
    setup_feature_store_collection,
    "message",
    list_of_offers=list_of_messages
)
#Create your online learing configuration
options_store_collection="messaging_options"
dynamic_interaction_uuid = ol.create_online_learning(
        auth,
        name=deployment_id,
        description="Interaction Science messages using Ecosystem Rewards template",
        feature_store_collection=setup_feature_store_collection,
        feature_store_database=db,
        options_store_database=db,
        options_store_collection=options_store_collection,
        randomisation_success_reward = 0.5,
        randomisation_fail_reward = 0.05,
        randomisation_processing_count = 200,
        randomisation_processing_window = 604800000,
        contextual_variables_offer_key="message",
        contextual_variables_contextual_variable_one_name="personality_type",
        contextual_variables_contextual_variable_one_from_data_source=True,
        contextual_variables_contextual_variable_one_lookup="personality_type",
        contextual_variables_contextual_variable_two_name="education",
        contextual_variables_contextual_variable_two_from_data_source=True,
        contextual_variables_contextual_variable_two_lookup="education",
        #update=True
)

# Configure your deployment

#Get your online learing configuration
dynamic_interaction_uuid = ol.get_dynamic_interaction_uuid(auth,deployment_id)
dynamic_interaction = dm.define_deployment_multi_armed_bandit(epsilon=0, dynamic_interaction_uuid=dynamic_interaction_uuid)
#Configure the lookup to the customer feature store
parameter_access = dm.define_deployment_parameter_access(
    auth,
    lookup_key="customer",
    lookup_type="int",
    database=db,
    table_collection="customer_feature_store",
    datasource="mongodb"
)
#Create your deployment
deployment_step = dm.create_deployment(
    auth,
    project_id=project_id,
    deployment_id=deployment_id,
    description="Messaging deployment (http://ecosystem-runtime:8091)",
    version=version,
    plugin_post_score_class="PlatformDynamicEngagement.java",
    plugin_pre_score_class="PreScoreDynamic.java",
    scoring_engine_path_dev=runtime_path,
    mongo_connect=f"mongodb://ecosystem_user:{mongo_password}@ecosystem-server:54445/?authSource=admin",
    parameter_access=parameter_access,
    multi_armed_bandit=dynamic_interaction,
)

# Deploy your configuration and call the endpoint to check the results

#Push deployment and produce properties file
deployment_step = dm.get_deployment_step(auth, project_id, deployment_id, version, project_status="experiment")
push_result = ge.process_push(auth,deployment_step)
if "ErrorMessage" in push_result:
    print(push_result["ErrorMessage"])
else:
    print(push_result["properties"])
#Test your deployment
post_invocations_input = {
                            "campaign": deployment_id
                          , "subcampaign": "none"
                          , "channel": "notebooks"
                          , "customer": 793
                          , "userid": "test"
                          , "numberoffers": 1
                          , "params": "{}"
                        }
offer_response = o.invocations(auth_runtime, post_invocations_input)
pp.pprint(offer_response)

# Run a simulation

number_of_iterations = 10000
#Set take up rates
simulated_take_up = {}
for i in list_of_messages:
    simulated_take_up[i] = random()
#Define API parameters
post_invocations_input = {
                            "campaign": deployment_id
                          , "subcampaign": "none"
                          , "channel": "notebooks"
                          , "userid": "test"
                          , "numberoffers": 1
                          , "params": "{}"
                        }
#Run simulation
for i in range(number_of_iterations):
    #Get customer
    dme.create_document_collection_index(auth, parameter_access["database"], parameter_access["table_collection"], {"education":1})
    dme.create_document_collection_index(auth, parameter_access["database"], parameter_access["table_collection"], {parameter_access["lookup"]["key"]:1})
    customer = dme.post_mongo_db_aggregate_pipeline(
        auth,
        {
        "database":parameter_access["database"],"collection":parameter_access["table_collection"]
        ,"pipeline":[
            {"$match":{"education":{"$ne":"temp_user"}}}
            ,{"$sample":{"size":1}}
            ,{"$project":{parameter_access["lookup"]["key"]:1,"_id":0}}
        ]
        }
    )[0][parameter_access["lookup"]["key"]]
    post_invocations_input["customer"] = customer
    #Get offer
    offer_response = o.invocations(auth_runtime, post_invocations_input)
    if len(offer_response["final_result"]) == 0:
        print(f"Empty response returned during simulation, simulation halted after {i} iterations.\n\nResponse:\n{offer_response}\n\nLogs:")
        print(u.get_container_log(auth,20,"pulse_responder_8091")["log"][0][1:-1].replace("\n, ","\n"))
        break
    offer = offer_response["final_result"][0]["result"]["offer"]
    #Check take up
    if simulated_take_up[offer] <= random():
        o.put_offer_recommendations(auth_runtime, offer_response, " ")
o.refresh(auth_runtime,"")

# Plot the Beta Distributions after the simulation has been run
for con_var_one in contextual_variable_values[list(contextual_variable_values.keys())[0]]:
    for con_var_two in contextual_variable_values[list(contextual_variable_values.keys())[1]]:
        #Plot the resulting Beta distributions
        boxes = mu.ecosystem_rewards_beta_box_plots(auth,options_store_collection,db,con_var_one,con_var_two)
        fig, ax = plt.subplots()  
        ax.bxp(boxes, showfliers=False)
        ax.set_ylabel("PDF")
        ax.set_title(f"{con_var_one} and {con_var_two}")
        plt.xticks(rotation=90)
        plt.show() 
```

---

## Virtual Variables

Source: `docs/user_guides/virtual_variables.mdx`
URL: https://ecosystem.ai/docs/user_guides/virtual_variables
Summary: This lesson outlines the configuration and usage of the Virtual Variable functionality.

# Introduction
The Virtual Variable functionality allows you to make use of variables derived from values in the customer lookup configured in the deployment without having to hard code the derivation of those variables into the pre scoring logic. This can be used to test new segmentation approaches and model features without first having to add those features to the production customer feature store.

The configuration and usage of the Virtual Variables requires the following steps:
1. Configure your Virtual Variables in the [Deployment](/docs/configuration/deployment) settings.
2. Use your Virtual Variables in a Dynamic Interaction configuration or in your model training.

Below we give more details on implementing each of these steps and how the Virtual Variables are used in the pre and post scoring logic.

**Note:** Prior to version 0.9.6.1 Virtual Variables are only supported for Dynamic Interaction configurations and cannot be configured in the `ecosystem.properties` file.

## Configuring Virtual Variables
The first step in using Virtual Variables is to configure them in the deployment settings. To do this using the Workbench follow these steps:
1. Enable Parameters from Data Source in the [Deployment](/docs/configuration/deployment) settings and configure a customer feature store in the accordion which appears.
2. Select the Create Virtual Variables checkbox and click the Add Variable button.
3. Configure the rules for creating your variable. This can either be done by bucketing a field in the customer feature store or by concatenating a number of fields in the customer feature store.
4. Update the Deployment to save your changes.
There should now be a `virtual_variables` object saved in the JSON settings of the Deployment.
```json                
"virtual_variables": [
                    {
                        "name": "segment_one",
                        "default": "gt-15",
                        "type": "discretize",
                        "original_variable": "customer_feature_one",
                        "fields": [],
                        "buckets": [
                            {
                                "from": 0,
                                "label": "lt-15",
                                "to": 15
                            }
                        ]
                    },
                    {
                        "name": "segment_two",
                        "default": "gt-500",
                        "type": "discretize",
                        "original_variable": "customer_feature_two",
                        "fields": [],
                        "buckets": [
                            {
                                "from": 0,
                                "label": "lt-50",
                                "to": 50
                            },
                            {
                                "from": 50,
                                "label": "50-250",
                                "to": 250
                            },
                            {
                                "from": 250,
                                "label": "250-500",
                                "to": 500
                            }
                        ]
                    }
                ]
```

To use your Virtual Variables you need to add them to your model or to your Dynamic Interaction configuration. To add a virtual variable to your model, add the derived variable to your model training feature store and train the model as usual. To add a virtual variable to your Dynamic Interaction configuration make sure your Dynamic Interaction configuration is linked to the Deployment in the New Knowledge accordion. Then go to the [Variables](/docs/configuration/dynamic/parameters/) tab and select the `Get values from external data store when scoring` checkbox. This will enable a dropdown list from which you can select a variable from the customer feature store configured in your deployment. The names of the Virtual Variables should be available in the list of variables. Select the desired variables and save your configuration. The same `virtual_variables` object that is saved in the Deployment json should now be saved record for the Dynamic Interaction in the `dynamic_engagement` collection in the `ecosystem_meta` database. 

The following truncated example shows how to set the `virtual_variables` object in the python package:
```python
from prediction.apis import online_learning_management as ol
from prediction.apis import deployment_management as dm
from prediction.apis import ecosystem_generation_engine as ge
#Configure virtual_variables
virtual_variables = []
virt_var = dm.define_deployment_virtual_variable(
    name="segment_one"
    ,original_variable="customer_feature_one"
    ,default="gt-15"
    ,variable_type="discretize"
    ,buckets=[{"from": 0,"label": "lt-15","to": 15}]
)
virtual_variables.append(virt_var)
virt_var = dm.define_deployment_virtual_variable(
    name="segment_two"
    ,original_variable="customer_feature_two"
    ,default="gt500"
    ,variable_type="discretize"
    ,buckets=[
              {"from": 0,"label": "lt-50","to": 50},
              {"from": 50,"label": "50-250","to": 250},
              {"from": 250,"label": "250-500","to": 500}
            ]
)
virtual_variables.append(virt_var)
#Configure the Dynamic Interactions to use the Virtual Variable configuration
online_learning_uuid = ol.create_online_learning(
        auth,
        name=deployment_id,
        description=dynamic_interaction_description,
        feature_store_collection=ol_feature_store_collection,
        feature_store_database=ol_feature_store_database,
        options_store_database=options_collection,
        options_store_collection=options_db,
        randomisation_success_reward = 0.5,
        randomisation_fail_reward = 0.05,
        randomisation_processing_count = 200,
        randomisation_processing_window = 604800000,
        contextual_variables_offer_key="offer"
        contextual_variables_contextual_variable_one_name="segment_one",
        contextual_variables_contextual_variable_one_from_data_source = True,
        contextual_variables_contextual_variable_one_lookup = "segment_one",
        contextual_variables_contextual_variable_two_name="segment_two",
        contextual_variables_contextual_variable_two_from_data_source = True,
        contextual_variables_contextual_variable_two_lookup = "segment_two",
        virtual_variables=virtual_variables,
)
#Configure the deployment to use the Dynamic Interaction configuration
new_knowledge = dm.define_deployment_multi_armed_bandit(epsilon=0, dynamic_interaction_uuid=online_learning_uuid)
#Configure the lookup to the customer feature store
parameter_access = dm.define_deployment_parameter_access(
    auth,
    lookup_key="customer_number",
    lookup_type="int",
    database="feature_store_database",
    table_collection="customer_feature_store",
    datasource="mongodb",
    virtual_variables=virtual_variables
)
#Create a deployment using the configured virtual variables
deployment_step = dm.create_deployment(
    auth,
    project_id=project_id,
    deployment_id=deployment_id,
    version=version,
    plugin_post_score_class="PlatformDynamicEngagement.java",
    plugin_pre_score_class="PreScoreDynamic.java",
    scoring_engine_path_dev=runtime_path,
    parameter_access=parameter_access,
    multi_armed_bandit=new_knowledge,
    setup_offer_matrix=offer_matrix,
)
#Push the deployment and print the resulting properties file
push_result = ge.process_push(auth,deployment_step)
if "ErrorMessage" in push_result:
    print(push_result["ErrorMessage"])
else:
    print(push_result["properties"])
```
When you push your Deplyoment configuration to the runtime the properties file that is created will
```properties
predictor.param.lookup={predictor:'dynamic-recommender',mojo:1,database:'mongodb',db:'telecommunications',table:'feature_store',url:'',lookup:{"value":123,"key":"customer"},virtual_variables:[{"default":"gt-15","buckets":[{"from":0,"label":"lt-15","to":15}],"name":"segment_one","type":"discretize","original_variable":"feature_one","fields":[]},{"default":"gt-500","buckets":[{"from":0,"label":"lt-50","to":50},{"from":50,"label":"50-250","to":250},{"from":250,"label":"250-500","to":500}],"name":"segment_two","type":"discretize","original_variable":"feature_one","fields":[]}],result:{parm1:'field1', parm2:'field2'}}
```

## Virtual Variables and pre and post scoring logic

### Pre scoring logic
If the Virtual Variables are configured in the `properties` file then they will be derived and added to `featuresObj` before the pre-scoring logic is called. Otherwise the `getVirtualVariables` method can be called in the pre-scoring logic to derive the Virtual Variables from the customer feature store lookup. The `getVirtualVariables` method will return `params` with an updated `featuresObj` which contains the values of the Virtual Variables.

To use Virtual Variables for the contextual variables in a Dynamic Interaction configuration, the `getDynamicSettings` and `getPrepopulateContextualVariables` methods need to be called in the pre scoring logic. The template for doing so is the `PreScoreDynamic` class which is shown below. `getDynamicSettings` will add the Dynamic Interaction configuration from `ecosystem_meta.dynamic_engagement` to `params` with the key `dynamicCorporaPreScore`. `getPrepopulateContextualVariables` will add the values of the virtual variables to `params.in_params` with the keys `contextual_variable_one` and `contextual_variable_two`. This will result in the values of the virtual variables being  added to the contextual variables objects in the `params` JSONObject that is passed through the runtime.
```java
package com.ecosystem.plugin.customer;

/**
 * Add key/value to properties predictor.param.lookup to allow for contextual variable lookup:
 */
public class PreScoreDynamic extends PreScoreSuper {

    public PreScoreDynamic() throws Exception {

    }

    /**
     * Pre-pre predict
     */
    public void getPrePredict() {
    }

    /**
     * getPostPredict
     * @param params
     * @param session
     * @return
     */
    public static JSONObject getPrePredict(MongoClient mongoClient, JSONObject params, CqlSession session) throws IOException {

        if (lookupDatabase == null) return params;

        try {

            /* Get dynamic properties and add virtual variables to the feature store. */
            params = getDynamicSettings(mongoClient, params);

            /* Populate contextual variables by default based on settings. */
            params = getPrepopulateContextualVariables(params);

        } catch (Exception e) {
            LOGGER.error("PreScoreDynamic:E001:UUID: " + params.get("uuid") + " Dynamic parameters failed: " + params.toString());
            e.printStackTrace();
        }

        return params;
    }

}
```

**Note:** Prior to version 0.9.4.3 `getPrePredict` is not passed the Mongo Connection (`mongoClient`). In this case you will need to open a close a Mongo connection in the pre scoring logic, as shown in the code below. Note that this will increase the load on the database.
    
```java
package com.ecosystem.plugin.customer;

public class PreScoreDynamic extends PreScoreSuper {

    public ConnectionFactory settingsConnection;
    public MongoClient mongoClient;

    public PreScoreDynamic() throws Exception {

    }

    /**
     * Pre-pre predict
     */
    public void getPrePredict() {
    }

    /**
     * getPostPredict
     * @param params
     * @param session
     * @return
     */
    public JSONObject getPrePredict(JSONObject params, CqlSession session) throws IOException {

        if (lookupDatabase == null) return params;

        try {
            settingsConnection = new ConnectionFactory();
            mongoClient = settingsConnection.getMongoClient();
            /* Get dynamic properties and add virtual variables to the feature store. */
            params = getDynamicSettings(mongoClient, params);
            mongoClient.close();
            params = getVirtualVariables(params);

            /* Populate contextual variables by default based on settings. */
            params = getPrepopulateContextualVariables(params);

        } catch (Exception e) {
            LOGGER.error("PreScoreDynamic:E001:UUID: " + params.get("uuid") + " Dynamic parameters failed: " + params.toString());
            e.printStackTrace();
        }

        return params;
    }

}

```

### Post scoring logic
No additional configuration is required in the post scoring logic to use the Virtual Variables. The values of the variables can be accessed from `featuresObj` like any other feature in the customer feature store and the contextual variable values should be populated as usual if they are required in the configuration.

## Virtual Variable across multiple customer feature stores 
When configuring [multiple customer lookups](/docs/configuration/deployment/parameters) you can configure Virtual Variables for each data source. These variables can be processed and used as described above.

---

## Agent Framework

Source: `docs/workers/agent_framework/index.mdx`
URL: https://ecosystem.ai/docs/workers/agent_framework

# Agent Framework

### Why do you need a framework?

The Agent Framework is a set of tools and libraries that help you build and manage agents. Agents are the core components of the ecosystem.Ai platform. They are responsible for processing user input, generating responses, and managing conversations.

### What is an agent?

An agent is a software program that acts on behalf of a user. It can perform tasks, answer questions, and interact with other agents. Agents can be simple or complex, depending on the task they are designed to perform.

### What can you do with the Agent Framework?

The framework provides a set of tools and libraries that help you build, train, and deploy agents. You can use the framework to create chatbots, virtual assistants, and other conversational agents. The framework also provides tools for managing conversations, handling user input, and generating responses.

### How does the Agent Framework work?

The framework is built on top of the ecosystem.Ai platform. It provides a set of APIs that allow you to interact with the platform and build agents. The framework also provides a set of tools and libraries that help you build, train, and deploy agents.

### What are the key features of the Agent Framework?

- **Agent Management:** The framework provides tools for managing agents, including creating, training, and deploying agents.
- **Conversation Management:** The framework provides tools for managing conversations, including handling user input, generating responses, and managing conversation history.
- **User Management:** The framework provides tools for managing users, including tracking user interactions, preferences, and history.
- **Integration:** The framework provides tools for integrating agents with other systems, including APIs, databases, and external services.
- **Customization:** The framework provides tools for customizing agents, including adding new features, training data, and responses.
- **Journey Management:** The framework provides tools for managing user journeys, including tracking user interactions, preferences, and history.

### Ecosystem.ai Workbench Agent Configurations

The Ecosystem.ai Workbench provides a graphical user interface tool for managing ecosystem agent configurations.

The interface is split into two tabs:
- **Agents List:** This tab shows a table listing agent configurations and some key configuration metadata. Configurations can be selected for editing by clicking on rows of the table. Configurations can also be deleted from here.
- **Agent Configuration:** This tab shows two columns. The right column contains a node editor for adding and connecting agent nodes. The left column shows forms for editing node data when a node is selected and hints for how to use the interface if no node or more than one node is selected.

The URL for the workbench agent nodes page is:

``<your_workbench_domain>/pages/ecosystem-agents/nodes``

---

## Journey Management

Source: `docs/workers/agent_framework/journeys.mdx`
URL: https://ecosystem.ai/docs/workers/agent_framework/journeys

# Journeys

A user journey is the complete sequence of interactions a user has with a brand, from initial awareness to post-purchase engagement. It encompasses all touchpoints, including marketing, sales, service, and product usage. By understanding this journey, businesses can optimize user experiences, build loyalty, and drive growth.

### Journey Management

Journey management is the systematic process of overseeing and improving user experiences across all touchpoints. The journey management framework provides tools for managing user journeys, including tracking user interactions, preferences, and history to gain insights into user behavior and to identify opportunities for enhancement. By effectively managing the user journey, businesses can create seamless and personalized experiences that drive customer satisfaction and loyalty.

##### Tracking User Interactions

Tracking user interactions involves monitoring and analyzing how users engage with a brand. This includes website visits, app usage, social media interactions, email opens, and purchases. By understanding these interactions, businesses can identify patterns, preferences, and pain points to inform decision-making and optimize the user experience.

##### Tracking User Preferences

Tracking user preferences involves capturing and analyzing user data to understand their likes, dislikes, and needs. This includes information about product preferences, purchase history, browsing behavior, and demographic data. By understanding user preferences, businesses can tailor marketing messages, product recommendations, and overall experiences to meet individual needs.

##### Tracking User History

Tracking user history involves maintaining a record of user interactions and behaviors over time. This includes purchase history, customer service interactions, and website visits. By analyzing user history, businesses can identify trends, predict future behavior, and provide personalized recommendations and support.

### Ecosystem Workbench Journey Management System Configurations

The Ecosystem.ai Workbench provides a graphical user interface tool for managing journey management system configurations.

The interface is split into three tabs:
- **Journeys List:** This tab shows a table listing configurations and some key configuration metadata. Configurations can be selected for editing by clicking on rows of the table. Configurations can also be deleted from here.
- **Journey Configuration:** This tab shows a JSON editor for editing the selected journey management system configuration. It also shows a table listing nodes linked to the journey configuration. 
- **Node Configuration:** This tab shows a JSON editor for editing the selected node configuration.

The URL for the workbench journey management system page is:

``<your_workbench_domain>/pages/ecosystem-journey-management/jms``

---

## Python

Source: `docs/workers/generative.mdx`
URL: https://ecosystem.ai/docs/workers/generative

# Generative Models

### Overview

Generative models are a class of models that generate new data instances that resemble the training data. They are used in various applications such as image generation, text generation, and music generation. Generative models are used in unsupervised learning and are used to learn the underlying distribution of the data.

### Ollama

[ecosystem.Ai Ollama](https://hub.docker.com/r/ecosystemai/ecosystem-ollama) is a container that runs the ecosystem.Ai Ollama service. Ollama is a generative model serving service that generates text based on a prompt.

### Chat

[ecosystem.Ai Chat Server](https://hub.docker.com/r/ecosystemai/ecosystem-chat) is a container that runs the ecosystem.Ai Chat Server service. The Chat Server is a generative service that generates text based on a prompt.

---

## Workers

Source: `docs/workers/index.mdx`
URL: https://ecosystem.ai/docs/workers

# Workers

### Why do you need a worker architecture?

The worker architecture is a set of tools and libraries that help you build and manage workers. Workers are the core components of the ecosystem.Ai platform. They are responsible for processing user input, generating responses, and managing conversations.

### What is a worker?

There are two types of workers in the ecosystem.Ai platform:
- data workers
- prediction workers
- algorithm workers

---

## Python

Source: `docs/workers/python.mdx`
URL: https://ecosystem.ai/docs/workers/python

# Python

### Python Development

Python is a popular programming language for developing machine learning models. The ecosystem.Ai AI platform supports Python for developing and deploying models.

### Python Libraries

```python
```

---

## Workers

Source: `docs/workers/worker_arch.mdx`
URL: https://ecosystem.ai/docs/workers/worker_arch

# Workers

### Worker Architecture

The worker architecture is a set of tools and libraries that help you build and manage workers. Workers are the core components of the ecosystem.Ai platform. They are responsible for processing user input, generating responses, and managing conversations.

## Components of Worker Architecture

The worker architecture consists of the following components:
- Technology stack
- Integration
- Customization
- Journey management

---

# Section: Changelog

## Changelog

Source: `changelog.mdx`
URL: https://ecosystem.ai/changelog
Summary: The latest release updates from ecosystem.Ai.

Latest release updates ✨</>}
      className="mb-8"
      h="h1"
    />

---

## ⚙️ Config v0.6.304.04

Source: `changelog/config_v0.6.304.04.mdx`
URL: https://ecosystem.ai/changelog/config_v0.6.304.04
Date: 2024/06/29

---

2nd Release candidate version for v0.6.304, marking a new stable checkpoint.

## What's Changed

### 🏞️ Highlights

- Chat threading and management
- Runtime push updates
- Improved model configuration

## Contributors
- [@ramsay](https://github.com/ramsaylouw)
- [@jayvanzyl](https://github.com/jayvanzyl)
- [@eric](https://github.com/ericnewby)
- [@francois](https://github.com/francois)
- [@ecosystem](https://github.com/ecogenetic)

---

## 🚀 ecosystem.Ai v0.6.304.04

Source: `changelog/v0.6.304.04.mdx`
URL: https://ecosystem.ai/changelog/v0.6.304.04
Summary: The v0.6.304.04 release of ecosystem.Ai
Date: 2024/06/29

---

2nd Release candidate version for v0.6.304, marking a new stable checkpoint.

## What's Changed

### 🏞️ Highlights

- Chat threading and management
- Runtime push updates
- Improved model configuration

## Contributors
- [@ramsay](https://github.com/ramsaylouw)
- [@jayvanzyl](https://github.com/jayvanzyl)
- [@eric](https://github.com/ericnewby)
- [@francois](https://github.com/francois)
- [@ecosystem](https://github.com/ecogenetic)

---

## 🚀 ecosystem.Ai v0.6.401.00

Source: `changelog/v0.6.401.00.mdx`
URL: https://ecosystem.ai/changelog/v0.6.401.00
Summary: The v0.6.401.00 release of ecosystem.Ai
Date: 2024/07/15

---

2nd Release candidate version for v0.6.401, marking a new stable checkpoint.

## What's Changed

### 🏞️ Highlights

- EmotionGenetic engine for voice layering and emotion recognition
- LLM usage and Fact-injection updates
- Module management capabilities updates

## Contributors
- [@ramsay](https://github.com/ramsaylouw)
- [@jayvanzyl](https://github.com/jayvanzyl)
- [@eric](https://github.com/ericnewby)
- [@francois](https://github.com/francois)
- [@ecosystem](https://github.com/ecogenetic)

---

## 🚀 ecosystem.Ai v0.6.500.01

Source: `changelog/v0.6.500.01.mdx`
URL: https://ecosystem.ai/changelog/v0.6.500.01
Summary: The v0.6.500.01 release of ecosystem.Ai
Date: 2024/08/29

---

2nd Release candidate version for v0.6.500, marking a new stable checkpoint.

## What's Changed

### 🏞️ Highlights

- Prompt engine for LLM and Fact-injection
- Major security updates and upgrades
- Chat endpoint and OpenAI API standard

## Contributors
- [@ramsay](https://github.com/ramsaylouw)
- [@jayvanzyl](https://github.com/jayvanzyl)
- [@eric](https://github.com/ericnewby)
- [@francois](https://github.com/francois)
- [@ecosystem](https://github.com/ecogenetic)

---

## 🚀 ecosystem.Ai v0.6.601.00

Source: `changelog/v0.6.601.00.mdx`
URL: https://ecosystem.ai/changelog/v0.6.601.00
Summary: The v0.6.601.00 release of ecosystem.Ai
Date: 2024/09/25

---

2nd Release candidate version for v0.6.601, marking a new stable checkpoint.

## What's Changed

### 🏞️ Highlights

- OpenAPI 3.0 upgrades
- Algorithm updates and improvements
- Updated data access and management

## Contributors
- [@ramsay](https://github.com/ramsaylouw)
- [@jayvanzyl](https://github.com/jayvanzyl)
- [@eric](https://github.com/ericnewby)
- [@francois](https://github.com/francois)
- [@ecosystem](https://github.com/ecogenetic)

---

## 🚀 ecosystem.Ai v0.7.900.00

Source: `changelog/v0.7.900.00.mdx`
URL: https://ecosystem.ai/changelog/v0.7.900.00
Summary: The v0.7.900.00 release of ecosystem.Ai
Date: 2024/12/16

---

2nd Release candidate version for v0.7.900, marking a new stable checkpoint.

## What's Changed

### 🏞️ Highlights

- Major API rework and updates
- Intent management and processing updates
- Chat endpoints LLM updates across the entire execution thread
- Improved model configuration and management

## Contributors
- [@ramsay](https://github.com/ramsaylouw)
- [@jayvanzyl](https://github.com/jayvanzyl)
- [@eric](https://github.com/ericnewby)
- [@francois](https://github.com/francois)
- [@ecosystem](https://github.com/ecogenetic)

---

# Section: Blog

## Three essential steps to detect customer happiness

Source: `blog/2024-06-29_happiness.mdx`
URL: https://ecosystem.ai/blog/2024-06-29_happiness
Summary: In this blog post, we'll explore the cause of this problem and provide a step-by-step guide to fix it.
Date: 2024/06/29
Tags: happiness, customer

## Introduction
For example, a customer’s poor satisfaction rating for a product because they dislike elements of the advertising campaign. Or the influencer the company is collaborating with. The satisfaction score may have very little to do with the actual product itself. But the survey wouldn’t account for this or other external factors that could potentially impact their happiness.

If the customers’ happiness analysis took account of their behaviour and patterns, the real reason behind their poor satisfaction rating would be clear. This approach combines the quantitative aspect of emotion with the qualitative perspective of social sciences, specifically sociology.

Can we really rely on the accuracy of results from standard satisfaction surveys like these? And if not what’s the alternative?

## Step 1. Track real-time customer behaviour
Consider the benefits of measuring your live customer data to identify their satisfaction levels. Receiving information based on your customers’ real-time behaviour and patterns, rather than their emotional responses to a written survey, can give you highly relevant insights and a deeper understanding of what your customers truly want.

This is the premise of dynamic experimentation which eschews the traditional focus of testing fewer options in the hope of finding the ‘one-size-fits-all’ solution. Why place limitations on the experiment from the outset?

Far better to present all options upfront and track customers’ behavior as it happens. Your customer happiness becomes evident from the rise and fall of interest. Allowing your business to rapidly adjust to real-time data analytics rather than use unreliable surveys based on people’s emotions at a certain point in time.

## Step 2. Introduce novelty
It appears we’re all in the pursuit of happiness both in our personal lives and keeping our customers happy. But is too much happiness a good thing?

Don’t we need to feel different emotions in order to grow, learn and experience new opportunities that a perpetual state of happiness might miss?

By introducing novelty, we can create excitement and engage people far more. This increases customer happiness by instilling a strong sense of understanding and empathy. As humans, we’re programmed to be more inquisitive about using something shiny and new. Until we get used to it, and the novelty wears off.

This means you have to find the right level of novelty to keep people happy.

## Step 3. Use low-code automation
Dynamic experimentation brings a new dimension to your understanding of how people engage and respond to things in real-time. The power to automate recommender systems and engagement digital technologies means you can learn at pace with people’s behavioural patterns. As people engage further with an experiment, recommenders use their feedback as input into the next contextual recommender. Meaning you can set layers of context and automate your engagement by just understanding a handful of initial behaviors in the community you serve.

Happiness is essential for a company to thrive and succeed. Applying a computational social science approach with machine learning application can catapult your company to the forefront of customer service, relations and sales.

Click here to learn more about dynamic experimentation and how ecosystem.Ai’s platform can help you detect customer satisfaction in real-time.

---

## ecosystem.Ai 2024 Roadmap

Source: `blog/2024-06-30_2024_roadmap.mdx`
URL: https://ecosystem.ai/blog/2024-06-30_2024_roadmap
Summary: In this blog post, we'll explore our roadmap for the ecosystem.Ai platform in 2024-2025.
Date: 2024/06/30
Tags: roadmap, deployment

## Introduction
We are excited to share our roadmap for the ecosystem.Ai platform in 2024-2025. Our goal is to continue to provide cutting-edge AI solutions to our customers and partners. We are committed to delivering new features and enhancements that will help you achieve your business goals and drive innovation in your industry.

## Real-time Scoring
One of the key features we are working on is real-time scoring. This will allow you to get instant feedback on your models and make quick decisions based on the latest data. Real-time scoring will help you optimize your models and improve the accuracy of your predictions.

## Dynamic Interactions
Recommenders that can adapt to user behavior in real-time are another area of focus for us. We are working on dynamic interactions that will allow you to personalize your recommendations based on user preferences and behavior. This will help you engage your users more effectively and drive better results.

## Generative Models
We are also exploring the use of generative models to create new content and generate new ideas. Generative models can help you generate text, images, and other types of content that can be used in a variety of applications. We are excited to see how generative models can be used to drive innovation and creativity in your projects.

### Focus Areas:
- Chat to SQL: We are working on a new feature that will allow you to convert chat conversations into SQL queries. This will help you extract valuable insights from your conversations and make data-driven decisions based on the information you gather. Chat to SQL will help you streamline your workflow and improve the efficiency of your data analysis process.
- Various Vector Stores: We are exploring the use of various vector stores to store and retrieve embeddings for your models. Vector stores can help you manage and query large amounts of data efficiently and improve the performance of your models. We are excited to see how vector stores can be used to enhance the capabilities of your models and drive better results.
- Fact-Injection for Real-time: We are working on a new feature that will allow you to inject facts into your models in real-time. This will help you update your models with the latest information and improve the accuracy of your predictions. Fact-injection for real-time will help you keep your models up-to-date and ensure that you are making decisions based on the most current data.

---

## Unlocking Customer Insights, The Power of Spend Personality

Source: `blog/2024-11-06_spend.mdx`
URL: https://ecosystem.ai/blog/2024-11-06_spend
Summary: Unlocking Customer Insights, The Power of Spend Personality
Date: 2024/11/06
Tags: spend personality, customer

Imagine walking into your favorite boutique. The store manager greets you by name and already knows your style preferences, suggesting items that align perfectly with your taste. This personalized experience makes you feel valued and understood. Now, what if retailers could replicate this level of personalization on a grand scale, tailoring their interactions to each customer's unique spending habits? Enter the concept of Spend Personality.

## Decoding Spend Personality
At its core, Spend Personality is about understanding the unique financial behaviors of individuals. By analyzing transactional data, businesses can identify patterns that reveal a customer's spending personality. These personalities might include categories like Intentional, Industrious, Experiential, Enthusiastic, Introvert, and Extrovert. For instance, an 'Experiential' spender might prioritize spending on travel and events, while an 'Intentional' spender focuses on essential purchases.

## Why Should You Care?
Understanding Spend Personality isn't just a fancy term—it's a game-changer. Here's why:

- Personalized Customer Engagement: When retailers know a customer's spending personality, they can tailor their interactions accordingly. This means sending offers and recommendations that genuinely resonate, leading to higher engagement rates.

- Optimized Marketing Strategies: Traditional marketing often casts a wide net, hoping to catch a few interested customers. With insights from Spend Personality, marketing becomes laser-focused, targeting individuals with offers they're more likely to appreciate.

- Enhanced Product Development: By understanding the spending habits of their customer base, retailers can develop products and services that align more closely with what customers actually want, leading to better product-market fit.

## Bringing Spend Personality to Life with ecosystem.Ai
So, how can retailers tap into the power of Spend Personality? This is where ecosystem.Ai's Prediction Platform comes into play. It's like having a high-tech toolkit designed to decode and leverage Spend Personality insights.

- Prediction Server: Think of this as the brain of the operation. It delivers instant predictive analytics, helping retailers respond in real-time to customer behaviors.
- Workbench: Not a tech wizard? No problem. The Workbench offers a no-code interface, allowing users to build and manage AI models without needing to write a single line of code.
- Notebooks: For those who like to get their hands dirty with data, Notebooks provide a low-code environment to create and launch AI models in real-time.
- Client Pulse Responder: This tool keeps its finger on the pulse of customer interactions, allowing retailers to react promptly and appropriately, ensuring customers feel heard and valued.

## Real-World Impact
Imagine a retail company using Spend Personality insights. They identify a segment of customers as 'Enthusiastic' spenders who frequently purchase the latest fashion trends. Armed with this knowledge, the company can send personalized notifications about new arrivals or exclusive deals, increasing the likelihood of repeat purchases.

Or consider a retailer that recognizes 'Intentional' spenders who prioritize quality over quantity. The store could offer tailored promotions on premium products or provide detailed information about product craftsmanship, enhancing customer satisfaction and loyalty.

## The Bottom Line
In a world where customers are bombarded with generic offers and impersonal interactions, understanding and leveraging Spend Personality allows retailers to stand out. It's about making each customer feel like they're more than just a number—that their unique preferences and behaviors are recognized and valued. With tools like ecosystem.Ai's Prediction Platform, retailers have the means to turn this understanding into actionable strategies, leading to more meaningful customer relationships and, ultimately, business growth.

So, the next time you enjoy that perfectly curated shopping experience, remember: the magic of personalization isn't just limited to your local boutique. With Spend Personality, it's a strategy that you can use to perfection.

---

## Milliseconds Matter; What 'Real-Time' Means to Us

Source: `blog/2025-04-02_millisecondsmatter.mdx`
URL: https://ecosystem.ai/blog/2025-04-02_millisecondsmatter
Summary: By Nicola Amon
Date: 2025/04/02
Tags: real-time, ecosystem of technologies

While the term real-time may seem self-explanatory, its definition varies significantly across AI companies. Some define real-time as responses within a few seconds, while others push the boundary to mere milliseconds. This distinction is critical in industries structured around an economy of scale, where even the smallest delay can have substantial consequences.
## Why Milliseconds Matter
ecosystem.Ai recognises the fundamental difference between near-instant and delayed responses. In an era where customer attention spans are increasingly limited, response delays of just a few milliseconds determine whether a sale is completed or lost to a competitor. A 100-millisecond (0.1-second) delay in website load time can reduce conversion rates by up to 7%, according to a survey from Akamai and SOASTA. In industries like e-commerce and finance, real-time capabilities aren’t just a selling point - they’re a necessity for staying competitive.
## Real, Real-Time
ecosystem.Ai’s real-time capabilities lie in the simplicity of the platform’s architecture. When an application, website, or other digital channel makes an API call to ecosystem.AI’s server, the request is processed by an ecosystem.Ai runtime, a pre-configured execution environment containing all the necessary tools to fulfill the request instantly.
Unlike traditional architectures that require multiple sequential API calls to different services, leading to increased response times, ecosystem.Ai’s self-contained runtimes eliminate unnecessary dependencies. Each runtime is pre-packaged with the relevant model, dependencies, and processing logic, ensuring that responses are returned within fractions of a second - typically 5 milliseconds, with 20 milliseconds considered on the slow side.
These capabilities are organised into an adjacency architecture for seamless integration into your existing systems, no rip and replace needed.
## Optimized Containerization
To further streamline performance, ecosystem.Ai enables optimized containerization via pre-configured images available through its GitHub repository. These images define:

- Model code
- Dependencies (Python libraries, ML frameworks)
- Runtime environment (GPU/CPU configurations, memory limits)
- Configuration files (API credentials, optimization settings)

Containers instantiated from these images allow for the rapid deployment of task-specific environments, reducing setup time and ensuring that new requests are handled without delay. This means that adapting to real-time data - whether for updating recommendations, optimizing web pages, or refining predictive models - becomes an instantaneous and frictionless process.
The ability to push specific use-case configurations to ecosystem.Ai runtimes enables clear compartmentalization of deployments, all within a self-contained environment. 
We differ from conventional one-size-fits-all methods by adopting an agnostic approach that enables generalizability, paired with capabilities that fulfill very specific AI and machine-learning functions. Our architecture follows an ecosystem approach - taking various open source functionalities and technologies and combining them with our own capabilities to ensure ultimate compatibility and ease of integration. 
## Getting a Competitive Edge with Real-Time AI
ecosystem.Ai’s real-time processing capabilities provide a significant advantage over traditional platforms, which often require multiple round-trip calls across microservices, increasing latency and reducing efficiency. By minimizing inter-service communication delays and pre-loading essential components, ecosystem.Ai enables businesses to react to customer actions, market trends, and security threats in real-time.
With its adjacency architecture, the ecosystem.Ai platform allows for flexibility and customization to make our capabilities the perfect fit for you.
With ecosystem.Ai’s cutting-edge architecture, businesses can unlock instantaneous, scalable, and adaptive AI-driven decision-making. Beat the competition by milliseconds, and win a lifetime’s worth of customer satisfaction.

---

## ecosystem.Ai 2026 Roadmap

Source: `blog/2025-07-03_2026_roadmap.mdx`
URL: https://ecosystem.ai/blog/2025-07-03_2026_roadmap
Summary: In this blog post, we'll explore our roadmap for the ecosystem.Ai platform in 2025-2026.
Date: 2025/07/03
Tags: roadmap, deployment

## Introduction
Our **2025–2026 roadmap** for the ecosystem.Ai platform is an evolving process of delivering value to our clients. Building on our successes in 2024 and early 2025, we’re doubling down on powerful, real‑time AI capabilities that empower developers, data teams, and enterprise partners. Our mission remains: to deliver cutting‑edge AI solutions that help you solve real business problems—faster, smarter, and more reliably.

---

## Next‑Gen Real‑Time Scoring
In 2025–2026, we’re taking real‑time scoring to new heights: AI sub‑millisecond latency, auto‑scaling under peak load, additional behavioral algorithms, and granular usage analytics. Expect enhanced monitoring dashboards and SLAs for mission‑critical operations—keeping your scoring pipelines fast, stable, and transparent.

---

## Ultra‑Personalized Dynamic Interactions
Our dynamic interaction engine is evolving into an intelligent, context‑aware system. We’re integrating richer behavioral signals and adaptive feedback loops so that recommendations become genuinely responsive—learning from micro‑moments to personalize experiences at scale.

---

## Advanced Generative Models
We’re upping the ante on generative AI. In 2025–2026, we’ll support:
- Fine‑tuning domain‑specific models
- Multi‑modal outputs
- Integration of private knowledge bases for context‑aware generation

This expands your ability to generate product descriptions, marketing copy, data‑driven summaries—and beyond.

---

## Some Technology Focus Areas

### 1. Chat‑to‑SQL V2
The next iteration of our Chat‑to‑SQL tool will learn schema changes, support join and window hints, offer execution plan previews, and provide SQL refactoring suggestions.

### 2. Vector Store Integration
We’re refining vector store support with turnkey connectors. Our MCP server will offer compatibility with a number of technologies via a unified MCP interface. Expect seamless ingestion pipelines, hybrid similarity search (vector + metadata), tuning options, and tools for migrating vectors across stores. This ensures optimal semantic retrieval for RAG and similarity‑based generation.

---

### 3. Real‑Time Fact Injection & Retrieval
Every prediction can leverage up‑to‑the‑moment facts sourced in real time—whether from documents, databases, news feeds, or internal logs. Our MCP server exposes tools for two‑way context exchange: retrieve relevant external facts and inject them into the LLM input, with confidence scoring. This ensures generated content is precise, grounded, and verifiable.

---

### 4. Agent Orchestration Framework
Our MCP implementation supports agentic workflows with structured orchestration: support for chaining LLM calls, condition‑based branching (e.g., based on scoring thresholds or retrieved context), embedded session memory, and multi‑step planning. Agents can programmatically discover MCP endpoints, invoke tools, and maintain state across calls. Configuration is available via YAML or GUI orchestration with JSON‑RPC command semantics.

---

### 5. Embedded Observability
We’re baking end‑to‑end observability into the core platform: call tracing, response time metrics, anomaly detection, prompt performance analytics, drift‑alerts, and versioned baselines—with DevOps‑ready integrations across various cloud platforms.

---

## Why This Matters
- **Better performance under load**: Score thousands of inputs in real time with reliability and transparency.
- **Deeper personalization**: Tailor experiences with adaptive interaction logic.
- **Safer generative outputs**: Keep content updated, trustworthy, and auditable.
- **Modular AI workflows**: Orchestrate complex reasoning tasks with clear debugging and optimization tools.
- **Built for production at scale**: Engineered observability ensures you maintain control, reliability, and compliance.

---

## Solutions & Modules
A refined overview of the **Solutions** section from ecosystem.Ai, including the suite of Modules currently offered:

1. **Ecogentic AI Agent Module**
   Enables the creation and orchestration of intelligent AI agents—ideal for building conversational assistants, autonomous workflows, and domain‑specific bots.

2. **Spend Personality Module**
   Profiles customer behavior and spending patterns to personalize offers, timing, messaging, and channel selection for improved ROI.

3. **Interaction Science Module**
   A comprehensive toolkit for:
   - Personality Modeling
   - Generative Messaging
   - Continuous Experimentation
   - Interaction Memory
   - Emotion Detection

4. **Fraud Management Module**
   Offers AI tools to detect and prevent fraudulent behavior in real time.

5. **Intelligent Sales Module**
   Designed to assist with and optimize sales journeys by leveraging predictive AI for sales triggers and customized outreach strategies.

6. **Real‑Time Recommenders Module**
   Delivers always‑on, behavior‑driven product or content recommendations, powered by real‑time scoring and dynamic personalization.

7. **Dynamic Experimentation Module**
   Automates and optimizes experiments across user touchpoints, feeding results directly into AI models to adapt experiences on‑the‑fly.

8. **Personality Modules**
   Additional modules focused on using behavioral traits and personality analytics to customize engagement beyond broad segmentation.

---

## How They Fit Together
All modules are integrated within the **ecosystem.Ai Prediction Platform**, enabling:
- Low‑code/no‑code deployment
- Real‑time machine learning
- API support
- Jupyter notebook customization and Python SDK access
- Real‑time scoring, logging, and observability dashboards (e.g., via Grafana)

---

## Summary Table

| Module Name                    | Core Capabilities                                                                 |
|-------------------------------|-----------------------------------------------------------------------------------|
| Ecogentic AI Agent            | Build autonomous AI agents and conversational workflows                          |
| Spend Personality             | Profile and segment users based on spending behavior                             |
| Interaction Science           | Messaging, experimentation, emotion detection, memory, personality modeling      |
| Fraud Management              | Real‑time fraud detection and prevention                                         |
| Intelligent Sales             | Predictive analytics for sales engagement                                        |
| Real‑Time Recommenders        | Behavior‑driven recommendations via real‑time scoring                            |
| Dynamic Experimentation       | Automated experiments with live optimization feedback                            |
| Personality Modules           | Advanced behavioral insights beyond standard segmentation                         |

We have a key focus on delivering Prediction as a Service capabilities to our clients.

---

## The Hardest Place to Deploy Conversational AI - and Why It Matters

Source: `blog/2026-02-02_conversationalAI.mdx`
URL: https://ecosystem.ai/blog/2026-02-02_conversationalAI
Summary: In this blog post, we'll explore how banking will be the defining moment for agentic AI.
Date: 2026/02/02
Tags: banking, customer, conversational AI

The Hardest Place to Deploy Conversational AI - and Why It Matters

## Introduction
We’re sure you’ve heard the latest buzzword ‘conversational AI’  floating around. The technology seems tantalizing, but many businesses remain skeptical of its practical application. What about the glaring failures of generative AI - hallucinations, data breaches, or their clear ineptness at answering complex queries?

Interestingly, the industry that perhaps places the most weight on secure and reliable AI practices has their eyes on conversational AI, giving rise to another buzzword — conversational banking.

## The testing ground for conversational AI
Banking is a particularly personal affair. Customers want to know that what they say will remain confidential, meaning that they need to have unwavering trust in the agent they are communicating with. For conversational AI to plant its legs in this industry holds great potential in not only transforming banks’ customer engagement, but in spearheading a movement towards conversational AI that is reliable, accurate and trustworthy. 

Conversational banking’s success won’t come from the likes of a basic chatbot button on the FAQ page answering pre-defined questions. Rather, conversational banking will redefine entire customer journeys.

## AI agents that can detect intent
Our Conversational Banking AI Agent Builder achieves this by embedding behavioral intelligence at every step of the conversational journey. In the agent builder, you can configure guardrails and fact injection at every point, and make use of behavioral algorithms to detect intent.

This way, you can:

Unify customer journeys: AI agents can carry a conversation across channels — chat, voice, human agents, and devices, without forcing the customer to from point A each time. Banks that master this can eliminate previous frustrations and provide a seamless customer experience.

Scale client-level interactions: conversational agents with the right behavioral models can learn from human behavior in real time and dynamically adjust offers, tone and subject-matter. This allows each individual customer to receive what was once only reserved for client-level relationships.

Implement contextual routing: AI agents can detect and redirect customers based on changing context. By setting contextual triggers in your agentic framework, customers can be rerouted to where they need to be, in real-time.

Acquire additional knowledge: Every conversation provides data that humans cannot collect at scale. By letting the customer lead the interaction, AI agents can gain knowledge of behavioral traits and patterns that can assist in perfecting future interactions, or detecting fraud when anomalies arise.

Conversational banking will make or break agentic AI’s ability to perform tasks reliably, accurately and in compliance with privacy policies.

---

## Behavioral Intelligence is an Architecture, not a Plugin

Source: `blog/2026-02-17_behavioral-intelligence-architecture-not-plugin.mdx`
URL: https://ecosystem.ai/blog/2026-02-17_behavioral-intelligence-architecture-not-plugin
Summary: Behavioral Intelligence requires an architecture, not a software wrapper.
Date: 2026/02/17
Tags: behavioral intelligence, machine learning

The tech industry, like all other scientific endeavours, has long been in the habit of building new things with pre-existing inventions as the foundations. Like Sir Isaac Newton said one fateful day in 1675, *"If I have seen further, it is by standing on the shoulders of giants"*. In a space where innovation is the key value metric, using what has already been done (instead of building it yourself) ensures that the majority of the effort you put in is reserved for creating something new.

As it stands today, technology has never been in closer proximity to human life— not just at the level of utilities, but at the most intimate levels of decision making, influencing everything from self-image to purchasing choices. Yet, organizations have not yet fully leveraged this potential — we believe that this problem has its roots at the foundations of legacy systems, the solution requiring a full architectural transformation.

## We've Always Built With a Headstart

Since the 60s, programmers started reusing code components to simplify the development process, which evolved into what is known today as a 'framework'.

Remember how **NextJS** took all the good components of React, built on them, and created a frontend development powerhouse? NextJS is an example of a frontend-only framework, and it has completely changed how most developers go about building web applications.

In a technical context, frameworks are structured sets of components, tools, libraries and guidelines that rapidly speed up the process of developing software. In this way, frameworks take care of the grunt work that you would otherwise need to do before creating something new.

However, developers remain skeptical about using frameworks, despite their clear benefits. This is because frameworks often determine the design and structure of code, meaning that code must be rewritten if the framework changes (which they always do). And sadly, this is part of the business model — acquiring users, and locking them in with niche code structures.

Despite this, many large enterprises use frameworks to build, scale and maintain applications effectively. They stick to what they know and trust — amongst them, monolithic fullstack frameworks like Django and Laravel.

Recently, technological innovation has shifted its focus outwards. Rather than solely optimizing for efficiency in internal systems, technology and, more specifically, Artificial Intelligence, has shifted focus towards optimizing interaction environments. These include the likes of customer-facing engagement channels like websites, apps, and messaging systems.

## So, Why Not Do the Same for Behavioral Intelligence?

A new challenge arises with this: outward-facing systems face the distinct challenge of dealing with seemingly unpredictable humans. Organizations cannot brief customers on how to interact with their websites, applications or messaging systems to maximize data collection or infer meaning more easily. Rather, the system needs to be able to preempt human behavior, act as they act, think as they think.

In B2C businesses, behavioral intelligence has become a priority. But many teams have learned — often the hard way — that you don't get behavioral intelligence through the likes of a software wrapper. Instead, behavioral intelligence requires an ecosystem of technologies, stitched together in the right way.

When dealing with human beings, there are a few more factors that need to be considered:

- Humans make decisions in the moment
- Humans change from one moment to the next
- Every human interacts with systems in their own way
- Humans in the modern era have many options, little time, little patience

Slapping a wrapper on your existing infrastructure won't work for true behavioral intelligence. Instead, it demands an ecosystem of technologies brought together to deal with the complexity of human engagement, rather than systems retrofitted after the fact.

**ecosystem.Ai's Prediction Platform** can be thought of as a behavioral intelligence framework, encompassing the ecosystem of technologies needed to enable real-time engagement and adaptation. The Platform provides reusable architectural primitives, behavioral algorithms, iterative learning structures, and orchestration patterns that teams compose into domain-specific predictive and agentic systems.

The Prediction Platform shields users from the complexity of working with human behavior, while keeping components available for configuration. Like all powerful frameworks, it removes the grunt work. This allows teams to build solutions for their specific business problems with behavioral science and real-time capabilities readily on-hand, without building the infrastructure from the ground up.

### Human Factor

#### Humans make decisions in the moment

- **Real-time scoring:** This allows behavior to be converted into a numerical format that machines can understand.
- **Real-time inference:** Allows systems to make predictions in real-time, and adapt dynamically in-session.

#### Humans change from one moment to the next

- **Reinforcement and online learning:** If rate of learning is paced correctly, this allows algorithms to converge in real-time, meaning systems can contextualize an engagement down to the millisecond. Reinforcement learning combined with online learning allows systems to learn from prior interactions, while balancing real-time context.
- **Dynamic experimentation:** Allows systems to balance novelty and familiarity with explore/exploit algorithms and multi-armed bandits.
- **Behavioral algorithms:** Detect behavioral signals as they happen and execute correct intervention.

#### Every human interacts with systems in their own way

- **Model-per-customer approach:** Allows systems to continuously update unique predictive models for each individual customer, rather than using generic, batch-trained models.
- **Behavioral algorithms:** Build behavioral models that converge on the individual, at scale.

#### Humans have many options, little time, little patience

- **Contextual prediction engine:** Predict next-best offer, action or recommendation from real-time, contextual data.

When orienting systems to deal with individual human behavior, there needs to be a corresponding change in technical capabilities. The modern engagement environment requires a shift away from mass marketing to individual-level engagement, at scale. Contextualized, real-time predictions that converge on the individual require an architectural-level shift — away from legacy systems built on old notions of customer engagement, to systems that can deal with new data arriving every few milliseconds, and facilitate real-time, adaptive machine learning.

---
