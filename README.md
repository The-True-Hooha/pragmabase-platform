# AgentEval OS

AgentEval OS is a distributed, microservices-based platform for
large-scale agentic evaluation, orchestration, monitoring, and
reliability.

## Architecture Overview

AgentEval OS is built as a Control Plane + Data Plane system.

### Control Plane

-   API Gateway
-   Identity & Access
-   Orchestrator (Temporal)
-   Billing & Metering
-   CI Integration

### Data Plane

-   Worker Execution Service
-   Sandbox Runtime (Firecracker)
-   LLM Proxy
-   Telemetry Ingestion
-   Transcript Storage
-   Analytics (ClickHouse)
-   Vector Search (Qdrant)

## Core Principles

-   gRPC-based internal communication
-   Event-driven architecture (Kafka)
-   Secure sandbox execution
-   Full telemetry via OpenTelemetry
-   Multi-tenant SaaS design

## Long-Term Stack

-   Rust (high-performance services)
-   Go (control-plane services)
-   Kubernetes
-   Temporal
-   Kafka
-   PostgreSQL
-   ClickHouse
-   Qdrant
-   Prometheus + Grafana

## Roadmap

### Phase 1

-   Orchestrator
-   Worker execution
-   Transcript storage
-   Basic scoring engine

### Phase 2

-   SaaS control plane
-   CI integrations
-   Billing & metering

### Phase 3

-   LLM proxy
-   Telemetry pipeline
-   Analytics layer
-   Enterprise hardening

## Vision

To become the reliability and evaluation control plane for AI-native
startups and eventually the industry standard for agent testing
infrastructure.

```cmd
agenteval-os/
│
├── proto/   All gRPC contracts (single source of truth)
│
├── services/
│   ├── api-gateway/
│   ├── identity-service/
│   ├── orchestrator-service/
│   ├── billing-service/
│   ├── ci-integration-service/
│   │
│   ├── worker-service/
│   ├── sandbox-runtime-service/
│   ├── llm-proxy-service/
│   ├── evaluation-engine-service/
│   ├── telemetry-ingestion-service/
│   ├── transcript-storage-service/
│   ├── analytics-service/
│   └── vector-search-service/
│
├── web/
│   ├── dashboard/
│   └── marketing-site/
│
├── sdk/
│   ├── go/
│   ├── typescript/
│   └── python/
│
├── internal/
│   ├── shared-go/
│   ├── shared-rust/
|   |-- security/
│   ├── auth-middleware/
│   ├── logging/
│   └── telemetry/
│
├── infra/
│   ├── kubernetes/
│   ├── helm/
│   ├── terraform/
│   ├── kafka/
│   ├── temporal/
│   └── monitoring/
│
├── deployments/
│   ├── dev/
│   ├── staging/
│   └── production/
│
├── scripts/
│
├── Makefile
├── docker-compose.yml
├── buf.yaml                    # Protobuf linting/build
├── go.work                     # Go workspace
├── Cargo.toml                  # Rust workspace
└── README.md
```

### Individual folder arrangments

```cmd
proto/
├── identity/
│   └── identity.proto
├── orchestrator/
│   └── orchestrator.proto
├── worker/
│   └── worker.proto
├── llmproxy/
│   └── proxy.proto
├── evaluation/
│   └── evaluation.proto
├── telemetry/
│   └── telemetry.proto
├── billing/
│   └── billing.proto
└── common/
    └── types.proto
```

```cmd
services/orchestrator-service/
├── cmd/
│   └── main.go
├── internal/
│   ├── workflows/
│   ├── handlers/
│   ├── repository/
│   └── config/
├── Dockerfile
├── go.mod
└── README.md
```

```cmd
internal/shared-go/
├── logger/
├── telemetry/
├── config/
├── errors/
└── middleware/

# the rust layer
internal/shared-rust/
├── telemetry/
├── tracing/
├── auth/
└── utils/
```

```cmd
infra/
├── terraform/
│   ├── aws/
│   └── gcp/
├── kubernetes/
│   ├── base/
│   ├── overlays/
│   └── ingress/
├── helm/
│   ├── agenteval-chart/
│   └── dependencies/
├── monitoring/
│   ├── prometheus/
│   ├── grafana/
│   ├── loki/
│   └── tempo/
├── kafka/
└── temporal/
```

```cmd
web/dashboard/
├── app/
├── components/
├── lib/
├── grpc/
├── hooks/
├── pages/
├── public/
├── next.config.js
└── package.json
```

```cmd
sdk/go/
sdk/typescript/
sdk/python/
```
