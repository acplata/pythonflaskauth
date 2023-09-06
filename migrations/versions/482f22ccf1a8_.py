"""empty message

Revision ID: 482f22ccf1a8
Revises: 6f612089238e
Create Date: 2023-09-06 16:39:41.541533

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '482f22ccf1a8'
down_revision = '6f612089238e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('password',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.String(length=200),
               existing_nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('password',
               existing_type=sa.String(length=200),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)

    # ### end Alembic commands ###
