package com.zoe.bet.dto;

import java.util.UUID;

public record UsuarioDTO(UUID id, String cpf, String senha, String aniver, String email) {

}
