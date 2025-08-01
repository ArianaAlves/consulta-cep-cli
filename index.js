#!/usr/bin/env node

import fetch from 'node-fetch';
import dotenv from 'dotenv';
import { getCepFromArgs } from './utils/inputCep.js';

dotenv.config();

const cep = getCepFromArgs();
const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

async function getAddress() {
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();

    if (data.erro) {
      console.error("🚫 CEP não encontrado.");
    } else {
      console.log(`📍 Endereço:
➡️ Rua: ${data.logradouro}
➡️ Bairro: ${data.bairro}
➡️ Cidade: ${data.localidade} - ${data.uf}
➡️ CEP: ${data.cep}
      `);
    }
  } catch (error) {
    console.error("Erro ao buscar o CEP:", error.message);
  }
}

getAddress();