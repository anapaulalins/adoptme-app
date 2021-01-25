import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddPlaceColumnInPost1610221892671 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('posts', new TableColumn({
            name: 'place',
            type: 'varchar'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('posts', 'place')
    }

}
