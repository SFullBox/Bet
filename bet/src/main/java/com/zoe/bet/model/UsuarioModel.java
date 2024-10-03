package com.zoe.bet.model;

import java.util.UUID;

import com.zoe.bet.dto.UsuarioDTO;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_usuario")
public class UsuarioModel {
	

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private UUID id;
	private String cpf, senha, aniver, email;
	
	public UsuarioModel(UsuarioDTO user) {
		this.cpf = user.cpf();
		this.aniver = user.aniver();
		this.email = user.email();
		this.senha = user.senha();
	}
	

}
