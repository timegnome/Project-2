-- initialize tables

-- rpg
CREATE TABLE eso (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE mhw (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE sevendtd (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE ark (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE bdo (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE conan (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE ffxiv (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE witcher3 (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE poe (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE skyrim (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE merged_rpg (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);


-- platformer
CREATE TABLE celeste (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE cuphead (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE deadcells (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE geometrydash (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE gettingoverit (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE gris (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE hollowknight (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE portal2 (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE terraria (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE transformice (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE merged_platformer (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);

-- fps
CREATE TABLE csgo (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE destiny2 (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE fo4 (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE gta5 (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE pd2 (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE pubg (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE rust (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE tf2 (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE r6siege (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE warframe (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE merged_fps (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);

-- sports
CREATE TABLE assettocorsa (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE beatsaber (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE dirtrally (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE efootballpes2020 (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE footballmanager2019 (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE nba2k19 (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE rocketleague (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE russianfishing4 (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE steep (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE tekken7 (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE merged_sports (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);

-- strategy
CREATE TABLE dota2 (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE factorio (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE footballmanager2020 (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE heartsofiron (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE raft (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE rimworld (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE civ6 (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE smite (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE totalwarwarhammer (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE warthunder (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);
CREATE TABLE merged_strategy (DateTime VARCHAR, Players BIGINT, Flags VARCHAR, TwitchViewers BIGINT);

-- misc
CREATE TABLE covid2019 (submission_date VARCHAR, state VARCHAR, tot_cases INT, conf_cases INT, prob_cases INT, new_case INT, pnew_case INT, tot_death INT, conf_death INT, prob_death INT, new_death INT, pnew_death INT, created_at VARCHAR, consent_cases VARCHAR, consent_deaths VARCHAR);
