import { formatCep } from './formatCep.js';

export function getCepFromArgs() {
  const args = process.argv.slice(2);
  const rawCep = args[0];

  if (!rawCep || !/^\d{8}$/.test(rawCep)) {
    console.error("❌ Informe um CEP válido com exatamente 8 dígitos numéricos.");
    process.exit(1);
  }

  return formatCep(rawCep);
}