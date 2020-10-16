import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1602777047055 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // REALIZAR ALTERAÇÕES
        // CRIAR UMA NOVA TABELA, CRIAR UM NOVO CAMPO, DELETAR UM CAMPO
        await queryRunner.createTable(new Table({
            name: 'orphanages',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true, // colunca não pode ser negativa
                    isPrimary: true, // é uma chave primaria
                    isGenerated: true, // coluna gerada automaticamente
                    generationStrategy: 'increment', // é o auto incremente do mysql
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10, // scale e precision são números após a virgula
                    precision: 2
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2
                },
                {
                    name: 'about',
                    type: 'text',
                },
                {
                    name: 'instructions',
                    type: 'text',
                },
                  {
                    name: 'opening_hours',
                    type: 'varchar',
                },
                {
                    name: 'open_on_weekends',
                    type: 'text',
                    default: false,
                },
            ],
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // DESFAZER O QUE FOI FEITO UP
        await queryRunner.dropTable('orphanages');
    }

}
