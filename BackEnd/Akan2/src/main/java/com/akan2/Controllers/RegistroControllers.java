package com.akan2.Controllers;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.akan2.Models.RegistroModels;
import com.akan2.Services.RegistroServices;

@RestController
@RequestMapping("/registro")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE,
        RequestMethod.PUT })

public class RegistroControllers {
	@Autowired
	RegistroServices registroServices;
	
	
	@GetMapping()
	public ArrayList<RegistroModels> obtenerRegistro(){
	        return registroServices.obtenerRegistro();
	}
	@PostMapping()
	public RegistroModels guardarRegistros(@RequestBody RegistroModels registro){
        return this.registroServices.guardarRegistro(registro);
    }
	@GetMapping( path = "/{id}")
	public Optional<RegistroModels> obtenerRegistrosPorId(@PathVariable("id") Long id) {
        return this.registroServices.obtenerPorId(id);
    }
	@DeleteMapping( path = "/{id}")
	public String eliminarPorId(@PathVariable("id") Long id){
        boolean ok = this.registroServices.eliminarRegistro(id);
        if (ok){
            return "Se eliminó el usuario con id " + id;
        }else{
            return "No pudo eliminar el usuario con id" + id;
        }
    }

}
