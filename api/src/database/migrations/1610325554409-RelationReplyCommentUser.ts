import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationReplyCommentUser1610325554409 implements MigrationInterface {
    name = 'RelationReplyCommentUser1610325554409'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "replycomment" DROP CONSTRAINT "FK_12442c5e0a906c8208bd4271628"`);
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_3ccad79db4407727f9c81f84905"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_e44ddaaa6d058cb4092f83ad61f"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`);
        await queryRunner.query(`ALTER TABLE "replycomment" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "replycomment" ADD CONSTRAINT "FK_12442c5e0a906c8208bd4271628" FOREIGN KEY ("commentId") REFERENCES "comments"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "replycomment" ADD CONSTRAINT "FK_6578b44427813a16fbe7a788e0d" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_3ccad79db4407727f9c81f84905" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_e44ddaaa6d058cb4092f83ad61f" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_e44ddaaa6d058cb4092f83ad61f"`);
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_3ccad79db4407727f9c81f84905"`);
        await queryRunner.query(`ALTER TABLE "replycomment" DROP CONSTRAINT "FK_6578b44427813a16fbe7a788e0d"`);
        await queryRunner.query(`ALTER TABLE "replycomment" DROP CONSTRAINT "FK_12442c5e0a906c8208bd4271628"`);
        await queryRunner.query(`ALTER TABLE "replycomment" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_e44ddaaa6d058cb4092f83ad61f" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_3ccad79db4407727f9c81f84905" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "replycomment" ADD CONSTRAINT "FK_12442c5e0a906c8208bd4271628" FOREIGN KEY ("commentId") REFERENCES "comments"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
