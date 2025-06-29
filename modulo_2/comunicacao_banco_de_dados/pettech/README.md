comando para criar uma migration:
npx typeorm migration:create <caminho das migrations (exemplo: ./src/lib/migrations/ProductAutoGenerateUUID)>

comando para executar as migration:
npm run build && typeorm migration:run -d <caminho de onde está os arquivos de migrations após compilar, exempl(exemplo:./build/lib/typeorm/typeorm.js)>