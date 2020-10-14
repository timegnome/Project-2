--drop table if exists
DROP TABLE merged_platformer;

--combine games, sum players and viewers
SELECT datetime, SUM(players) AS players, SUM(twitchviewers) AS twitchviewers
INTO merged_platformer
FROM
(
    SELECT datetime, players, twitchviewers FROM celeste
    UNION ALL
    SELECT datetime, players, twitchviewers FROM cuphead
	UNION ALL
    SELECT datetime, players, twitchviewers FROM deadcells
	UNION ALL
    SELECT datetime, players, twitchviewers FROM geometrydash
	UNION ALL
    SELECT datetime, players, twitchviewers FROM gettingoverit
	UNION ALL
    SELECT datetime, players, twitchviewers FROM gris
	UNION ALL
    SELECT datetime, players, twitchviewers FROM hollowknight
	UNION ALL
    SELECT datetime, players, twitchviewers FROM portal2
	UNION ALL
    SELECT datetime, players, twitchviewers FROM terraria
	UNION ALL
    SELECT datetime, players, twitchviewers FROM transformice
) t
GROUP BY datetime;
ALTER TABLE merged_platformer ADD COLUMN genre VARCHAR;
UPDATE merged_platformer SET genre = 'platformer' WHERE genre is NULL;

--for examine purposes
SELECT * FROM merged_platformer ORDER BY datetime;
