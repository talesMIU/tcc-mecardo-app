<template>
  <div class="p-grid p-fluid financial-profile">
    <!-- Informações Pessoais -->
    <div class="p-col-12 p-lg-6">
      <Panel header="Informações Pessoais">
        <div class="info-field"><strong>Nome:</strong> John Doe</div>
        <div class="info-field"><strong>Idade:</strong> 35</div>
        <div class="info-field"><strong>CPF:</strong> 123.456.789-00</div>
        <div class="info-field"><strong>RG:</strong> 12.345.678-9</div>
        <div class="info-field"><strong>Sexo:</strong> Masculino</div>
        <div class="info-field"><strong>Estado Civil:</strong> Casado</div>
        <div class="info-field"><strong>Data de Nascimento:</strong> 01/01/1990</div>
      </Panel>
    </div>

    <!-- Dados Bancários -->
    <div class="p-col-12 p-lg-6">
      <Panel header="Dados Bancários">
        <div class="info-field"><strong>Agência:</strong> 1234</div>
        <div class="info-field"><strong>Banco:</strong> 001 - Banco do Brasil</div>
        <div class="info-field"><strong>Número da Conta:</strong> 56789-0</div>
        <div class="info-field"><strong>Saldo Bancário:</strong> R$ 25.432,50</div>
      </Panel>
    </div>

    <!-- Gráfico Cartão de Crédito 2025 -->
    <div class="p-col-12">
      <Panel header="Gastos Cartão de Crédito - 2025">
        <Chart type="line" :data="creditCardData" :options="chartOptions" />
      </Panel>
    </div>
  </div>
</template>

<script>
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import Panel from 'primevue/panel';
import Chart from 'primevue/chart';

export default {
  components: { Panel, Chart },
  data() {
    return {
      creditCardData: {
        labels: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        datasets: [
          {
            label: 'Gastos (R$)',
            data: [1200, 1500, 1100, 900, 1750, 1300, 1400, 1600, 1250, 1350, 1500, 1700],
            fill: false,
            borderColor: '#007be5',
            backgroundColor: '#007be5',
            tension: 0.4
          }
        ]
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: { display: true, text: 'Cartão de Crédito 2025' }
        }
      }
    };
  }
};
</script>

<style scoped>
.financial-profile {
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

.info-field {
  padding: 0.5em 0;
  font-size: 1rem;
  border-bottom: 1px solid #e3e3e3;
}

.info-field:last-child {
  border-bottom: 0;
}

.p-panel {
  margin-bottom: 1rem;
}
</style>
