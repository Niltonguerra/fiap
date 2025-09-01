import { Injectable } from '@nestjs/common';
import * as prometheus from 'prom-client';

@Injectable()
export class PrometheusService {
  private httpRequestDurationMicroseconds: prometheus.Histogram<'route'>;

  // name: nome da métrica
  // help: descrição da métrica
  // labelNames: é a rota da métrica
  // buckets: são os intervalos de tempo
  constructor() {
    this.httpRequestDurationMicroseconds = new prometheus.Histogram({
      name: 'http_request_duration_microseconds',
      help: 'Duration of HTTP requests in microseconds',
      labelNames: ['route'],
      buckets: [0.1, 0.3, 1, 1.5, 2, 3, 5],
    });
  }

  get sendMetrics() {
    return this.httpRequestDurationMicroseconds;
  }
}
