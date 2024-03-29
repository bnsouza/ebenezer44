drop table public.progressao CASCADE;
create table public.progressao (
  id bigint generated by default as identity,
  ramo character varying not null,
  area character varying not null,
  numero smallint not null,
  descricao text not null,
  created_at timestamp without time zone not null default now(),
  updated_at timestamp without time zone null,
  constraint progressao_pkey primary key (id)
) tablespace pg_default;

drop table public.especialidade CASCADE;
create table public.especialidade (
  id bigint generated by default as identity,
  area character varying not null,
  nome character varying not null,
  mod_basica boolean not null default false,
  mod_ar boolean not null default false,
  mod_mar boolean not null default false,
  created_at timestamp without time zone not null default now(),
  updated_at timestamp without time zone null,
  constraint especialidade_pkey primary key (id)
) tablespace pg_default;

drop table public.insignia CASCADE;
create table public.insignia (
  id bigint generated by default as identity,
  ramo character varying null,
  nome character varying not null,
  divisao character varying null,
  tarefa smallint not null,
  descricao text not null,
  created_at timestamp without time zone not null default now(),
  updated_at timestamp without time zone null,
  constraint insignia_pkey primary key (id)
) tablespace pg_default;

drop table public.cargo CASCADE;
create table public.cargo (
  id bigint generated by default as identity,
  ramo character varying not null,
  descricao character varying not null,
  created_at timestamp without time zone not null default now(),
  updated_at timestamp without time zone null,
  constraint cargo_pkey primary key (id)
) tablespace pg_default;

drop table public.grupo CASCADE;
create table public.grupo (
  id bigint generated by default as identity,
  numeral smallint not null,
  uf character varying not null,
  nome character varying not null,
  modalidade character varying not null,
  dominio character varying null,
  created_at timestamp without time zone not null,
  updated_at timestamp without time zone null,
  constraint grupo_pkey primary key (id)
) tablespace pg_default;

drop table public.tropa CASCADE;
create table public.tropa (
  id bigint generated by default as identity,
  grupo bigint null,
  ramo character varying null,
  nome character varying null,
  ativa boolean not null default true,
  created_at timestamp without time zone not null default now(),
  updated_at timestamp without time zone null,
  constraint tropa_pkey primary key (id),
  constraint tropa_grupo_fkey foreign key (grupo) references grupo (id)
) tablespace pg_default;

drop table public.patrulha CASCADE;
create table public.patrulha (
  id bigint generated by default as identity,
  tropa bigint null,
  nome character varying not null,
  cor1 character varying null,
  cor2 character varying null,
  ativa boolean not null default true,
  created_at timestamp without time zone not null default now(),
  updated_at timestamp without time zone null,
  constraint patrulha_pkey primary key (id),
  constraint patrulha_tropa_fkey foreign key (tropa) references tropa (id)
) tablespace pg_default;

drop table public.jovem CASCADE;
create table public.jovem (
  id bigint generated by default as identity,
  grupo bigint null,
  ramo character varying null,
  patrulha bigint null,
  nome character varying null,
  nascimento date null,
  ult_ficha_medica timestamp without time zone null,
  cargos character varying null,
  created_at timestamp without time zone not null default now(),
  updated_at timestamp without time zone null,
  constraint jovem_pkey primary key (id),
  constraint jovem_grupo_fkey foreign key (grupo) references grupo (id),
  constraint jovem_patrulha_fkey foreign key (patrulha) references patrulha (id)
) tablespace pg_default;

drop table public.jovem_ramo CASCADE;
create table public.jovem_ramo (
  id bigint generated by default as identity,
  jovem bigint null,
  ramo character varying null,
  progressao character varying not null,
  cordao1 boolean not null default false,
  cordao2 boolean not null default false,
  ins_modalidade boolean not null default false,
  ins_maxima boolean not null default false,
  ins_conesul boolean not null default false,
  ins_lusofonia boolean not null default false,
  ins_descomunitario boolean not null default false,
  ins_aprender boolean not null default false,
  ins_campnatureza boolean not null default false,
  ins_energiasolar boolean not null default false,
  ins_reciclar boolean not null default false,
  created_at timestamp without time zone not null default now(),
  updated_at timestamp without time zone null,
  constraint jr_pkey primary key (id),
  constraint jr_jovem_fkey foreign key (jovem) references jovem (id)
) tablespace pg_default;

drop table public.jovem_progressao CASCADE;
create table public.jovem_progressao (
  id bigint generated by default as identity,
  jovem bigint null,
  progressao bigint null,
  data date not null,
  created_at timestamp without time zone not null default now(),
  updated_at timestamp without time zone null,
  constraint jp_pkey primary key (id),
  constraint jp_jovem_fkey foreign key (jovem) references jovem (id)
) tablespace pg_default;

drop table public.jovem_especialidade CASCADE;
create table public.jovem_especialidade (
  id bigint generated by default as identity,
  jovem bigint null,
  especialidade bigint null,
  data date not null,
  created_at timestamp without time zone not null default now(),
  updated_at timestamp without time zone null,
  constraint je_pkey primary key (id),
  constraint je_jovem_fkey foreign key (jovem) references jovem (id),
  constraint je_especialidade_fkey foreign key (especialidade) references especialidade (id)
) tablespace pg_default;

drop table public.jovem_insignia CASCADE;
create table public.jovem_insignia (
  id bigint generated by default as identity,
  jovem bigint null,
  insignia bigint null,
  data date not null,
  created_at timestamp without time zone not null default now(),
  updated_at timestamp without time zone null,
  constraint ji_pkey primary key (id),
  constraint ji_jovem_fkey foreign key (jovem) references jovem (id),
  constraint ji_insignia_fkey foreign key (insignia) references insignia (id)
) tablespace pg_default;

drop table public.jovem_patrulha_cargo CASCADE;
create table public.jovem_patrulha_cargo (
  id bigint generated by default as identity,
  jovem bigint null,
  cargo  bigint null,
  inicio date not null,
  termino date null,
  created_at timestamp without time zone not null default now(),
  updated_at timestamp without time zone null,
  constraint jpc_pkey primary key (id),
  constraint jpc_jovem_fkey foreign key (jovem) references jovem (id),
  constraint jpc_cargo_fkey foreign key (cargo) references cargo (id)
) tablespace pg_default;
