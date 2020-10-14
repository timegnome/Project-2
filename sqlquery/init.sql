-- initialize tables

-- rpg
CREATE TABLE eso (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE mhw (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE sevendtd (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE ark (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE bdo (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE conan (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE ffxiv (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE witcher3 (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE poe (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE skyrim (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE merged_rpg (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);


-- platformer
CREATE TABLE celeste (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE cuphead (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE deadcells (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE geometrydash (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE gettingoverit (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE gris (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE hollowknight (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE portal2 (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE terraria (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE transformice (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE merged_platformer (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);

-- fps
CREATE TABLE csgo (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE destiny2 (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE fo4 (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE gta5 (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE pd2 (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE pubg (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE rust (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE tf2 (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE r6siege (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE warframe (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE merged_fps (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);

-- sports
CREATE TABLE assettocorsa (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE beatsaber (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE dirtrally (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE efootballpes2020 (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE footballmanager2019 (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE nba2k19 (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE rocketleague (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE russianfishing4 (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE steep (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE tekken7 (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE merged_sports (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);

-- strategy
CREATE TABLE dota2 (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE factorio (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE footballmanager2020 (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE heartsofiron (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE raft (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE rimworld (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE civ6 (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE smite (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE totalwarwarhammer (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE warthunder (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);
CREATE TABLE merged_strategy (datetime DATE, players BIGINT, flags VARCHAR, twitchviewers BIGINT);

-- misc
CREATE TABLE covid2019 (submission_date VARCHAR, state VARCHAR, tot_cases INT, conf_cases INT, prob_cases INT, new_case INT, pnew_case INT, tot_death INT, conf_death INT, prob_death INT, new_death INT, pnew_death INT, created_at VARCHAR, consent_cases VARCHAR, consent_deaths VARCHAR);
