import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationPostImage1609553318679 implements MigrationInterface {
    name = 'RelationPostImage1609553318679'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" ADD "postId" integer`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_3ccad79db4407727f9c81f84905" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_3ccad79db4407727f9c81f84905"`);
        await queryRunner.query(`ALTER TABLE "images" DROP COLUMN "postId"`);
    }

}
