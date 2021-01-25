import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddRegionColumnInPost1610222058643 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('posts', new TableColumn({
            name: 'region',
            type: 'varchar'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('posts', 'region')
    }

}
