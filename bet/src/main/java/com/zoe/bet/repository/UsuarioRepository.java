package com.zoe.bet.repository;

import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import com.zoe.bet.model.UsuarioModel;

public interface UsuarioRepository extends JpaRepository<UsuarioModel, UUID>{

}
