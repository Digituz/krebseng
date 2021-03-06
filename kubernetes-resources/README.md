## Using Ambassador and NGINX Ingress Controller Together

First, you will have to create a configmap:

```bash
kubectl create configmap mongo-config \
  --from-literal=mongo.root-username=mg-db-user \
  --from-literal=mongo.root-password=d1g1tuz45BK \
  --from-literal=mongo.database=digituz

kubectl create configmap krebseng-config \
  --from-literal=do-spaces.access-key=BTZ2LGQRUVB6NFJZHGRO \
  --from-literal=do-spaces.secret-key=tUKbzz6oCz0m/8yJXHvzONYTwDObS2FaccvMOSoQBlc \
  --from-literal=sendgrid.api-key=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 \
  --from-literal=mlab.url="mongodb://mg-db-user:d1g1tuz45BK@mongo.default:27017/digituz"
``` 

After creating the configmap, you will have to install the NGINX Ingress Controller:

```bash
kubectl create serviceaccount tiller --namespace=kube-system

kubectl create clusterrolebinding tiller-admin --serviceaccount=kube-system:tiller --clusterrole=cluster-admin

helm init --service-account=tiller

helm repo update

helm install stable/nginx-ingress --name nginx-controller
```

Then, you will have to install Ambassador:

```bash
kubectl apply -f https://getambassador.io/yaml/ambassador/ambassador-rbac.yaml
```

After that, you will have to configure a service for Ambassador and an ingress that points to it:

```bash
kubectl apply -f ambassador-service.yaml

kubectl apply -f ambassador-ingress.yaml
```

With that in place, you can deploy an app and its service to be able to consume it in your browser:

```bash
kubectl apply -f deployments/krebseng-deployment.yaml

kubectl apply -f deployments/krebseng-service.yaml
```

Having confirmed that you can access your app, you can install Cert Manager and configure a Let's Encrypt issuer to handle TLS termination:

```bash
helm install --name cert-manager --namespace cert-manager stable/cert-manager

kubectl apply -f production-issuer.yaml
``` 

Then, to make Ambassador use this certificate, you will have to make some changes to the Ambassador ingress resource:

```bash
kubectl apply -f ambassador-ingress-tls.yaml
```

### Useful Resources:

- API Gateways: https://www.getambassador.io/about/microservices-api-gateways
- Ambassador Configuration:
    - https://www.getambassador.io/concepts/developers#ambassador-configuration-in-practice
    - https://www.getambassador.io/reference/mappings
    - https://www.getambassador.io/reference/rewrites/
