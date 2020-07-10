<template>
  <div>
    <b-card class="mb-2">
      <h3>Emissão de nota fiscal</h3>
      <br />

      <div>
        <b-alert v-if="mensagemErro" show variant="danger">{{
          mensagemErro
        }}</b-alert>
      </div>

      <div>
        <b-form>
          <b-form-group label="" label-for="input-3">
            <b-form-select
              v-model="selecaoProduto"
              :options="produtos"
              value-field="value"
              text-field="text"
              class="mb-3"
            >
            </b-form-select>
          </b-form-group>

          <b-button
            variant="primary"
            size="sm"
            @click.stop.prevent="adicionarProduto(selecaoProduto)"
            >Adicionar na nota fiscal</b-button
          >
        </b-form>

        <br />
        <br />
        <br />

        <h4>Itens da nota fiscal</h4>

        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Descrição</th>
              <th scope="col">Valor</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(itemNota, index) in itensNotaFiscal"
              :key="itemNota.codigo"
            >
              <td>{{ itemNota.codigo }}</td>
              <td>{{ itemNota.descricao }}</td>
              <td>{{ itemNota.valor }}</td>
              <td>
                <div class="h5 mb-3">
                  <b-icon
                    icon="x-circle-fill"
                    variant="danger"
                    @click.stop.prevent="removerProduto(index)"
                  ></b-icon>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </b-card>
  </div>
</template>

<script>
import apiProduto from "../api/produto";

export default {
  data() {
    return {
      mensagemErro: "",
      produtos: [],
      itensNotaFiscal: [],
      selecaoProduto: null,
    };
  },

  methods: {
    adicionarProduto(produto) {
      
      if (produto == null) {
        this.mensagemErro = "Selecione um produto valido para adicionar na nota";
        return;
      }

      this.itensNotaFiscal.push(produto);
    },
    removerProduto(index) {
      this.itensNotaFiscal.splice(index, 1);
    },
  },

  watch: {
    selecaoProduto(newValue) {
      if ((newValue =! null)) {
        this.mensagemErro = "";
      }
    },
  },

  created() {
    this.produtos = apiProduto.getProdutos();
  },
};
</script>
