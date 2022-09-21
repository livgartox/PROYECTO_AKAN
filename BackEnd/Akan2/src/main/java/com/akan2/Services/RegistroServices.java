package com.akan2.Services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.akan2.Models.RegistroModels;
import com.akan2.Repositories.RegistroRepository;


@Service
public class RegistroServices {
	@Autowired
	RegistroRepository registroRepository;
	/* Para obtener el registro*/
	public ArrayList<RegistroModels> obtenerRegistro(){
		return (ArrayList<RegistroModels>) registroRepository.findAll();
	}
	// Para guardar un registro
	public RegistroModels guardarRegistro(RegistroModels registro) {
		return registroRepository.save(registro);
	}

	public Optional<RegistroModels> obtenerPorId(Long id){
        return registroRepository.findById(id);
    }
	
	public boolean eliminarRegistro(Long id) {
        try{
        	registroRepository.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    }
	
	
}
