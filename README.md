# DevOps Assignment – Deployment Phase

## Overview

This project focuses on the **Deployment Phase of the DevOps lifecycle**. The main purpose of this phase is to deploy an application in a reliable, scalable, and consistent environment using **Linux, Docker, and Kubernetes**.

Linux provides the server environment, Docker is used to containerize the application, and Kubernetes is used to manage and deploy containers efficiently.

## Objectives

* Understand the deployment process in DevOps.
* Learn how to deploy applications on a Linux environment.
* Containerize applications using Docker.
* Create and manage Docker images and containers.
* Deploy containerized applications using Kubernetes.
* Understand Kubernetes Pods, Deployments, and Services.
* Learn basic application scaling and management.

## Deployment Activities

1. Linux Environment Setup
2. Application Setup
3. Docker Installation
4. Dockerfile Creation
5. Docker Image Creation
6. Docker Container Deployment
7. Kubernetes Cluster Setup
8. Kubernetes Deployment Creation
9. Kubernetes Service Configuration
10. Application Scaling and Monitoring

## Technology & Tools

* **Operating System:** Linux
* **Version Control:** Git & GitHub
* **Containerization:** Docker
* **Container Registry:** Docker Hub
* **Container Orchestration:** Kubernetes
* **Kubernetes Tool:** kubectl
* **Local Kubernetes Cluster:** Minikube

## Deployment Architecture

**GitHub → Linux → Docker → Docker Image → Docker Container → Kubernetes → Application**

Linux is used as the deployment environment, Docker packages the application into a container, and Kubernetes manages the containerized application.

## DevOps Lifecycle

**Plan → Code → Build → Test → Release → Deploy → Operate → Monitor**

This assignment focuses on the **Deploy** stage of the DevOps lifecycle.

## Linux

Linux provides the environment required to run deployment tools and applications.

Basic commands used during deployment include:

* `sudo apt update`
* `sudo apt upgrade`
* `git clone`
* `ls`
* `cd`
* `systemctl`
* `chmod`

## Docker

Docker is used to package the application and its dependencies into a portable container.

Important Docker activities include:

* Creating a `Dockerfile`
* Building a Docker image
* Running a Docker container
* Checking container status
* Managing container logs
* Pushing images to Docker Hub

Common commands:

* `docker build`
* `docker images`
* `docker run`
* `docker ps`
* `docker logs`
* `docker stop`
* `docker push`

## Kubernetes

Kubernetes is used to manage and orchestrate Docker containers.

Important Kubernetes components used in this deployment are:

* **Pod:** Runs the application container.
* **Deployment:** Manages application replicas and updates.
* **Service:** Provides network access to the application.

Common commands:

* `kubectl apply`
* `kubectl get pods`
* `kubectl get deployments`
* `kubectl get services`
* `kubectl logs`
* `kubectl scale`

## Expected Outcome

By completing the deployment phase, we will be able to run an application in a Linux environment, containerize it using Docker, and deploy and manage it using Kubernetes.

The deployment will provide a consistent, scalable, and manageable environment for running the application.

## Conclusion

The Deployment Phase is an important part of the DevOps lifecycle. Using **Linux, Docker, and Kubernetes** makes it possible to deploy applications efficiently and manage them in a reliable and scalable manner.

This assignment provides practical knowledge of modern container-based application deployment and forms a foundation for advanced DevOps practices such as **CI/CD, cloud deployment, monitoring, and automated scaling**.
