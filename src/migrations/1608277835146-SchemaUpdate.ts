import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaUpdate1608277835146 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" RENAME COLUMN "title" TO "name"`,
    );
    await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "description"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" RENAME COLUMN "name" TO "title"`,
    );
    await queryRunner.query(
      `ALTER TABLE "coffee" ADD "description" character varying`,
    );
  }
}
