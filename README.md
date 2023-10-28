# HistoryAroundUs

History Around Us is a web application for lovers of history, it contains a collection of sculptures, paintings and antiques from various eras. Users from all over the world can rate visited facilities and share their impressions.

## Description

People from all over the world can search works of art such as paintings, sculptures, paintings, etc. The condition for this is the creation of an account. A person who has visited a work of art can leave a review. The root user can add works of art, normal users do not have such privileges.

## Website presentation

![Alt text](/frontend/src/assets/website2.png)

![Alt text](/frontend/src/assets/website.png)

![Alt text](/frontend/src/assets/website3.png)

## Tech stack

- React
- Spring
- PostgreSQL
- Docker

## ERD

![Alt text](/frontend/src/assets/erd.png)

## PostgreSQL

Creating dump

```
docker exec -t db-container pg_dumpall -c -U postgres > dump.sql
```

Restore

```
cat dump.sql | docker exec -i db-container psql -U postgres
```
