CREATE TABLE beatsaber (DateTime DATE, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
COPY beatsaber
FROM 'H:\homework\Bootcamp Data Analytics\GitLab Repo\Project-2\sports\beat_saber.csv' 
DELIMITER ',' 
CSV HEADER;