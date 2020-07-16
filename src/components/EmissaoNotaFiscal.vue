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
              v-model="produto"
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
            @click.stop.prevent="adicionarProduto(produto)"
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
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      produto: null,
    };
  },

  methods: {
    ...mapActions(["adicionarProduto", "removerProduto"]),
  },

  computed: {
    ...mapState(["mensagemErro", "produtos", "itensNotaFiscal"]),
  },

  watch: {
    ...mapActions(["produto"]),
  }
};
</script>
